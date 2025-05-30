import nodemailer from "nodemailer";

const email = process.env.INFO_EMAIL;
const pass = process.env.INFO_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass,
	},
});

export const mailOptions = {
	from: email,
	to: email,
};
