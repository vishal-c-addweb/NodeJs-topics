/* public and private task */

// const { series } = require('gulp');

// // The `clean` function is not exported so it can be considered a private task.
// // It can still be used within the `series()` composition.
// function clean(cb) {
//   // body omitted
//   cb();
// }

// // The `build` function is exported so it is public and can be run with the `gulp` command.
// // It can also be used within the `series()` composition.
// function build(cb) {
//   // body omitted
//   cb();
// }

// exports.build = build;
// exports.default = series(clean, build);

/* execute task in order use series method */

// const { series } = require('gulp');

// function transpile(cb) {
//   // body omitted
//   cb();
// }

// function bundle(cb) {
//   // body omitted
//   cb();
// }

// exports.build = series(transpile, bundle);

/* to run task at concurrency */

// const { parallel } = require('gulp');

// function javascript(cb) {
//   // body omitted
//   cb();
// }

// function css(cb) {
//   // body omitted
//   cb();
// }

// exports.build = parallel(javascript, css);

// variable

var gulp = require('gulp');

var sass = require('gulp-sass')(require('sass'));

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

// Tasks

gulp.task('welcome-message',function(done){
  console.log("hello bhai");
  done();
});

gulp.task('copy-files',function(){
  return gulp.src('assets/src/css/*.css')
          .pipe(gulp.dest('assets/dist/css'));
});

//sass file compiling
gulp.task('sass-compile',function(){
  return gulp.src('assets/src/sass/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('assets/dist/css'));
});

//Minify js
gulp.task('minify-js',function(){
  return gulp.src('assets/src/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('assets/dist/js'));
});

// //Concatination
// gulp.task('concate',function(){
//   return gulp.src('assets/src/js/*.js')
//           .pipe(concat('app.js'))
//           .pipe(gulp.dest('assets/dist/js'));
// });

//Concatination and minify js
gulp.task('concate',function(){
  return gulp.src('assets/src/js/*.js')
          .pipe(concat('app.js'))
          .pipe(uglify())
          .pipe(gulp.dest('assets/dist/js'));
})

//watcher function
gulp.task('watch',function(){
  gulp.watch('assets/src/js/*.js',gulp.series('concate'));
  gulp.watch('assets/src/sass/*.scss',gulp.series('sass-compile'));
});

//run all task using single command
gulp.task('default',gulp.series('welcome-message','watch'));