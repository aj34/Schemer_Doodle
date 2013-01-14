/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'Schemer_Logo_HiDef',
            type:'image',
            rect:[0,0,1800,600],
            fill:["rgba(0,0,0,0)",im+"Schemer_Logo_HiDef.png"],
            transform:[[-612,-106],[],[],[0.3239,0.3239]]
         },
         {
            id:'Schemer_Text_HiDef2',
            display:'none',
            type:'image',
            rect:[0,0,1800,375],
            fill:["rgba(0,0,0,0)",im+"Schemer_Text_HiDef2.png"],
            transform:[[-611,-16],[],[],[0.3227,0.3227]]
         },
         {
            id:'animatedeyes',
            type:'image',
            rect:[0,0,200,100],
            fill:["rgba(0,0,0,0)",im+"animatedeyes.gif"],
            transform:[[200,88]]
         },
         {
            id:'moustache2',
            type:'image',
            rect:[0,0,500,88],
            fill:["rgba(0,0,0,0)",im+"moustache2.gif"],
            transform:[[44,176],[],[],[0.4766,0.4766]]
         },
         {
            id:'mustache-bounce-sm2Copy',
            type:'image',
            rect:[543,97,97,24],
            fill:["rgba(0,0,0,0)",im+"mustache-bounce-sm.gif"],
            transform:[[-213,34],[],[],[0.4336,0.536]]
         },
         {
            id:'animatedeyes_long3Copy',
            type:'image',
            rect:[481,245,200,100],
            fill:["rgba(0,0,0,0)",im+"animatedeyes_long.gif"],
            transform:[[-202,-170],[],[],[0.2819,0.24]]
         },
         {
            id:'animatedeyes2',
            type:'image',
            rect:[211,63,200,100],
            fill:["rgba(0,0,0,0)",im+"animatedeyes.gif"],
            transform:[[-14,58],[],[],[0.24,0.24]]
         },
         {
            id:'mustache-bounce-sm3',
            type:'image',
            rect:[478,311,97,24],
            fill:["rgba(0,0,0,0)",im+"mustache-bounce-sm.gif"],
            transform:[[-232,-139],[],[],[0.433,0.433]]
         },
         {
            id:'animatedeyeslongest4',
            type:'image',
            rect:[0,0,200,100],
            fill:["rgba(0,0,0,0)",im+"animatedeyeslongest4.gif"],
            transform:[[38,109],[],[],[0.24,0.24]]
         },
         {
            id:'mustache-bounce-sm',
            type:'image',
            rect:[408,338,97,24],
            fill:["rgba(0,0,0,0)",im+"mustache-bounce-sm.gif"]
         },
         {
            id:'animatedeyes_long',
            type:'image',
            rect:[98,252,200,100],
            fill:["rgba(0,0,0,0)",im+"animatedeyes_long.gif"],
            transform:[[-151,-181],[],[],[0.24,0.24]]
         },
         {
            id:'animatedeyeslongest',
            type:'image',
            rect:[408,285,200,100],
            fill:["rgba(0,0,0,0)",im+"animatedeyeslongest.gif"],
            transform:[[22,-179],[],[],[0.24,0.259]]
         },
         {
            id:'slogan3',
            type:'image',
            rect:[218,27,560,64],
            fill:["rgba(0,0,0,0)",im+"slogan.png"],
            transform:[[-199,-90],[],[],[0.8017,0.8017]]
         },
         {
            id:'TwitchMustacheForever2',
            display:'none',
            type:'image',
            rect:[653,299,720,216],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"TwitchMustacheForever.gif"],
            transform:[[-723,-171],[],[],[0.5809,0.5809]]
         },
         {
            id:'moustache22',
            display:'none',
            type:'image',
            rect:[474,306,500,88],
            fill:["rgba(0,0,0,0)",im+"moustache2.gif"],
            transform:[[-435,-111],[],[],[0.5955,0.5769]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_animatedeyeslongest}": [
            ["transform", "translateX", '22.889px'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-179.05px'],
            ["transform", "scaleY", '0.259']
         ],
         "${_animatedeyes_long}": [
            ["transform", "translateX", '-151.8px'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-181px'],
            ["transform", "scaleY", '0.24']
         ],
         "${_animatedeyes}": [
            ["transform", "translateX", '203.5px'],
            ["transform", "scaleX", '1.585'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '88px'],
            ["transform", "scaleY", '0.777']
         ],
         "${_animatedeyeslongest4}": [
            ["transform", "translateX", '38.999px'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '109.475px'],
            ["transform", "scaleY", '0.24']
         ],
         "${_Schemer_Text_HiDef2}": [
            ["transform", "translateX", '-611.2px'],
            ["transform", "scaleY", '0.322'],
            ["transform", "scaleX", '0.322'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-16.125px'],
            ["style", "display", 'none']
         ],
         "${_animatedeyes2}": [
            ["transform", "translateX", '-14.999px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '58px'],
            ["transform", "scaleY", '0.24']
         ],
         "${_Schemer_Logo_HiDef}": [
            ["transform", "translateX", '-611.3px'],
            ["transform", "scaleX", '0.323'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-106.05px'],
            ["transform", "scaleY", '0.323']
         ],
         "${_mustache-bounce-sm2Copy}": [
            ["transform", "translateX", '-213.106px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.433'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '27.935px'],
            ["transform", "scaleY", '0.536']
         ],
         "${_moustache2}": [
            ["transform", "translateX", '26.702px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.83'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '66.567px'],
            ["transform", "scaleY", '0.622']
         ],
         "${_mustache-bounce-sm3}": [
            ["transform", "translateX", '-232.5px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.433'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-139.804px'],
            ["transform", "scaleY", '0.433']
         ],
         "${_moustache22}": [
            ["transform", "translateX", '-435.25px'],
            ["transform", "scaleY", '0.576'],
            ["transform", "scaleX", '0.595'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-111.612px'],
            ["style", "display", 'none']
         ],
         "${_slogan3}": [
            ["transform", "scaleX", '0.801'],
            ["transform", "translateY", '-92.633px'],
            ["transform", "scaleY", '0.801'],
            ["transform", "translateX", '-209.72px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(139,209,235,1)'],
            ["style", "width", '600px']
         ],
         "${_TwitchMustacheForever2}": [
            ["transform", "translateX", '-723.483px'],
            ["transform", "scaleX", '0.58'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-171.052px'],
            ["transform", "scaleY", '0.58']
         ],
         "${_mustache-bounce-sm}": [
            ["transform", "translateX", '-318.541px'],
            ["transform", "scaleX", '0.494'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-177.256px'],
            ["transform", "scaleY", '1']
         ],
         "${_animatedeyes_long3Copy}": [
            ["transform", "translateX", '-201.349px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.281'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-174.496px'],
            ["transform", "scaleY", '0.24']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 42500,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid21", tween: [ "transform", "${_moustache2}", "scaleX", '0.591', { fromValue: '0.83'}], position: 3003, duration: 500, easing: "easeInOutSine" },
            { id: "eid119", tween: [ "transform", "${_moustache2}", "scaleX", '0.407', { fromValue: '0.591'}], position: 3503, duration: 500, easing: "easeInOutSine" },
            { id: "eid25", tween: [ "transform", "${_moustache2}", "scaleX", '0.598', { fromValue: '0.407'}], position: 4003, duration: 750, easing: "easeInOutSine" },
            { id: "eid40", tween: [ "transform", "${_moustache2}", "scaleX", '0.691', { fromValue: '0.598'}], position: 4753, duration: 636, easing: "easeInOutSine" },
            { id: "eid96", tween: [ "transform", "${_moustache2}", "scaleX", '0.756', { fromValue: '0.691'}], position: 5392, duration: 251, easing: "easeInSine" },
            { id: "eid274", tween: [ "transform", "${_moustache2}", "scaleX", '0.782', { fromValue: '0.756'}], position: 5643, duration: 136, easing: "easeOutSine" },
            { id: "eid108", tween: [ "transform", "${_moustache2}", "scaleX", '0.602', { fromValue: '0.782'}], position: 5779, duration: 971, easing: "easeInOutSine" },
            { id: "eid16", tween: [ "transform", "${_moustache2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 2986, duration: 497, easing: "swing" },
            { id: "eid118", tween: [ "transform", "${_moustache2}", "rotateZ", '15deg', { fromValue: '-10deg'}], position: 3486, duration: 17, easing: "swing" },
            { id: "eid11", tween: [ "transform", "${_moustache2}", "rotateZ", '-15deg', { fromValue: '15deg'}], position: 3986, duration: 750, easing: "swing" },
            { id: "eid13", tween: [ "transform", "${_moustache2}", "rotateZ", '12deg', { fromValue: '-15deg'}], position: 4736, duration: 636, easing: "swing" },
            { id: "eid70", tween: [ "transform", "${_moustache2}", "rotateZ", '-10deg', { fromValue: '12deg'}], position: 5392, duration: 251, easing: "swing" },
            { id: "eid98", tween: [ "transform", "${_moustache2}", "rotateZ", '-12deg', { fromValue: '-10deg'}], position: 5643, duration: 136, easing: "swing" },
            { id: "eid268", tween: [ "transform", "${_moustache2}", "rotateZ", '-27deg', { fromValue: '-12deg'}], position: 5779, duration: 363, easing: "swing" },
            { id: "eid100", tween: [ "transform", "${_moustache2}", "rotateZ", '0deg', { fromValue: '-27deg'}], position: 6142, duration: 140, easing: "swing" },
            { id: "eid302", tween: [ "style", "${_animatedeyes_long}", "opacity", '1', { fromValue: '0.000000'}], position: 23500, duration: 2250 },
            { id: "eid305", tween: [ "style", "${_animatedeyeslongest}", "opacity", '1', { fromValue: '0'}], position: 24750, duration: 2500 },
            { id: "eid371", tween: [ "style", "${_Schemer_Text_HiDef2}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0 },
            { id: "eid406", tween: [ "style", "${_moustache22}", "opacity", '1', { fromValue: '0'}], position: 37000, duration: 2000 },
            { id: "eid399", tween: [ "style", "${_moustache22}", "display", 'block', { fromValue: 'none'}], position: 37000, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_moustache2}", "translateY", '72.083px', { fromValue: '66.567px'}], position: 3003, duration: 500, easing: "easeInOutSine" },
            { id: "eid117", tween: [ "transform", "${_moustache2}", "translateY", '138.421px', { fromValue: '72.083px'}], position: 3503, duration: 500, easing: "easeInOutSine" },
            { id: "eid20", tween: [ "transform", "${_moustache2}", "translateY", '173.639px', { fromValue: '138.421px'}], position: 4003, duration: 750, easing: "easeInOutSine" },
            { id: "eid36", tween: [ "transform", "${_moustache2}", "translateY", '192.258px', { fromValue: '173.639px'}], position: 4753, duration: 636, easing: "easeInOutSine" },
            { id: "eid95", tween: [ "transform", "${_moustache2}", "translateY", '197.934px', { fromValue: '192.258px'}], position: 5392, duration: 387, easing: "easeInOutSine" },
            { id: "eid105", tween: [ "transform", "${_moustache2}", "translateY", '193.727px', { fromValue: '197.934px'}], position: 5779, duration: 971, easing: "easeInOutSine" },
            { id: "eid351", tween: [ "transform", "${_slogan3}", "translateY", '-33.368px', { fromValue: '-92.633px'}], position: 26500, duration: 6250, easing: "easeInOutBounce" },
            { id: "eid353", tween: [ "transform", "${_slogan3}", "translateY", '-101.476px', { fromValue: '-33.368px'}], position: 37000, duration: 5500, easing: "easeInOutBounce" },
            { id: "eid112", tween: [ "style", "${_Schemer_Logo_HiDef}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 2218, easing: "easeOutSine" },
            { id: "eid358", tween: [ "style", "${_Schemer_Logo_HiDef}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1750 },
            { id: "eid4", tween: [ "transform", "${_moustache2}", "translateX", '44.735px', { fromValue: '26.702px'}], position: 3003, duration: 500, easing: "easeInOutSine" },
            { id: "eid116", tween: [ "transform", "${_moustache2}", "translateX", '19.087px', { fromValue: '44.735px'}], position: 3503, duration: 500, easing: "easeInOutSine" },
            { id: "eid19", tween: [ "transform", "${_moustache2}", "translateX", '38.226px', { fromValue: '19.087px'}], position: 4003, duration: 750, easing: "easeInOutSine" },
            { id: "eid35", tween: [ "transform", "${_moustache2}", "translateX", '26.886px', { fromValue: '38.226px'}], position: 4753, duration: 636, easing: "easeInOutSine" },
            { id: "eid94", tween: [ "transform", "${_moustache2}", "translateX", '39.602px', { fromValue: '26.886px'}], position: 5392, duration: 387, easing: "easeInOutSine" },
            { id: "eid106", tween: [ "transform", "${_moustache2}", "translateX", '38.174px', { fromValue: '39.602px'}], position: 5779, duration: 971, easing: "easeInOutSine" },
            { id: "eid397", tween: [ "style", "${_Schemer_Text_HiDef2}", "opacity", '1', { fromValue: '0'}], position: 38000, duration: 1000 },
            { id: "eid114", tween: [ "style", "${_moustache2}", "opacity", '0', { fromValue: '1'}], position: 6282, duration: 1968 },
            { id: "eid299", tween: [ "style", "${_animatedeyes2}", "opacity", '1', { fromValue: '0'}], position: 21750, duration: 2250 },
            { id: "eid295", tween: [ "style", "${_animatedeyeslongest4}", "opacity", '1', { fromValue: '0'}], position: 19250, duration: 2500 },
            { id: "eid418", tween: [ "style", "${_TwitchMustacheForever2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutExpo" },
            { id: "eid244", tween: [ "style", "${_animatedeyes_long3Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 16250, duration: 2000, easing: "easeInQuad" },
            { id: "eid298", tween: [ "style", "${_mustache-bounce-sm3}", "opacity", '1', { fromValue: '0'}], position: 20500, duration: 2250 },
            { id: "eid245", tween: [ "style", "${_mustache-bounce-sm2Copy}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 2128, easing: "easeInQuad" },
            { id: "eid294", tween: [ "style", "${_mustache-bounce-sm}", "opacity", '1', { fromValue: '0'}], position: 17500, duration: 2500 },
            { id: "eid162", tween: [ "transform", "${_animatedeyes}", "translateY", '52.788px', { fromValue: '88px'}], position: 7953, duration: 2157 },
            { id: "eid166", tween: [ "transform", "${_animatedeyes}", "translateY", '248.834px', { fromValue: '52.788px'}], position: 10110, duration: 3012, easing: "easeOutBounce" },
            { id: "eid22", tween: [ "transform", "${_moustache2}", "scaleY", '0.851', { fromValue: '0.622'}], position: 3003, duration: 500, easing: "easeInOutSine" },
            { id: "eid26", tween: [ "transform", "${_moustache2}", "scaleY", '0.882', { fromValue: '0.851'}], position: 3500, duration: 250, easing: "easeInOutSine" },
            { id: "eid120", tween: [ "transform", "${_moustache2}", "scaleY", '0.884', { fromValue: '0.852'}], position: 3503, duration: 483, easing: "easeInOutSine" },
            { id: "eid267", tween: [ "transform", "${_moustache2}", "scaleY", '0.897', { fromValue: '0.884'}], position: 3986, duration: 267, easing: "easeInOutSine" },
            { id: "eid41", tween: [ "transform", "${_moustache2}", "scaleY", '0.803', { fromValue: '0.882'}], position: 4753, duration: 636, easing: "easeInOutSine" },
            { id: "eid97", tween: [ "transform", "${_moustache2}", "scaleY", '0.682', { fromValue: '0.803'}], position: 5392, duration: 251, easing: "easeInSine" },
            { id: "eid275", tween: [ "transform", "${_moustache2}", "scaleY", '0.637', { fromValue: '0.682'}], position: 5643, duration: 136, easing: "easeOutSine" },
            { id: "eid101", tween: [ "transform", "${_moustache2}", "scaleY", '0.709', { fromValue: '0.637'}], position: 5779, duration: 971, easing: "easeInOutSine" },
            { id: "eid170", tween: [ "style", "${_animatedeyes}", "opacity", '0', { fromValue: '1'}], position: 10110, duration: 5012, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Doodle-2");
