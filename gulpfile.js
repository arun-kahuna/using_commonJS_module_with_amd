var gulp = require('gulp');
var requirejs = require('requirejs');

config = {
        name: 'src/app',
        baseUrl: ".",
        out: 'dist/app.build.js',
        nodeRequire: require,
        paths: {
            "jquery": "lib/jquery-1.12.0",
            "underscore": "lib/underscore"
        }
};


requirejs.config(config);


gulp.task('requirejs', function (cb) {

// WORKING: r.js is able to load dagre-d3 in commonJS path
console.log('1.5 dagreD3: ' + requirejs('dagre-d3'));


// WORKING: r.js is able to load dagre-d3 in commonJS path
    requirejs(['dagre-d3'], function ( dagreD3 ) {
        console.log('2 dagreD3: ' + dagreD3);
    });

// NOT WORKING. WHY ??
    requirejs.optimize(config, function(buildResponse){
         console.log('build response', buildResponse);
    }, cb);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['requirejs']);