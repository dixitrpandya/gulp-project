const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

gulp.task('css', function() {
  return gulp.src('src/assets/sass/**/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(gulp.dest('src/assets/css'))
});

gulp.task('watch', function() {
  gulp.watch('src/assets/sass/**/*.scss', gulp.series('css'));
});

gulp.task('default', gulp.parallel('css','watch'));