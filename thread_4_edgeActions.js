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
          //This motion is used to move the ship in the game
          ax = event.accelerationIncludingGravity.x;
          ay = event.accelerationIncludingGravity.y;


          sym.getSymbol("sym_welleframe").getSymbol("sym_welle_2").getSymbolElement().css("margin-top", ax * 200 + "px");

        }
      }

    });
    //Edge binding end

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
      // Navigate to a new URL in the current window
      // (replace "_self" with appropriate target attribute for a new window)
      window.open("thread_5.html", "_self");

    });
    //Edge binding end

  })("stage");
  //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'sym_b2a'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
      sym.play('oo_b2a');

    });
    //Edge binding end

  })("sym_b2a");
  //Edge symbol end:'sym_b2a'

  //=========================================================

  //Edge symbol: 'sym_bling'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1125, function(sym, e) {
      sym.play('loop_bling');

    });
    //Edge binding end

  })("sym_bling");
  //Edge symbol end:'sym_bling'

  //=========================================================

  //Edge symbol: 'sym_bling3'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1095, function(sym, e) {
      sym.play('loop_bling3');

    });
    //Edge binding end

  })("sym_bling3");
  //Edge symbol end:'sym_bling3'

  //=========================================================

  //Edge symbol: 'sym_bling2'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1420, function(sym, e) {
      sym.play('loop_bling2');

    });
    //Edge binding end

  })("sym_bling2");
  //Edge symbol end:'sym_bling2'

  //=========================================================

  //Edge symbol: 'sym_bling5'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 850, function(sym, e) {
      sym.play('loop_bling1');

    });
    //Edge binding end

  })("sym_bling5");
  //Edge symbol end:'sym_bling5'

  //=========================================================

  //Edge symbol: 'sym_bling1'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1365, function(sym, e) {
      sym.play('loop_bling1');

    });
    //Edge binding end

  })("sym_bling1");
  //Edge symbol end:'sym_bling1'

  //=========================================================

  //Edge symbol: 'sym_bling4'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1070, function(sym, e) {
      sym.play('loop_bling4');

    });
    //Edge binding end

  })("sym_bling4");
  //Edge symbol end:'sym_bling4'

  //=========================================================

  //Edge symbol: 'sym_b2b'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
      sym.play('oo_b2b');

    });
    //Edge binding end

  })("sym_b2b");
  //Edge symbol end:'sym_b2b'

  //=========================================================

  //Edge symbol: 'sym_b3a'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
      sym.play('oo_b3a');

    });
    //Edge binding end

  })("sym_b3a");
  //Edge symbol end:'sym_b3a'

  //=========================================================

  //Edge symbol: 'sym_b3b'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
      sym.play('oo_b3b');

    });
    //Edge binding end

  })("sym_b3b");
  //Edge symbol end:'sym_b3b'

  //=========================================================

  //Edge symbol: 'sym_all'
  (function(symbolName) {

  })("sym_all");
  //Edge symbol end:'sym_all'

  //=========================================================

  //Edge symbol: 'sym_welle_2'
  (function(symbolName) {

    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2749, function(sym, e) {
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

  //Edge symbol: 'Preloader'
  (function(symbolName) {

  })("Preloader");
  //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5245403");
