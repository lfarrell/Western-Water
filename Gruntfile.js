module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                sourceMap: true
            },
            my_target: {
                files: {
                    'js/minified/output.min.js': [
                        'js/services.js',
                        'js/directives.js'
                    ]
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'css/output.min.css': ['css/style.css']
                }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin'])
};