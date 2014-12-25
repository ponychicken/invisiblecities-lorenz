/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId) {
  var Composition = Edge.Composition,
    Symbol = Edge.Symbol; // aliases for commonly used Edge classes

  //Edge symbol: 'stage'
  (function(symbolName) {


    Symbol.bindElementAction(compId, symbolName, "${Stage}", "scroll", function(sym, e) {
      var myCalc = e.currentTarget.scrollLeft / (e.currentTarget.scrollWidth - e.currentTarget.clientWidth);
      var pos = Math.round(myCalc * sym.getDuration());

      sym.stop(pos);

    });
    //Edge binding end

    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      //Detect if the browser supports DeviceMotionEvent
      if (window.DeviceMotionEvent != undefined) {

        //ondevicemotion is fired when iOS device detects motion
        window.ondevicemotion = function(e) {
          //ax is the movement on the x axis.
          //This motion is used to move the ship in the game
          ax = event.accelerationIncludingGravity.x;
          ay = event.accelerationIncludingGravity.y;


          sym.getSymbol("sym_welleframe").getSymbol("sym_welle_2").getSymbolElement().css("margin-top", ax * 200 + "px");

        }
      }

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
      // Navigate to a new URL in the current window
      // (replace "_self" with appropriate target attribute for a new window)
      window.open("thread_7.html", "_self");

    });
    //Edge binding end

  })("stage");
  //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'sym_welleframe'
  (function(symbolName) {

  })("sym_welleframe");
  //Edge symbol end:'sym_welleframe'

  //=========================================================

  //Edge symbol: 'sym_c2a'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
      sym.play('oo_c2a');

    });
    //Edge binding end

  })("sym_c2a");
  //Edge symbol end:'sym_c2a'

  //=========================================================

  //Edge symbol: 'sym_c2b'
  (function(symbolName) {

  })("sym_c2b");
  //Edge symbol end:'sym_c2b'

  //=========================================================

  //Edge symbol: 'sym_c3a'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2999, function(sym, e) {
      sym.play('oo_c3a');

    });
    //Edge binding end

  })("sym_c3a");
  //Edge symbol end:'sym_c3a'

  //=========================================================

  //Edge symbol: 'sym_c3b'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
      sym.play('oo_c3b');

    });
    //Edge binding end

  })("sym_c3b");
  //Edge symbol end:'sym_c3b'

  //=========================================================

  //Edge symbol: 'sym_all'
  (function(symbolName) {

  })("sym_all");
  //Edge symbol end:'sym_all'

  //=========================================================

  //Edge symbol: 'sym_welle_2'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2249, function(sym, e) {
      sym.play('loop_welle');

    });
    //Edge binding end

  })("sym_welle_2");
  //Edge symbol end:'sym_welle_2'

  //=========================================================

  //Edge symbol: 'Preloader'
  (function(symbolName) {

  })("Preloader");
  //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5245403");
