module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/RomanNumeralModule.js',
                dest: 'build/RomanNumeralModule.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-npm-install');

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);

    grunt.registerTask('default', ['npm-install', 'uglify']);


};