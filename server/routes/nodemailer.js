var express = require('express');
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODE_MAILER_USER,
        pass: process.env.NODE_MAILER_PASSWORD
    }
});

// post route for email information & send
router.post('/', function(req,res){
    var mailer = req.body;
    console.log('logging mailer object, aka req.body: ', mailer);

    var mailOptions = {
//example: from: '"Scott" scott@primeacademy.io',
//         from: '"Music Notes" musicnotesapplication@gmail.com', // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
//         to: 'lisaschoofs@gmail.com', // list of receivers
//         subject: 'New Test Lesson', // Subject line
//         text: 'Test Lesson information message here', // plain text body
//         html: '<b>' + 'Test Lesson information message here' + '</b>' // html body
//     };
// //
//     var mailOptions = {
//example: from: '"Scott" scott@primeacademy.io',
        from: '"Music Notes" musicnotesapplication@gmail.com', // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
        // to: mailer.student.email, // list of receivers
        to: mailer.email, // list of receivers
        subject: 'Your New Lesson Info', // Subject line
        text: mailer.description, // plain text body
        html: '<b> Hey There! Here is your new assignment for ' + mailer.date + ': <b><br><p>' + mailer.description + '</p>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.send(200);
});

module.exports = router;
