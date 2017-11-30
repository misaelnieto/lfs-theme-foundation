var gulp = require('gulp');
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('lfs_theme_foundation/static/sccs/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('lfs_theme_foundation/static/css/'));
});

gulp.task('copy', function () {
    return gulp.src([
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/knockout/dist/knockout.js',
    ])
    .pipe(gulp.dest('lfs_theme_foundation/static/js/'));
});

gulp.task('concat_foundation', function() {
  return gulp.src([
      'bower_components/what-input/dist/what-input.min.js',
      'bower_components/foundation-sites/dist/js/foundation.min.js',
      'bower_components/foundation-sites/dist/js/plugins/*.min.js',
    ])
    .pipe($.concat('foundation-bundle.min.js'))
    .pipe(gulp.dest('lfs_theme_foundation/static/js/'));
});

gulp.task('default', ['copy', 'concat_foundation', 'sass'], function() {
  gulp.watch(['lfs_theme_foundation/static/sccs/**/*.scss'], ['sass']);
});
