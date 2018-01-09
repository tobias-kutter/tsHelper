const gulp = require("gulp");
const rimraf = require("rimraf");
const plugins = require("gulp-load-plugins")({ lazy: true });

gulp.task("build", (done) => plugins.sequence()(done));