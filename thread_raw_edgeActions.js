/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         var myCalc = e.currentTarget.scrollLeft/(e.currentTarget.scrollWidth-e.currentTarget.clientWidth);
         var pos = Math.round( myCalc * sym.getDuration() );
         
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
         
         
         	sym.getSymbol("sym_welle").getSymbolElement().css("margin-top", ax * 100+"px" );
         	sym.getSymbol("sym_a").getSymbolElement().css("margin-top", ax * 15+"px" );
         
         	}
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("thread_2.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_welle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play('loop_welle1');

      });
      //Edge binding end

   })("sym_welle");
   //Edge symbol end:'sym_welle'

   //=========================================================
   
   //Edge symbol: 'sym_a1a'
   (function(symbolName) {   
   
   })("sym_a1a");
   //Edge symbol end:'sym_a1a'

   //=========================================================
   
   //Edge symbol: 'sym_a1b'
   (function(symbolName) {   
   
   })("sym_a1b");
   //Edge symbol end:'sym_a1b'

   //=========================================================
   
   //Edge symbol: 'sym_a2a'
   (function(symbolName) {   
   
   })("sym_a2a");
   //Edge symbol end:'sym_a2a'

   //=========================================================
   
   //Edge symbol: 'sym_a2b'
   (function(symbolName) {   
   
   })("sym_a2b");
   //Edge symbol end:'sym_a2b'

   //=========================================================
   
   //Edge symbol: 'sym_a3a'
   (function(symbolName) {   
   
   })("sym_a3a");
   //Edge symbol end:'sym_a3a'

   //=========================================================
   
   //Edge symbol: 'sym_a3b'
   (function(symbolName) {   
   
   })("sym_a3b");
   //Edge symbol end:'sym_a3b'

   //=========================================================
   
   //Edge symbol: 'sym_b1a'
   (function(symbolName) {   
   
   })("sym_b1a");
   //Edge symbol end:'sym_b1a'

   //=========================================================
   
   //Edge symbol: 'sym_b1b'
   (function(symbolName) {   
   
   })("sym_b1b");
   //Edge symbol end:'sym_b1b'

   //=========================================================
   
   //Edge symbol: 'sym_b2a'
   (function(symbolName) {   
   
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
   
   })("sym_b2b");
   //Edge symbol end:'sym_b2b'

   //=========================================================
   
   //Edge symbol: 'sym_b3a'
   (function(symbolName) {   
   
   })("sym_b3a");
   //Edge symbol end:'sym_b3a'

   //=========================================================
   
   //Edge symbol: 'sym_b3b'
   (function(symbolName) {   
   
   })("sym_b3b");
   //Edge symbol end:'sym_b3b'

   //=========================================================
   
   //Edge symbol: 'sym_b'
   (function(symbolName) {   
   
   })("sym_b");
   //Edge symbol end:'sym_b'

   //=========================================================
   
   //Edge symbol: 'sym_a'
   (function(symbolName) {   
   
   })("sym_a");
   //Edge symbol end:'sym_a'

})(jQuery, AdobeEdge, "EDGE-5245403");