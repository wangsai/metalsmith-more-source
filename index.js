var _ = require('lodash');

module.exports = plugin;

function plugin(source) {

  return function(files, ms, done) {
    if(!_.isString(source)) return done(new Error('source path must be a String.'));

    var path = ms.path(source);
    ms.read(path, function(err, newfiles){
      if(err) return done(err);

      Object.keys(newfiles).forEach(function(key){
        files[key] = newfiles[key];
      });

      done();
    });
      
  };
}