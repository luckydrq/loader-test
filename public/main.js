define(function(require) {
  console.log('main required');

  var mod1 = require('./mod1');
  mod1.hello();

  var mod2 = require('./mod2');
  mod2.hello();

  return {
    hello: function() {
      console.log('main hello');
    }
  };
});
