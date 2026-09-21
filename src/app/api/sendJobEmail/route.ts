import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const jobTitle = formData.get("JobTitle") as string;
    const jobDescription = formData.get("jobDescription") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const file = formData.get("pdfFile") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "PDF file is required" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

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
      subject: `New Job Request From ${fullName} for ${jobTitle}`,
     html: `
<div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background-color: #0f1115; color: #ffffff;">
  <div style="max-width: 600px; margin: auto; background: #1a1c20; border-radius: 16px; padding: 30px; border: 1px solid #2c2f36; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);">
    
    <h2 style="text-align: center; color: #00ffcc; font-size: 24px; font-weight: 600; margin-bottom: 24px;">
      🧾 New Job Request - BPAAS
    </h2>

    <table cellpadding="0" cellspacing="0" width="100%" style="color: #d1d5db; font-size: 16px;">
      <tr>
        <td style="padding: 8px 0;"><strong>👤 Name:</strong></td>
        <td style="padding: 8px 0; color: #ffffff;">${fullName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>📧 Email:</strong></td>
        <td style="padding: 8px 0; color: #ffffff;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>📞 Phone:</strong></td>
        <td style="padding: 8px 0; color: #ffffff;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>🛅 Job Title:</strong></td>
        <td style="padding: 8px 0; color: #ffffff;">${jobTitle}</td>
      </tr>
      <tr>
        <td colspan="2" style="padding: 16px 0;"><strong>💬 Job Description:</strong></td>
      </tr>
      <tr>
        <td colspan="2" style="padding-bottom: 8px; color: #c8e6c9; background: #23262b; border-radius: 8px; padding: 16px;">
          ${jobDescription}
        </td>
      </tr>
    </table>

    <div style="text-align: center; margin-top: 40px; font-size: 14px; color: #888888;">
      Submitted via <strong style="color: #00ffcc;">BPAAS Platform</strong>
    </div>
  </div>
</div>
`,

      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return NextResponse.json({ error: "Email not sent" }, { status: 500 });
  }
}
