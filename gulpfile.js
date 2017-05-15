var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

// define tasks here
gulp.task("default", ["build"]);

gulp.task("build", function(){
	gulp
		.src([
			"./src/simple-table-extension.js"
			])
		.pipe(concat("simple-table.js"))
		.pipe(gulp.dest("./dist"))
		.pipe(uglify())
		.pipe(rename("simple-table.min.js"))
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch_sources", function () {
	gulp.watch(["./src/*.js"], ["build"]);
})