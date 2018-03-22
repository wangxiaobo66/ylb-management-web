const gulp = require('gulp');
const babel = require('gulp-babel');

const browserify = require('browserify');
const babelify = require('babelify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');

gulp.task('devJs', () => {
    /*
        gulp.src('./static/js/pages/index.js')
            .pipe(babel({
                presets: ['env', 'react'],
                plugins: ['transform-runtime']
            }))
            .pipe(gulp.dest('dist/js'))
            */

    return browserify('./static/js/pages/index.js')
        .transform(reactify)
        //.transform(babelify,{presets: ["es2015","react"]})
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist/js'))
});