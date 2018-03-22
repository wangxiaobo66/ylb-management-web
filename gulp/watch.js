const gulp = require('gulp');
const watch = require('gulp-watch');

require('./js');
require('./css');
require('./template');
require('./img');

gulp.task('watchJs',function(){
    gulp.watch('./static/js/pages/**/*.js',['js'])
});
gulp.task('watchTemplate',function(){
    gulp.watch('./static/template/*.html',['template'])
});
gulp.task('watch',['watchJs','watchTemplate']);