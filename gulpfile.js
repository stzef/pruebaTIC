var gulp = require('gulp')
,uglify = require('gulp-uglify')
,imagemin = require('gulp-imagemin')
,stripDebug = require('gulp-strip-debug')
,notify = require("gulp-notify")
,stylus = require('gulp-stylus')
,watch = require('gulp-watch')
,nib = require('nib')
,server = require('gulp-webserver')

gulp.task('webserver', function() {
	return gulp.src('./')
	.pipe(server({
		port : 8080,
		host : 'localhost',
		directoryListing: true,
		//fallback: 'dist/index.html',
		livereload: {
			enable: true,
			port: 2346,
			filter: function (filename) {
				if (filename.match(/node_modules/)) { return false; }
				else { return true; }
			}
			},
			open:true,
			}));
	});

var srcIMG = 'public/img/**/*'
,destIMG = 'public/min/img'

,srcJS = 'public/js/**/*.js'
,destJS = 'public/min/js'

,srcCSS = 'public/stylus/**/*.styl'
,srcStyle = 'public/stylus/styles.styl'
,destCSS = 'public/min/css'


gulp.task('imagen', function(){

	gulp.src(srcIMG)


	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}]

		}))

	.pipe(gulp.dest(destIMG))

	})

gulp.task('js', function (cb) {

	gulp.watch(srcJS)
	.on("change",function (file) {

		gulp.src(file.path)
		//.pipe(stripDebug())
		.pipe(uglify())
		.pipe(gulp.dest(destJS))

		.pipe(notify("Javascript Minified"))
		console.log(file.path)
		})
	});


gulp.task('stylus', function (cb) {

	gulp.watch(srcCSS)
	.on("change",function () {

		gulp.src(srcStyle)
		.pipe(stylus({use: nib(),compress: true}))
		.pipe(gulp.dest(destCSS))


		.pipe(notify("Stylus Process"))
		})

	});



gulp.task('default', function () {

	gulp.run('js');
	gulp.run('stylus');
	gulp.run('imagen');

	});
