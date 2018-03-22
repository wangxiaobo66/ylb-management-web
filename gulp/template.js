const gulp = require('gulp');

gulp.task('template', function() {
    gulp.src('./static/template/*')
        .pipe(gulp.dest('dist'))
});