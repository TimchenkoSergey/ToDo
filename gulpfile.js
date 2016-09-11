"use strict";

const gulp    = require("gulp"),
	  minify  = require("gulp-minify-css"),
	  prefix  = require("gulp-autoprefixer"),
	  sass    = require("gulp-sass"),
	  rename  = require("gulp-rename"),
	  babel   = require('gulp-babel'),
	  uglify  = require('gulp-uglify');

gulp.task("css", function() {
	gulp.src("scss/main.scss")
	.pipe(sass())
	.pipe(prefix("last 5 versions","> 1%","ie 9"))
	.pipe(minify())
	.pipe(rename("main.min.css"))
	.pipe(gulp.dest("css/"));
});

gulp.task("js", function() {
	gulp.src("js/app/main.js")
	.pipe(babel({presets: ["es2015"]}))
	.pipe(uglify())
	.pipe(rename("main.min.js"))
	.pipe(gulp.dest("js/"));
});

gulp.task("watch", function() {
	gulp.watch("scss/**/*.scss", ["css"]);
	gulp.watch("js/app/**/*.js", ["js"]);
});

gulp.task("default", ["watch", "css", "js"]);