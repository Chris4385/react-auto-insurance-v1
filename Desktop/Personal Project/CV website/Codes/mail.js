const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require('dotenv').config();

const auth = {
    auth:{
        api_key:process.env.API,
        domain:process.env.DOMAIN
    }
};
const sendMail = function(sender,senderEmail, subject, message,cb){
    const transporter = nodemailer.createTransport(mailGun(auth));
    const mailOptions = {
        from: senderEmail,
        to:process.env.EMAIL,
        subject:subject,
        text: message +" sent from " + sender
      };
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
          cb(err);
        }else{
          cb(info);
        }
      });
};
module.exports = sendMail;
