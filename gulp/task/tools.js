const gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoPrefixer = require('autoprefixer'),
    errorHendler = require('gulp-error-handle'),
    image = require('gulp-image'),
    minify = require('gulp-minifier');

gulp.task('styles', function () {
    gulp.src('./app/assets/css/**/*.css')
        .pipe(postcss([autoPrefixer]))
        .pipe(gulp.dest('./app/temp/css/'));
});

gulp.task('sass', function () {
    gulp.src('./app/assets/scss/**/*.scss')
        .pipe(errorHendler())
        .pipe(sass())
        .pipe(gulp.dest("./app/assets/css"));
});

gulp.task('html', function () {
    gulp.src('./app/assets/*.html').pipe(minify({
        minify: true,
        minifyHTML: {
            collapseWhitespace: true,
            conservativeCollapse: true,
        }       
    })).pipe(gulp.dest('./app/temp/'));
});



gulp.task('image', function () {
    gulp.src('./app/assets/img/**/**/*')
        .pipe(image())
        .pipe(gulp.dest('./app/temp/img'));
});