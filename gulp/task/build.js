var gulp = require('gulp'),
    image = require('gulp-image'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify');

gulp.task('imageOptimize', ['deleteDocsFolder'], function () {
    return gulp.src('./app/assets/img/**/**/*')
        .pipe(image())
        .pipe(gulp.dest('./docs/assets/img'));
});

gulp.task('usemin', ['deleteDocsFolder', 'scripts', 'styles'], function() {
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function () { return rev() }, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./docs'))
});

gulp.task('deleteDocsFolder', function () {
    return del('./docs');
})

gulp.task('build', ['deleteDocsFolder', 'imageOptimize', 'usemin']);
