var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function () {
    return gulp.src('src/js/main.js')
        .pipe(browserify({
            transform: ['reactify'],
            debug: true,
            shim: {
                'fetch': {
                    path: './node_modules/whatwg-fetch/fetch.js',
                    exports: 'fetch'
                }
            }
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});
