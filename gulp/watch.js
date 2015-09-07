var gulp = require('gulp');

gulp.task('watch', ['build'], function () {
    gulp.watch('src/**/*.js', ['browserify']);
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['copy:html']);
});
