
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

gulp.task('compress', function () {
    return gulp.src('app/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return gulp.src(['dist','node_modules'], {read:false})
		.pipe(clean());
});
