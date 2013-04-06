// メニューopen/close
$( document ).on( "pageinit", "#demo-page", function() {
    $( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});


//accordion
$(document).on("pageinit", function() {
  var nextId = 1;
    $("#add").click(function() {
      nextId++;
      var content = "<div data-role='collapsible' id='set" + nextId + "'><h3>Section " + nextId + "</h3><p>I am the collapsible content in a set so this feels like an accordion. I am hidden by default because I have the 'collapsed' state; you need to expand the header to see me.</p></div>";
      $("#set").append( content ).collapsibleset('refresh');
    });
    $("#expand").click(function() {
      $("#set").children(":last").trigger( "expand" );
    });
    $("#collapse").click(function() {
      $("#set").children(":last").trigger( "collapse" );
     });
});
