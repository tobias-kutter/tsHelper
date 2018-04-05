const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ lazy: true });

const typescript = require('typescript');
const tslint = require('tslint');

gulp.task('testing:lint:config', () =>
    gulp.src([ './src/**/*.js', './config/**/*.js' ])
        .pipe(plugins.tslint({ formatter: 'stylish' }))
        .pipe(plugins.tslint.report({
            emitError: false,
            sort: true,
            fullPath: true,
            summarizeFailureOutput: true
        })));

gulp.task('testing:lint:source', () => {
    const pro = tslint.Linter.createProgram('./tsconfig.json');
    typescript.getPreEmitDiagnostics(pro);

    return gulp
        .src('./src/**/*.ts', { base: '.' })
        .pipe(plugins.tslint({ formatter: 'stylish', program: pro }))
        .pipe(plugins.tslint.report({
            emitError: false,
            sort: true,
            fullPath: true,
            summarizeFailureOutput: true
        }));
});

gulp.task('testing:unit', () =>
    gulp.src('./test/**/*.test.ts', { read: false })
        .pipe(plugins.mocha({
            reporter: 'dot',
            require: 'ts-node/register'
        })));

gulp.task('testing:lint', [ 'testing:lint:config', 'testing:lint:source' ]);
gulp.task('testing', (done) => plugins.sequence('testing:lint', 'testing:unit')(done));