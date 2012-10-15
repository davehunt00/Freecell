//  App.js
//  Gameplay class - Week2
//  Created October 4, 2012
//  Dave Hunt

//  The global app object
//  Assigned to app if exists OR creates new object
var app = app || {};

// a place to keep the screen reference
app.screens = { } 
	
//  app.start function
app.start = function ()
{
	app.showScreen( "splashScreen" );
}	

app.showScreen = function( screenId )
{
    var oldScreenDiv = $("#game .screen.active"),
        newScreenDiv = $("#" + screenId),
        newScreen = app.screens[ screenId ];
    if ( oldScreenDiv )
    {
        oldScreenDiv.removeClass( "active" );
    }
    newScreenDiv.addClass( "active" );
    newScreen.run( );
};

app.screens[ "splashScreen" ] =
    (function()
     {
    //-------------------------------------------------------------------------

         var firstRun = true;
         
    //=========================================================================

         function run( )
         {
             if ( firstRun )
             {
                 init( );
                 firstRun = false;
             }
         }
         
    //-------------------------------------------------------------------------
         
         function init( )
         {
             $("#splashScreen").click(
                 function( event )
                 {
                     app.showScreen( "menuScreen" );
                 }
             );
         }
         
    //=========================================================================

         return {
             run: run
         };
         
    //-------------------------------------------------------------------------
     }
)();

app.screens[ "menuScreen" ] =
    (function()
     {
    //-------------------------------------------------------------------------

         var firstRun = true;
         
    //=========================================================================

         function run( )
         {
             if ( firstRun )
             {
                 init( );
                 firstRun = false;
             }
         }
         
    //-------------------------------------------------------------------------
         
         function init( )
         {
             $("#menuScreen menu").click(
                 function( event )
                 {
                     var target = $(event.target),
                         screenId;
                     if ( target.is( "button" ) === false )
                         return;
                     screenId = target.attr( "name" );
                     app.showScreen( screenId );
                 }
             );
         }
         
    //=========================================================================

         return {
             run: run
         };
         
    //-------------------------------------------------------------------------
     }
)();

app.screens[ "gameScreen" ] =
    (function()
     {
    //-------------------------------------------------------------------------

         var firstRun = true;
         
    //=========================================================================

         function run( )
         {
             if ( firstRun )
             {
                 init( );
                 firstRun = false;
             }
         }
         
    //-------------------------------------------------------------------------
         
         function init( )
         {
             $("#gameScreen menu").click(
                 function( event )
                 {
                     var target = $(event.target),
                         screenId;
                     if ( target.is( "button" ) === false )
                         return;
                     screenId = target.attr( "name" );
                     app.showScreen( screenId );
                 }
             );
         }
         
    //=========================================================================

         return {
             run: run
         };
         
    //-------------------------------------------------------------------------
     }
)();

app.screens[ "settingsScreen" ] =
    (function()
     {
    //-------------------------------------------------------------------------

         var firstRun = true;
         
    //=========================================================================

         function run( )
         {
             if ( firstRun )
             {
                 init( );
                 firstRun = false;
             }
         }
         
    //-------------------------------------------------------------------------
         
         function init( )
         {
             $("#settingsScreen menu").click(
                 function( event )
                 {
                     var target = $(event.target),
                         screenId;
                     if ( target.is( "button" ) === false )
                         return;
                     screenId = target.attr( "name" );
                     app.showScreen( screenId );
                 }
             );
			 
             $("#settingsScreen smbutton").click(
                 function( event )
                 {
                     var target = $(event.target),
                         screenId;
                     if ( target.is( "smbutton" ) === false )
                         return;
                     screenId = target.attr( "name" );
                     app.showScreen( screenId );
                 }
             );			 
         }
         
    //=========================================================================

         return {
             run: run
         };
         
    //-------------------------------------------------------------------------
     }
)();

app.screens[ "hofScreen" ] =
    (function()
     {
    //-------------------------------------------------------------------------

         var firstRun = true;
         
    //=========================================================================

         function run( )
         {
             if ( firstRun )
             {
                 init( );
                 firstRun = false;
             }
         }
         
    //-------------------------------------------------------------------------
         
         function init( )
         {
             $("#hofScreen menu").click(
                 function( event )
                 {
                     var target = $(event.target),
                         screenId;
                     if ( target.is( "button" ) === false )
                         return;
                     screenId = target.attr( "name" );
                     app.showScreen( screenId );
                 }
             );
         }
         
    //=========================================================================

         return {
             run: run
         };
         
    //-------------------------------------------------------------------------
     }
)();

app.screens[ "aboutScreen" ] =
    (function()
     {
    //-------------------------------------------------------------------------

         var firstRun = true;
         
    //=========================================================================

         function run( )
         {
             if ( firstRun )
             {
                 init( );
                 firstRun = false;
             }
         }
         
    //-------------------------------------------------------------------------
         
         function init( )
         {
             $("#aboutScreen menu").click(
                 function( event )
                 {
                     var target = $(event.target),
                         screenId;
                     if ( target.is( "button" ) === false )
                         return;
                     screenId = target.attr( "name" );
                     app.showScreen( screenId );
                 }
             );
         }
         
    //=========================================================================

         return {
             run: run
         };
         
    //-------------------------------------------------------------------------
     }
)();

