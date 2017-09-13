'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("glass-ui.css"))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rename("glass-ui.min.css"))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('sass:watch', function () {
	gulp.start('sass');
	gulp.watch('./src/scss/**/*.scss', ['sass']);
});