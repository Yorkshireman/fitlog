'use strict';

var express = require('express');

var app = express();

app.get('/', function(request, response){
  response.send("I Love You!");
});

app.listen(3000);