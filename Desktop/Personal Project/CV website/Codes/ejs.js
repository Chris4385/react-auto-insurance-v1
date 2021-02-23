const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const sendMail = require(__dirname+"/mail.js");

let cssPath = "";
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get("/education", function(request,response){
  cssPath = "styles_education.css"
  response.render("education", {cssFile:cssPath});

})
app.get("/portfolio", function(req,res){
  cssPath = "styles_portfolio.css"
  res.render("portfolio",{cssFile:cssPath,})
})

app.get("/contact", function(req, res){
  cssPath = "styles_contact.css"
  res.render("contact",{cssFile:cssPath})
})

app.get("/", function(request,response){
  cssPath="styles.css"
  response.render("index", {cssFile:cssPath});
});

app.post("/contact",function(req,res){
  const sender = req.body.sender;
  const senderEmail = req.body.senderEmail;
  const subject = req.body.subject;
  const message = req.body.message;
  sendMail(sender,senderEmail,subject,message,function(err,data){
    if(!err){
      console.log("Email sent successfully")
    }
    res.render("EmailSent");
  })
});
app.listen(3000, function(){
  console.log("Server 3000 is running");
});
