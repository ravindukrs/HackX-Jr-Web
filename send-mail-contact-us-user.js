const nodemailer = require("nodemailer");

var emailSenderApp = function(details){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'EMAIL REMOVED',
      pass: 'PASSWORD REMOVED'
    }
  });

  var mailOptions = {
    from: 'EMAIL REMOVED',
    to: details.email,
    subject: `HackX Jr: Automated Reply`,
    text: `Dear Mr. ${details.fname} ${details.lname},\n
            \t\t Thank you for contacting HackX Jr team. We are happy to assist you. We will get
            back to you as quickly as possible!\n
            Regards,\n
            HackX Jr Team.`
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
