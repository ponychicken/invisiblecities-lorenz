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
    ay = 0;
    ax = 0;

    Symbol.bindElementAction(compId, symbolName, "${Stage}", "scroll", function(sym, e) {
      var myCalc = e.currentTarget.scrollLeft / (e.currentTarget.scrollWidth - e.currentTarget.clientWidth);
      var pos = Math.round(myCalc * sym.getDuration());
      var poss = Math.round(myCalc * sym.getSymbol("sym_all").getDuration());

      sym.stop(pos);
      sym.getSymbol("sym_all").stop(poss);


    });
    //Edge binding end

    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      //Detect if the browser supports DeviceMotionEvent
      if (window.DeviceMotionEvent != undefined) {

        //ondevicemotion is fired when iOS device detects motion
        window.ondevicemotion = function(e) {
          //ax is the movement on the x axis.
          ax = (event.accelerationIncludingGravity.x + ax * 6) / 7;
          ay = (event.accelerationIncludingGravity.y + ay * 6) / 7;


          sym.getSymbol("sym_welleframe").getSymbol("sym_welle_1").getSymbolElement().css("margin-top", ax * 200 + "px");

        }
      }

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
      // Navigate to a new URL in the current window
      // (replace "_self" with appropriate target attribute for a new window)
      window.open("thread_4.html", "_self");

    });
    //Edge binding end

  })("stage");
  //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'sym_a3a'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5641, function(sym, e) {
      sym.play('oo_a3a');

    });
    //Edge binding end

  })("sym_a3a");
  //Edge symbol end:'sym_a3a'

  //=========================================================

  //Edge symbol: 'sym_a3b'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
      sym.play('oo_a3b');

    });
    //Edge binding end

  })("sym_a3b");
  //Edge symbol end:'sym_a3b'

  //=========================================================

  //Edge symbol: 'sym_b1a'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
      sym.play('oo_b1a');

    });
    //Edge binding end

  })("sym_b1a");
  //Edge symbol end:'sym_b1a'

  //=========================================================

  //Edge symbol: 'sym_b1b'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
      sym.play('oo_b1b');

    });
    //Edge binding end

  })("sym_b1b");
  //Edge symbol end:'sym_b1b'

  //=========================================================

  //Edge symbol: 'sym_all'
  (function(symbolName) {

  })("sym_all");
  //Edge symbol end:'sym_all'

  //=========================================================

  //Edge symbol: 'sym_welle_1'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
      sym.play('loop_welle');

    });
    //Edge binding end

  })("sym_welle_1");
  //Edge symbol end:'sym_welle_1'

  //=========================================================

  //Edge symbol: 'sym_welleframe'
  (function(symbolName) {

  })("sym_welleframe");
  //Edge symbol end:'sym_welleframe'

  //=========================================================

  //Edge symbol: 'Preloader'
  (function(symbolName) {

  })("Preloader");
  //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5245403");
