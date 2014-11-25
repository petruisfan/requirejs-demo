var gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify');


gulp.task('build', function() {
    rjs({
        name: "main",
        baseUrl: 'js/',
        mainConfigFile: "js/main.js",
        out: 'app.js',
        paths: {
            'jquery': 'empty:'
        }
    })
    .pipe(uglify())
    .pipe(gulp.dest('./build')); // pipe it to the output DIR
});