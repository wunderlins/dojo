var profile = (function(){
	return {
		basePath: "./",
		releaseDir: "../build",
		
		releaseName: "app",
		action: "release",
		
		// Sets the minification setting for layers. This defaults to 
		// "shrinksafe". A value of false turns off minification and the 
		// other valid values are "shrinksafe.keeplines", "closure", 
		// "closure.keeplines", "comment", and "comment.keeplines".
		layerOptimize: "shrinksafe",
		
		// Sets the minification for modules that aren't part of a layer. This 
		// defaults to false and takes the sames values as layerOptimize.
		optimize: "closure",
		
		// Deals with out CSS is optimized. It defaults to false. A value of 
		// "comments" will strip out comments and extra lines and inline any 
		// @import<code> commands. A value of <code>"comments.keepLines" strips 
		// the comments and inlines the @imports, but preserves any line breaks.
		cssOptimize: true,
		
		// This determines if the build is a "mini" build or not. If true it will 
		// exclude files that are tagged as miniExclude which is typically things 
		// like tests, demos and other items not required for the build to work. 
		// This defaults to false.
		mini: true,
		
		// This determines how console handling is dealt with in the output code. 
		// This defaults to "normal" which strips all console messages except 
		// console.error and console.warn. It is important to note though, this 
		// feature only applies when there is a level of optimization going on, 
		// otherwise it is ignored. Other possible values are "none", "warn" 
		// and "all".
		stripConsole: "normal",
		
		// This identifies the default selector engine for the build and builds 
		// it into the code. While this does not directly make the code smaller, 
		// it ensure that a selector engine won't require another call to be 
		// loaded. It defaults to nothing and the two engines included with Dojo 
		// are lite and acme.
		selectorEngine: "lite",
		
		// include the main html files
		resourceTags: {
			declarative: function(filename){
				return /\.htm(l)?$/.test(filename); // tags any .html or .htm files as declarative
			}
		},

		packages:[{
			name: "dojo",
			location: "./lib/dojo-release-1.10.4-src/dojo"
		},{
			name: "dijit",
			location: "./lib/dojo-release-1.10.4-src/dijit"
		},{
			name: "dojox",
			location: "./lib/dojo-release-1.10.4-src/dojox"
		}/* ,
		{
			// see http://martinpengellyphillips.github.io/dbootstrap/
			// for examples
			location: './lib/dbootstrap',
			name: 'dbootstrap'
		}*/],
		

		staticHasFeatures: {
			"config-deferredInstrumentation": 0,
			"config-dojo-loader-catches": 0,
			"config-tlmSiblingOfDojo": 0,
			"dojo-amd-factory-scan": 0,
			"dojo-combo-api": 0,
			"dojo-config-api": 1,
			"dojo-config-require": 0,
			"dojo-debug-messages": 0,
			"dojo-dom-ready-api": 1,
			"dojo-firebug": 0,
			"dojo-guarantee-console": 1,
			"dojo-has-api": 1,
			"dojo-inject-api": 1,
			"dojo-loader": 1,
			"dojo-log-api": 0,
			"dojo-modulePaths": 0,
			"dojo-moduleUrl": 0,
			"dojo-publish-privates": 0,
			"dojo-requirejs-api": 0,
			"dojo-sniff": 1,
			"dojo-sync-loader": 0,
			"dojo-test-sniff": 0,
			"dojo-timeout-api": 0,
			"dojo-trace-api": 0,
			"dojo-undef-api": 0,
			"dojo-v1x-i18n-Api": 1,
			"dom": 1,
			"host-browser": 1,
			"extend-dojo": 1
		},


		layers: {
			"dojo/dojo": {
				include: [ "dojo/dojo", "dojo/i18n", "dojo/domReady" ],
				customBase: true,
				boot: true
			}		
		}
		
	};
})();
