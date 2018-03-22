const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('js', function() {

    gulp.src('./static/js/pages/index.js')
        .pipe(babel({
            presets: ['env', 'react'],
            plugins: ['transform-runtime']
        }))
        .pipe(gulp.dest('dist/js'))
});