const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const revAll = require('gulp-rev-all');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');

const filePath = require('./build/gulpPath.js');

gulp.task('connect', () => {
	connect.server({
		port:8888,
		livereload: true
	})
});
gulp.task('livereload', () => {
	gulp.src('./index.html')
			.pipe(connect.reload());
})

/* sass ui */
gulp.task('sassUI', () => {
	gulp.src(filePath.uiSassr)
			.pipe(sass())
			.pipe(gulp.dest(filePath.uiSassc))
			.pipe(connect.reload())
			.pipe(minify())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(filePath.uiSassc))
});
/* sass system*/
gulp.task('sassSY', () => {
	gulp.src(filePath.sySassr)
			.pipe(sass())
			.pipe(gulp.dest(filePath.sySassc))
});

/* controller */
gulp.task('controller', () => {
	gulp.src(filePath.controllerr)
			.pipe(concat('controller.js'))
			.pipe(gulp.dest('./config'))
			.pipe(uglify({
				mangle: false,
				// mangle: {except: ['$scope', '$http']}
			}))
			.pipe(rename('controller.min.js'))
			.pipe(gulp.dest('./config'))
});

/* directive */
gulp.task('directive', () => {
	gulp.src(filePath.directiver)
			.pipe(concat('directive.js'))
			.pipe(gulp.dest('./config'))
});

/* filter */
gulp.task('filter', () => {
	gulp.src(filePath.filterr)
			.pipe(concat('filter.js'))
			.pipe(gulp.dest('./config'))
});

/* services */
gulp.task('services', () => {
	gulp.src(filePath.servicesr)
			.pipe(concat('services.js'))
			.pipe(gulp.dest('./config'))
});

/* watch */
gulp.task('watch', () => {
	gulp.watch('sass/ui/module/*.scss', ['sassUI']);
	gulp.watch('./views/*.html', ['livereload']);
	gulp.watch(filePath.controllerr, ['controller']);
	gulp.watch(filePath.directiver, ['directive']);
	gulp.watch(filePath.filterr, ['filter']);
	gulp.watch(filePath.servicesr, ['services']);
	gulp.watch('./index.html', ['livereload']);
});

const cess = ['connect', 'watch', 'sassUI', 'sassSY', 'controller', 'directive', 'filter', 'services'];
gulp.task('default', cess);