module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['client/scripts/*.js',
              'client/scripts/**/*.js'],
        dest: 'server/public/scripts/client.min.js'
      }
    },
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html',
              '**/*.html'],
        dest: 'server/public/views/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/bootstrap.css',
              'js/bootstrap.js'],
        dest: 'server/public/vendors/bootstrap/'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist/',
        src: ['jquery.min.js'],
        dest: 'server/public/vendors/jquery/'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      },
      sweetalert: {
        expand: true,
        cwd: 'node_modules/sweetalert2/dist',
        src: ['sweetalert2.css',
              'sweetalert2.min.js'],
        dest: 'server/public/vendors/sweetalert2/'
      },
      angularRoute: {
        expand: true,
        cwd: 'node_modules/angular-route/',
        src: ['angular-route.js',
              'angular-route.min.js',
              'angular-route.min.js.map'],
        dest: 'server/public/vendors/angular-route/'
      }
    },
    watch: {
      files: [
        'client/**/*.*'
      ],
      tasks: ['uglify', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};
