const autoprefixer = require('autoprefixer'),
      babel        = require('gulp-babel'),
      browserSync  = require('browser-sync').create(),
      cssnano      = require('cssnano'),
      envPreset    = require('babel-preset-env'),
      eslint       = require('gulp-eslint'),
      gulp         = require('gulp'),
      gulpif       = require('gulp-if'),
      gutil        = require('gulp-util'),
      htmlmin      = require('gulp-htmlmin');
      imagemin     = require('gulp-imagemin'),
      logger       = require('gulp-logger'),
      notify       = require('gulp-notify'),
      plumber      = require('gulp-plumber'),
      postcss      = require('gulp-postcss'),
      reload       = browserSync.reload,
      runSequence  = require('run-sequence'),
      sass         = require('gulp-sass'),
      sassLint     = require('gulp-sass-lint'),
      sourcemaps   = require('gulp-sourcemaps'),
      stylelint    = require('stylelint'),
      uglify       = require('gulp-uglify'),
      webpack      = require('webpack'),
      webpackStream = require('webpack-stream');
  
const paths = {
    template: '../src/*.html',
    sass: '../src/sass/',
    scripts: '../src/js',
    fonts: '../src/fonts/**/*.ttf',
    images: '../src/img/**/*.{jpg,jpeg,png,gif,svg}',
    css: '../src/css',
    build: '../build'
}

const esLintSettings = {
    configFile: './.eslintrc.json'
};
const sassLintSettings = {
    configFile: './.sass-lint.yml'
};

function sassLintHelper(src) {
    return gulp.src(src)
        .pipe(gulpif(!gutil.env.ci,
            plumber({
                errorHandler: notify.onError('Error: <%= error.message %>')
            })
        ))
        .pipe(sassLint(sassLintSettings))
        .pipe(sassLint.format())
        .pipe(gulpif(gutil.env.ci, sassLint.failOnError()))
        .pipe(logger({
            display: 'name'
        }));
}

function scriptHelper(srcPath, buildPath, prefix) {
    return gulp.src(srcPath)
        .pipe(gulpif(!gutil.env.ci,
            plumber({
                errorHandler: notify.onError('Error: <%= error.message %>')
            })
        ))
        .pipe(eslint(esLintSettings))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(sourcemaps.init())
        .pipe(webpackStream(require('./webpack.config.js'), webpack))
        .pipe(babel({
            presets: [
                [envPreset, {
                    "targets": {
                        "ie": 10
                    }
                }]
            ]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPath))
        .pipe(logger({
            prefix: prefix,
            display: 'name'
        }));
}

gulp.task('serve', () => {
    browserSync.init({
        server: '../src'
    });
});

gulp.task('sass', () => {
    gulp.src(paths.sass + '/*.scss')
        .pipe(gulpif(!gutil.env.ci,
            plumber({
                errorHandler: notify.onError('Error: <%= error.message %>')
            })
        ))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.stream())
        .pipe(logger({
            display: 'name'
        }));
});

gulp.task('sass-lint', () => {
    gulp.watch(paths.sass + '/**/*.scss', event => {
        sassLintHelper(event.path);
    });
});

gulp.task('scripts', (event) => {
    gulp.watch(paths.scripts + '/**/*.js', event => {
        scriptHelper(event.path, paths.scripts, 'Processing script: ');
    });
});

gulp.task('watch', () => {
    gulp.watch(paths.sass + '/**', ['sass', 'sass-lint']);
    gulp.watch(paths.scripts + '/**/*.js', ['scripts']);
    gulp.watch(paths.template, browserSync.reload);
});

gulp.task('uglify', () => {
    return gulp
        .src(paths.scripts + '/main.js')
        .pipe(gulpif(!gutil.env.ci,
            plumber({
                errorHandler: notify.onError('Error: <%= error.message %>')
            })
        ))
        .pipe(babel({
            presets: [
                [envPreset, {
                    "targets": {
                        "ie": 10
                    }
                }]
            ]
        }))
        .pipe(uglify().on('error', error => {
            console.warn(error);
        }))
        .pipe(gulp.dest(paths.build + '/js'))
        .pipe(logger({
            display: 'name'
        }));
});

gulp.task('styles', () => {
    return gulp
        .src(paths.sass + '/**/*.scss')
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([cssnano()]))
        .pipe(gulp.dest(paths.build + '/css'))
});

gulp.task('images', () => {
    return gulp
        .src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.build + '/img'));
});

gulp.task('html', () => {
    return gulp
        .src(paths.template)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.build));
});

gulp.task('fonts', () => {
    return gulp
        .src(paths.fonts)
        .pipe(gulp.dest(paths.build + '/fonts'));
});

gulp.task('build', resolve => {
    return runSequence(
        'styles',
        'uglify',
        'images',
        'html',
        'fonts',
        () => {
            resolve();
        }
    );
});

gulp.task('default', ['serve', 'sass', 'scripts', 'watch']);
