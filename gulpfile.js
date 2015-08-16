var gulp = require('gulp');

// Loads all files from the /gulp directory
require('require-dir')('./gulp');

gulp.task('build', ['browserify', 'copy']);

gulp.task('default', ['build', 'watch', 'serve']);
