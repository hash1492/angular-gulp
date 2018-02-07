var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var sass = require("gulp-sass");
 
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      open: true
    }));
});

// JS concatenation and minification
gulp.task('minify-js', function (done) {
  gulp.src('src/*/*.js')
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
  done()
})

// Sass compilation
gulp.task('compile-sass', function () {
    gulp.src('src/assets/css/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});
