const nodemailer = require("nodemailer");

var emailSenderAppAwareness = function(details){
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
    subject: `Team ${details.teamName} :: HackX Jr 2k19 Awareness Session - Registration Confirmation`,
    text: `Hello Team ${details.teamName},\n \t Thank you for registering with HackX Jr Awareness Session.
          Please register with HackX Jr from the website hackxjr.lk if you haven't done so. Thank you.`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = emailSenderAppAwareness;
