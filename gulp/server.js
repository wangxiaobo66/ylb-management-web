const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('server', function() {
    connect.server({
        root: 'dist',
        port: 8000,
        livereload: true
    });
});