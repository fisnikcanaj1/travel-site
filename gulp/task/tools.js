const gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoPrefixer = require('autoprefixer'),
    errorHendler = require('gulp-error-handle');
// cssVars = require('postcss-simple-vars'),
// cssNested = require('postcss-nested');

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
    gulp.src('./app/assets/index.html')
        .pipe(gulp.dest('./app/temp/'));
});