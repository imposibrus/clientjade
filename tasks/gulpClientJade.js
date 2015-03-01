
var through = require('through'),
    compile = require('../lib/compile'),
    assign = require('lodash.assign'),
    gutil = require('gulp-util'),
    File = gutil.File;

var PLUGIN_NAME = 'clientjade';

module.exports = function(fileName, options) {
  var opts = assign({
        AMD: false
      }, options),
      files = [];

  return through(function(file, enc, cb) {
    if (file.isStream()) {
      return cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }
    if (file.isNull()){
      return cb(null, file);
    }

    files.push(file.path);
  }, function() {
    var stream = this;
    compile({
      files: files,
      compress: false,
      AMD: opts.AMD
    }, function(err, out) {
      if(err) {
        return stream.emit('error', new gutil.PluginError(PLUGIN_NAME, err));
      }

      stream.queue(new File({
        path: fileName,
        contents: new Buffer(out)
      }));

      stream.queue(null);
    });
  });

};

