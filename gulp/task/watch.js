var gulp = require('gulp'),
    watch = require('gulp-watch');


gulp.task('watch', function () {
    watch('./app/assets/index.html', function () {
        gulp.start('html');
    });
    watch('./app/assets/css/**/*.css', function () {
        gulp.start('styles');
    });
    watch('./app/assets/scss/**/*.scss', function () {
        gulp.start('sass');
    });
    watch('./app/assets/img/**/*', function(){
        gulp.start('image');
    });
});

gulp.task('default', ['watch', 'sass', 'html', 'image', 'js'])