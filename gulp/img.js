const gulp = require('gulp');

gulp.task('devTemplate',function(){
    'use strict';
    gulp.src('./static/img/*')
        .pipe(gulp.dest('dist/img'))
});