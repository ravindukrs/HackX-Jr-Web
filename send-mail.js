const nodemailer = require("nodemailer");

var emailSenderApp = function(details){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hackxjr.register@gmail.com',
      pass: 'BlackPirateR$1996'
    }
  });

  var mailOptions = {
    from: 'hackxjr.register@gmail.com',
    to: details.email,
    subject: `Team ${details.teamName} :: HackX Jr 2k19 - Registration Confirmation`,
    text: `Hello Team ${details.teamName},\n \t Thank you for registering with HackX Jr. Your proposal will
          be evaluated, and shortlisted teams will be notified through email and social media.`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = emailSenderApp;
