
var gulp = require('gulp'),
    gulpClientJade = require('./tasks/gulpClientJade');

gulp.task('clientjade', function() {
  gulp.src(['test/views/*.jade'])
      .pipe(gulpClientJade('gulp.js', {}))
      .pipe(gulp.dest('test/public/js'))/*
      .pipe(livereload())*/;
});
