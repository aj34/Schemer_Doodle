/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {







Symbol.bindElementAction(compId, symbolName, "${_moustache22}", "mouseover", function(sym, e) {
// Hide an Element.
//  (sym.$("name") resolves an Edge element name to a DOM
//  element that can be used with jQuery)
sym.$("moustache22").hide();

// Show an Element.
//  (sym.$("name") resolves an Edge element name to a DOM
//  element that can be used with jQuery)
sym.$("TwitchMustacheForever2").show();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_TwitchMustacheForever2}", "mouseout", function(sym, e) {
// Show an Element.
//  (sym.$("name") resolves an Edge element name to a DOM
//  element that can be used with jQuery)
sym.$("moustache22").show();
// insert code for mouse leave here

// Hide an Element.
//  (sym.$("name") resolves an Edge element name to a DOM
//  element that can be used with jQuery)
sym.$("TwitchMustacheForever2").hide();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_Schemer_Text_HiDef2}", "click", function(sym, e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("http://www.schemer.com", "_blank");
// insert code for mouse clicks here
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_TwitchMustacheForever2}", "click", function(sym, e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("http://www.schemer.com", "_blank");
// insert code for mouse clicks here
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_moustache22}", "click", function(sym, e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("http://www.schemer.com", "_blank");
// insert code for mouse clicks here
});
//Edge binding end



})("stage");
//Edge symbol end:'stage'

})(jQuery, AdobeEdge, "Doodle-2");