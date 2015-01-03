
module.exports = function(grunt) {
  grunt.registerMultiTask('clientjade', 'clientjade desc', function() {
    var compile = require('../lib/compile'),
        done = this.async(),
        ths = this;

    compile({files: ths.data.src, compress: false, AMD: ths.options().AMD}, function(err, out) {
      grunt.file.write(ths.data.dest, out);
      done();
    });
  });
};
