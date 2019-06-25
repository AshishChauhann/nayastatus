var express = require('express');
var app = express();


//Reusable controllers
var detailsController=function (req, res) {
  console.log("CAlling rest api");
  var details=[
            {firstName:'Ashish',lastName:'Chauhan',age:23},
      ];
  res.send(details);
};

// setting router to map requests  with controllers

app.get('/details',detailsController );

var server = app.listen(8088);