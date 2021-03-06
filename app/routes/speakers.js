var express = require("express");
var router = express.Router();

// Speakers
router.get('/speakers',function(req,res){
  var info = '';
  var dataFile = req.app.get('appData');
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2>${item.name}</h2>
      <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker">
      <p>${item.summary}</p>
    </li>    
    `;
  })
  res.send(`
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <h1>Stanford Meetups</h1>
  
  ${info}
  
  `);
});

// Speaker by ID
router.get('/speakers/:speakerid',function(req,res){
  var dataFile = req.app.get('appData');
  var speaker = dataFile.speakers[req.params.speakerid];
  res.send(`
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <h1>${speaker.title}</h1>
  <h2>with ${speaker.name}</h2>
  <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
  <p>${speaker.summary}</p>
  
  `);
});

module.exports =  router;