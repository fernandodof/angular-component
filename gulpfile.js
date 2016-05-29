'use strict';

var gulp = require('gulp');
var http = require('http');
var ecstatic = require('ecstatic');

var ports = {
    dev: 7083
};

var paths = {
    root : './src'
};

gulp.task('run', function () {
    http.createServer(
        ecstatic({ root: __dirname + '/' })
    ).listen(ports.dev);

    console.log(
        'Listening on http://localhost:'
        + ports.dev + '/'
        + paths.root);
});
