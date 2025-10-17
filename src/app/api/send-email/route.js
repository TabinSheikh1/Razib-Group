import nodemailer from "nodemailer";


export async function POST(req) {
    try {
        const { fullName, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "tabin758@gmail.com",
                pass: "bmtzyfevtmieglib",
            },
        });

        const mailOptions = {
            from: "tabin758@gmail.com",
            to: "tabin758@gmail.com",
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
