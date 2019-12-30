const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');

function css() {
  return src(['../**/*.css', '!node_modules/**', '!build/**'], { sourcemaps: true })
    .pipe(concat('style.css'))
    .pipe(dest('build'), { sourcemaps: true })
}

function js() {
  return src(['../**/*.js', '!node_modules/**', '!build/**'], { sourcemaps: true })
    .pipe(concat('script.js'))
    .pipe(dest('build'), { sourcemaps: true })
}

exports.css = css;
exports.js = js;
exports.default = parallel(css, js);
