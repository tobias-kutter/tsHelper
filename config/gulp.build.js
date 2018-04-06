const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ lazy: true });
const rimraf = require('rimraf');
const merge = require('merge2');

const tsProject = plugins.typescript.createProject('tsconfig.json');

gulp.task('bump', () => gulp.src('./package.json').pipe(plugins.bump()).pipe(gulp.dest('./')));
gulp.task('clean:dist', (done) => rimraf('./dist', done));
gulp.task('metafiles:copy', () => gulp.src('./package.json').pipe(gulp.dest('./dist')));
gulp.task('build:ts', () => {
    const tsResult = gulp.src('./src/**/*.ts')
        .pipe(plugins.sourcemaps.init({ loadMaps: true, largeFile: true }))
        .pipe(tsProject());
    return merge([
        tsResult.dts.pipe(gulp.dest('./dist')),
        tsResult.js.pipe(plugins.sourcemaps.write('./')).pipe(gulp.dest('./dist'))
    ]);
});

gulp.task('build', plugins.sequence('clean:dist', ['build:ts', 'metafiles:copy']));