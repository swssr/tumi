module.exports = function (grunt) {
        require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
        // Project configuration.
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                cssmin: {  
                    sitecss: {  
                        options: {  
                            banner: '/* My minified css file */'  
                        },  
                        files: {  
                            'public/main.min.css': [  
                                'public/assets/css/main.css',  
                                ]  
                        }  
                    }  
                },  
                uglify: {  
                    options: {  
                        compress: true  
                    },  
                    applib: {  
                        src: [  
                        'src/js/!*.min.js',
                        'src/js/*.js'
                        ],  
                        dest: 'public/main.js'  
                    }  
                }  
            });  
            // Default task.  
            grunt.registerTask('default', ['uglify', 'cssmin']);
        };