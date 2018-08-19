var gulp = require('gulp');
var umd = require('gulp-umd');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('src/puz.js')
    .pipe(umd())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('.'));

});

