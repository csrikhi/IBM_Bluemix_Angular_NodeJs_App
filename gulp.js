// Include gulp
var gulp = require('gulp'); 
// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean'),
minify = require('gulp-minify');

var cssbeautify = require('gulp-cssbeautify');

gulp.task('css', function() {
  return gulp.src('stylesheet/*.css')
  .pipe(cssbeautify({indent: '  ',
    openbrace: 'separate-line'}))
  .pipe(gulp.dest('stylesheet'));;
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src('scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('stylesheet'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('scripts/*.js')
  //.pipe(concat('index.js'))
  //.pipe(gulp.dest('scripts'))
  //.pipe(rename('index.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('scripts/minified'));
});


/*//clean
gulp.task('clean', function() {
  return gulp.src(['styles', 'scripts'], {read: true})
  .pipe(clean());
});
*/


// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('scripts/*.js', ['lint', 'scripts']);
  gulp.watch('sass/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint','css','sass', 'scripts', 'watch']);