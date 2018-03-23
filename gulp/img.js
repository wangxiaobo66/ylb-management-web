const gulp = require('gulp');

gulp.task('img',function(){
    'use strict';
    gulp.src('./static/img/*')
        .pipe(gulp.dest('dist/img'))
});