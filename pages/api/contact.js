export default async function (req, res) {
  const { myEmail, emailpassword } = process.env
  const {subject, message, email, name} = req.body;
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: `${myEmail}`,
      pass: `${emailpassword}`,
    },
    secure: true,
  })

  const mailData = {
    from: 'emma9wise@gmail.com',  // sender address
      to: 'emma9wise@gmail.com',   // list of receivers
      subject: subject,
      html: `<p> ${message} <br /> sent from ${name}  at ${email} via your portfolio website.</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  //res.status(200)
  res.send("success")
}