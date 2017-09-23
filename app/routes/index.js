var express = require("express");
var router = express.Router();

router.get('/',function(req,res){
  var info = '';
  res.send(`
  <h1>Stanford Meetups</h1>  
  <p>
    Welcome to our meetup page. 
  </p>
  `);
});

module.exports =  router;