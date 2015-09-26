var gulp = require('gulp')
	nodemon = require('gulp-nodemon'),
	apidoc = require('gulp-apidoc');

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting the server');
    });
});

gulp.task('apidoc', function(){
	apidoc.exec({
		src: "controllers/",
		dest: "doc/"
	});
});