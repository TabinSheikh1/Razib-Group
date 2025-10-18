import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { fullName, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: "mail.razibgroup.com", // or smtp.titan.email if Titan
            port: 465,
            secure: true,
            auth: {
                user: "info@razibgroup.com", // must be lowercase and exact
                pass: "Razibinfo123",
            },
        });

        const mailOptions = {
            from: "info@razibgroup.com",
            to: "info@razibgroup.com",
            replyTo: email,
            subject: `New Contact Form Submission: ${subject}`,
            text: `
            Name: ${fullName}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error);
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            { status: 500 }
        );
    }
}
