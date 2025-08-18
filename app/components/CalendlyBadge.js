// /app/components/CalendlyBadge.js
"use client";

import { useEffect, useRef } from "react";

export default function CalendlyBadge({
	url = "https://calendly.com/tsingh-calmtherapy/15min",
	text = "15-Min Consult",
	color = "var(--three)",
	textColor = "#ffffff",
	branding = false,
	className = "",
	ctaSelector = "#calendly__cta",
	visibleThreshold = 0.05,
	showDelay = 180, // debounce to avoid flicker on quick scrolls
	hideDelay = 120, // brief delay makes transitions feel intentional
}) {
	const initedRef = useRef(false);
	const ctaVisibleRef = useRef(false);
	const observersRef = useRef({ io: null, mo: null });
	const timersRef = useRef({ show: null, hide: null });

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Ensure Calendly CSS once.
		const cssId = "calendly-widget-css";
		if (!document.getElementById(cssId)) {
			const link = document.createElement("link");
			link.id = cssId;
			link.rel = "stylesheet";
			link.href = "https://assets.calendly.com/assets/external/widget.css";
			document.head.appendChild(link);
		}

		// Inject animation CSS once (kept tiny and scoped).
		const animId = "calendly-badge-anim-css";
		if (!document.getElementById(animId)) {
			const style = document.createElement("style");
			style.id = animId;
			style.textContent = `
        .calendly-badge-widget {
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .calendly-badge-widget.cc-hidden {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none; /* avoid accidental clicks while hidden */
        }
        @media (prefers-reduced-motion: reduce) {
          .calendly-badge-widget { transition: none !important; }
        }
      `;
			document.head.appendChild(style);
		}

		const getBadgeEl = () => document.querySelector(".calendly-badge-widget");

		// Centralized setter so we can attach accessibility attributes.
		const setHidden = (hidden) => {
			const el = getBadgeEl();
			if (!el) return;
			if (hidden) {
				el.classList.add("cc-hidden");
				el.setAttribute("aria-hidden", "true"); // reduce announcements
			} else {
				el.classList.remove("cc-hidden");
				el.removeAttribute("aria-hidden");
			}
		};

		// Cancel any pending timers.
		const clearTimers = () => {
			if (timersRef.current.show) {
				clearTimeout(timersRef.current.show);
				timersRef.current.show = null;
			}
			if (timersRef.current.hide) {
				clearTimeout(timersRef.current.hide);
				timersRef.current.hide = null;
			}
		};

		const scheduleHide = () => {
			if (timersRef.current.show) {
				clearTimeout(timersRef.current.show);
				timersRef.current.show = null;
			}
			if (timersRef.current.hide) return;
			timersRef.current.hide = setTimeout(() => {
				timersRef.current.hide = null;
				setHidden(true);
			}, hideDelay);
		};

		const scheduleShow = () => {
			if (timersRef.current.hide) {
				clearTimeout(timersRef.current.hide);
				timersRef.current.hide = null;
			}
			if (timersRef.current.show) return;
			timersRef.current.show = setTimeout(() => {
				timersRef.current.show = null;
				// If not created yet, create now; else just reveal.
				if (initedRef.current) {
					setHidden(false);
				} else {
					init();
					// init creates the element; reveal next frame to ensure transition
					requestAnimationFrame(() => setHidden(false));
				}
			}, showDelay);
		};

		const init = () => {
			if (initedRef.current) return;
			if (
				window.Calendly &&
				typeof window.Calendly.initBadgeWidget === "function"
			) {
				if (ctaVisibleRef.current) return; // don't create while CTA visible
				window.Calendly.initBadgeWidget({
					url,
					text,
					color,
					textColor,
					branding,
				});
				initedRef.current = true;
				// Start hidden so first reveal animates.
				setHidden(true);
			}
		};

		// Load script if needed and init when CTA not visible.
		const scriptId = "calendly-widget-script";
		let scriptEl = document.getElementById(scriptId);
		const ensureScript = () => {
			if (!window.Calendly) {
				if (!scriptEl) {
					scriptEl = document.createElement("script");
					scriptEl.id = scriptId;
					scriptEl.src =
						"https://assets.calendly.com/assets/external/widget.js";
					scriptEl.async = true;
					scriptEl.onload = () => {
						scriptEl?.setAttribute("data-loaded", "true");
						init();
					};
					document.body.appendChild(scriptEl);
				} else if (scriptEl.getAttribute("data-loaded") === "true") {
					init();
				} else {
					const onLoad = () => {
						scriptEl.setAttribute("data-loaded", "true");
						init();
					};
					scriptEl.addEventListener("load", onLoad, { once: true });
				}
			} else {
				init();
			}
		};

		// IntersectionObserver: hide/show based on CTA visibility.
		const setupObservers = () => {
			const io = new IntersectionObserver(
				(entries) => {
					let anyVisible = false;
					for (const e of entries) {
						if (e.isIntersecting && e.intersectionRatio >= visibleThreshold) {
							anyVisible = true;
							break;
						}
					}

					if (anyVisible) {
						ctaVisibleRef.current = true;
						scheduleHide();
					} else {
						const targets = document.querySelectorAll(ctaSelector);
						const vh = window.innerHeight || 0;
						const vw = window.innerWidth || 0;
						const inView = Array.from(targets).some((el) => {
							const r = el.getBoundingClientRect();
							if (r.width === 0 || r.height === 0) return false;
							return r.bottom > 0 && r.right > 0 && r.top < vh && r.left < vw;
						});
						ctaVisibleRef.current = inView;
						if (ctaVisibleRef.current) {
							scheduleHide();
						} else {
							scheduleShow();
						}
					}
				},
				{ root: null, threshold: [visibleThreshold] }
			);

			const observeAll = () => {
				const nodes = document.querySelectorAll(ctaSelector);
				nodes.forEach((n) => io.observe(n));
				const any = Array.from(nodes).some((el) => {
					const r = el.getBoundingClientRect();
					if (r.width === 0 || r.height === 0) return false;
					return (
						r.bottom > 0 &&
						r.right > 0 &&
						r.top < window.innerHeight &&
						r.left < window.innerWidth
					);
				});
				ctaVisibleRef.current = any;
			};

			observeAll();

			const mo = new MutationObserver(() => {
				io.disconnect();
				observeAll();
				if (ctaVisibleRef.current) {
					scheduleHide();
				} else {
					scheduleShow();
				}
			});
			mo.observe(document.body, { childList: true, subtree: true });

			observersRef.current = { io, mo };
		};

		setupObservers();
		ensureScript();

		// If CTA visible on mount, keep hidden; else schedule show to animate in.
		if (ctaVisibleRef.current) {
			setHidden(true);
		} else {
			scheduleShow();
		}

		return () => {
			observersRef.current.io?.disconnect();
			observersRef.current.mo?.disconnect();
			clearTimers();
			const badge = document.querySelector(".calendly-badge-widget");
			if (badge) badge.remove();
			initedRef.current = false;
		};
	}, [
		url,
		text,
		color,
		textColor,
		branding,
		ctaSelector,
		visibleThreshold,
		showDelay,
		hideDelay,
	]);

	return (
		<div
			className={`calendly-badge-container ${className}`}
			aria-live="polite"
		/>
	);
}

/*
Notes:
- We animate via class toggles instead of display:none to enable smooth transitions.
- Hysteresis (showDelay/hideDelay) reduces pop-in/out when users skim the viewport edge.
- We set aria-hidden while hidden; avoid sound cues by design for accessibility.
*/
