# Hybrid Web App
CommonJS Browserify HTML5 webbrowser client.
	
###Setup insctructions
Apart from the npm dependencies, this project has a dependancy on the [Hybrid-Core](https://github.com/karaoak/SharedJS.hybrid-core) shared JS codebase project to be symlinked inside the app/lib/core directory of this project.

So setting up this project would require the following:

	$ npm install
	$ cd app/src
	$ ln -s [hybrid-core]/src core (typically: $ ln -s ../../../core/src core)
	
###Build instructions
Use the repository grunt tasks to build the app per platform.

### Documentation
Please find a list of the main libraries and modules used in this project:

* [CommonJS](http://wiki.commonjs.org/wiki/CommonJS)
* [Browserify](http://browserify.org/)
	

	
	
