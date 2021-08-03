module.exports = function(grunt) {
   grunt.loadNpmTasks("grunt-contrib-jade") ;
   grunt.loadNpmTasks("grunt-contrib-concat") ;
   // grunt.loadNpmTasks("grunt-contrib-copy") ;

   grunt.registerTask("default", [ "jade", "concat"  ] ) ;
   grunt.initConfig( {
      "jade": {
	 "security":  {
	    "files": {
               "index.html": "src/jade/index.jade",
	    }
	 }
      },
      "concat": {
         "css":  {
            "src": [ "src/css/**/*.css" ],
            "dest": "dist/slides.css"
         },
      }

   });
}
