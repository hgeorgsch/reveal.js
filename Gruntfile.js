
module.exports = function(grunt) {
   grunt.loadNpmTasks("grunt-contrib-pug") ;
   grunt.loadNpmTasks("grunt-contrib-concat") ;
   // grunt.loadNpmTasks("grunt-contrib-copy") ;

   grunt.registerTask("default", [ "pug", "concat"  ] ) ;
   grunt.initConfig( {
      pug: {
	 demo:  {
	    files: {
               "demo/index.html": "src/demo/index.pug",
	    }
	 }
      },
      concat: {
         css:  {
            src: [ "src/css/**/*.css" ],
            dest: "dist/slides.css"
         },
      }

   });
}
