import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }


    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: Number(process.env.SMTP_PORT as string),
      secure: true,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    await transporter.verify();

    console.log("SMTP connection successful");

    await transporter.sendMail({
      from: process.env.SMTP_USER as string,
      to: process.env.EMAIL_RECEIVER as string,
      replyTo: email,
      subject: "New Email Submitted from BPAAS Footer",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px;">
          <h2>New Email Submitted from BPAAS Website Footer</h2>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            This email was submitted through the BPAAS website footer.
          </p>

          <hr />

          <p>
            <a href="https://www.bpaassolutions.com">
              www.bpaassolutions.com
            </a>
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL SEND ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Email not sent",
        code: error?.code || null,
        command: error?.command || null,
        response: error?.response || null,
      },
      { status: 500 }
    );
  }
}
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { email } = body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_RECEIVER,
//       subject: `New Request For Contact`,
//       html: `
//        <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background-color: #0f1115; color: #ffffff;">
//   <div style="max-width: 600px; margin: auto; background: #1a1c20; border-radius: 16px; padding: 30px; border: 1px solid #2c2f36; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);">
    
//         <h2 style="text-align: center; color: #00ffcc; font-weight: 600; font-size: 26px; margin-bottom: 30px;">New Email Send from BPAAS Footer</h2>
    
//         <p><strong>📧 Email:</strong> <span style="color: #e0f7fa;">${email}</span></p>

//         <div style="margin-top: 40px; text-align: center;">
//         </div>
//          </div>
//           </div>

//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("EMAIL SEND ERROR:", error);
//     return NextResponse.json({ error: "Email not sent" }, { status: 500 });
//   }
// }
