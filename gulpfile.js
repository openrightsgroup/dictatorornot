var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function () {
    gulp.src('src/style/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/style'));
});

gulp.task('default', function () {
    gulp.watch('src/style/style.scss', ['style']);
});