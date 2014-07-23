module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
   		files: {		//where files go to or from
		'css/main.css': 'css/main.scss'   // destination: source
 		}
   	}
   },
   watch: {
   	css: {
   		files: ['css/*.scss'],
   		tasks: ['sass', 'autoprefixer']
   	},
   	options: {
   		livereload: true
   	}
   },
   autoprefixer: {
   	options: {
   	  browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'css/main.css'
   	}
   },
   connect: {
   		server: {
   			options: {
   				port: 9001,
   				base: ''
   			}
   		}
   }
 });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-connect');

 // Default task(s).
 grunt.registerTask('default', ['connect','watch']); //name in square bracket MUST match name of desired task as above
};