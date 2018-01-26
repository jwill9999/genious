// gulp plugins
const gulp = require("gulp");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const watch = require("gulp-watch");
const uglyfy = require("gulp-uglify");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");

// variables
const jsFiles = [
  "./assets/js/skip-link-focus-fix.js",
  "./assets/js/navigation.js",
  "./assets/js/genious.js"
];
const sassFiles = "./assets/sass/**/*.scss";
const phpFiles = ["./inc/*.php", "./template-parts/*.php", "./*.php"];

const browserSyncFiles = ["./public/build/css/*.css", "./*.php"];
const sass_Destination_Files = "public/build/css";
const js_Destination_Files = "public/build/js";

// Static Server + watching scss/html files
gulp.task("browserSync", function() {
  browserSync.init(browserSyncFiles, {
    proxy: "localhost/wordpress/"
  });
});

// Compile sass into CSS & auto-inject into browsers

gulp.task("sass", function() {
  return gulp
    .src(sassFiles)
    .pipe(plumber())
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: "compressed"
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(rename("genious.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(sass_Destination_Files))
    .pipe(plumber.stop())
    .pipe(browserSync.stream());
});

// set up js bundler/es6/minify/concat

gulp.task("js", () =>
  gulp
    .src(jsFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(concat("genious.min.js"))
    .pipe(uglyfy())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(js_Destination_Files))
    .pipe(plumber.stop())
    .pipe(browserSync.stream())
);

gulp.task("default", ["sass", "js", "browserSync"], function() {
  gulp.watch(phpFiles, reload);
  gulp.watch(sassFiles, ["sass"]);
  gulp.watch(jsFiles, ["js", reload]);
});
