var profile = (function(){
	return {
		basePath: "./htdocs/lib/dojo-release-1.10.4-src",
		releaseDir: "./build",
		releaseName: "app",
		action: "release",

		packages:[{
			name: "dojo",
			location: "dojo"
		},{
			name: "dijit",
			location: "dijit"
		},{
			name: "dojox",
			location: "dojox"
		}],

		layers: {}
	};
})();
