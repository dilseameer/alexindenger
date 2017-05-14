var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    rename = require("gulp-rename");

gulp.task('scripts', function(){
	gulp.src(['app/**/*.js','!app/**/*.min.js'])
	//.pipe(rename({suffix:'.min'}))
	//.pipe(uglify())
	//.pipe(gulp.dest('app/js'))
	.pipe(reload({stream:true}));
});


gulp.task('html', function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));
});



gulp.task("watch", function(){
	gulp.watch('app/**/*.js', ['scripts']);
	gulp.watch('app/**/*.html', ['html']);
});


gulp.task('browser-sync', function (){
	browserSync({
		server:{
			baseDir:"app/"
		}
	});
});

gulp.task('default', ["scripts", 'html', 'browser-sync','watch']);
