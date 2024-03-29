import sendgrid from "@sendgrid/mail";

async function sendEmail(req, res) {
  sendgrid.setApiKey(
    "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"
  );
  const msg = {
    to: "sales@bpaassolutions.com", // Your email where you'll receive emails
    from: "sales@bpaassolutions.com", // your website email address here
    subject: `[Lead from website] : ${req.body.subject}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div className="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div className="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://manuarora.in/logo.png" className="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p className="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
              <div className="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

              </div>
              </div>
      </body>
      </html>`,
  };

  sendgrid
    .send(msg)
    .then((res) => {
      console.log("Email sent");
      return res.status(200).json({ response: res });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ error: error });
    });
  // NOTE: Uncomment the below lines to make the code work

  //   try {
  //     await sendgrid.send(msg);
  //   } catch (error) {
  //     // console.log(error);
  //     return res.status(error.statusCode || 500).json({ error: error.message });
  //   }

  //   return res.status(200).json({ error: "" });
}

export default sendEmail;
