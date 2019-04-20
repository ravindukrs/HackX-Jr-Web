var express = require('express');
var upload = require('express-fileupload');
var bodyParser = require('body-parser')
var fs = require('fs');
const nodemailer = require("nodemailer");

var emailSenderApp = require('./send-mail');
var emailSenderAppAwareness = require('./send-mail-awareness');
var emailSenderAppWithAttachment = require('./send-mail-to-myself-with-attachment');
var emailSenderAppWithAttachmentAwareness = require('./send-mail-to-myself-with-attachment-awareness');
var contactmail = require('./send-mail-contact-us');
var contactmailtoUser = require('./send-mail-contact-us-user');

var port = process.env.PORT || 3000;


var app = express();

app.use(upload());
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));

app.get('/*', function(req, res) {
  res.render('index.ejs');
});

app.post('/jrreg', urlencodedParser, function(req, res) {

  if (req.files.proposal) {
    var file = req.files.proposal,
      name = req.body.teamName + "-" + req.body.schoolName + "-" + req.body.district + ".pdf",
      type = file.mimetype;

    var uploadpath = __dirname + '/upload/' + name;
    file.mv(uploadpath, function(err) {
      if (err) {
        console.log("File upload failed", name, err);
        res.redirect('/');
      } else {
        console.log("File Uploaded", name);
        //Save Registration Details to teamDetails/registrations.txt
        fs.appendFileSync(__dirname + '/teamDetails/registrations.txt', JSON.stringify(req.body) + ", \n");

        //Send Email to mySelf
        emailSenderAppWithAttachment(req.body);

        //Send Email to registered person
        emailSenderApp(req.body);

        res.render('redirectingSite.ejs');
      }
    })
  } else {
    res.send("No file selected!");
    res.end();
  }
});

app.post('/awarenessreg', urlencodedParser, function(req, res){
  fs.appendFileSync(__dirname + '/teamDetails/awareness.txt', JSON.stringify(req.body) + ", \n");


  //Send Email to mySelf
  emailSenderAppWithAttachmentAwareness(req.body);

  //Send Email to registered person
  emailSenderAppAwareness(req.body);
  res.render('redirectingSite.ejs');
});

app.post('/contactreq', urlencodedParser, function(req, res){



  //Send Email to mySelf
  contactmail(req.body);

  //Send Email to User
  contactmailtoUser(req.body);

  //Send Email to registered person
  emailSenderAppAwareness(req.body);

  res.render('redirectingSite.ejs');
});



app.listen(port);
console.log(`Listning on port ${port}`);
