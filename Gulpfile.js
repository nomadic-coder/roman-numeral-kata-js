
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress', function () {
    return gulp.src('app/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


// var gulp  = require('gulp'),
//     gutil = require('gulp-util'),
//     install = require('gulp-install');
//
// gulp.task('log', function() {
//     return gutil.log('gulp is running');
// });
//
// gulp.task('npminstall', function() {
//     return gulp.src(['./package.json'])
//         .pipe(install());
// });