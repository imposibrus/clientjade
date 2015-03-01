
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clientjade: {
      compile: {
        //options: {
        //  AMD: true
        //},
        src: [
          'test/views/test1.jade'
        ],
        dest: 'public/js/grunt.js'
      }
    }
  });

  grunt.registerTask('default', ['clientjade']);
  grunt.loadTasks('./tasks');
};
