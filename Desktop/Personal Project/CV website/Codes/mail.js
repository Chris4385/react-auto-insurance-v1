const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth:{
        api_key:"464e602943f183f491f45430e843ff54-77751bfc-d5bad278",
        domain:"sandbox73c7e7f2915f415281b032411e833aa2.mailgun.org"
    }
};
const sendMail = function(sender,senderEmail, subject, message,cb){
    const transporter = nodemailer.createTransport(mailGun(auth));
    const mailOptions = {
        from: senderEmail,
        to:'ganboontoh@gmail.com',
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
