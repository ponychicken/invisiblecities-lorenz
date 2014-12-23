/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','10000px','1536px','auto', 'auto'],
                fill: ["rgba(23,25,40,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'sym_welleframe',
                type: 'rect',
                rect: ['0px', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_all',
                type: 'rect',
                rect: ['-33', '-1','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_welleframe',
                symbolName: 'sym_welleframe',
                autoPlay: {

                }
            },
            {
                id: 'sym_all',
                symbolName: 'sym_all',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_sym_welleframe}": [
                ["style", "left", '0px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sym_all}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '10000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid2405", tween: [ "style", "${_sym_all}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2428", tween: [ "style", "${_sym_all}", "left", '0px', { fromValue: '0px'}], position: 10000, duration: 0 },
                { id: "eid2392", tween: [ "style", "${_sym_welleframe}", "left", '7952px', { fromValue: '0px'}], position: 0, duration: 10000 },
                { id: "eid2382", tween: [ "style", "${_sym_all}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_f1b": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'f1b_bein_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f1b_bein_r.svg', '0px', '0px']
                },
                {
                    id: 'f1b_bein_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f1b_bein_l.svg', '0px', '0px']
                },
                {
                    id: 'f1b_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f1b_corpus.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_f1b_bein_l}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_f1b_bein_r}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_f1b_corpus}": [
                ["style", "top", '0px'],
                ["transform", "skewY", '0deg'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            labels: {
                "oo_f1b": 0
            },
            timeline: [
                { id: "eid2270", tween: [ "style", "${_f1b_bein_l}", "left", '17px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid2271", tween: [ "style", "${_f1b_bein_l}", "left", '0px', { fromValue: '17px'}], position: 246, duration: 241 },
                { id: "eid2272", tween: [ "style", "${_f1b_bein_l}", "left", '-11px', { fromValue: '0px'}], position: 487, duration: 252 },
                { id: "eid2273", tween: [ "style", "${_f1b_bein_l}", "left", '0px', { fromValue: '-11px'}], position: 739, duration: 247 },
                { id: "eid2274", tween: [ "style", "${_f1b_bein_l}", "left", '16px', { fromValue: '0px'}], position: 986, duration: 246 },
                { id: "eid2275", tween: [ "style", "${_f1b_bein_l}", "left", '0px', { fromValue: '16px'}], position: 1232, duration: 253 },
                { id: "eid2276", tween: [ "style", "${_f1b_bein_l}", "left", '-10px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid2277", tween: [ "style", "${_f1b_bein_l}", "left", '0px', { fromValue: '-10px'}], position: 1738, duration: 238 },
                { id: "eid2278", tween: [ "style", "${_f1b_bein_l}", "left", '17px', { fromValue: '0px'}], position: 1990, duration: 252 },
                { id: "eid2303", tween: [ "style", "${_f1b_bein_l}", "left", '0px', { fromValue: '17px'}], position: 2242, duration: 253 },
                { id: "eid2304", tween: [ "style", "${_f1b_bein_l}", "left", '-6px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid2305", tween: [ "style", "${_f1b_bein_l}", "left", '0px', { fromValue: '-6px'}], position: 2747, duration: 253 },
                { id: "eid1984", tween: [ "style", "${_f1b_bein_l}", "top", '-20px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid1985", tween: [ "style", "${_f1b_bein_l}", "top", '0px', { fromValue: '-20px'}], position: 246, duration: 241 },
                { id: "eid1986", tween: [ "style", "${_f1b_bein_l}", "top", '26px', { fromValue: '0px'}], position: 487, duration: 252 },
                { id: "eid1987", tween: [ "style", "${_f1b_bein_l}", "top", '0px', { fromValue: '26px'}], position: 739, duration: 247 },
                { id: "eid1988", tween: [ "style", "${_f1b_bein_l}", "top", '-20px', { fromValue: '0px'}], position: 986, duration: 246 },
                { id: "eid1989", tween: [ "style", "${_f1b_bein_l}", "top", '0px', { fromValue: '-20px'}], position: 1232, duration: 253 },
                { id: "eid1990", tween: [ "style", "${_f1b_bein_l}", "top", '29px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid1991", tween: [ "style", "${_f1b_bein_l}", "top", '0px', { fromValue: '29px'}], position: 1738, duration: 238 },
                { id: "eid2235", tween: [ "style", "${_f1b_bein_l}", "top", '-20px', { fromValue: '0px'}], position: 1990, duration: 252 },
                { id: "eid2236", tween: [ "style", "${_f1b_bein_l}", "top", '0px', { fromValue: '-20px'}], position: 2242, duration: 253 },
                { id: "eid2237", tween: [ "style", "${_f1b_bein_l}", "top", '29px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid2238", tween: [ "style", "${_f1b_bein_l}", "top", '0px', { fromValue: '29px'}], position: 2747, duration: 253 },
                { id: "eid2361", tween: [ "style", "${_f1b_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2362", tween: [ "style", "${_f1b_corpus}", "top", '0px', { fromValue: '0px'}], position: 986, duration: 0 },
                { id: "eid2363", tween: [ "style", "${_f1b_corpus}", "top", '0px', { fromValue: '0px'}], position: 1976, duration: 0 },
                { id: "eid2376", tween: [ "style", "${_f1b_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2377", tween: [ "style", "${_f1b_corpus}", "left", '0px', { fromValue: '0px'}], position: 986, duration: 0 },
                { id: "eid2378", tween: [ "style", "${_f1b_corpus}", "left", '0px', { fromValue: '0px'}], position: 1976, duration: 0 },
                { id: "eid2333", tween: [ "transform", "${_f1b_bein_r}", "scaleX", '0.96', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid2334", tween: [ "transform", "${_f1b_bein_r}", "scaleX", '1.03', { fromValue: '0.96'}], position: 246, duration: 493 },
                { id: "eid2335", tween: [ "transform", "${_f1b_bein_r}", "scaleX", '0.96', { fromValue: '1.03'}], position: 739, duration: 493 },
                { id: "eid2336", tween: [ "transform", "${_f1b_bein_r}", "scaleX", '1.03', { fromValue: '0.96'}], position: 1233, duration: 505 },
                { id: "eid2337", tween: [ "transform", "${_f1b_bein_r}", "scaleX", '0.96', { fromValue: '1.03'}], position: 1738, duration: 505 },
                { id: "eid2338", tween: [ "transform", "${_f1b_bein_r}", "scaleX", '1.03', { fromValue: '0.96'}], position: 2243, duration: 505 },
                { id: "eid2339", tween: [ "transform", "${_f1b_bein_r}", "scaleX", '1', { fromValue: '1.03'}], position: 2748, duration: 252 },
                { id: "eid2340", tween: [ "style", "${_f1b_bein_r}", "opacity", '0.8', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid2341", tween: [ "style", "${_f1b_bein_r}", "opacity", '1', { fromValue: '0.8'}], position: 246, duration: 247 },
                { id: "eid2342", tween: [ "style", "${_f1b_bein_r}", "opacity", '1', { fromValue: '1'}], position: 739, duration: 0 },
                { id: "eid2343", tween: [ "style", "${_f1b_bein_r}", "opacity", '0.8', { fromValue: '1'}], position: 986, duration: 247 },
                { id: "eid2344", tween: [ "style", "${_f1b_bein_r}", "opacity", '1', { fromValue: '0.8'}], position: 1233, duration: 252 },
                { id: "eid2345", tween: [ "style", "${_f1b_bein_r}", "opacity", '1', { fromValue: '1'}], position: 1738, duration: 0 },
                { id: "eid2346", tween: [ "style", "${_f1b_bein_r}", "opacity", '0.8', { fromValue: '1'}], position: 1976, duration: 267 },
                { id: "eid2347", tween: [ "style", "${_f1b_bein_r}", "opacity", '1', { fromValue: '0.8'}], position: 2243, duration: 252 },
                { id: "eid2348", tween: [ "style", "${_f1b_bein_r}", "opacity", '1', { fromValue: '1'}], position: 2748, duration: 0 },
                { id: "eid2364", tween: [ "transform", "${_f1b_corpus}", "skewY", '0.5deg', { fromValue: '0deg'}], position: 0, duration: 246 },
                { id: "eid2365", tween: [ "transform", "${_f1b_corpus}", "skewY", '0deg', { fromValue: '0.5deg'}], position: 246, duration: 241 },
                { id: "eid2366", tween: [ "transform", "${_f1b_corpus}", "skewY", '-0.5deg', { fromValue: '0deg'}], position: 493, duration: 246 },
                { id: "eid2367", tween: [ "transform", "${_f1b_corpus}", "skewY", '0deg', { fromValue: '-0.5deg'}], position: 739, duration: 247 },
                { id: "eid2368", tween: [ "transform", "${_f1b_corpus}", "skewY", '0.5deg', { fromValue: '0deg'}], position: 986, duration: 246 },
                { id: "eid2369", tween: [ "transform", "${_f1b_corpus}", "skewY", '0deg', { fromValue: '0.5deg'}], position: 1232, duration: 253 },
                { id: "eid2370", tween: [ "transform", "${_f1b_corpus}", "skewY", '-0.5deg', { fromValue: '0deg'}], position: 1485, duration: 253 },
                { id: "eid2371", tween: [ "transform", "${_f1b_corpus}", "skewY", '0deg', { fromValue: '-0.5deg'}], position: 1738, duration: 238 },
                { id: "eid2372", tween: [ "transform", "${_f1b_corpus}", "skewY", '0.5deg', { fromValue: '0deg'}], position: 1990, duration: 252 },
                { id: "eid2373", tween: [ "transform", "${_f1b_corpus}", "skewY", '0deg', { fromValue: '0.5deg'}], position: 2242, duration: 253 },
                { id: "eid2374", tween: [ "transform", "${_f1b_corpus}", "skewY", '-0.5deg', { fromValue: '0deg'}], position: 2495, duration: 252 },
                { id: "eid2375", tween: [ "transform", "${_f1b_corpus}", "skewY", '0deg', { fromValue: '-0.5deg'}], position: 2747, duration: 253 },
                { id: "eid2253", tween: [ "transform", "${_f1b_bein_l}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid2254", tween: [ "transform", "${_f1b_bein_l}", "scaleX", '0.96', { fromValue: '1.03'}], position: 246, duration: 493 },
                { id: "eid2255", tween: [ "transform", "${_f1b_bein_l}", "scaleX", '1.03', { fromValue: '0.96'}], position: 739, duration: 493 },
                { id: "eid2256", tween: [ "transform", "${_f1b_bein_l}", "scaleX", '0.96', { fromValue: '1.03'}], position: 1233, duration: 505 },
                { id: "eid2257", tween: [ "transform", "${_f1b_bein_l}", "scaleX", '1.03', { fromValue: '0.96'}], position: 1738, duration: 505 },
                { id: "eid2258", tween: [ "transform", "${_f1b_bein_l}", "scaleX", '0.96', { fromValue: '1.03'}], position: 2243, duration: 505 },
                { id: "eid2259", tween: [ "transform", "${_f1b_bein_l}", "scaleX", '1', { fromValue: '0.96'}], position: 2748, duration: 252 },
                { id: "eid2379", tween: [ "transform", "${_f1b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2380", tween: [ "transform", "${_f1b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 986, duration: 0 },
                { id: "eid2381", tween: [ "transform", "${_f1b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1976, duration: 0 },
                { id: "eid2246", tween: [ "transform", "${_f1b_bein_l}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 246 },
                { id: "eid2247", tween: [ "transform", "${_f1b_bein_l}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 246, duration: 493 },
                { id: "eid2248", tween: [ "transform", "${_f1b_bein_l}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 739, duration: 493 },
                { id: "eid2249", tween: [ "transform", "${_f1b_bein_l}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1233, duration: 505 },
                { id: "eid2250", tween: [ "transform", "${_f1b_bein_l}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1738, duration: 505 },
                { id: "eid2251", tween: [ "transform", "${_f1b_bein_l}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2243, duration: 505 },
                { id: "eid2252", tween: [ "transform", "${_f1b_bein_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2748, duration: 252 },
                { id: "eid2260", tween: [ "style", "${_f1b_bein_l}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2261", tween: [ "style", "${_f1b_bein_l}", "opacity", '1', { fromValue: '1'}], position: 246, duration: 0 },
                { id: "eid2262", tween: [ "style", "${_f1b_bein_l}", "opacity", '0.8', { fromValue: '1'}], position: 493, duration: 246 },
                { id: "eid2263", tween: [ "style", "${_f1b_bein_l}", "opacity", '1', { fromValue: '0.8'}], position: 739, duration: 247 },
                { id: "eid2264", tween: [ "style", "${_f1b_bein_l}", "opacity", '1', { fromValue: '1'}], position: 1233, duration: 0 },
                { id: "eid2265", tween: [ "style", "${_f1b_bein_l}", "opacity", '0.8', { fromValue: '1'}], position: 1485, duration: 253 },
                { id: "eid2266", tween: [ "style", "${_f1b_bein_l}", "opacity", '1', { fromValue: '0.8'}], position: 1738, duration: 238 },
                { id: "eid2267", tween: [ "style", "${_f1b_bein_l}", "opacity", '1', { fromValue: '1'}], position: 2243, duration: 0 },
                { id: "eid2268", tween: [ "style", "${_f1b_bein_l}", "opacity", '0.8', { fromValue: '1'}], position: 2495, duration: 253 },
                { id: "eid2269", tween: [ "style", "${_f1b_bein_l}", "opacity", '1', { fromValue: '0.8'}], position: 2748, duration: 252 },
                { id: "eid2326", tween: [ "transform", "${_f1b_bein_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 246 },
                { id: "eid2327", tween: [ "transform", "${_f1b_bein_r}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 246, duration: 493 },
                { id: "eid2328", tween: [ "transform", "${_f1b_bein_r}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 739, duration: 493 },
                { id: "eid2329", tween: [ "transform", "${_f1b_bein_r}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1233, duration: 505 },
                { id: "eid2330", tween: [ "transform", "${_f1b_bein_r}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1738, duration: 505 },
                { id: "eid2331", tween: [ "transform", "${_f1b_bein_r}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 2243, duration: 505 },
                { id: "eid2332", tween: [ "transform", "${_f1b_bein_r}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2748, duration: 252 },
                { id: "eid2239", tween: [ "transform", "${_f1b_bein_l}", "scaleY", '1.03', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid2240", tween: [ "transform", "${_f1b_bein_l}", "scaleY", '0.96', { fromValue: '1.03'}], position: 246, duration: 493 },
                { id: "eid2241", tween: [ "transform", "${_f1b_bein_l}", "scaleY", '1.03', { fromValue: '0.96'}], position: 739, duration: 493 },
                { id: "eid2242", tween: [ "transform", "${_f1b_bein_l}", "scaleY", '0.96', { fromValue: '1.03'}], position: 1233, duration: 505 },
                { id: "eid2243", tween: [ "transform", "${_f1b_bein_l}", "scaleY", '1.03', { fromValue: '0.96'}], position: 1738, duration: 505 },
                { id: "eid2244", tween: [ "transform", "${_f1b_bein_l}", "scaleY", '0.96', { fromValue: '1.03'}], position: 2243, duration: 505 },
                { id: "eid2245", tween: [ "transform", "${_f1b_bein_l}", "scaleY", '1', { fromValue: '0.96'}], position: 2748, duration: 252 },
                { id: "eid2306", tween: [ "style", "${_f1b_bein_r}", "top", '15px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid2307", tween: [ "style", "${_f1b_bein_r}", "top", '-1px', { fromValue: '15px'}], position: 246, duration: 241 },
                { id: "eid2308", tween: [ "style", "${_f1b_bein_r}", "top", '-12px', { fromValue: '0px'}], position: 493, duration: 246 },
                { id: "eid2309", tween: [ "style", "${_f1b_bein_r}", "top", '0px', { fromValue: '-12px'}], position: 739, duration: 247 },
                { id: "eid2310", tween: [ "style", "${_f1b_bein_r}", "top", '17px', { fromValue: '0px'}], position: 986, duration: 247 },
                { id: "eid2311", tween: [ "style", "${_f1b_bein_r}", "top", '0px', { fromValue: '17px'}], position: 1233, duration: 252 },
                { id: "eid2312", tween: [ "style", "${_f1b_bein_r}", "top", '-11px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid2313", tween: [ "style", "${_f1b_bein_r}", "top", '0px', { fromValue: '-11px'}], position: 1738, duration: 238 },
                { id: "eid2314", tween: [ "style", "${_f1b_bein_r}", "top", '5px', { fromValue: '0px'}], position: 1990, duration: 50 },
                { id: "eid2315", tween: [ "style", "${_f1b_bein_r}", "top", '15px', { fromValue: '5px'}], position: 2040, duration: 202 },
                { id: "eid2316", tween: [ "style", "${_f1b_bein_r}", "top", '0px', { fromValue: '15px'}], position: 2242, duration: 253 },
                { id: "eid2317", tween: [ "style", "${_f1b_bein_r}", "top", '-11px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid2318", tween: [ "style", "${_f1b_bein_r}", "top", '0px', { fromValue: '-11px'}], position: 2747, duration: 253 },
                { id: "eid2319", tween: [ "transform", "${_f1b_bein_r}", "scaleY", '0.96', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid2320", tween: [ "transform", "${_f1b_bein_r}", "scaleY", '1.03', { fromValue: '0.96'}], position: 246, duration: 493 },
                { id: "eid2321", tween: [ "transform", "${_f1b_bein_r}", "scaleY", '0.96', { fromValue: '1.03'}], position: 739, duration: 493 },
                { id: "eid2322", tween: [ "transform", "${_f1b_bein_r}", "scaleY", '1.03', { fromValue: '0.96'}], position: 1233, duration: 505 },
                { id: "eid2323", tween: [ "transform", "${_f1b_bein_r}", "scaleY", '0.96', { fromValue: '1.03'}], position: 1738, duration: 505 },
                { id: "eid2324", tween: [ "transform", "${_f1b_bein_r}", "scaleY", '1.03', { fromValue: '0.96'}], position: 2243, duration: 505 },
                { id: "eid2325", tween: [ "transform", "${_f1b_bein_r}", "scaleY", '1', { fromValue: '1.03'}], position: 2748, duration: 252 },
                { id: "eid2349", tween: [ "style", "${_f1b_bein_r}", "left", '-12px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid2350", tween: [ "style", "${_f1b_bein_r}", "left", '0px', { fromValue: '-12px'}], position: 246, duration: 241 },
                { id: "eid2351", tween: [ "style", "${_f1b_bein_r}", "left", '14px', { fromValue: '0px'}], position: 493, duration: 246 },
                { id: "eid2352", tween: [ "style", "${_f1b_bein_r}", "left", '0px', { fromValue: '14px'}], position: 739, duration: 247 },
                { id: "eid2353", tween: [ "style", "${_f1b_bein_r}", "left", '-7px', { fromValue: '0px'}], position: 986, duration: 247 },
                { id: "eid2354", tween: [ "style", "${_f1b_bein_r}", "left", '0px', { fromValue: '-7px'}], position: 1233, duration: 252 },
                { id: "eid2355", tween: [ "style", "${_f1b_bein_r}", "left", '18px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid2356", tween: [ "style", "${_f1b_bein_r}", "left", '0px', { fromValue: '18px'}], position: 1738, duration: 238 },
                { id: "eid2357", tween: [ "style", "${_f1b_bein_r}", "left", '-6px', { fromValue: '0px'}], position: 1990, duration: 252 },
                { id: "eid2358", tween: [ "style", "${_f1b_bein_r}", "left", '0px', { fromValue: '-6px'}], position: 2242, duration: 253 },
                { id: "eid2359", tween: [ "style", "${_f1b_bein_r}", "left", '17px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid2360", tween: [ "style", "${_f1b_bein_r}", "left", '0px', { fromValue: '17px'}], position: 2747, duration: 253 }            ]
        }
    }
},
"sym_f1a": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'f1a_bein_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f1a_bein_l.svg', '0px', '0px']
                },
                {
                    id: 'f1a_bein_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f1a_bein_r.svg', '0px', '0px']
                },
                {
                    id: 'f1a_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/f1a_corpus.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_f1a_bein_r}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_f1a_corpus}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "left", '0px'],
                ["transform", "skewY", '0deg']
            ],
            "${_f1a_bein_l}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            labels: {
                "oo_f1a": 0
            },
            timeline: [
                { id: "eid4373", tween: [ "style", "${_f1a_bein_r}", "opacity", '0.8', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid4374", tween: [ "style", "${_f1a_bein_r}", "opacity", '1', { fromValue: '0.8'}], position: 246, duration: 247 },
                { id: "eid4375", tween: [ "style", "${_f1a_bein_r}", "opacity", '1', { fromValue: '1'}], position: 739, duration: 0 },
                { id: "eid4376", tween: [ "style", "${_f1a_bein_r}", "opacity", '0.8', { fromValue: '1'}], position: 986, duration: 247 },
                { id: "eid4377", tween: [ "style", "${_f1a_bein_r}", "opacity", '1', { fromValue: '0.8'}], position: 1233, duration: 252 },
                { id: "eid4378", tween: [ "style", "${_f1a_bein_r}", "opacity", '1', { fromValue: '1'}], position: 1738, duration: 0 },
                { id: "eid4379", tween: [ "style", "${_f1a_bein_r}", "opacity", '0.8', { fromValue: '1'}], position: 1976, duration: 267 },
                { id: "eid4380", tween: [ "style", "${_f1a_bein_r}", "opacity", '1', { fromValue: '0.8'}], position: 2243, duration: 252 },
                { id: "eid4381", tween: [ "style", "${_f1a_bein_r}", "opacity", '1', { fromValue: '1'}], position: 2748, duration: 0 },
                { id: "eid4382", tween: [ "style", "${_f1a_bein_r}", "opacity", '1', { fromValue: '1'}], position: 3000, duration: 0 },
                { id: "eid4359", tween: [ "transform", "${_f1a_bein_r}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 246 },
                { id: "eid4360", tween: [ "transform", "${_f1a_bein_r}", "rotateZ", '-1deg', { fromValue: '1deg'}], position: 246, duration: 493 },
                { id: "eid4361", tween: [ "transform", "${_f1a_bein_r}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 739, duration: 493 },
                { id: "eid4362", tween: [ "transform", "${_f1a_bein_r}", "rotateZ", '-1deg', { fromValue: '1deg'}], position: 1233, duration: 505 },
                { id: "eid4363", tween: [ "transform", "${_f1a_bein_r}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 1738, duration: 505 },
                { id: "eid4364", tween: [ "transform", "${_f1a_bein_r}", "rotateZ", '-1deg', { fromValue: '1deg'}], position: 2243, duration: 505 },
                { id: "eid4365", tween: [ "transform", "${_f1a_bein_r}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 2748, duration: 252 },
                { id: "eid4421", tween: [ "transform", "${_f1a_bein_l}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid4422", tween: [ "transform", "${_f1a_bein_l}", "scaleX", '0.96', { fromValue: '1.03'}], position: 246, duration: 493 },
                { id: "eid4423", tween: [ "transform", "${_f1a_bein_l}", "scaleX", '1.03', { fromValue: '0.96'}], position: 739, duration: 493 },
                { id: "eid4424", tween: [ "transform", "${_f1a_bein_l}", "scaleX", '0.96', { fromValue: '1.03'}], position: 1233, duration: 505 },
                { id: "eid4425", tween: [ "transform", "${_f1a_bein_l}", "scaleX", '1.03', { fromValue: '0.96'}], position: 1738, duration: 505 },
                { id: "eid4426", tween: [ "transform", "${_f1a_bein_l}", "scaleX", '0.96', { fromValue: '1.03'}], position: 2243, duration: 505 },
                { id: "eid4427", tween: [ "transform", "${_f1a_bein_l}", "scaleX", '1', { fromValue: '0.96'}], position: 2748, duration: 252 },
                { id: "eid4395", tween: [ "style", "${_f1a_bein_l}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid4396", tween: [ "style", "${_f1a_bein_l}", "top", '0px', { fromValue: '10px'}], position: 246, duration: 241 },
                { id: "eid4397", tween: [ "style", "${_f1a_bein_l}", "top", '-13px', { fromValue: '0px'}], position: 493, duration: 246 },
                { id: "eid4398", tween: [ "style", "${_f1a_bein_l}", "top", '0px', { fromValue: '-13px'}], position: 739, duration: 247 },
                { id: "eid4399", tween: [ "style", "${_f1a_bein_l}", "top", '10px', { fromValue: '0px'}], position: 986, duration: 247 },
                { id: "eid4400", tween: [ "style", "${_f1a_bein_l}", "top", '0px', { fromValue: '10px'}], position: 1233, duration: 252 },
                { id: "eid4401", tween: [ "style", "${_f1a_bein_l}", "top", '-13px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid4402", tween: [ "style", "${_f1a_bein_l}", "top", '0px', { fromValue: '-13px'}], position: 1738, duration: 238 },
                { id: "eid4403", tween: [ "style", "${_f1a_bein_l}", "top", '10px', { fromValue: '0px'}], position: 1990, duration: 252 },
                { id: "eid4404", tween: [ "style", "${_f1a_bein_l}", "top", '0px', { fromValue: '10px'}], position: 2243, duration: 252 },
                { id: "eid4405", tween: [ "style", "${_f1a_bein_l}", "top", '-13px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid4406", tween: [ "style", "${_f1a_bein_l}", "top", '0px', { fromValue: '-13px'}], position: 2748, duration: 252 },
                { id: "eid4428", tween: [ "style", "${_f1a_bein_l}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid4429", tween: [ "style", "${_f1a_bein_l}", "opacity", '1', { fromValue: '1'}], position: 246, duration: 0 },
                { id: "eid4430", tween: [ "style", "${_f1a_bein_l}", "opacity", '0.8', { fromValue: '1'}], position: 493, duration: 246 },
                { id: "eid4431", tween: [ "style", "${_f1a_bein_l}", "opacity", '1', { fromValue: '0.8'}], position: 739, duration: 247 },
                { id: "eid4432", tween: [ "style", "${_f1a_bein_l}", "opacity", '1', { fromValue: '1'}], position: 1233, duration: 0 },
                { id: "eid4433", tween: [ "style", "${_f1a_bein_l}", "opacity", '0.8', { fromValue: '1'}], position: 1485, duration: 253 },
                { id: "eid4434", tween: [ "style", "${_f1a_bein_l}", "opacity", '1', { fromValue: '0.8'}], position: 1738, duration: 238 },
                { id: "eid4435", tween: [ "style", "${_f1a_bein_l}", "opacity", '1', { fromValue: '1'}], position: 2243, duration: 0 },
                { id: "eid4436", tween: [ "style", "${_f1a_bein_l}", "opacity", '0.8', { fromValue: '1'}], position: 2495, duration: 253 },
                { id: "eid4437", tween: [ "style", "${_f1a_bein_l}", "opacity", '1', { fromValue: '0.8'}], position: 2748, duration: 252 },
                { id: "eid4322", tween: [ "transform", "${_f1a_corpus}", "skewY", '0.5deg', { fromValue: '0deg'}], position: 0, duration: 246 },
                { id: "eid4323", tween: [ "transform", "${_f1a_corpus}", "skewY", '0deg', { fromValue: '0.5deg'}], position: 246, duration: 241 },
                { id: "eid4324", tween: [ "transform", "${_f1a_corpus}", "skewY", '-0.5deg', { fromValue: '0deg'}], position: 493, duration: 246 },
                { id: "eid4325", tween: [ "transform", "${_f1a_corpus}", "skewY", '0deg', { fromValue: '-0.5deg'}], position: 739, duration: 247 },
                { id: "eid4326", tween: [ "transform", "${_f1a_corpus}", "skewY", '0.5deg', { fromValue: '0deg'}], position: 986, duration: 247 },
                { id: "eid4327", tween: [ "transform", "${_f1a_corpus}", "skewY", '0deg', { fromValue: '0.5deg'}], position: 1233, duration: 252 },
                { id: "eid4328", tween: [ "transform", "${_f1a_corpus}", "skewY", '-0.5deg', { fromValue: '0deg'}], position: 1485, duration: 253 },
                { id: "eid4329", tween: [ "transform", "${_f1a_corpus}", "skewY", '0deg', { fromValue: '-0.5deg'}], position: 1738, duration: 238 },
                { id: "eid4330", tween: [ "transform", "${_f1a_corpus}", "skewY", '0.5deg', { fromValue: '0deg'}], position: 1990, duration: 252 },
                { id: "eid4331", tween: [ "transform", "${_f1a_corpus}", "skewY", '0deg', { fromValue: '0.5deg'}], position: 2243, duration: 252 },
                { id: "eid4332", tween: [ "transform", "${_f1a_corpus}", "skewY", '-0.5deg', { fromValue: '0deg'}], position: 2495, duration: 252 },
                { id: "eid4333", tween: [ "transform", "${_f1a_corpus}", "skewY", '0deg', { fromValue: '-0.5deg'}], position: 2748, duration: 252 },
                { id: "eid4334", tween: [ "style", "${_f1a_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4335", tween: [ "style", "${_f1a_corpus}", "left", '0px', { fromValue: '0px'}], position: 986, duration: 0 },
                { id: "eid4336", tween: [ "style", "${_f1a_corpus}", "left", '0px', { fromValue: '0px'}], position: 1976, duration: 0 },
                { id: "eid4319", tween: [ "style", "${_f1a_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4320", tween: [ "style", "${_f1a_corpus}", "top", '0px', { fromValue: '0px'}], position: 986, duration: 0 },
                { id: "eid4321", tween: [ "style", "${_f1a_corpus}", "top", '0px', { fromValue: '0px'}], position: 1976, duration: 0 },
                { id: "eid4337", tween: [ "transform", "${_f1a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4338", tween: [ "transform", "${_f1a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 986, duration: 0 },
                { id: "eid4339", tween: [ "transform", "${_f1a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1976, duration: 0 },
                { id: "eid4438", tween: [ "style", "${_f1a_bein_l}", "left", '17px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid4439", tween: [ "style", "${_f1a_bein_l}", "left", '0px', { fromValue: '17px'}], position: 246, duration: 241 },
                { id: "eid4440", tween: [ "style", "${_f1a_bein_l}", "left", '-12px', { fromValue: '0px'}], position: 493, duration: 246 },
                { id: "eid4441", tween: [ "style", "${_f1a_bein_l}", "left", '0px', { fromValue: '-12px'}], position: 739, duration: 247 },
                { id: "eid4442", tween: [ "style", "${_f1a_bein_l}", "left", '17px', { fromValue: '0px'}], position: 986, duration: 247 },
                { id: "eid4443", tween: [ "style", "${_f1a_bein_l}", "left", '0px', { fromValue: '17px'}], position: 1233, duration: 252 },
                { id: "eid4444", tween: [ "style", "${_f1a_bein_l}", "left", '-12px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid4445", tween: [ "style", "${_f1a_bein_l}", "left", '0px', { fromValue: '-12px'}], position: 1738, duration: 238 },
                { id: "eid4446", tween: [ "style", "${_f1a_bein_l}", "left", '17px', { fromValue: '0px'}], position: 1990, duration: 252 },
                { id: "eid4447", tween: [ "style", "${_f1a_bein_l}", "left", '0px', { fromValue: '17px'}], position: 2243, duration: 252 },
                { id: "eid4448", tween: [ "style", "${_f1a_bein_l}", "left", '-12px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid4449", tween: [ "style", "${_f1a_bein_l}", "left", '0px', { fromValue: '-12px'}], position: 2748, duration: 252 },
                { id: "eid4383", tween: [ "style", "${_f1a_bein_r}", "left", '-12px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid4384", tween: [ "style", "${_f1a_bein_r}", "left", '0px', { fromValue: '-12px'}], position: 246, duration: 241 },
                { id: "eid4385", tween: [ "style", "${_f1a_bein_r}", "left", '18px', { fromValue: '0px'}], position: 493, duration: 246 },
                { id: "eid4386", tween: [ "style", "${_f1a_bein_r}", "left", '0px', { fromValue: '18px'}], position: 739, duration: 247 },
                { id: "eid4387", tween: [ "style", "${_f1a_bein_r}", "left", '-12px', { fromValue: '0px'}], position: 986, duration: 247 },
                { id: "eid4388", tween: [ "style", "${_f1a_bein_r}", "left", '0px', { fromValue: '-12px'}], position: 1233, duration: 252 },
                { id: "eid4389", tween: [ "style", "${_f1a_bein_r}", "left", '18px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid4390", tween: [ "style", "${_f1a_bein_r}", "left", '0px', { fromValue: '18px'}], position: 1738, duration: 238 },
                { id: "eid4391", tween: [ "style", "${_f1a_bein_r}", "left", '-12px', { fromValue: '0px'}], position: 1990, duration: 252 },
                { id: "eid4392", tween: [ "style", "${_f1a_bein_r}", "left", '0px', { fromValue: '-12px'}], position: 2243, duration: 252 },
                { id: "eid4393", tween: [ "style", "${_f1a_bein_r}", "left", '18px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid4394", tween: [ "style", "${_f1a_bein_r}", "left", '0px', { fromValue: '18px'}], position: 2748, duration: 252 },
                { id: "eid4366", tween: [ "transform", "${_f1a_bein_r}", "scaleX", '0.96', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid4367", tween: [ "transform", "${_f1a_bein_r}", "scaleX", '1.03', { fromValue: '0.96'}], position: 246, duration: 493 },
                { id: "eid4368", tween: [ "transform", "${_f1a_bein_r}", "scaleX", '0.96', { fromValue: '1.03'}], position: 739, duration: 493 },
                { id: "eid4369", tween: [ "transform", "${_f1a_bein_r}", "scaleX", '1.03', { fromValue: '0.96'}], position: 1233, duration: 505 },
                { id: "eid4370", tween: [ "transform", "${_f1a_bein_r}", "scaleX", '0.96', { fromValue: '1.03'}], position: 1738, duration: 505 },
                { id: "eid4371", tween: [ "transform", "${_f1a_bein_r}", "scaleX", '1.03', { fromValue: '0.96'}], position: 2243, duration: 505 },
                { id: "eid4372", tween: [ "transform", "${_f1a_bein_r}", "scaleX", '1', { fromValue: '1.03'}], position: 2748, duration: 252 },
                { id: "eid4352", tween: [ "transform", "${_f1a_bein_r}", "scaleY", '0.96', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid4353", tween: [ "transform", "${_f1a_bein_r}", "scaleY", '1.03', { fromValue: '0.96'}], position: 246, duration: 493 },
                { id: "eid4354", tween: [ "transform", "${_f1a_bein_r}", "scaleY", '0.96', { fromValue: '1.03'}], position: 739, duration: 493 },
                { id: "eid4355", tween: [ "transform", "${_f1a_bein_r}", "scaleY", '1.03', { fromValue: '0.96'}], position: 1233, duration: 505 },
                { id: "eid4356", tween: [ "transform", "${_f1a_bein_r}", "scaleY", '0.96', { fromValue: '1.03'}], position: 1738, duration: 505 },
                { id: "eid4357", tween: [ "transform", "${_f1a_bein_r}", "scaleY", '1.03', { fromValue: '0.96'}], position: 2243, duration: 505 },
                { id: "eid4358", tween: [ "transform", "${_f1a_bein_r}", "scaleY", '1', { fromValue: '1.03'}], position: 2748, duration: 252 },
                { id: "eid4414", tween: [ "transform", "${_f1a_bein_l}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 246 },
                { id: "eid4415", tween: [ "transform", "${_f1a_bein_l}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 246, duration: 493 },
                { id: "eid4416", tween: [ "transform", "${_f1a_bein_l}", "rotateZ", '-1deg', { fromValue: '1deg'}], position: 739, duration: 493 },
                { id: "eid4417", tween: [ "transform", "${_f1a_bein_l}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 1233, duration: 505 },
                { id: "eid4418", tween: [ "transform", "${_f1a_bein_l}", "rotateZ", '-1deg', { fromValue: '1deg'}], position: 1738, duration: 505 },
                { id: "eid4419", tween: [ "transform", "${_f1a_bein_l}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 2243, duration: 505 },
                { id: "eid4420", tween: [ "transform", "${_f1a_bein_l}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2748, duration: 252 },
                { id: "eid4340", tween: [ "style", "${_f1a_bein_r}", "top", '-25px', { fromValue: '0px'}], position: 0, duration: 246 },
                { id: "eid4341", tween: [ "style", "${_f1a_bein_r}", "top", '0px', { fromValue: '-25px'}], position: 246, duration: 241 },
                { id: "eid4342", tween: [ "style", "${_f1a_bein_r}", "top", '20px', { fromValue: '0px'}], position: 493, duration: 246 },
                { id: "eid4343", tween: [ "style", "${_f1a_bein_r}", "top", '0px', { fromValue: '20px'}], position: 739, duration: 247 },
                { id: "eid4344", tween: [ "style", "${_f1a_bein_r}", "top", '-25px', { fromValue: '0px'}], position: 986, duration: 247 },
                { id: "eid4345", tween: [ "style", "${_f1a_bein_r}", "top", '0px', { fromValue: '-25px'}], position: 1233, duration: 252 },
                { id: "eid4346", tween: [ "style", "${_f1a_bein_r}", "top", '25px', { fromValue: '0px'}], position: 1485, duration: 253 },
                { id: "eid4347", tween: [ "style", "${_f1a_bein_r}", "top", '0px', { fromValue: '25px'}], position: 1738, duration: 238 },
                { id: "eid4348", tween: [ "style", "${_f1a_bein_r}", "top", '-25px', { fromValue: '0px'}], position: 1990, duration: 252 },
                { id: "eid4349", tween: [ "style", "${_f1a_bein_r}", "top", '0px', { fromValue: '-25px'}], position: 2243, duration: 252 },
                { id: "eid4350", tween: [ "style", "${_f1a_bein_r}", "top", '20px', { fromValue: '0px'}], position: 2495, duration: 252 },
                { id: "eid4351", tween: [ "style", "${_f1a_bein_r}", "top", '0px', { fromValue: '20px'}], position: 2748, duration: 252 },
                { id: "eid4407", tween: [ "transform", "${_f1a_bein_l}", "scaleY", '1.03', { fromValue: '1'}], position: 0, duration: 246 },
                { id: "eid4408", tween: [ "transform", "${_f1a_bein_l}", "scaleY", '0.96', { fromValue: '1.03'}], position: 246, duration: 493 },
                { id: "eid4409", tween: [ "transform", "${_f1a_bein_l}", "scaleY", '1.03', { fromValue: '0.96'}], position: 739, duration: 493 },
                { id: "eid4410", tween: [ "transform", "${_f1a_bein_l}", "scaleY", '0.96', { fromValue: '1.03'}], position: 1233, duration: 505 },
                { id: "eid4411", tween: [ "transform", "${_f1a_bein_l}", "scaleY", '1.03', { fromValue: '0.96'}], position: 1738, duration: 505 },
                { id: "eid4412", tween: [ "transform", "${_f1a_bein_l}", "scaleY", '0.96', { fromValue: '1.03'}], position: 2243, duration: 505 },
                { id: "eid4413", tween: [ "transform", "${_f1a_bein_l}", "scaleY", '1', { fromValue: '0.96'}], position: 2748, duration: 252 }            ]
        }
    }
},
"sym_all": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ftxta',
                    type: 'image',
                    rect: ['0px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ftxta.svg', '0px', '0px']
                },
                {
                    id: 'ftxtb',
                    type: 'image',
                    rect: ['0px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ftxtb.svg', '0px', '0px']
                },
                {
                    id: 'sym_f1a',
                    type: 'rect',
                    rect: ['33px', '1px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_f1b',
                    type: 'rect',
                    rect: ['33px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_f1b',
                symbolName: 'sym_f1b',
                autoPlay: {

               }
            },
            {
                id: 'sym_f1a',
                symbolName: 'sym_f1a',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_f1a}": [
                ["style", "top", '0px'],
                ["style", "left", '3068px']
            ],
            "${_ftxta}": [
                ["style", "left", '0px'],
                ["style", "top", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '10000px']
            ],
            "${_sym_f1b}": [
                ["style", "top", '0px'],
                ["style", "left", '3068px']
            ],
            "${_ftxtb}": [
                ["style", "left", '0px'],
                ["style", "top", '3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid1970", tween: [ "style", "${_sym_f1b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1981", tween: [ "style", "${_sym_f1b}", "top", '-553px', { fromValue: '0px'}], position: 3900, duration: 3100 },
                { id: "eid2413", tween: [ "style", "${_sym_f1b}", "top", '-552px', { fromValue: '-553px'}], position: 7000, duration: 3000 },
                { id: "eid1972", tween: [ "style", "${_sym_f1a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1983", tween: [ "style", "${_sym_f1a}", "top", '551px', { fromValue: '0px'}], position: 3900, duration: 3100 },
                { id: "eid2411", tween: [ "style", "${_sym_f1a}", "top", '552px', { fromValue: '551px'}], position: 7000, duration: 3000 },
                { id: "eid1971", tween: [ "style", "${_sym_f1b}", "left", '3068px', { fromValue: '3068px'}], position: 0, duration: 0 },
                { id: "eid1980", tween: [ "style", "${_sym_f1b}", "left", '5599px', { fromValue: '3068px'}], position: 3900, duration: 3100 },
                { id: "eid2412", tween: [ "style", "${_sym_f1b}", "left", '10000px', { fromValue: '5599px'}], position: 7000, duration: 3000 },
                { id: "eid1973", tween: [ "style", "${_sym_f1a}", "left", '3068px', { fromValue: '3068px'}], position: 0, duration: 0 },
                { id: "eid1982", tween: [ "style", "${_sym_f1a}", "left", '5599px', { fromValue: '3068px'}], position: 3900, duration: 3100 },
                { id: "eid2410", tween: [ "style", "${_sym_f1a}", "left", '10000px', { fromValue: '5599px'}], position: 7000, duration: 3000 }            ]
        }
    }
},
"sym_welleframe": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'sym_welle_1',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_welle_1',
                symbolName: 'sym_welle_1',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_welle_1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"sym_welle_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-1364px', '2048px', '1536px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,80,1.00)']
                },
                {
                    id: 'welle12',
                    type: 'image',
                    rect: ['0', '0', '4096px', '800px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle1.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "top", '-1164px'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
            ],
            "${_welle12}": [
                ["style", "top", '90px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.8']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '2048px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid2416", tween: [ "style", "${_Rectangle2}", "top", '-1164px', { fromValue: '-1164px'}], position: 0, duration: 0 },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1461", tween: [ "style", "${_welle12}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 3500 },
                { id: "eid2426", tween: [ "style", "${_welle12}", "top", '90px', { fromValue: '90px'}], position: 0, duration: 0 },
                { id: "eid2427", tween: [ "style", "${_welle12}", "top", '90px', { fromValue: '90px'}], position: 3500, duration: 0 },
                { id: "eid2399", tween: [ "transform", "${_welle12}", "scaleY", '0.6', { fromValue: '0.8'}], position: 0, duration: 583 },
                { id: "eid1454", tween: [ "transform", "${_welle12}", "scaleY", '0.8', { fromValue: '0.6'}], position: 583, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1455", tween: [ "transform", "${_welle12}", "scaleY", '0.7', { fromValue: '0.8'}], position: 1167, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1456", tween: [ "transform", "${_welle12}", "scaleY", '0.8', { fromValue: '0.7'}], position: 1750, duration: 583, easing: "easeInOutQuad" },
                { id: "eid2401", tween: [ "transform", "${_welle12}", "scaleY", '0.6', { fromValue: '0.8'}], position: 2333, duration: 602 },
                { id: "eid2402", tween: [ "transform", "${_welle12}", "scaleY", '0.8', { fromValue: '0.6'}], position: 2935, duration: 565 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5245403");
