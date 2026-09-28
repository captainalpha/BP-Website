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
      selectedIndustries,
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

    const mailOptions = {
      from: process.env.SMTP_USER as string,
      to: process.env.EMAIL_RECEIVER as string,
      replyTo: email,
      subject: `New Demo Request From ${fullName || "Website Visitor"}`,

      html: `
        <div style="padding: 40px; font-family: 'Segoe UI', Arial, sans-serif; background-color: #0f1115; color: #ffffff;">
          
          <div style="max-width: 600px; margin: auto; background: #1a1c20; border-radius: 16px; padding: 30px; border: 1px solid #2c2f36; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);">
            
            <h2 style="text-align: center; color: #00ffcc; font-size: 24px; font-weight: 600; margin-bottom: 24px;">
              🚀 New Demo Request - BPAAS
            </h2>

            <table
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="color: #d1d5db; font-size: 16px;"
            >

              <tr>
                <td style="padding: 8px 0;">
                  <strong>👤 Name:</strong>
                </td>
                <td style="padding: 8px 0; color: #ffffff;">
                  ${fullName || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0;">
                  <strong>📧 Email:</strong>
                </td>
                <td style="padding: 8px 0; color: #ffffff;">
                  ${email}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0;">
                  <strong>🏢 Company:</strong>
                </td>
                <td style="padding: 8px 0; color: #ffffff;">
                  ${companyName || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0;">
                  <strong>📞 Phone:</strong>
                </td>
                <td style="padding: 8px 0; color: #ffffff;">
                  ${phone || "-"}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0;">
                  <strong>💼 Industries:</strong>
                </td>
                <td style="padding: 8px 0; color: #ffffff;">
                  ${
                    selectedIndustries?.length
                      ? selectedIndustries.join(", ")
                      : "-"
                  }
                </td>
              </tr>

              <tr>
                <td colspan="2" style="padding: 16px 0 8px;">
                  <strong>📝 Message:</strong>
                </td>
              </tr>

              <tr>
                <td
                  colspan="2"
                  style="padding: 16px; color: #c8e6c9; background: #23262b; border-radius: 8px;"
                >
                  ${message || "-"}
                </td>
              </tr>

            </table>

            <div
              style="text-align: center; margin-top: 40px; font-size: 14px; color: #888888;"
            >
              This request was submitted via
              <strong style="color: #00ffcc;">
                BPAAS Platform
              </strong>
            </div>

          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Demo request sent successfully",
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