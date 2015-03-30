var gulp = require('gulp');

// iconfont生成器
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'Icons'; // 字体名

gulp.task('iconfont', function(){
  gulp.src(['assets/iconfont/svg/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'assets/iconfont/_icons.template.scss', // 生成SCSS的模板
      targetPath: '../../assets/scss/_icons.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName, // required
//      fontHeight: 32,
//      normalize: true,
      descent: 32,
      appendCodepoints: true // recommended option
    }))
    .pipe(gulp.dest('www/fonts/'));
});
