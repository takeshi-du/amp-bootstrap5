const { src, dest } = require('gulp');
const sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

function sassCompile(cb) {
  // 複数のファイルを指定する場合は配列使用可能
  return src(['./src/_sass/style.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./src/_includes/css'));
}

exports.default = sassCompile