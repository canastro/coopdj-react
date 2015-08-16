var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (done) {

    return gulp.src('./src/assets/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/styles'));
});
