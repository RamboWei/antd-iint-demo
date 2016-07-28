const less = require('gulp-less'),
      gulp = require('gulp')

gulp.task('style',function(){
  gulp.src('./web/style.less')
    .pipe(less())
    .pipe(gulp.dest('./web'))
})
