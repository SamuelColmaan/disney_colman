const gulp = require('gulp'); // Import gulp
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss').pipe(sass({outputStyle: 'compressed'})).pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*').pipe(imagemin()).pipe(gulp.dest('./dist/images')); /* You Have to use gulp-imagemin@7.1.0 */
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('src/scrips/*.js', gulp.parallel(scripts))
}