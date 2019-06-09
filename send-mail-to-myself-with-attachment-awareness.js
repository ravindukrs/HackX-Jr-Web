const nodemailer = require("nodemailer");


var emailSenderAppWithAttachmentAwareness = function(details) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'EMAIL REMOVED',
      pass: 'PASSWORD REMOVED'
    }
  });

  var mailOptions = {
    from: 'EMAIL REMOVED',
    to: 'EMAIL REMOVED',
    subject: `Team ${details.teamName} from ${details.schoolName} - ${details.district}:: New Awareness Session Registration`,
    text: `New HackX Jr Registration:\n
          School: ${details.teamName}\n
          District: ${details.district}\n
          Mentor: ${details.mentor}\n
          Student Count: ${details.studentCount}\n
          Email: ${details.email}\n
          Mobile: ${details.mobile}\n`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = emailSenderAppWithAttachmentAwareness;
