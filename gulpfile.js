var gulp = require('gulp')
	nodemon = require('gulp-nodemon'),
	apidoc = require('gulp-apidoc'),
    jslint = require('gulp-jslint');

gulp.task('server', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting the server');
    });
});

gulp.task('docs', function(){
	apidoc.exec({
		src: "controllers/",
		dest: "docs/"
	});
});

gulp.task('jslint', function () {
    return gulp.src(['routes/*.js', 'controllers/*.js'])
        .pipe(jslint({
            node: true,
            evil: true,
            nomen: true,
            reporter: 'default',
            errorsOnly: false
        }))
        .on('error', function (error) {
            console.error(String(error));
        });
});