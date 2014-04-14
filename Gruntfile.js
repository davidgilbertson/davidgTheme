'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourceComments: 'map'
        },
        files: {
            'css/dg-main.css': 'sass/dg-main.scss',
            'css/editor-style.css': 'sass/dg-main.scss'
        }
      }
    },
    watch: {
      files: ['sass/*.scss'],
      tasks: 'default' //TODO could this just be 'sass'?
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);

};