require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser')
const PORT = process.env.PORT;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.route('/home')
  .get(function(req, res){
    res.render("pages/home");
  });

app.get("/", function(req, res){
  res.redirect("/home");
})

app.listen(PORT, function(){
  console.log("Listening to port " + PORT);
})
