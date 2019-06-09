const nodemailer = require("nodemailer");

var contactmail = function(details) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'EMAIL REMOVED',
      pass: 'PASSWROD REMOVED'
    }
  });

  var mailOptions = {
    from: 'EMAIL REMOVED',
    to: 'EMAIL REMOVED',
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
