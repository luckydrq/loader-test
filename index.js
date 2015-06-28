'use strict';

var koa = require('koa');
var app = koa();
var fs = require('fs');
var path = require('path');

app.use(require('koa-static')(__dirname + '/public'));
app.use(function* (){
  if (this.path === '/index') {
    this.body = fs.createReadStream(path.join(__dirname, 'views/index.html'));
    this.type = 'html';
  } else if (this.path === '/index2') {
    this.body = fs.createReadStream(path.join(__dirname, 'views/index2.html'));
    this.type = 'html';
  }
});

app.listen(3000, function() {
  console.log('server start at 3000');
});
