import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      companyName,
      phone,
      message,
      designation,
    } = body;

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

    await transporter.sendMail({
      from: process.env.SMTP_USER as string,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,

      subject: `New Request From ${
        fullName || "Website Visitor"
      } for Schedule a Call`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>BPAAS - Schedule a Call</title>
        </head>

        <body style="margin:0; padding:0; background:#0f1115; font-family:Arial, sans-serif;">

          <div style="padding:40px 20px;">

            <div style="
              max-width:600px;
              margin:auto;
              background:#1a1c20;
              border-radius:16px;
              padding:30px;
              border:1px solid #2c2f36;
            ">

              <h2 style="
                text-align:center;
                color:#00ffcc;
                font-size:24px;
                margin-bottom:30px;
              ">
                📅 New Schedule a Call Request - BPAAS
              </h2>

              <table
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="color:#d1d5db; font-size:16px;"
              >

                <tr>
                  <td style="padding:10px 0; width:35%;">
                    <strong>👤 Name:</strong>
                  </td>
                  <td style="padding:10px 0; color:#ffffff;">
                    ${fullName || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;">
                    <strong>📧 Email:</strong>
                  </td>
                  <td style="padding:10px 0; color:#ffffff;">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;">
                    <strong>🏢 Company:</strong>
                  </td>
                  <td style="padding:10px 0; color:#ffffff;">
                    ${companyName || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;">
                    <strong>📞 Phone:</strong>
                  </td>
                  <td style="padding:10px 0; color:#ffffff;">
                    ${phone || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;">
                    <strong>💼 Designation:</strong>
                  </td>
                  <td style="padding:10px 0; color:#ffffff;">
                    ${designation || "-"}
                  </td>
                </tr>

              </table>

              <div style="margin-top:25px;">

                <strong style="color:#d1d5db;">
                  📝 Message:
                </strong>

                <div style="
                  margin-top:10px;
                  padding:16px;
                  color:#c8e6c9;
                  background:#23262b;
                  border-radius:8px;
                  line-height:1.6;
                ">
                  ${message || "-"}
                </div>

              </div>

              <div style="
                text-align:center;
                margin-top:40px;
                font-size:14px;
                color:#888888;
              ">
                This request was generated via
                <strong style="color:#00ffcc;">
                  BPAAS Platform
                </strong>
              </div>

            </div>

          </div>

        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Schedule a call request sent successfully",
    });

  } catch (error: any) {

    console.error("EMAIL SEND ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Email not sent",
      },
      { status: 500 }
    );
  }
}