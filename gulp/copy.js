var gulp = require('gulp');

gulp.task('copy:html', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:icons', function() { 
    return gulp.src('./node_modules/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('./dist/assets/fonts')); 
});
