var gulp = require('gulp')
,uglify = require('gulp-uglify')
,watch = require('gulp-watch')
,livereload = require('gulp-livereload')
,stylus = require('gulp-stylus')
,nib = require('nib')
,notify = require("gulp-notify");

notify.on('timeout', function (options) {
	console.log('The notification timed out', options);
	});


gulp.task('js', function (cb) {
	watch(['public/js/*',
		'public/js/pruebas/*'], function () {
			return gulp.src(
				['public/js/main.js',
				'public/js/pruebas/*.js']
				)

			.pipe(uglify('public/js/main.js'))
			.pipe(gulp.dest('public/js/min/'))

			.pipe(uglify('public/js/pruebas/*.js'))
			.pipe(gulp.dest('public/js/min/pruebas/'))

			.pipe(notify("Javascript Minified"))

			.on('end', cb)

			});
	});

gulp.task('stylus', function () {
	watch('public/stylus/*.styl', function () {
		gulp.src('public/stylus/styles.styl')
		.pipe(stylus({use: nib(),compress: true}))
		.pipe(gulp.dest('public/css/'))
		.pipe(notify("Stylus Process"))

		});
	});

gulp.task('default', function () {
	gulp.run('js');
	gulp.run('stylus');
	});

