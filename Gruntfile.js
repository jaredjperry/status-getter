/* global module require */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        eslint: {
            target: ["*.js"]
        },
        watch: {
            files: "*.js",
            tasks: "default"
        }
    });
    
    require("load-grunt-tasks")(grunt);
    grunt.registerTask("default", ["eslint"]);
};