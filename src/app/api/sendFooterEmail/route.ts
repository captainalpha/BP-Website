import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Request For Contact`,
      html: `
       <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background-color: #0f1115; color: #ffffff;">
  <div style="max-width: 600px; margin: auto; background: #1a1c20; border-radius: 16px; padding: 30px; border: 1px solid #2c2f36; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);">
    
        <h2 style="text-align: center; color: #00ffcc; font-weight: 600; font-size: 26px; margin-bottom: 30px;">New Email Send from BPAAS Footer</h2>
    
        <p><strong>📧 Email:</strong> <span style="color: #e0f7fa;">${email}</span></p>

        <div style="margin-top: 40px; text-align: center;">
        </div>
         </div>
          </div>

      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return NextResponse.json({ error: "Email not sent" }, { status: 500 });
  }
}
