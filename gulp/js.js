const gulp = require('gulp');
//const babel = require('gulp-babel');

const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('js', () => {
        /*
        gulp.src('./static/js/pages/index.js')
            .pipe(babel({
                presets: ['env', 'react'],
                plugins: ['transform-runtime']
            }))
            .pipe(gulp.dest('dist/js'))
            */
    browserify({entries:'./static/js/pages/main/main.js',debug: true})
        .transform(babelify,{presets: ["es2015","react"]})
        .bundle()
        .pipe(source('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'))
});