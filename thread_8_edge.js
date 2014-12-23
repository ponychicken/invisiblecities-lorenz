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
                rect: ['0px', '0px','5626px','1536px','auto', 'auto'],
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
                rect: ['1804', '0','auto','auto','auto', 'auto']
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
                ["style", "left", '1804px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '5626px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: false,
            timeline: [
                { id: "eid2243", tween: [ "style", "${_sym_all}", "left", '1304px', { fromValue: '1804px'}], position: 0, duration: 4500 },
                { id: "eid1969", tween: [ "style", "${_sym_welleframe}", "left", '3578px', { fromValue: '0px'}], position: 0, duration: 4500 }            ]
        }
    }
},
"sym_e2b": {
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
                    id: 'e2b_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'e2b_kette',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_kette.svg', '0px', '0px']
                },
                {
                    id: 'e2b_jacke',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_jacke.svg', '0px', '0px']
                },
                {
                    id: 'e2b_hals',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_hals.svg', '0px', '0px']
                },
                {
                    id: 'e2b_fuss_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_fuss_r.svg', '0px', '0px']
                },
                {
                    id: 'e2b_fuss_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_fuss_l.svg', '0px', '0px']
                },
                {
                    id: 'e2b_bein_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_bein_r.svg', '0px', '0px']
                },
                {
                    id: 'e2b_bein_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_bein_l.svg', '0px', '0px']
                },
                {
                    id: 'e2b_augen',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_augen.svg', '0px', '0px']
                },
                {
                    id: 'e2b_arm_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2b_arm_r.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_e2b_fuss_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_jacke}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_arm_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_hals}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_bein_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_fuss_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_e2b_kette}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_augen}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2b_bein_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            labels: {
                "oo_e2b": 0
            },
            timeline: [
                { id: "eid2234", tween: [ "transform", "${_e2b_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2199", tween: [ "style", "${_e2b_fuss_l}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2200", tween: [ "style", "${_e2b_fuss_l}", "top", '0px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2201", tween: [ "style", "${_e2b_fuss_l}", "top", '1px', { fromValue: '0px'}], position: 875, duration: 437 },
                { id: "eid2202", tween: [ "style", "${_e2b_fuss_l}", "top", '0px', { fromValue: '1px'}], position: 1312, duration: 438 },
                { id: "eid2224", tween: [ "style", "${_e2b_jacke}", "left", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2225", tween: [ "style", "${_e2b_jacke}", "left", '-2px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2226", tween: [ "style", "${_e2b_jacke}", "left", '-1px', { fromValue: '-2px'}], position: 875, duration: 437 },
                { id: "eid2227", tween: [ "style", "${_e2b_jacke}", "left", '0px', { fromValue: '-1px'}], position: 1312, duration: 438 },
                { id: "eid2230", tween: [ "style", "${_e2b_kette}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2176", tween: [ "style", "${_e2b_augen}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2177", tween: [ "style", "${_e2b_augen}", "left", '-672px', { fromValue: '0px'}], position: 1312, duration: 0 },
                { id: "eid2178", tween: [ "style", "${_e2b_augen}", "left", '-672px', { fromValue: '-672px'}], position: 1382, duration: 0 },
                { id: "eid2179", tween: [ "style", "${_e2b_augen}", "left", '0px', { fromValue: '-672px'}], position: 1750, duration: 0 },
                { id: "eid2171", tween: [ "style", "${_e2b_augen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2180", tween: [ "transform", "${_e2b_augen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2228", tween: [ "transform", "${_e2b_jacke}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2220", tween: [ "style", "${_e2b_jacke}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2221", tween: [ "style", "${_e2b_jacke}", "top", '0px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2222", tween: [ "style", "${_e2b_jacke}", "top", '1px', { fromValue: '0px'}], position: 875, duration: 437 },
                { id: "eid2223", tween: [ "style", "${_e2b_jacke}", "top", '0px', { fromValue: '1px'}], position: 1312, duration: 438 },
                { id: "eid2203", tween: [ "style", "${_e2b_fuss_l}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2204", tween: [ "style", "${_e2b_fuss_l}", "left", '2px', { fromValue: '1px'}], position: 438, duration: 437 },
                { id: "eid2205", tween: [ "style", "${_e2b_fuss_l}", "left", '1px', { fromValue: '2px'}], position: 875, duration: 437 },
                { id: "eid2206", tween: [ "style", "${_e2b_fuss_l}", "left", '0px', { fromValue: '1px'}], position: 1312, duration: 438 },
                { id: "eid2217", tween: [ "style", "${_e2b_hals}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2229", tween: [ "style", "${_e2b_kette}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2216", tween: [ "transform", "${_e2b_fuss_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2219", tween: [ "transform", "${_e2b_hals}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2212", tween: [ "style", "${_e2b_fuss_r}", "left", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2213", tween: [ "style", "${_e2b_fuss_r}", "left", '-2px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2214", tween: [ "style", "${_e2b_fuss_r}", "left", '-1px', { fromValue: '-2px'}], position: 875, duration: 437 },
                { id: "eid2215", tween: [ "style", "${_e2b_fuss_r}", "left", '0px', { fromValue: '-1px'}], position: 1312, duration: 438 },
                { id: "eid2207", tween: [ "transform", "${_e2b_fuss_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2160", tween: [ "style", "${_e2b_arm_r}", "top", '-24px', { fromValue: '0px'}], position: 0, duration: 668 },
                { id: "eid2161", tween: [ "style", "${_e2b_arm_r}", "top", '0px', { fromValue: '-24px'}], position: 668, duration: 414 },
                { id: "eid2162", tween: [ "style", "${_e2b_arm_r}", "top", '-24px', { fromValue: '0px'}], position: 1082, duration: 449 },
                { id: "eid2163", tween: [ "style", "${_e2b_arm_r}", "top", '0px', { fromValue: '-24px'}], position: 1531, duration: 219 },
                { id: "eid2194", tween: [ "style", "${_e2b_bein_r}", "left", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2195", tween: [ "style", "${_e2b_bein_r}", "left", '-2px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2196", tween: [ "style", "${_e2b_bein_r}", "left", '-1px', { fromValue: '-2px'}], position: 875, duration: 437 },
                { id: "eid2197", tween: [ "style", "${_e2b_bein_r}", "left", '0px', { fromValue: '-1px'}], position: 1312, duration: 438 },
                { id: "eid2218", tween: [ "style", "${_e2b_hals}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2190", tween: [ "style", "${_e2b_bein_r}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2191", tween: [ "style", "${_e2b_bein_r}", "top", '0px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2192", tween: [ "style", "${_e2b_bein_r}", "top", '1px', { fromValue: '0px'}], position: 875, duration: 437 },
                { id: "eid2193", tween: [ "style", "${_e2b_bein_r}", "top", '0px', { fromValue: '1px'}], position: 1312, duration: 438 },
                { id: "eid2181", tween: [ "style", "${_e2b_bein_l}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2182", tween: [ "style", "${_e2b_bein_l}", "top", '0px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2183", tween: [ "style", "${_e2b_bein_l}", "top", '1px', { fromValue: '0px'}], position: 875, duration: 437 },
                { id: "eid2184", tween: [ "style", "${_e2b_bein_l}", "top", '0px', { fromValue: '1px'}], position: 1312, duration: 438 },
                { id: "eid2232", tween: [ "style", "${_e2b_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2198", tween: [ "transform", "${_e2b_bein_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2189", tween: [ "transform", "${_e2b_bein_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2233", tween: [ "style", "${_e2b_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2172", tween: [ "transform", "${_e2b_augen}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid2173", tween: [ "transform", "${_e2b_augen}", "scaleX", '0.2', { fromValue: '1'}], position: 1312, duration: 0 },
                { id: "eid2174", tween: [ "transform", "${_e2b_augen}", "scaleX", '0.2', { fromValue: '0.2'}], position: 1382, duration: 0 },
                { id: "eid2175", tween: [ "transform", "${_e2b_augen}", "scaleX", '1', { fromValue: '0.2'}], position: 1750, duration: 0 },
                { id: "eid2167", tween: [ "transform", "${_e2b_arm_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 668 },
                { id: "eid2168", tween: [ "transform", "${_e2b_arm_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 668, duration: 414 },
                { id: "eid2169", tween: [ "transform", "${_e2b_arm_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 1082, duration: 449 },
                { id: "eid2170", tween: [ "transform", "${_e2b_arm_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1531, duration: 219 },
                { id: "eid2231", tween: [ "transform", "${_e2b_kette}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2164", tween: [ "style", "${_e2b_arm_r}", "left", '0px', { fromValue: '0px'}], position: 604, duration: 0 },
                { id: "eid2165", tween: [ "style", "${_e2b_arm_r}", "left", '0px', { fromValue: '0px'}], position: 1041, duration: 0 },
                { id: "eid2166", tween: [ "style", "${_e2b_arm_r}", "left", '0px', { fromValue: '0px'}], position: 1531, duration: 0 },
                { id: "eid2185", tween: [ "style", "${_e2b_bein_l}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2186", tween: [ "style", "${_e2b_bein_l}", "left", '2px', { fromValue: '1px'}], position: 438, duration: 437 },
                { id: "eid2187", tween: [ "style", "${_e2b_bein_l}", "left", '1px', { fromValue: '2px'}], position: 875, duration: 437 },
                { id: "eid2188", tween: [ "style", "${_e2b_bein_l}", "left", '0px', { fromValue: '1px'}], position: 1312, duration: 438 },
                { id: "eid2208", tween: [ "style", "${_e2b_fuss_r}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 438 },
                { id: "eid2209", tween: [ "style", "${_e2b_fuss_r}", "top", '0px', { fromValue: '-1px'}], position: 438, duration: 437 },
                { id: "eid2210", tween: [ "style", "${_e2b_fuss_r}", "top", '1px', { fromValue: '0px'}], position: 875, duration: 437 },
                { id: "eid2211", tween: [ "style", "${_e2b_fuss_r}", "top", '0px', { fromValue: '1px'}], position: 1312, duration: 438 }            ]
        }
    }
},
"sym_e2a": {
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
                    id: 'e2a_arm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_arm_h.svg', '0px', '0px']
                },
                {
                    id: 'e2a_arm_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_arm_r.svg', '0px', '0px']
                },
                {
                    id: 'e2a_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'e2a_face',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_face.svg', '0px', '0px']
                },
                {
                    id: 'e2a_fuss_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_fuss_l.svg', '0px', '0px']
                },
                {
                    id: 'e2a_fuss_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_fuss_r.svg', '0px', '0px']
                },
                {
                    id: 'e2a_hand',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_hand.svg', '0px', '0px']
                },
                {
                    id: 'e2a_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'e2a_schenkel_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_schenkel_l.svg', '0px', '0px']
                },
                {
                    id: 'e2a_schenkel_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_schenkel_r.svg', '0px', '0px']
                },
                {
                    id: 'e2a_wade_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_wade_l.svg', '0px', '0px']
                },
                {
                    id: 'e2a_wade_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e2a_wade_r.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_e2a_face}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_schenkel_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_fuss_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_fuss_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_arm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_schenkel_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_arm_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_e2a_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_wade_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_hand}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e2a_wade_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            labels: {
                "oo_e2a": 0
            },
            timeline: [
                { id: "eid2154", tween: [ "style", "${_e2a_arm_h}", "top", '20px', { fromValue: '0px'}], position: 0, duration: 750 },
                { id: "eid2155", tween: [ "style", "${_e2a_arm_h}", "top", '0px', { fromValue: '20px'}], position: 1250, duration: 750 },
                { id: "eid2005", tween: [ "transform", "${_e2a_wade_r}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid2006", tween: [ "transform", "${_e2a_wade_r}", "rotateZ", '-31deg', { fromValue: '-20deg'}], position: 500, duration: 250 },
                { id: "eid2007", tween: [ "transform", "${_e2a_wade_r}", "rotateZ", '-15deg', { fromValue: '-31deg'}], position: 750, duration: 500 },
                { id: "eid2008", tween: [ "transform", "${_e2a_wade_r}", "rotateZ", '-31deg', { fromValue: '-15deg'}], position: 1250, duration: 500 },
                { id: "eid2009", tween: [ "transform", "${_e2a_wade_r}", "rotateZ", '-20deg', { fromValue: '-31deg'}], position: 1750, duration: 250 },
                { id: "eid2010", tween: [ "transform", "${_e2a_wade_r}", "rotateZ", '5deg', { fromValue: '-20deg'}], position: 2000, duration: 250 },
                { id: "eid2011", tween: [ "transform", "${_e2a_wade_r}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 2250, duration: 250 },
                { id: "eid2073", tween: [ "style", "${_e2a_hand}", "top", '-30px', { fromValue: '0px'}], position: 0, duration: 750 },
                { id: "eid2074", tween: [ "style", "${_e2a_hand}", "top", '110px', { fromValue: '-30px'}], position: 750, duration: 500 },
                { id: "eid2075", tween: [ "style", "${_e2a_hand}", "top", '-30px', { fromValue: '110px'}], position: 1250, duration: 500 },
                { id: "eid2076", tween: [ "style", "${_e2a_hand}", "top", '0px', { fromValue: '-30px'}], position: 1750, duration: 750 },
                { id: "eid2150", tween: [ "transform", "${_e2a_arm_r}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid2151", tween: [ "transform", "${_e2a_arm_r}", "rotateZ", '3deg', { fromValue: '-14deg'}], position: 750, duration: 500 },
                { id: "eid2152", tween: [ "transform", "${_e2a_arm_r}", "rotateZ", '-14deg', { fromValue: '3deg'}], position: 1250, duration: 500 },
                { id: "eid2153", tween: [ "transform", "${_e2a_arm_r}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 1750, duration: 750 },
                { id: "eid1992", tween: [ "style", "${_e2a_wade_r}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1993", tween: [ "style", "${_e2a_wade_r}", "top", '90px', { fromValue: '0px'}], position: 500, duration: 250 },
                { id: "eid1994", tween: [ "style", "${_e2a_wade_r}", "top", '0px', { fromValue: '90px'}], position: 750, duration: 500 },
                { id: "eid1995", tween: [ "style", "${_e2a_wade_r}", "top", '90px', { fromValue: '17px'}], position: 1250, duration: 500 },
                { id: "eid1996", tween: [ "style", "${_e2a_wade_r}", "top", '0px', { fromValue: '90px'}], position: 1750, duration: 250 },
                { id: "eid1997", tween: [ "style", "${_e2a_wade_r}", "top", '30px', { fromValue: '0px'}], position: 2000, duration: 250 },
                { id: "eid2134", tween: [ "transform", "${_e2a_face}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2135", tween: [ "transform", "${_e2a_face}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1250, duration: 0 },
                { id: "eid2012", tween: [ "style", "${_e2a_wade_l}", "top", '40px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2013", tween: [ "style", "${_e2a_wade_l}", "top", '78px', { fromValue: '40px'}], position: 500, duration: 250 },
                { id: "eid2014", tween: [ "style", "${_e2a_wade_l}", "top", '43px', { fromValue: '78px'}], position: 750, duration: 250 },
                { id: "eid2015", tween: [ "style", "${_e2a_wade_l}", "top", '-33px', { fromValue: '43px'}], position: 1000, duration: 250 },
                { id: "eid2016", tween: [ "style", "${_e2a_wade_l}", "top", '49px', { fromValue: '-33px'}], position: 1250, duration: 250 },
                { id: "eid2017", tween: [ "style", "${_e2a_wade_l}", "top", '70px', { fromValue: '49px'}], position: 1500, duration: 250 },
                { id: "eid2018", tween: [ "style", "${_e2a_wade_l}", "top", '40px', { fromValue: '70px'}], position: 1750, duration: 250 },
                { id: "eid2019", tween: [ "style", "${_e2a_wade_l}", "top", '0px', { fromValue: '40px'}], position: 2000, duration: 500 },
                { id: "eid2138", tween: [ "style", "${_e2a_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2139", tween: [ "style", "${_e2a_corpus}", "left", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
                { id: "eid2077", tween: [ "style", "${_e2a_hand}", "left", '-199px', { fromValue: '0px'}], position: 0, duration: 750 },
                { id: "eid2078", tween: [ "style", "${_e2a_hand}", "left", '-161px', { fromValue: '-199px'}], position: 750, duration: 500 },
                { id: "eid2079", tween: [ "style", "${_e2a_hand}", "left", '-199px', { fromValue: '-161px'}], position: 1250, duration: 500 },
                { id: "eid2080", tween: [ "style", "${_e2a_hand}", "left", '0px', { fromValue: '-199px'}], position: 1750, duration: 750 },
                { id: "eid2048", tween: [ "transform", "${_e2a_schenkel_r}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid2049", tween: [ "transform", "${_e2a_schenkel_r}", "rotateZ", '3deg', { fromValue: '-8deg'}], position: 500, duration: 250 },
                { id: "eid2050", tween: [ "transform", "${_e2a_schenkel_r}", "rotateZ", '-4deg', { fromValue: '3deg'}], position: 750, duration: 500 },
                { id: "eid2051", tween: [ "transform", "${_e2a_schenkel_r}", "rotateZ", '3deg', { fromValue: '-4deg'}], position: 1250, duration: 500 },
                { id: "eid2052", tween: [ "transform", "${_e2a_schenkel_r}", "rotateZ", '-8deg', { fromValue: '3deg'}], position: 1750, duration: 250 },
                { id: "eid2053", tween: [ "transform", "${_e2a_schenkel_r}", "rotateZ", '7deg', { fromValue: '-8deg'}], position: 2000, duration: 250 },
                { id: "eid2054", tween: [ "transform", "${_e2a_schenkel_r}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 2250, duration: 250 },
                { id: "eid2081", tween: [ "transform", "${_e2a_hand}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 0, duration: 1250 },
                { id: "eid2082", tween: [ "transform", "${_e2a_hand}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 1250, duration: 1250 },
                { id: "eid2122", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '-31deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid2123", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '-41deg', { fromValue: '-31deg'}], position: 500, duration: 250 },
                { id: "eid2124", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '-50deg', { fromValue: '-41deg'}], position: 750, duration: 250 },
                { id: "eid2125", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '-17deg', { fromValue: '-50deg'}], position: 1000, duration: 250 },
                { id: "eid2126", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '-50deg', { fromValue: '-17deg'}], position: 1250, duration: 250 },
                { id: "eid2127", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '-41deg', { fromValue: '-50deg'}], position: 1500, duration: 250 },
                { id: "eid2128", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '-31deg', { fromValue: '-41deg'}], position: 1750, duration: 250 },
                { id: "eid2129", tween: [ "transform", "${_e2a_fuss_l}", "rotateZ", '0deg', { fromValue: '-31deg'}], position: 2000, duration: 500 },
                { id: "eid2132", tween: [ "style", "${_e2a_face}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2133", tween: [ "style", "${_e2a_face}", "left", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
                { id: "eid2130", tween: [ "style", "${_e2a_face}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2131", tween: [ "style", "${_e2a_face}", "top", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
                { id: "eid2063", tween: [ "transform", "${_e2a_schenkel_l}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid2064", tween: [ "transform", "${_e2a_schenkel_l}", "rotateZ", '3deg', { fromValue: '-7deg'}], position: 500, duration: 750 },
                { id: "eid2065", tween: [ "transform", "${_e2a_schenkel_l}", "rotateZ", '-7deg', { fromValue: '3deg'}], position: 1250, duration: 750 },
                { id: "eid2066", tween: [ "transform", "${_e2a_schenkel_l}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 2000, duration: 500 },
                { id: "eid2146", tween: [ "style", "${_e2a_arm_r}", "left", '40px', { fromValue: '0px'}], position: 0, duration: 750 },
                { id: "eid2147", tween: [ "style", "${_e2a_arm_r}", "left", '-11px', { fromValue: '40px'}], position: 750, duration: 500 },
                { id: "eid2148", tween: [ "style", "${_e2a_arm_r}", "left", '40px', { fromValue: '-11px'}], position: 1250, duration: 500 },
                { id: "eid2149", tween: [ "style", "${_e2a_arm_r}", "left", '0px', { fromValue: '40px'}], position: 1750, duration: 750 },
                { id: "eid2101", tween: [ "transform", "${_e2a_fuss_r}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid2102", tween: [ "transform", "${_e2a_fuss_r}", "rotateZ", '-43deg', { fromValue: '-30deg'}], position: 500, duration: 750 },
                { id: "eid2103", tween: [ "transform", "${_e2a_fuss_r}", "rotateZ", '-30deg', { fromValue: '-43deg'}], position: 1250, duration: 750 },
                { id: "eid2104", tween: [ "transform", "${_e2a_fuss_r}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 2000, duration: 250 },
                { id: "eid2105", tween: [ "transform", "${_e2a_fuss_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2250, duration: 250 },
                { id: "eid2114", tween: [ "style", "${_e2a_fuss_l}", "left", '120px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2115", tween: [ "style", "${_e2a_fuss_l}", "left", '188px', { fromValue: '120px'}], position: 500, duration: 250 },
                { id: "eid2116", tween: [ "style", "${_e2a_fuss_l}", "left", '211px', { fromValue: '188px'}], position: 750, duration: 250 },
                { id: "eid2117", tween: [ "style", "${_e2a_fuss_l}", "left", '-65px', { fromValue: '211px'}], position: 1000, duration: 250 },
                { id: "eid2118", tween: [ "style", "${_e2a_fuss_l}", "left", '231px', { fromValue: '-65px'}], position: 1250, duration: 250 },
                { id: "eid2119", tween: [ "style", "${_e2a_fuss_l}", "left", '193px', { fromValue: '231px'}], position: 1500, duration: 250 },
                { id: "eid2120", tween: [ "style", "${_e2a_fuss_l}", "left", '120px', { fromValue: '193px'}], position: 1750, duration: 250 },
                { id: "eid2121", tween: [ "style", "${_e2a_fuss_l}", "left", '0px', { fromValue: '120px'}], position: 2000, duration: 500 },
                { id: "eid2140", tween: [ "transform", "${_e2a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2141", tween: [ "transform", "${_e2a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1250, duration: 0 },
                { id: "eid2067", tween: [ "style", "${_e2a_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2068", tween: [ "style", "${_e2a_kopf}", "top", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
                { id: "eid2093", tween: [ "style", "${_e2a_fuss_r}", "left", '121px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid2094", tween: [ "style", "${_e2a_fuss_r}", "left", '262px', { fromValue: '121px'}], position: 250, duration: 250 },
                { id: "eid2095", tween: [ "style", "${_e2a_fuss_r}", "left", '310px', { fromValue: '262px'}], position: 500, duration: 250 },
                { id: "eid2096", tween: [ "style", "${_e2a_fuss_r}", "left", '425px', { fromValue: '310px'}], position: 750, duration: 500 },
                { id: "eid2097", tween: [ "style", "${_e2a_fuss_r}", "left", '310px', { fromValue: '425px'}], position: 1250, duration: 500 },
                { id: "eid2098", tween: [ "style", "${_e2a_fuss_r}", "left", '262px', { fromValue: '310px'}], position: 1750, duration: 250 },
                { id: "eid2099", tween: [ "style", "${_e2a_fuss_r}", "left", '11px', { fromValue: '262px'}], position: 2000, duration: 250 },
                { id: "eid2100", tween: [ "style", "${_e2a_fuss_r}", "left", '0px', { fromValue: '11px'}], position: 2250, duration: 250 },
                { id: "eid2055", tween: [ "style", "${_e2a_schenkel_l}", "top", '-20px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2056", tween: [ "style", "${_e2a_schenkel_l}", "top", '10px', { fromValue: '-20px'}], position: 500, duration: 750 },
                { id: "eid2057", tween: [ "style", "${_e2a_schenkel_l}", "top", '-20px', { fromValue: '10px'}], position: 1250, duration: 750 },
                { id: "eid2058", tween: [ "style", "${_e2a_schenkel_l}", "top", '0px', { fromValue: '-20px'}], position: 2000, duration: 500 },
                { id: "eid2158", tween: [ "transform", "${_e2a_arm_h}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 750 },
                { id: "eid2159", tween: [ "transform", "${_e2a_arm_h}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1250, duration: 750 },
                { id: "eid2136", tween: [ "style", "${_e2a_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2137", tween: [ "style", "${_e2a_corpus}", "top", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
                { id: "eid1998", tween: [ "style", "${_e2a_wade_r}", "left", '150px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1999", tween: [ "style", "${_e2a_wade_r}", "left", '270px', { fromValue: '150px'}], position: 500, duration: 250 },
                { id: "eid2000", tween: [ "style", "${_e2a_wade_r}", "left", '114px', { fromValue: '270px'}], position: 750, duration: 500 },
                { id: "eid2001", tween: [ "style", "${_e2a_wade_r}", "left", '270px', { fromValue: '114px'}], position: 1250, duration: 500 },
                { id: "eid2002", tween: [ "style", "${_e2a_wade_r}", "left", '150px', { fromValue: '270px'}], position: 1750, duration: 250 },
                { id: "eid2003", tween: [ "style", "${_e2a_wade_r}", "left", '-25px', { fromValue: '150px'}], position: 2000, duration: 250 },
                { id: "eid2004", tween: [ "style", "${_e2a_wade_r}", "left", '0px', { fromValue: '-25px'}], position: 2250, duration: 250 },
                { id: "eid2028", tween: [ "transform", "${_e2a_wade_l}", "rotateZ", '-26deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid2029", tween: [ "transform", "${_e2a_wade_l}", "rotateZ", '-34deg', { fromValue: '-26deg'}], position: 500, duration: 250 },
                { id: "eid2030", tween: [ "transform", "${_e2a_wade_l}", "rotateZ", '12deg', { fromValue: '-34deg'}], position: 750, duration: 500 },
                { id: "eid2031", tween: [ "transform", "${_e2a_wade_l}", "rotateZ", '-34deg', { fromValue: '12deg'}], position: 1250, duration: 500 },
                { id: "eid2032", tween: [ "transform", "${_e2a_wade_l}", "rotateZ", '-26deg', { fromValue: '-34deg'}], position: 1750, duration: 250 },
                { id: "eid2033", tween: [ "transform", "${_e2a_wade_l}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 2000, duration: 500 },
                { id: "eid2071", tween: [ "transform", "${_e2a_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid2072", tween: [ "transform", "${_e2a_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1250, duration: 0 },
                { id: "eid2106", tween: [ "style", "${_e2a_fuss_l}", "top", '96px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2107", tween: [ "style", "${_e2a_fuss_l}", "top", '151px', { fromValue: '96px'}], position: 500, duration: 250 },
                { id: "eid2108", tween: [ "style", "${_e2a_fuss_l}", "top", '449px', { fromValue: '151px'}], position: 750, duration: 250 },
                { id: "eid2109", tween: [ "style", "${_e2a_fuss_l}", "top", '286px', { fromValue: '449px'}], position: 1000, duration: 250 },
                { id: "eid2110", tween: [ "style", "${_e2a_fuss_l}", "top", '449px', { fromValue: '286px'}], position: 1250, duration: 250 },
                { id: "eid2111", tween: [ "style", "${_e2a_fuss_l}", "top", '143px', { fromValue: '449px'}], position: 1500, duration: 250 },
                { id: "eid2112", tween: [ "style", "${_e2a_fuss_l}", "top", '96px', { fromValue: '143px'}], position: 1750, duration: 250 },
                { id: "eid2113", tween: [ "style", "${_e2a_fuss_l}", "top", '0px', { fromValue: '96px'}], position: 2000, duration: 500 },
                { id: "eid2142", tween: [ "style", "${_e2a_arm_r}", "top", '-190px', { fromValue: '0px'}], position: 0, duration: 750 },
                { id: "eid2143", tween: [ "style", "${_e2a_arm_r}", "top", '41px', { fromValue: '-190px'}], position: 750, duration: 500 },
                { id: "eid2144", tween: [ "style", "${_e2a_arm_r}", "top", '-190px', { fromValue: '41px'}], position: 1250, duration: 500 },
                { id: "eid2145", tween: [ "style", "${_e2a_arm_r}", "top", '0px', { fromValue: '-190px'}], position: 1750, duration: 750 },
                { id: "eid2041", tween: [ "style", "${_e2a_schenkel_r}", "left", '60px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2042", tween: [ "style", "${_e2a_schenkel_r}", "left", '-10px', { fromValue: '60px'}], position: 500, duration: 250 },
                { id: "eid2043", tween: [ "style", "${_e2a_schenkel_r}", "left", '30px', { fromValue: '-10px'}], position: 750, duration: 500 },
                { id: "eid2044", tween: [ "style", "${_e2a_schenkel_r}", "left", '-10px', { fromValue: '30px'}], position: 1250, duration: 500 },
                { id: "eid2045", tween: [ "style", "${_e2a_schenkel_r}", "left", '60px', { fromValue: '-10px'}], position: 1750, duration: 250 },
                { id: "eid2046", tween: [ "style", "${_e2a_schenkel_r}", "left", '-30px', { fromValue: '60px'}], position: 2000, duration: 250 },
                { id: "eid2047", tween: [ "style", "${_e2a_schenkel_r}", "left", '0px', { fromValue: '-30px'}], position: 2250, duration: 250 },
                { id: "eid2020", tween: [ "style", "${_e2a_wade_l}", "left", '100px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2021", tween: [ "style", "${_e2a_wade_l}", "left", '145px', { fromValue: '100px'}], position: 500, duration: 250 },
                { id: "eid2022", tween: [ "style", "${_e2a_wade_l}", "left", '39px', { fromValue: '145px'}], position: 750, duration: 250 },
                { id: "eid2023", tween: [ "style", "${_e2a_wade_l}", "left", '-27px', { fromValue: '39px'}], position: 1000, duration: 250 },
                { id: "eid2024", tween: [ "style", "${_e2a_wade_l}", "left", '52px', { fromValue: '-27px'}], position: 1250, duration: 250 },
                { id: "eid2025", tween: [ "style", "${_e2a_wade_l}", "left", '150px', { fromValue: '52px'}], position: 1500, duration: 250 },
                { id: "eid2026", tween: [ "style", "${_e2a_wade_l}", "left", '100px', { fromValue: '150px'}], position: 1750, duration: 250 },
                { id: "eid2027", tween: [ "style", "${_e2a_wade_l}", "left", '0px', { fromValue: '100px'}], position: 2000, duration: 500 },
                { id: "eid2059", tween: [ "style", "${_e2a_schenkel_l}", "left", '30px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2060", tween: [ "style", "${_e2a_schenkel_l}", "left", '0px', { fromValue: '30px'}], position: 500, duration: 750 },
                { id: "eid2061", tween: [ "style", "${_e2a_schenkel_l}", "left", '30px', { fromValue: '0px'}], position: 1250, duration: 750 },
                { id: "eid2062", tween: [ "style", "${_e2a_schenkel_l}", "left", '0px', { fromValue: '30px'}], position: 2000, duration: 500 },
                { id: "eid2069", tween: [ "style", "${_e2a_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2070", tween: [ "style", "${_e2a_kopf}", "left", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
                { id: "eid2156", tween: [ "style", "${_e2a_arm_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2157", tween: [ "style", "${_e2a_arm_h}", "left", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
                { id: "eid2034", tween: [ "style", "${_e2a_schenkel_r}", "top", '-30px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid2035", tween: [ "style", "${_e2a_schenkel_r}", "top", '0px', { fromValue: '-30px'}], position: 500, duration: 250 },
                { id: "eid2036", tween: [ "style", "${_e2a_schenkel_r}", "top", '-20px', { fromValue: '0px'}], position: 750, duration: 500 },
                { id: "eid2037", tween: [ "style", "${_e2a_schenkel_r}", "top", '0px', { fromValue: '-20px'}], position: 1250, duration: 500 },
                { id: "eid2038", tween: [ "style", "${_e2a_schenkel_r}", "top", '-30px', { fromValue: '0px'}], position: 1750, duration: 250 },
                { id: "eid2039", tween: [ "style", "${_e2a_schenkel_r}", "top", '15px', { fromValue: '-30px'}], position: 2000, duration: 250 },
                { id: "eid2040", tween: [ "style", "${_e2a_schenkel_r}", "top", '0px', { fromValue: '15px'}], position: 2250, duration: 250 },
                { id: "eid2083", tween: [ "style", "${_e2a_fuss_r}", "top", '53px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid2084", tween: [ "style", "${_e2a_fuss_r}", "top", '85px', { fromValue: '53px'}], position: 250, duration: 250 },
                { id: "eid2085", tween: [ "style", "${_e2a_fuss_r}", "top", '112px', { fromValue: '85px'}], position: 500, duration: 250 },
                { id: "eid2086", tween: [ "style", "${_e2a_fuss_r}", "top", '168px', { fromValue: '112px'}], position: 750, duration: 250 },
                { id: "eid2087", tween: [ "style", "${_e2a_fuss_r}", "top", '233px', { fromValue: '168px'}], position: 1000, duration: 250 },
                { id: "eid2088", tween: [ "style", "${_e2a_fuss_r}", "top", '168px', { fromValue: '233px'}], position: 1250, duration: 250 },
                { id: "eid2089", tween: [ "style", "${_e2a_fuss_r}", "top", '112px', { fromValue: '168px'}], position: 1500, duration: 250 },
                { id: "eid2090", tween: [ "style", "${_e2a_fuss_r}", "top", '85px', { fromValue: '112px'}], position: 1750, duration: 250 },
                { id: "eid2091", tween: [ "style", "${_e2a_fuss_r}", "top", '94px', { fromValue: '85px'}], position: 2000, duration: 250 },
                { id: "eid2092", tween: [ "style", "${_e2a_fuss_r}", "top", '0px', { fromValue: '94px'}], position: 2250, duration: 250 }            ]
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
                    id: 'sym_e2a',
                    type: 'rect',
                    rect: ['-1804px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_e2b',
                    type: 'rect',
                    rect: ['-1804px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_e2b',
                symbolName: 'sym_e2b',
                autoPlay: {

               }
            },
            {
                id: 'sym_e2a',
                symbolName: 'sym_e2a',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_e2a}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_e2b}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
            duration: 4500,
            autoPlay: false,
            timeline: [
                { id: "eid2240", tween: [ "style", "${_sym_e2b}", "top", '0px', { fromValue: '0px'}], position: 4500, duration: 0 },
                { id: "eid1925", tween: [ "style", "${_sym_e2a}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1924", tween: [ "style", "${_sym_e2b}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    id: 'sym_welle_2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_welle_2',
                symbolName: 'sym_welle_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_welle_2}": [
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
            duration: 1750,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"sym_welle_2": {
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
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '-1364px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(255,0,80,1.00)']
                },
                {
                    id: 'welle8',
                    type: 'image',
                    rect: ['0', '0', '4096px', '1200px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle8.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '-1364px'],
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
            ],
            "${_welle8}": [
                ["style", "top", '23px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1973", tween: [ "transform", "${_welle8}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 292, easing: "easeInOutQuad" },
                { id: "eid1974", tween: [ "transform", "${_welle8}", "scaleY", '1', { fromValue: '0.8'}], position: 292, duration: 292, easing: "easeInOutQuad" },
                { id: "eid1975", tween: [ "transform", "${_welle8}", "scaleY", '0.9', { fromValue: '1'}], position: 583, duration: 292, easing: "easeInOutQuad" },
                { id: "eid1976", tween: [ "transform", "${_welle8}", "scaleY", '1', { fromValue: '0.9'}], position: 875, duration: 292, easing: "easeInOutQuad" },
                { id: "eid1977", tween: [ "transform", "${_welle8}", "scaleY", '0.8', { fromValue: '1'}], position: 1167, duration: 290, easing: "easeInOutQuad" },
                { id: "eid1978", tween: [ "transform", "${_welle8}", "scaleY", '1', { fromValue: '0.8'}], position: 1457, duration: 292, easing: "easeInOutQuad" },
                { id: "eid1981", tween: [ "style", "${_welle8}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 1749 },
                { id: "eid1982", tween: [ "style", "${_welle8}", "left", '0px', { fromValue: '-2048px'}], position: 1749, duration: 1, easing: "easeInOutQuad" },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1988", tween: [ "style", "${_welle8}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
                { id: "eid1987", tween: [ "style", "${_Rectangle2}", "top", '-1364px', { fromValue: '-1364px'}], position: 0, duration: 0 }            ]
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
