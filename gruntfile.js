
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      html: {
          files: ['index.html']
      },
      scripts: {
        files: ['mutt_files/**/*.js'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['mutt_files/**/*.css'],
        //tasks: ['less'],
        options: {
          spawn: false
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    }

    /*
    ,less: {
      development: {
        options: {
          paths: ["assets/less/modules"]
        },
        files: {
          "assets/css/styles.css" : "assets/less/styles.less",
          "assets/css/landing.css" : "assets/less/landing.less"
        }
      }
    }
    */

  });  

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('dev', ['connect', 'watch']);

  //grunt.registerTask('compile', ['less']);

};