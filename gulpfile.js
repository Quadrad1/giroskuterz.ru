var gulp = require('gulp');
var sass = require ('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');

gulp.task('default', function () {//компиляция scss >> css > автопрефиксер > объеденяет все медия запросы
  console.log("--------------------Hello--------------------");
});

gulp.task('sass',function(){//компилирование scss  в css
return  gulp.src('./work_project/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./work_project/css'))
    .pipe(browserSync.reload({
      stream:true
    }))
});

gulp.task('work:watch',['browser-sync','sass'],function(){//вотчер комплиляции scss  в css и запуск browserSync
  livereload.listen();
  gulp.watch('./work_project/**/*.scss',['sass']);
  gulp.watch('./work_project/**/*.html',browserSync.reload);
  gulp.watch('./work_project/**/*.js',browserSync.reload);
});

gulp.task('media', function () {//объеденяет все медия запросы в готовом css
  return  gulp.src('./work_project/**/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest('./work_project/css'));
});
gulp.task('minify-css', function() {//сжимает css файлы
  return gulp.src('./work_project/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./work_project/css'));
});
gulp.task('auto-prefixer', function(){//автопрефиксер
  gulp.src('./work_project/**/*.css')
      .pipe(autoprefixer({
          browsers: ['last 15 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('./work_project/css/'))
});
gulp.task('browser-sync',function(){
  browserSync({
    server: {
      baseDir:'./work_project'
    }
  });
});
gulp.task('last_task', function () {//компиляция scss >> css > автопрефиксер > объеденяет все медия запросы
  console.log("--------------------Buy-Buy--------------------");
  return  gulp.src('./work_project/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gcmq())//media
      .pipe(autoprefixer({
          browsers: ['last 15 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('./work_project/css'))
      .pipe(browserSync.reload({
        stream:true
      }))
});
