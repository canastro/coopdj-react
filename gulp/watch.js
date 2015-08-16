var gulp = require('gulp');

gulp.task('watch', function () {
    return gulp.watch('src/**/*.*', ['default']);
});
