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
      var poss = Math.round(myCalc * sym.getSymbol("sym_all").getSymbol("sym-horn").getDuration());

      sym.stop(pos);
      sym.getSymbol("sym_all").getSymbol("sym-horn").stop(poss);


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


          sym.getSymbol("sym_welleframe").getSymbol("sym_welle_2").getSymbolElement().css("margin-top", ax * -1 * 200 + "px");

        }
      }

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4444, function(sym, e) {
      // Navigate to a new URL in the current window
      // (replace "_self" with appropriate target attribute for a new window)
      window.open("thread_10.html", "_self");

    });
    //Edge binding end

  })("stage");
  //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'sym_e3b_1'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4440, function(sym, e) {
      sym.play('oo_e3b');

    });
    //Edge binding end

  })("sym_e3b_1");
  //Edge symbol end:'sym_e3b_1'

  //=========================================================

  //Edge symbol: 'sym_e3a_1'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
      sym.play('oo_e3a');

    });
    //Edge binding end

  })("sym_e3a_1");
  //Edge symbol end:'sym_e3a_1'

  //=========================================================

  //Edge symbol: 'sym_all'
  (function(symbolName) {

  })("sym_all");
  //Edge symbol end:'sym_all'

  //=========================================================

  //Edge symbol: 'sym_welle_2'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1499, function(sym, e) {
      sym.play('loop_welle');

    });
    //Edge binding end

  })("sym_welle_2");
  //Edge symbol end:'sym_welle_2'

  //=========================================================

  //Edge symbol: 'sym_welleframe'
  (function(symbolName) {

  })("sym_welleframe");
  //Edge symbol end:'sym_welleframe'

  //=========================================================

  //Edge symbol: 'sym-horn'
  (function(symbolName) {

  })("sym-horn");
  //Edge symbol end:'sym-horn'

  //=========================================================

  //Edge symbol: 'Preloader'
  (function(symbolName) {

  })("Preloader");
  //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5245403");
