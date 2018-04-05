const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ lazy: true });

gulp.task('build', () => plugins.sequence()());