import nodemailer from "nodemailer";

export default async (req, res) => {
  const {
    fullname,
    email,
    subject,
    message,
    company,
    designation,
    phone,
    industry,
    type,
  } = req.body;
  const transporter = nodemailer.createTransport({
    host: "us2.smtp.mailhostbox.com",
    port: 465,
    secure: true,
    auth: {
      user: "inquiry@bpaassolutions.com",
      pass: "Bpass@12345",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "inquiry@bpaassolutions.com",
      // to: "aditi@bizzeonline.com",
      subject: `${subject ? subject : `New Mail from ${type}`}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>BPAAS SOLUTIONS</title>
        <meta name="description" content="">
        <meta name="author" content="Ackrolix Innovations">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div className="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div className="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${type} </h3>
              <div style="font-size: 16px;">
              <p>Full Name: ${fullname}</p>
             
              <br>
              <p>Email: ${email}</p>
             
              <br>
              <p>Phone: ${phone}</p>
             
              <br>
              ${
                company
                  ? ` <p>Company Name: ${company}</p>
              
             
              <br>`
                  : `<div/>`
              }
              ${
                designation
                  ? ` 
              <p>Designation: ${designation}</p>
             
              <br>`
                  : `<div/>`
              }
             
              ${
                industry
                  ? `<p>Industry:  ${industry.map(
                      (i) => `<p>${i.value}</p>`
                    )}</p>
              <br> `
                  : `<div/>`
              }
              
              <p>Message:</p>
              <p>${message}</p>
              <br>
              </div>
             
              <div className="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://www.bpaassolutions.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://www.linkedin.com/company/bpaas-solutions-pvt-ltd/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
               

              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
