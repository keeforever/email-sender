const nodemailer = require("nodemailer");
// mailJet transactional email
const Mailjet = require("node-mailjet");
const mailjet = new Mailjet({
  apiKey: process.env.MJ_API_KEY,
  apiSecret: process.env.MJ_SECRET_KEY
});

const sendEmailEtheral = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"kaliyamoorthy" <kaliyamoorthy.2k@gmail.com.com>', // sender address
    to: "wings.kali.js@gmail.com, coding.shark.io@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  res.status(200).json({ info });
};

const sendEmail = async (req, res) => {
  const from ={
    Email : 'wings.kali.js@gmail.com',
    Name : ' @no-reply'
  }
  const to =  [
    {
      Email : 'kaliyamoorthy.2k@gmail.com',
      Name: 'kaliyamoorthy T'
    }
  ]
  const post = await mailjet.post('send',{'version': 'v3.1'})
  await post.request({
    Messages: [
      {
        From : from ,
        To : to,
        Subject : 'Password Reset. Node js',
        TextPart: 'Password Reset',
        HTMLPart : '<h1>Password Reset !</h1> <h2 style="display:inline" >Code</2> : 637-2736'
      }
    ]
  })
  res.json(post);
};

module.exports = sendEmailEtheral
