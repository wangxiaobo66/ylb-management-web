const gulp = require('gulp');
const watch = require('gulp-watch');

require('./js');
require('./css');
require('./template');
require('./img');

gulp.task('watchJs',function(){
    gulp.watch('./static/js/pages/**/*.js',['js'])
});
gulp.task('watchRedux',function(){
   gulp.watch('./static/js/redux/*.js',['js'])
});
gulp.task('watchComponent',function(){
    gulp.watch('./static/js/component/*.js',['js'])
});
gulp.task('watchTemplate',function(){
    gulp.watch('./static/template/*.html',['template'])
});
gulp.task('watchCss',function(){
    gulp.watch('./static/css/pages/*.scss',['css'])
});
gulp.task('watch',['watchJs','watchCss','watchRedux','watchComponent','watchTemplate']);