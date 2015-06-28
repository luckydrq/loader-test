'use strict';

var koa = require('koa');
var app = koa();
var fs = require('fs');
var path = require('path');

app.use(function* (next){
  var RE_JS_PATH = /\/(.+?\.js)$/;

  if (this.path === '/index') {
    this.body = fs.createReadStream(path.join(__dirname, 'views/index.html'));
    this.type = 'html';
  } else if (this.path === '/index2') {
    this.body = fs.createReadStream(path.join(__dirname, 'views/index2.html'));
    this.type = 'html';
  } else if (RE_JS_PATH.test(this.path)) {
    var js = RE_JS_PATH.exec(this.path)[1];
    var jpath = path.join(__dirname, 'public', js);

    this.type = 'js';

    // 对mod1.js延迟100ms响应
    if (js === 'mod1.js') {
      this.body = yield thunk(jpath);
    } else {
      this.body = fs.createReadStream(jpath);
    }
  }
});

function thunk(js) {
  return function(callback) {
    setTimeout(function (){
      callback(null, fs.createReadStream(js));
    }, 100);
  };
}

app.listen(3000, function() {
  console.log('server start at 3000');
});
