const nodemailer = require("nodemailer");


var emailSenderAppWithAttachment = function(details) {

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
    subject: `Team ${details.teamName} from ${details.schoolName} - ${details.district}:: New HackX Jr Registration`,
    text: `New HackX Jr Registration:\n
          Team Name: ${details.teamName}\n
          School: ${details.schoolName}\n
          District: ${details.district}\n
          Mentor: ${details.mentor}\n
          Email: ${details.email}\n
          Mobile: ${details.mobile}\n
          Awareness Attendance: ${details.aware}\n
          \n\n\n------Team Details--------\n\n
          Member 1: ${details.member1}\n
          Member 2: ${details.member2}\n
          Member 3: ${details.member3}\n
          Member 4: ${details.member4}\n
          Member 5: ${details.member5}\n `,

    attachments: [{
         filename: details.teamName + "-" + details.schoolName + "-" + details.district + ".pdf",
         path: __dirname+'/upload/'+details.teamName + "-" + details.schoolName + "-" + details.district + ".pdf",
         contentType: 'application/pdf'
    }]
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = emailSenderAppWithAttachment;
