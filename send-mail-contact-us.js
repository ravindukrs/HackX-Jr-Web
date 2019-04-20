const nodemailer = require("nodemailer");

var contactmail = function(details) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hackxjr.register@gmail.com',
      pass: 'BlackPirateR$1996'
    }
  });

  var mailOptions = {
    from: 'hackxjr.register@gmail.com',
    to: 'hackxjr.mit@gmail.com',
    subject: `Contact Request from ${details.fname} ${details.lname}`,
    text: `A contact request was made as follows,\n
          First Name: ${details.fname}\n
          Last Name: ${details.lname}\n
          Email: ${details.email}\n
          Subject: ${details.subject}\n
          Message: ${details.message}\n`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = contactmail;
