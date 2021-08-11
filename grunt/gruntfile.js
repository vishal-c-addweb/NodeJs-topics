const { registerTask } = require("grunt");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            t1:{
                src: 'dir1/**',
                dest: 'dir2/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default','copy:t1');
    grunt.registerTask('t1','copy:t1');
};