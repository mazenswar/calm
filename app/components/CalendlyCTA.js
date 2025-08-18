// /app/components/CalendlyCTA.js
"use client";

import "./style/calendly.scss";
import React, { useCallback, useEffect, useRef } from "react";

/**
 * Reusable CTA that opens the Calendly popup, pushes GTM dataLayer events,
 * and supports a legacy conversion event name so old dashboards don't break.
 *
 * Events pushed to dataLayer:
 *  - calendly_cta_clicked  (button was clicked)
 *  - calendly_open         (popup/widget opened/viewed)
 *  - calendly_submit       (booking completed)  <-- mark this as the GA4/Ads conversion
 *  - Calendly_CTA_submit   (LEGACY alias; optional) <-- temporary for backward compatibility
 */
function CalendlyCTA({
	text = "Book a 15-Minute Consult",
	url = "https://calendly.com/tsingh-calmtherapy/15min",
	className = "",
	disabled = false,
	ariaLabel,
	id = "calendly__cta",

	// Optional user callbacks
	onScheduled, // payload => void
	onOpen, // () => void
	onClose, // () => void

	// Event names (override only if you must)
	clickEventName = "calendly_cta_clicked",
	openEventName = "calendly_open",
	submitEventName = "calendly_submit",

	// Keep legacy alias during transition so your existing conversion keeps firing.
	// Set to false later when you're ready to retire it.
	emitLegacySubmitEvent = true, // pushes "Calendly_CTA_submit" alongside "calendly_submit"

	// Allow custom GTM layer name if needed
	dataLayerName = "dataLayer",
}) {
	const readyRef = useRef(false);

	// Minimal helper to push to GTM dataLayer
	const pushDL = useCallback(
		(eventName, data = {}) => {
			if (typeof window === "undefined") return;
			const layerName = dataLayerName || "dataLayer";
			window[layerName] = window[layerName] || [];
			window[layerName].push({ event: eventName, ...data });
		},
		[dataLayerName]
	);

	// Inject Calendly CSS once
	useEffect(() => {
		const cssId = "calendly-widget-css";
		if (!document.getElementById(cssId)) {
			const link = document.createElement("link");
			link.id = cssId;
			link.rel = "stylesheet";
			link.href = "https://assets.calendly.com/assets/external/widget.css";
			document.head.appendChild(link);
		}
	}, []);

	// Ensure Calendly script is present
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (window.Calendly) {
			readyRef.current = true;
			return;
		}
		const scriptId = "calendly-widget-script";
		let scriptEl = document.getElementById(scriptId);
		if (!scriptEl) {
			scriptEl = document.createElement("script");
			scriptEl.id = scriptId;
			scriptEl.src = "https://assets.calendly.com/assets/external/widget.js";
			scriptEl.async = true;
			scriptEl.onload = () => {
				readyRef.current = true;
			};
			document.body.appendChild(scriptEl);
		} else if (!readyRef.current) {
			scriptEl.addEventListener(
				"load",
				() => {
					readyRef.current = true;
				},
				{ once: true }
			);
		}
	}, []);

	// Track Calendly lifecycle via postMessage
	useEffect(() => {
		const handler = (e) => {
			if (e.origin !== "https://calendly.com") return;
			const evt = e.data?.event;

			if (evt === "calendly.event_scheduled") {
				const payload = e.data?.payload;

				// GTM: successful schedule (PRIMARY conversion)
				pushDL(submitEventName, {
					calendly_event_uri: payload?.event?.uri,
					calendly_invitee_uri: payload?.invitee?.uri,
					calendly_organization: payload?.organization || undefined,
					calendly_event_type: payload?.event_type?.uuid || undefined,
					method: "popup",
				});

				// LEGACY alias to avoid breaking existing conversion dashboards
				if (emitLegacySubmitEvent) {
					pushDL("Calendly_CTA_submit", {
						calendly_event_uri: payload?.event?.uri,
						calendly_invitee_uri: payload?.invitee?.uri,
						calendly_organization: payload?.organization || undefined,
						calendly_event_type: payload?.event_type?.uuid || undefined,
						method: "popup",
					});
				}

				// User callback
				onScheduled?.(payload);
			} else if (
				evt === "calendly.profile_page_viewed" ||
				evt === "calendly.event_type_viewed"
			) {
				onOpen?.();

				// Push an open event when Calendly confirms it's viewed
				pushDL(openEventName, { method: "popup" });
			} else if (evt === "calendly.ui.closed") {
				onClose?.();
			}
		};

		window.addEventListener("message", handler);
		return () => window.removeEventListener("message", handler);
	}, [
		emitLegacySubmitEvent,
		onClose,
		onOpen,
		onScheduled,
		openEventName,
		pushDL,
		submitEventName,
	]);

	const openCalendly = useCallback(
		(e) => {
			e.preventDefault();
			if (disabled) return;

			// GTM: button click
			pushDL(clickEventName, {
				calendly_cta_label: text || "15-min consult",
				calendly_cta_url: url,
				path:
					typeof window !== "undefined" ? window.location?.pathname : undefined,
			});

			const open = () => {
				onOpen?.();

				// Push an open event immediately when we trigger the popup
				pushDL(openEventName, {
					method: "popup",
					path:
						typeof window !== "undefined"
							? window.location?.pathname
							: undefined,
				});

				window.Calendly?.initPopupWidget({ url });
			};

			if (typeof window !== "undefined" && window.Calendly) {
				open();
			} else {
				const script = document.getElementById("calendly-widget-script");
				if (script) script.addEventListener("load", open, { once: true });
			}
		},
		[clickEventName, disabled, onOpen, openEventName, pushDL, text, url]
	);

	// Close popup on unmount (avoid sticky overlay across routes)
	useEffect(() => {
		return () => {
			if (typeof window !== "undefined") {
				window.Calendly?.closePopupWidget?.();
			}
		};
	}, []);

	const label = ariaLabel || `Open Calendly: ${text || "15-min consult"}`;

	return (
		<button
			type="button"
			id={id}
			className={`calendly-cta ${className}`}
			onClick={openCalendly}
			disabled={disabled}
			aria-label={label}
		>
			{text || "15-min consult"}
		</button>
	);
}

export default CalendlyCTA;

/* Example CSS
.calendly-cta {
  appearance: none;
  border: 0;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
}
.calendly-cta:disabled { opacity: .6; cursor: not-allowed; }
*/
