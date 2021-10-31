const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

let mailBody = `<h1>Mailer Example</h1><p>Hello World!</p>`; 
let mailSubject = 'My New Email';

let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@gmail.com',
  subject: mailSubject,
  html: mailBody
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
