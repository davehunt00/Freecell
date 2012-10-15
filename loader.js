// loader.js
// loads scripts

//  Gameplay class - Week2
//  Created October 13, 2012
//  Dave Hunt

//  The global app object
//  Assigned to app if exists elsewhere or creates new object
var app = app || {};
	
//	loader object as property of global app object
app.loader = app.loader || {};

//	loader run function
app.loader.run = function() {
	// use Modernizr per Seidelin pg31 to load js files
	Modernizr.load([
	{
		//always load these files
		load: [
			"jquery.js",
			"freecell.js"
		],
		
		//once these are loaded, call app.start
		complete: function()
		{
			app.start();
		}
	}
	]);
}
	
// run the loader	
app.loader.run();	