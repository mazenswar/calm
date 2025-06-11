import { mailOptions } from "../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
	name: "Name",
	email: "Email",
	phoneNumber: "Phone Number",
	message: "Message",
	state: "State",
	reason: "Reason",
};

const generateEmailContent = (data) => {
	const stringData = Object.entries(data).reduce(
		(str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}:\n${val}\n\n`),
		""
	);

	const htmlData = Object.entries(data).reduce((str, [key, val]) => {
		return (
			str +
			`<h3 style="color: #2a2a2a; font-family: Arial, sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px;">${CONTACT_MESSAGE_FIELDS[key]}</h3>
			<p style="color: #2a2a2a; font-family: Arial, sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px;">${val}</p>`
		);
	}, "");

	return {
		text: stringData,
		html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body {
              background-color: #f9f9f9;
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            }
            .container {
              max-width: 500px;
              margin: 0 auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Message from CALM Therapy Website</h2>
            ${htmlData}
          </div>
        </body>
      </html>
    `,
	};
};

export function contactFormSubmissionTemplate(data) {
	return {
		...mailOptions,
		subject: `${data.reason} Form Submitted (CALM Website)`,
		...generateEmailContent(data),
	};
}
