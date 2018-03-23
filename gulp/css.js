const gulp = require('gulp');
const concat = require('gulp-concat');//合并
//const cssmin = require('gulp-minify-css');//压缩
//const rename = require('gulp-rename');//重命名
const sass = require('gulp-sass');//编译scss文件

gulp.task('css',function(){
    gulp.src('./static/css/pages/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        /*
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        */
        .pipe(gulp.dest('./dist/css'))
});