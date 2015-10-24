var express = require('express');

var app = new express();

var parser = require('body-parser');

app.get('/', function(req, res){
  res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.use('/bower_components',express.static(__dirname + '/../bower_components'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded());

require('./routes/items.js')(app);
