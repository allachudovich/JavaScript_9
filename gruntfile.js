module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '',
            },
            javascript: {
                src: ['app/js/script1.js', 'app/js/script2.js'],
                dest: 'dist/js/script.js',
            },
            css: {
                src: ['app/css/*.scss'],
                dest: 'dist/css/style.scss'
            },
        },
        uglify: {
            javascript: {
                src: 'dist/js/script.js',
                dest: 'dist/js/script.min.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/css/style/',
                    src: ['style.scss'],
                    dest: 'dist/css/style/',
                    ext: '.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'app/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },
        watch: {
            // this means, whenever a .js file changes, run "grunt uglify"
            javascript: {
                files: ['app/js/*.js'],
                tasks: ['concat', 'uglify'],

            },
            // this means, whenever a .css file changes, run "grunt scss"
            css: {
                files: ['app/css/*.scss'],
                tasks: ['sass'],

            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin']);

};
