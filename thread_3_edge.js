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
                rect: ['1010', '0','auto','auto','auto', 'auto']
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
                ["style", "left", '1010px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'auto']
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
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid1571", tween: [ "style", "${_sym_all}", "left", '510px', { fromValue: '1010px'}], position: 0, duration: 10000 },
                { id: "eid1520", tween: [ "style", "${_sym_welleframe}", "left", '7952px', { fromValue: '0px'}], position: 0, duration: 10000 }            ]
        }
    }
},
"sym_a3a": {
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
                    id: 'a3a_arm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_arm_h.svg', '0px', '0px']
                },
                {
                    id: 'a3a_arm_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_arm_v.svg', '0px', '0px']
                },
                {
                    id: 'a3a_bein_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_bein_v.svg', '0px', '0px']
                },
                {
                    id: 'a3a_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'a3a_hand_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_hand_h.svg', '0px', '0px']
                },
                {
                    id: 'a3a_hand_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_hand_v.svg', '0px', '0px']
                },
                {
                    id: 'a3a_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'a3a_kuh',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_kuh.svg', '0px', '0px']
                },
                {
                    id: 'a3a_schulter_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3a_schulter_v.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a3a_kuh}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3a_hand_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3a_schulter_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3a_arm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3a_arm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_a3a_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3a_bein_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3a_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3a_hand_h}": [
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
            duration: 5641,
            autoPlay: true,
            labels: {
                "oo_a3a": 0
            },
            timeline: [
                { id: "eid497", tween: [ "transform", "${_a3a_kuh}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid498", tween: [ "transform", "${_a3a_kuh}", "rotateZ", '-9deg', { fromValue: '-8deg'}], position: 696, duration: 298, easing: "easeInOutQuad" },
                { id: "eid499", tween: [ "transform", "${_a3a_kuh}", "rotateZ", '-5deg', { fromValue: '-9deg'}], position: 1250, duration: 309, easing: "easeInOutQuad" },
                { id: "eid500", tween: [ "transform", "${_a3a_kuh}", "rotateZ", '-9deg', { fromValue: '-5deg'}], position: 1559, duration: 236, easing: "easeInOutQuad" },
                { id: "eid501", tween: [ "transform", "${_a3a_kuh}", "rotateZ", '-8deg', { fromValue: '-9deg'}], position: 2415, duration: 187, easing: "easeInOutQuad" },
                { id: "eid502", tween: [ "transform", "${_a3a_kuh}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid568", tween: [ "style", "${_a3a_arm_h}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid569", tween: [ "style", "${_a3a_arm_h}", "top", '0px', { fromValue: '-10px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid556", tween: [ "style", "${_a3a_arm_v}", "top", '6px', { fromValue: '0px'}], position: 6, duration: 696, easing: "easeInOutQuad" },
                { id: "eid557", tween: [ "style", "${_a3a_arm_v}", "top", '-3px', { fromValue: '6px'}], position: 709, duration: 286, easing: "easeInOutQuad" },
                { id: "eid558", tween: [ "style", "${_a3a_arm_v}", "top", '6px', { fromValue: '-3px'}], position: 2423, duration: 179, easing: "easeInOutQuad" },
                { id: "eid559", tween: [ "style", "${_a3a_arm_v}", "top", '0px', { fromValue: '6px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid527", tween: [ "transform", "${_a3a_hand_v}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 6, duration: 696, easing: "easeInOutQuad" },
                { id: "eid528", tween: [ "transform", "${_a3a_hand_v}", "rotateZ", '-8deg', { fromValue: '-7deg'}], position: 709, duration: 286, easing: "easeInOutQuad" },
                { id: "eid529", tween: [ "transform", "${_a3a_hand_v}", "rotateZ", '-5deg', { fromValue: '-8deg'}], position: 1250, duration: 309, easing: "easeInOutQuad" },
                { id: "eid530", tween: [ "transform", "${_a3a_hand_v}", "rotateZ", '-8deg', { fromValue: '-5deg'}], position: 1559, duration: 236, easing: "easeInOutQuad" },
                { id: "eid531", tween: [ "transform", "${_a3a_hand_v}", "rotateZ", '-7deg', { fromValue: '-8deg'}], position: 2423, duration: 179, easing: "easeInOutQuad" },
                { id: "eid532", tween: [ "transform", "${_a3a_hand_v}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid550", tween: [ "style", "${_a3a_bein_v}", "top", '-7px', { fromValue: '0px'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid551", tween: [ "style", "${_a3a_bein_v}", "top", '0px', { fromValue: '-7px'}], position: 2415, duration: 1127, easing: "easeInOutQuad" },
                { id: "eid503", tween: [ "style", "${_a3a_kopf}", "top", '-67px', { fromValue: '0px'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid504", tween: [ "style", "${_a3a_kopf}", "top", '-67px', { fromValue: '-67px'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid505", tween: [ "style", "${_a3a_kopf}", "top", '0px', { fromValue: '-67px'}], position: 2770, duration: 995, easing: "easeInOutQuad" },
                { id: "eid481", tween: [ "transform", "${_a3a_schulter_v}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid482", tween: [ "transform", "${_a3a_schulter_v}", "rotateZ", '-2deg', { fromValue: '-1deg'}], position: 696, duration: 298, easing: "easeInOutQuad" },
                { id: "eid483", tween: [ "transform", "${_a3a_schulter_v}", "rotateZ", '-1deg', { fromValue: '-2deg'}], position: 2415, duration: 187, easing: "easeInOutQuad" },
                { id: "eid484", tween: [ "transform", "${_a3a_schulter_v}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid543", tween: [ "style", "${_a3a_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid544", tween: [ "style", "${_a3a_corpus}", "left", '-4px', { fromValue: '0px'}], position: 4250, duration: 537, easing: "easeInOutQuad" },
                { id: "eid545", tween: [ "style", "${_a3a_corpus}", "left", '0px', { fromValue: '-4px'}], position: 4787, duration: 388, easing: "easeInOutQuad" },
                { id: "eid570", tween: [ "style", "${_a3a_arm_h}", "left", '24px', { fromValue: '0px'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid571", tween: [ "style", "${_a3a_arm_h}", "left", '0px', { fromValue: '24px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid506", tween: [ "style", "${_a3a_kopf}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid507", tween: [ "style", "${_a3a_kopf}", "left", '-5px', { fromValue: '2px'}], position: 1750, duration: 430, easing: "easeInOutQuad" },
                { id: "eid508", tween: [ "style", "${_a3a_kopf}", "left", '2px', { fromValue: '-5px'}], position: 2180, duration: 422, easing: "easeInOutQuad" },
                { id: "eid509", tween: [ "style", "${_a3a_kopf}", "left", '0px', { fromValue: '2px'}], position: 2770, duration: 995, easing: "easeInOutQuad" },
                { id: "eid510", tween: [ "style", "${_a3a_kopf}", "left", '-8px', { fromValue: '2px'}], position: 4250, duration: 537, easing: "easeInOutQuad" },
                { id: "eid511", tween: [ "style", "${_a3a_kopf}", "left", '2px', { fromValue: '-8px'}], position: 4787, duration: 388, easing: "easeInOutQuad" },
                { id: "eid564", tween: [ "transform", "${_a3a_arm_v}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 6, duration: 696, easing: "easeInOutQuad" },
                { id: "eid565", tween: [ "transform", "${_a3a_arm_v}", "rotateZ", '-9deg', { fromValue: '-8deg'}], position: 709, duration: 286, easing: "easeInOutQuad" },
                { id: "eid566", tween: [ "transform", "${_a3a_arm_v}", "rotateZ", '-8deg', { fromValue: '-9deg'}], position: 2423, duration: 179, easing: "easeInOutQuad" },
                { id: "eid567", tween: [ "transform", "${_a3a_arm_v}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid485", tween: [ "style", "${_a3a_kuh}", "top", '6px', { fromValue: '0px'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid486", tween: [ "style", "${_a3a_kuh}", "top", '-3px', { fromValue: '6px'}], position: 696, duration: 298, easing: "easeInOutQuad" },
                { id: "eid487", tween: [ "style", "${_a3a_kuh}", "top", '-35px', { fromValue: '-3px'}], position: 1250, duration: 309, easing: "easeInOutQuad" },
                { id: "eid488", tween: [ "style", "${_a3a_kuh}", "top", '-3px', { fromValue: '-35px'}], position: 1559, duration: 236, easing: "easeInOutQuad" },
                { id: "eid489", tween: [ "style", "${_a3a_kuh}", "top", '6px', { fromValue: '-3px'}], position: 2415, duration: 187, easing: "easeInOutQuad" },
                { id: "eid490", tween: [ "style", "${_a3a_kuh}", "top", '0px', { fromValue: '6px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid473", tween: [ "style", "${_a3a_schulter_v}", "top", '-6px', { fromValue: '0px'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid474", tween: [ "style", "${_a3a_schulter_v}", "top", '-15px', { fromValue: '-6px'}], position: 696, duration: 298, easing: "easeInOutQuad" },
                { id: "eid475", tween: [ "style", "${_a3a_schulter_v}", "top", '-6px', { fromValue: '-15px'}], position: 2415, duration: 187, easing: "easeInOutQuad" },
                { id: "eid476", tween: [ "style", "${_a3a_schulter_v}", "top", '0px', { fromValue: '-6px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid552", tween: [ "style", "${_a3a_bein_v}", "left", '-14px', { fromValue: '0px'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid553", tween: [ "style", "${_a3a_bein_v}", "left", '0px', { fromValue: '-14px'}], position: 2415, duration: 1127, easing: "easeInOutQuad" },
                { id: "eid560", tween: [ "style", "${_a3a_arm_v}", "left", '-21px', { fromValue: '0px'}], position: 6, duration: 696, easing: "easeInOutQuad" },
                { id: "eid561", tween: [ "style", "${_a3a_arm_v}", "left", '-26px', { fromValue: '-21px'}], position: 709, duration: 286, easing: "easeInOutQuad" },
                { id: "eid562", tween: [ "style", "${_a3a_arm_v}", "left", '-21px', { fromValue: '-26px'}], position: 2423, duration: 179, easing: "easeInOutQuad" },
                { id: "eid563", tween: [ "style", "${_a3a_arm_v}", "left", '0px', { fromValue: '-21px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid512", tween: [ "transform", "${_a3a_kopf}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid513", tween: [ "transform", "${_a3a_kopf}", "rotateZ", '-8deg', { fromValue: '-8deg'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid514", tween: [ "transform", "${_a3a_kopf}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 2770, duration: 995, easing: "easeInOutQuad" },
                { id: "eid546", tween: [ "transform", "${_a3a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid547", tween: [ "transform", "${_a3a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid548", tween: [ "transform", "${_a3a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4787, duration: 0, easing: "easeInOutQuad" },
                { id: "eid549", tween: [ "transform", "${_a3a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5175, duration: 0, easing: "easeInOutQuad" },
                { id: "eid491", tween: [ "style", "${_a3a_kuh}", "left", '-22px', { fromValue: '0px'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid492", tween: [ "style", "${_a3a_kuh}", "left", '-26px', { fromValue: '-22px'}], position: 696, duration: 298, easing: "easeInOutQuad" },
                { id: "eid493", tween: [ "style", "${_a3a_kuh}", "left", '-7px', { fromValue: '-26px'}], position: 1250, duration: 309, easing: "easeInOutQuad" },
                { id: "eid494", tween: [ "style", "${_a3a_kuh}", "left", '-26px', { fromValue: '-7px'}], position: 1559, duration: 236, easing: "easeInOutQuad" },
                { id: "eid495", tween: [ "style", "${_a3a_kuh}", "left", '-22px', { fromValue: '-26px'}], position: 2415, duration: 187, easing: "easeInOutQuad" },
                { id: "eid496", tween: [ "style", "${_a3a_kuh}", "left", '0px', { fromValue: '-22px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid521", tween: [ "style", "${_a3a_hand_v}", "left", '-16px', { fromValue: '0px'}], position: 6, duration: 696, easing: "easeInOutQuad" },
                { id: "eid522", tween: [ "style", "${_a3a_hand_v}", "left", '-20px', { fromValue: '-16px'}], position: 709, duration: 286, easing: "easeInOutQuad" },
                { id: "eid523", tween: [ "style", "${_a3a_hand_v}", "left", '-8px', { fromValue: '-20px'}], position: 1250, duration: 309, easing: "easeInOutQuad" },
                { id: "eid524", tween: [ "style", "${_a3a_hand_v}", "left", '-20px', { fromValue: '-8px'}], position: 1559, duration: 236, easing: "easeInOutQuad" },
                { id: "eid525", tween: [ "style", "${_a3a_hand_v}", "left", '-16px', { fromValue: '-20px'}], position: 2423, duration: 179, easing: "easeInOutQuad" },
                { id: "eid526", tween: [ "style", "${_a3a_hand_v}", "left", '0px', { fromValue: '-16px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid535", tween: [ "style", "${_a3a_hand_h}", "left", '24px', { fromValue: '0px'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid536", tween: [ "style", "${_a3a_hand_h}", "left", '0px', { fromValue: '24px'}], position: 2770, duration: 995, easing: "easeInOutQuad" },
                { id: "eid533", tween: [ "style", "${_a3a_hand_h}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid534", tween: [ "style", "${_a3a_hand_h}", "top", '0px', { fromValue: '-10px'}], position: 2770, duration: 995, easing: "easeInOutQuad" },
                { id: "eid572", tween: [ "transform", "${_a3a_arm_h}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid573", tween: [ "transform", "${_a3a_arm_h}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid539", tween: [ "style", "${_a3a_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid540", tween: [ "style", "${_a3a_corpus}", "top", '0px', { fromValue: '0px'}], position: 4250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid541", tween: [ "style", "${_a3a_corpus}", "top", '0px', { fromValue: '0px'}], position: 4787, duration: 0, easing: "easeInOutQuad" },
                { id: "eid542", tween: [ "style", "${_a3a_corpus}", "top", '0px', { fromValue: '0px'}], position: 5175, duration: 0, easing: "easeInOutQuad" },
                { id: "eid537", tween: [ "transform", "${_a3a_hand_h}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 995, easing: "easeInOutQuad" },
                { id: "eid538", tween: [ "transform", "${_a3a_hand_h}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 2770, duration: 995, easing: "easeInOutQuad" },
                { id: "eid477", tween: [ "style", "${_a3a_schulter_v}", "left", '-3px', { fromValue: '0px'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid478", tween: [ "style", "${_a3a_schulter_v}", "left", '-7px', { fromValue: '-3px'}], position: 696, duration: 298, easing: "easeInOutQuad" },
                { id: "eid479", tween: [ "style", "${_a3a_schulter_v}", "left", '-3px', { fromValue: '-7px'}], position: 2415, duration: 187, easing: "easeInOutQuad" },
                { id: "eid480", tween: [ "style", "${_a3a_schulter_v}", "left", '0px', { fromValue: '-3px'}], position: 2770, duration: 980, easing: "easeInOutQuad" },
                { id: "eid554", tween: [ "transform", "${_a3a_bein_v}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 0, duration: 696, easing: "easeInOutQuad" },
                { id: "eid555", tween: [ "transform", "${_a3a_bein_v}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 2415, duration: 1127, easing: "easeInOutQuad" },
                { id: "eid515", tween: [ "style", "${_a3a_hand_v}", "top", '3px', { fromValue: '0px'}], position: 6, duration: 696, easing: "easeInOutQuad" },
                { id: "eid516", tween: [ "style", "${_a3a_hand_v}", "top", '-14px', { fromValue: '3px'}], position: 709, duration: 286, easing: "easeInOutQuad" },
                { id: "eid517", tween: [ "style", "${_a3a_hand_v}", "top", '-31px', { fromValue: '-14px'}], position: 1250, duration: 309, easing: "easeInOutQuad" },
                { id: "eid518", tween: [ "style", "${_a3a_hand_v}", "top", '-15px', { fromValue: '-31px'}], position: 1559, duration: 236, easing: "easeInOutQuad" },
                { id: "eid519", tween: [ "style", "${_a3a_hand_v}", "top", '3px', { fromValue: '-15px'}], position: 2423, duration: 179, easing: "easeInOutQuad" },
                { id: "eid520", tween: [ "style", "${_a3a_hand_v}", "top", '0px', { fromValue: '3px'}], position: 2770, duration: 980, easing: "easeInOutQuad" }            ]
        }
    }
},
"sym_a3b": {
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
                    id: 'a3b_arm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_arm_h.svg', '0px', '0px']
                },
                {
                    id: 'a3b_arm_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_arm_v.svg', '0px', '0px']
                },
                {
                    id: 'a3b_bein_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_bein_v.svg', '0px', '0px']
                },
                {
                    id: 'a3b_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_corpus.svg', '0px', '0px']
                },
                {
                    id: 'a3b_ferrari',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_ferrari.svg', '0px', '0px']
                },
                {
                    id: 'a3b_hand_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_hand_h.svg', '0px', '0px']
                },
                {
                    id: 'a3b_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'a3b_schulter_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_schulter_v.svg', '0px', '0px']
                },
                {
                    id: 'a3b_hand_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a3b_hand_v.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a3b_bein_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3b_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3b_arm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3b_ferrari}": [
                ["style", "top", '3px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3b_arm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3b_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1539px'],
                ["style", "width", '2051px']
            ],
            "${_a3b_hand_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3b_hand_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a3b_schulter_v}": [
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
            duration: 6750,
            autoPlay: true,
            labels: {
                "oo_a3b": 0
            },
            timeline: [
                { id: "eid584", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid585", tween: [ "style", "${_a3b_hand_v}", "left", '-20px', { fromValue: '-16px'}], position: 525, duration: 221, easing: "easeInOutQuad" },
                { id: "eid586", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '-20px'}], position: 835, duration: 221, easing: "easeInOutQuad" },
                { id: "eid587", tween: [ "style", "${_a3b_hand_v}", "left", '0px', { fromValue: '-16px'}], position: 1056, duration: 525, easing: "easeInOutQuad" },
                { id: "eid588", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid589", tween: [ "style", "${_a3b_hand_v}", "left", '-20px', { fromValue: '-16px'}], position: 2265, duration: 221, easing: "easeInOutQuad" },
                { id: "eid590", tween: [ "style", "${_a3b_hand_v}", "left", '-8px', { fromValue: '-20px'}], position: 3170, duration: 309, easing: "easeInOutQuad" },
                { id: "eid591", tween: [ "style", "${_a3b_hand_v}", "left", '-20px', { fromValue: '-8px'}], position: 3479, duration: 236, easing: "easeInOutQuad" },
                { id: "eid592", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '-20px'}], position: 3869, duration: 486, easing: "easeInOutQuad" },
                { id: "eid593", tween: [ "style", "${_a3b_hand_v}", "left", '0px', { fromValue: '-16px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid574", tween: [ "style", "${_a3b_hand_v}", "top", '-3px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid575", tween: [ "style", "${_a3b_hand_v}", "top", '14px', { fromValue: '-3px'}], position: 525, duration: 221, easing: "easeInOutQuad" },
                { id: "eid576", tween: [ "style", "${_a3b_hand_v}", "top", '-3px', { fromValue: '14px'}], position: 835, duration: 221, easing: "easeInOutQuad" },
                { id: "eid577", tween: [ "style", "${_a3b_hand_v}", "top", '0px', { fromValue: '-3px'}], position: 1056, duration: 525, easing: "easeInOutQuad" },
                { id: "eid578", tween: [ "style", "${_a3b_hand_v}", "top", '-3px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid579", tween: [ "style", "${_a3b_hand_v}", "top", '14px', { fromValue: '-3px'}], position: 2265, duration: 221, easing: "easeInOutQuad" },
                { id: "eid580", tween: [ "style", "${_a3b_hand_v}", "top", '30px', { fromValue: '14px'}], position: 3170, duration: 309, easing: "easeInOutQuad" },
                { id: "eid581", tween: [ "style", "${_a3b_hand_v}", "top", '15px', { fromValue: '30px'}], position: 3479, duration: 236, easing: "easeInOutQuad" },
                { id: "eid582", tween: [ "style", "${_a3b_hand_v}", "top", '3px', { fromValue: '15px'}], position: 3869, duration: 486, easing: "easeInOutQuad" },
                { id: "eid583", tween: [ "style", "${_a3b_hand_v}", "top", '0px', { fromValue: '3px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid650", tween: [ "style", "${_a3b_hand_h}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid651", tween: [ "style", "${_a3b_hand_h}", "top", '0px', { fromValue: '10px'}], position: 835, duration: 750, easing: "easeInOutQuad" },
                { id: "eid652", tween: [ "style", "${_a3b_hand_h}", "top", '10px', { fromValue: '0px'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid653", tween: [ "style", "${_a3b_hand_h}", "top", '0px', { fromValue: '10px'}], position: 4429, duration: 741, easing: "easeInOutQuad" },
                { id: "eid737", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid738", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '8deg', { fromValue: '5deg'}], position: 525, duration: 221, easing: "easeInOutQuad" },
                { id: "eid739", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '5deg', { fromValue: '8deg'}], position: 840, duration: 220, easing: "easeInOutQuad" },
                { id: "eid740", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid741", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid742", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '8deg', { fromValue: '5deg'}], position: 2265, duration: 221, easing: "easeInOutQuad" },
                { id: "eid743", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '-8deg', { fromValue: '8deg'}], position: 3858, duration: 497, easing: "easeInOutQuad" },
                { id: "eid744", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 4425, duration: 730, easing: "easeInOutQuad" },
                { id: "eid717", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid718", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 835, duration: 525, easing: "easeInOutQuad" },
                { id: "eid719", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid720", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid682", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid683", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '9deg', { fromValue: '8deg'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid684", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '8deg', { fromValue: '9deg'}], position: 835, duration: 225, easing: "easeInOutQuad" },
                { id: "eid685", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid686", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid687", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '9deg', { fromValue: '8deg'}], position: 2265, duration: 225, easing: "easeInOutQuad" },
                { id: "eid688", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '5deg', { fromValue: '9deg'}], position: 3170, duration: 309, easing: "easeInOutQuad" },
                { id: "eid689", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '9deg', { fromValue: '5deg'}], position: 3479, duration: 236, easing: "easeInOutQuad" },
                { id: "eid690", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '-8deg', { fromValue: '9deg'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid691", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid633", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid634", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid635", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 835, duration: 0, easing: "easeInOutQuad" },
                { id: "eid636", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 1585, duration: 0, easing: "easeInOutQuad" },
                { id: "eid637", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 1740, duration: 0, easing: "easeInOutQuad" },
                { id: "eid638", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 2490, duration: 0, easing: "easeInOutQuad" },
                { id: "eid639", tween: [ "style", "${_a3b_kopf}", "left", '-7px', { fromValue: '0px'}], position: 3670, duration: 320, easing: "easeInOutQuad" },
                { id: "eid640", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '-7px'}], position: 3990, duration: 314, easing: "easeInOutQuad" },
                { id: "eid641", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 4429, duration: 0, easing: "easeInOutQuad" },
                { id: "eid642", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 5170, duration: 0, easing: "easeInOutQuad" },
                { id: "eid643", tween: [ "style", "${_a3b_kopf}", "left", '-10px', { fromValue: '0px'}], position: 5270, duration: 537, easing: "easeInOutQuad" },
                { id: "eid644", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '-10px'}], position: 5807, duration: 388, easing: "easeInOutQuad" },
                { id: "eid662", tween: [ "style", "${_a3b_ferrari}", "top", '-9px', { fromValue: '3px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid663", tween: [ "style", "${_a3b_ferrari}", "top", '4px', { fromValue: '-9px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid664", tween: [ "style", "${_a3b_ferrari}", "top", '-9px', { fromValue: '4px'}], position: 835, duration: 225, easing: "easeInOutQuad" },
                { id: "eid665", tween: [ "style", "${_a3b_ferrari}", "top", '3px', { fromValue: '-9px'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid666", tween: [ "style", "${_a3b_ferrari}", "top", '-9px', { fromValue: '3px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid667", tween: [ "style", "${_a3b_ferrari}", "top", '4px', { fromValue: '-9px'}], position: 2265, duration: 225, easing: "easeInOutQuad" },
                { id: "eid668", tween: [ "style", "${_a3b_ferrari}", "top", '32px', { fromValue: '4px'}], position: 3170, duration: 309, easing: "easeInOutQuad" },
                { id: "eid669", tween: [ "style", "${_a3b_ferrari}", "top", '8px', { fromValue: '32px'}], position: 3479, duration: 236, easing: "easeInOutQuad" },
                { id: "eid670", tween: [ "style", "${_a3b_ferrari}", "top", '15px', { fromValue: '8px'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid671", tween: [ "style", "${_a3b_ferrari}", "top", '7px', { fromValue: '15px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid612", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid613", tween: [ "style", "${_a3b_schulter_v}", "left", '-7px', { fromValue: '-3px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid614", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '-7px'}], position: 835, duration: 225, easing: "easeInOutQuad" },
                { id: "eid615", tween: [ "style", "${_a3b_schulter_v}", "left", '0px', { fromValue: '-3px'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid616", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid617", tween: [ "style", "${_a3b_schulter_v}", "left", '-7px', { fromValue: '-3px'}], position: 2265, duration: 225, easing: "easeInOutQuad" },
                { id: "eid618", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '-7px'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid619", tween: [ "style", "${_a3b_schulter_v}", "left", '0px', { fromValue: '-3px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid620", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid621", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '2deg', { fromValue: '1deg'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid622", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '1deg', { fromValue: '2deg'}], position: 835, duration: 225, easing: "easeInOutQuad" },
                { id: "eid623", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid624", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid625", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '2deg', { fromValue: '1deg'}], position: 2265, duration: 225, easing: "easeInOutQuad" },
                { id: "eid626", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '-1deg', { fromValue: '2deg'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid627", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid749", tween: [ "style", "${_a3b_arm_h}", "left", '24px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid750", tween: [ "style", "${_a3b_arm_h}", "left", '0px', { fromValue: '24px'}], position: 834, duration: 750, easing: "easeInOutQuad" },
                { id: "eid751", tween: [ "style", "${_a3b_arm_h}", "left", '24px', { fromValue: '0px'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid752", tween: [ "style", "${_a3b_arm_h}", "left", '0px', { fromValue: '24px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid721", tween: [ "style", "${_a3b_arm_v}", "top", '8px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid722", tween: [ "style", "${_a3b_arm_v}", "top", '14px', { fromValue: '8px'}], position: 745, duration: 5, easing: "easeInOutQuad" },
                { id: "eid723", tween: [ "style", "${_a3b_arm_v}", "top", '8px', { fromValue: '14px'}], position: 835, duration: 5, easing: "easeInOutQuad" },
                { id: "eid724", tween: [ "style", "${_a3b_arm_v}", "top", '0px', { fromValue: '8px'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid725", tween: [ "style", "${_a3b_arm_v}", "top", '8px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid726", tween: [ "style", "${_a3b_arm_v}", "top", '14px', { fromValue: '8px'}], position: 2485, duration: 5, easing: "easeInOutQuad" },
                { id: "eid727", tween: [ "style", "${_a3b_arm_v}", "top", '10px', { fromValue: '14px'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid728", tween: [ "style", "${_a3b_arm_v}", "top", '0px', { fromValue: '10px'}], position: 4425, duration: 730, easing: "easeInOutQuad" },
                { id: "eid594", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid595", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '8deg', { fromValue: '7deg'}], position: 525, duration: 221, easing: "easeInOutQuad" },
                { id: "eid596", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '7deg', { fromValue: '8deg'}], position: 835, duration: 221, easing: "easeInOutQuad" },
                { id: "eid597", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 1056, duration: 525, easing: "easeInOutQuad" },
                { id: "eid598", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid599", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '8deg', { fromValue: '7deg'}], position: 2265, duration: 221, easing: "easeInOutQuad" },
                { id: "eid600", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '5deg', { fromValue: '8deg'}], position: 3170, duration: 309, easing: "easeInOutQuad" },
                { id: "eid601", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '8deg', { fromValue: '5deg'}], position: 3479, duration: 236, easing: "easeInOutQuad" },
                { id: "eid602", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '-7deg', { fromValue: '8deg'}], position: 3869, duration: 486, easing: "easeInOutQuad" },
                { id: "eid603", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid672", tween: [ "style", "${_a3b_ferrari}", "left", '-16px', { fromValue: '3px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid673", tween: [ "style", "${_a3b_ferrari}", "left", '-21px', { fromValue: '-16px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid674", tween: [ "style", "${_a3b_ferrari}", "left", '-16px', { fromValue: '-21px'}], position: 835, duration: 225, easing: "easeInOutQuad" },
                { id: "eid675", tween: [ "style", "${_a3b_ferrari}", "left", '3px', { fromValue: '-16px'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid676", tween: [ "style", "${_a3b_ferrari}", "left", '-16px', { fromValue: '3px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid677", tween: [ "style", "${_a3b_ferrari}", "left", '-21px', { fromValue: '-16px'}], position: 2265, duration: 225, easing: "easeInOutQuad" },
                { id: "eid678", tween: [ "style", "${_a3b_ferrari}", "left", '-9px', { fromValue: '-21px'}], position: 3170, duration: 309, easing: "easeInOutQuad" },
                { id: "eid679", tween: [ "style", "${_a3b_ferrari}", "left", '-22px', { fromValue: '-9px'}], position: 3479, duration: 236, easing: "easeInOutQuad" },
                { id: "eid680", tween: [ "style", "${_a3b_ferrari}", "left", '-11px', { fromValue: '-22px'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid681", tween: [ "style", "${_a3b_ferrari}", "left", '-1px', { fromValue: '-11px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid745", tween: [ "style", "${_a3b_arm_h}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid746", tween: [ "style", "${_a3b_arm_h}", "top", '0px', { fromValue: '10px'}], position: 834, duration: 750, easing: "easeInOutQuad" },
                { id: "eid747", tween: [ "style", "${_a3b_arm_h}", "top", '10px', { fromValue: '0px'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid748", tween: [ "style", "${_a3b_arm_h}", "top", '0px', { fromValue: '10px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid628", tween: [ "style", "${_a3b_kopf}", "top", '67px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid629", tween: [ "style", "${_a3b_kopf}", "top", '0px', { fromValue: '67px'}], position: 835, duration: 750, easing: "easeInOutQuad" },
                { id: "eid630", tween: [ "style", "${_a3b_kopf}", "top", '67px', { fromValue: '0px'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid631", tween: [ "style", "${_a3b_kopf}", "top", '-67px', { fromValue: '67px'}], position: 3856, duration: 573, easing: "easeInOutQuad" },
                { id: "eid632", tween: [ "style", "${_a3b_kopf}", "top", '0px', { fromValue: '-67px'}], position: 4429, duration: 741, easing: "easeInOutQuad" },
                { id: "eid713", tween: [ "style", "${_a3b_bein_v}", "left", '-14px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid714", tween: [ "style", "${_a3b_bein_v}", "left", '0px', { fromValue: '-14px'}], position: 835, duration: 525, easing: "easeInOutQuad" },
                { id: "eid715", tween: [ "style", "${_a3b_bein_v}", "left", '-14px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid716", tween: [ "style", "${_a3b_bein_v}", "left", '0px', { fromValue: '-14px'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid692", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid693", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 835, duration: 0, easing: "easeInOutQuad" },
                { id: "eid694", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 1740, duration: 0, easing: "easeInOutQuad" },
                { id: "eid695", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 5270, duration: 0, easing: "easeInOutQuad" },
                { id: "eid696", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 5807, duration: 0, easing: "easeInOutQuad" },
                { id: "eid697", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 6195, duration: 0, easing: "easeInOutQuad" },
                { id: "eid729", tween: [ "style", "${_a3b_arm_v}", "left", '-11px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid730", tween: [ "style", "${_a3b_arm_v}", "left", '-20px', { fromValue: '-11px'}], position: 525, duration: 221, easing: "easeInOutQuad" },
                { id: "eid731", tween: [ "style", "${_a3b_arm_v}", "left", '-11px', { fromValue: '-20px'}], position: 840, duration: 220, easing: "easeInOutQuad" },
                { id: "eid732", tween: [ "style", "${_a3b_arm_v}", "left", '0px', { fromValue: '-11px'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid733", tween: [ "style", "${_a3b_arm_v}", "left", '-11px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid734", tween: [ "style", "${_a3b_arm_v}", "left", '-20px', { fromValue: '-11px'}], position: 2265, duration: 221, easing: "easeInOutQuad" },
                { id: "eid735", tween: [ "style", "${_a3b_arm_v}", "left", '-15px', { fromValue: '-20px'}], position: 3858, duration: 497, easing: "easeInOutQuad" },
                { id: "eid736", tween: [ "style", "${_a3b_arm_v}", "left", '0px', { fromValue: '-15px'}], position: 4425, duration: 730, easing: "easeInOutQuad" },
                { id: "eid604", tween: [ "style", "${_a3b_schulter_v}", "top", '6px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid605", tween: [ "style", "${_a3b_schulter_v}", "top", '15px', { fromValue: '6px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid606", tween: [ "style", "${_a3b_schulter_v}", "top", '6px', { fromValue: '15px'}], position: 835, duration: 225, easing: "easeInOutQuad" },
                { id: "eid607", tween: [ "style", "${_a3b_schulter_v}", "top", '0px', { fromValue: '6px'}], position: 1060, duration: 525, easing: "easeInOutQuad" },
                { id: "eid608", tween: [ "style", "${_a3b_schulter_v}", "top", '6px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid609", tween: [ "style", "${_a3b_schulter_v}", "top", '15px', { fromValue: '6px'}], position: 2265, duration: 225, easing: "easeInOutQuad" },
                { id: "eid610", tween: [ "style", "${_a3b_schulter_v}", "top", '-6px', { fromValue: '15px'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid611", tween: [ "style", "${_a3b_schulter_v}", "top", '0px', { fromValue: '-6px'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid645", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid646", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 835, duration: 750, easing: "easeInOutQuad" },
                { id: "eid647", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid648", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '-8deg', { fromValue: '8deg'}], position: 3856, duration: 573, easing: "easeInOutQuad" },
                { id: "eid649", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 4429, duration: 741, easing: "easeInOutQuad" },
                { id: "eid709", tween: [ "style", "${_a3b_bein_v}", "top", '7px', { fromValue: '0px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid710", tween: [ "style", "${_a3b_bein_v}", "top", '0px', { fromValue: '7px'}], position: 835, duration: 525, easing: "easeInOutQuad" },
                { id: "eid711", tween: [ "style", "${_a3b_bein_v}", "top", '7px', { fromValue: '0px'}], position: 1740, duration: 525, easing: "easeInOutQuad" },
                { id: "eid712", tween: [ "style", "${_a3b_bein_v}", "top", '0px', { fromValue: '7px'}], position: 3856, duration: 499, easing: "easeInOutQuad" },
                { id: "eid703", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid704", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 835, duration: 0, easing: "easeInOutQuad" },
                { id: "eid705", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1740, duration: 0, easing: "easeInOutQuad" },
                { id: "eid706", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5270, duration: 0, easing: "easeInOutQuad" },
                { id: "eid707", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5807, duration: 0, easing: "easeInOutQuad" },
                { id: "eid708", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6195, duration: 0, easing: "easeInOutQuad" },
                { id: "eid753", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid754", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 834, duration: 750, easing: "easeInOutQuad" },
                { id: "eid755", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid756", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 4429, duration: 730, easing: "easeInOutQuad" },
                { id: "eid658", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid659", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 835, duration: 750, easing: "easeInOutQuad" },
                { id: "eid660", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid661", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 4429, duration: 741, easing: "easeInOutQuad" },
                { id: "eid698", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid699", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '0px'}], position: 835, duration: 0, easing: "easeInOutQuad" },
                { id: "eid700", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '0px'}], position: 1740, duration: 0, easing: "easeInOutQuad" },
                { id: "eid701", tween: [ "style", "${_a3b_corpus}", "left", '-4px', { fromValue: '0px'}], position: 5270, duration: 537, easing: "easeInOutQuad" },
                { id: "eid702", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '-4px'}], position: 5807, duration: 388, easing: "easeInOutQuad" },
                { id: "eid654", tween: [ "style", "${_a3b_hand_h}", "left", '24px', { fromValue: '0px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid655", tween: [ "style", "${_a3b_hand_h}", "left", '0px', { fromValue: '24px'}], position: 835, duration: 750, easing: "easeInOutQuad" },
                { id: "eid656", tween: [ "style", "${_a3b_hand_h}", "left", '24px', { fromValue: '0px'}], position: 1740, duration: 750, easing: "easeInOutQuad" },
                { id: "eid657", tween: [ "style", "${_a3b_hand_h}", "left", '0px', { fromValue: '24px'}], position: 4429, duration: 741, easing: "easeInOutQuad" }            ]
        }
    }
},
"sym_b1a": {
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
                    id: 'b1a_zeitung',
                    type: 'image',
                    rect: ['2px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1a_zeitung.svg', '0px', '0px']
                },
                {
                    id: 'b1a_kopf',
                    type: 'image',
                    rect: ['2px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'b1a_kimono',
                    type: 'image',
                    rect: ['2px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1a_kimono.svg', '0px', '0px']
                },
                {
                    id: 'b1a_hand_v',
                    type: 'image',
                    rect: ['2px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1a_hand_v.svg', '0px', '0px']
                },
                {
                    id: 'b1a_hand_h',
                    type: 'image',
                    rect: ['2px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1a_hand_h.svg', '0px', '0px']
                },
                {
                    id: 'b1a_fuss_v',
                    type: 'image',
                    rect: ['2px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1a_fuss_v.svg', '0px', '0px']
                },
                {
                    id: 'b1a_fuss_h',
                    type: 'image',
                    rect: ['2px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1a_fuss_h.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b1a_hand_v}": [
                ["style", "top", '3px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1a_kimono}": [
                ["style", "top", '3px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1a_zeitung}": [
                ["style", "top", '3px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1539px'],
                ["style", "width", '2050px']
            ],
            "${_b1a_fuss_h}": [
                ["style", "top", '3px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1a_kopf}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px']
            ],
            "${_b1a_fuss_v}": [
                ["style", "top", '3px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1a_hand_h}": [
                ["style", "top", '3px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            labels: {
                "oo_b1a": 0
            },
            timeline: [
                { id: "eid800", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 0, duration: 375 },
                { id: "eid801", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 375, duration: 375 },
                { id: "eid802", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 750, duration: 375 },
                { id: "eid803", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 1125, duration: 375 },
                { id: "eid804", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 1500, duration: 375 },
                { id: "eid805", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 1875, duration: 375 },
                { id: "eid806", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 2250, duration: 375 },
                { id: "eid807", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 2625, duration: 375 },
                { id: "eid808", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 3000, duration: 375 },
                { id: "eid809", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 3375, duration: 375 },
                { id: "eid810", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 3750, duration: 375 },
                { id: "eid811", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 4125, duration: 375 },
                { id: "eid812", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 4500, duration: 375 },
                { id: "eid813", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 4875, duration: 375 },
                { id: "eid814", tween: [ "style", "${_b1a_fuss_v}", "left", '1px', { fromValue: '2px'}], position: 5250, duration: 375 },
                { id: "eid815", tween: [ "style", "${_b1a_fuss_v}", "left", '2px', { fromValue: '1px'}], position: 5625, duration: 375 },
                { id: "eid856", tween: [ "transform", "${_b1a_kimono}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 1500 },
                { id: "eid857", tween: [ "transform", "${_b1a_kimono}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 1500, duration: 1500 },
                { id: "eid858", tween: [ "transform", "${_b1a_kimono}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 3000, duration: 1500 },
                { id: "eid859", tween: [ "transform", "${_b1a_kimono}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 4500, duration: 1500 },
                { id: "eid864", tween: [ "transform", "${_b1a_kopf}", "scaleY", '0.99', { fromValue: '1'}], position: 0, duration: 1500 },
                { id: "eid865", tween: [ "transform", "${_b1a_kopf}", "scaleY", '1', { fromValue: '0.99'}], position: 1500, duration: 1500 },
                { id: "eid866", tween: [ "transform", "${_b1a_kopf}", "scaleY", '1', { fromValue: '1'}], position: 4500, duration: 0 },
                { id: "eid867", tween: [ "transform", "${_b1a_kopf}", "scaleY", '1', { fromValue: '1'}], position: 6000, duration: 0 },
                { id: "eid877", tween: [ "style", "${_b1a_zeitung}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid878", tween: [ "style", "${_b1a_zeitung}", "top", '3px', { fromValue: '3px'}], position: 3000, duration: 0 },
                { id: "eid879", tween: [ "style", "${_b1a_zeitung}", "top", '3px', { fromValue: '3px'}], position: 6000, duration: 0 },
                { id: "eid816", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 375 },
                { id: "eid817", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 375, duration: 375 },
                { id: "eid818", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 750, duration: 375 },
                { id: "eid819", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1125, duration: 375 },
                { id: "eid820", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 1500, duration: 375 },
                { id: "eid821", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1875, duration: 375 },
                { id: "eid822", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 2250, duration: 375 },
                { id: "eid823", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 2625, duration: 375 },
                { id: "eid824", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 3000, duration: 375 },
                { id: "eid825", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 3375, duration: 375 },
                { id: "eid826", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 3750, duration: 375 },
                { id: "eid827", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 4125, duration: 375 },
                { id: "eid828", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 4500, duration: 375 },
                { id: "eid829", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 4875, duration: 375 },
                { id: "eid830", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 5250, duration: 375 },
                { id: "eid831", tween: [ "transform", "${_b1a_fuss_v}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 5625, duration: 375 },
                { id: "eid873", tween: [ "style", "${_b1a_kopf}", "left", '-7px', { fromValue: '0px'}], position: 0, duration: 1500 },
                { id: "eid874", tween: [ "style", "${_b1a_kopf}", "left", '-2px', { fromValue: '-7px'}], position: 1500, duration: 1500 },
                { id: "eid875", tween: [ "style", "${_b1a_kopf}", "left", '-9px', { fromValue: '-2px'}], position: 3000, duration: 1500 },
                { id: "eid876", tween: [ "style", "${_b1a_kopf}", "left", '0px', { fromValue: '-9px'}], position: 4500, duration: 1500 },
                { id: "eid847", tween: [ "transform", "${_b1a_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid848", tween: [ "transform", "${_b1a_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid849", tween: [ "transform", "${_b1a_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid838", tween: [ "style", "${_b1a_hand_v}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid839", tween: [ "style", "${_b1a_hand_v}", "top", '3px', { fromValue: '3px'}], position: 3000, duration: 0 },
                { id: "eid840", tween: [ "style", "${_b1a_hand_v}", "top", '3px', { fromValue: '3px'}], position: 6000, duration: 0 },
                { id: "eid836", tween: [ "style", "${_b1a_hand_h}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid868", tween: [ "transform", "${_b1a_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid869", tween: [ "transform", "${_b1a_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid870", tween: [ "transform", "${_b1a_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid860", tween: [ "style", "${_b1a_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid861", tween: [ "style", "${_b1a_kopf}", "top", '-2px', { fromValue: '0px'}], position: 1500, duration: 1500 },
                { id: "eid862", tween: [ "style", "${_b1a_kopf}", "top", '4px', { fromValue: '-2px'}], position: 3000, duration: 1500 },
                { id: "eid863", tween: [ "style", "${_b1a_kopf}", "top", '0px', { fromValue: '4px'}], position: 4500, duration: 1500 },
                { id: "eid880", tween: [ "style", "${_b1a_zeitung}", "left", '-3px', { fromValue: '2px'}], position: 0, duration: 1500 },
                { id: "eid881", tween: [ "style", "${_b1a_zeitung}", "left", '-1px', { fromValue: '-3px'}], position: 1500, duration: 750 },
                { id: "eid882", tween: [ "style", "${_b1a_zeitung}", "left", '2px', { fromValue: '-1px'}], position: 2250, duration: 750 },
                { id: "eid883", tween: [ "style", "${_b1a_zeitung}", "left", '-3px', { fromValue: '2px'}], position: 3000, duration: 1500 },
                { id: "eid884", tween: [ "style", "${_b1a_zeitung}", "left", '-1px', { fromValue: '-3px'}], position: 4500, duration: 750 },
                { id: "eid885", tween: [ "style", "${_b1a_zeitung}", "left", '2px', { fromValue: '-1px'}], position: 5250, duration: 750 },
                { id: "eid832", tween: [ "style", "${_b1a_hand_h}", "top", '7px', { fromValue: '3px'}], position: 0, duration: 1500 },
                { id: "eid833", tween: [ "style", "${_b1a_hand_h}", "top", '3px', { fromValue: '7px'}], position: 1500, duration: 1500 },
                { id: "eid834", tween: [ "style", "${_b1a_hand_h}", "top", '7px', { fromValue: '3px'}], position: 3000, duration: 1500 },
                { id: "eid835", tween: [ "style", "${_b1a_hand_h}", "top", '3px', { fromValue: '7px'}], position: 4500, duration: 1500 },
                { id: "eid841", tween: [ "style", "${_b1a_hand_v}", "left", '-3px', { fromValue: '2px'}], position: 0, duration: 1500 },
                { id: "eid842", tween: [ "style", "${_b1a_hand_v}", "left", '-1px', { fromValue: '-3px'}], position: 1500, duration: 750 },
                { id: "eid843", tween: [ "style", "${_b1a_hand_v}", "left", '2px', { fromValue: '-1px'}], position: 2250, duration: 750 },
                { id: "eid844", tween: [ "style", "${_b1a_hand_v}", "left", '-3px', { fromValue: '2px'}], position: 3000, duration: 1500 },
                { id: "eid845", tween: [ "style", "${_b1a_hand_v}", "left", '-1px', { fromValue: '-3px'}], position: 4500, duration: 750 },
                { id: "eid846", tween: [ "style", "${_b1a_hand_v}", "left", '2px', { fromValue: '-1px'}], position: 5250, duration: 750 },
                { id: "eid853", tween: [ "style", "${_b1a_kimono}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid854", tween: [ "style", "${_b1a_kimono}", "left", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
                { id: "eid855", tween: [ "style", "${_b1a_kimono}", "left", '2px', { fromValue: '2px'}], position: 6000, duration: 0 },
                { id: "eid850", tween: [ "style", "${_b1a_kimono}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid851", tween: [ "style", "${_b1a_kimono}", "top", '3px', { fromValue: '3px'}], position: 3000, duration: 0 },
                { id: "eid852", tween: [ "style", "${_b1a_kimono}", "top", '3px', { fromValue: '3px'}], position: 6000, duration: 0 },
                { id: "eid886", tween: [ "transform", "${_b1a_zeitung}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid887", tween: [ "transform", "${_b1a_zeitung}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid888", tween: [ "transform", "${_b1a_zeitung}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid782", tween: [ "style", "${_b1a_fuss_h}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid871", tween: [ "transform", "${_b1a_kopf}", "scaleX", '0.99', { fromValue: '1'}], position: 3000, duration: 1500 },
                { id: "eid872", tween: [ "transform", "${_b1a_kopf}", "scaleX", '1', { fromValue: '0.99'}], position: 4500, duration: 1500 },
                { id: "eid837", tween: [ "transform", "${_b1a_hand_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid783", tween: [ "transform", "${_b1a_fuss_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid781", tween: [ "style", "${_b1a_fuss_h}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid784", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 0, duration: 375 },
                { id: "eid785", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 375, duration: 375 },
                { id: "eid786", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 750, duration: 375 },
                { id: "eid787", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 1125, duration: 375 },
                { id: "eid788", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 1500, duration: 375 },
                { id: "eid789", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 1875, duration: 375 },
                { id: "eid790", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 2250, duration: 375 },
                { id: "eid791", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 2625, duration: 375 },
                { id: "eid792", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 3000, duration: 375 },
                { id: "eid793", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 3375, duration: 375 },
                { id: "eid794", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 3750, duration: 375 },
                { id: "eid795", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 4125, duration: 375 },
                { id: "eid796", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 4500, duration: 375 },
                { id: "eid797", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 4875, duration: 375 },
                { id: "eid798", tween: [ "style", "${_b1a_fuss_v}", "top", '-6px', { fromValue: '3px'}], position: 5250, duration: 375 },
                { id: "eid799", tween: [ "style", "${_b1a_fuss_v}", "top", '3px', { fromValue: '-6px'}], position: 5625, duration: 375 }            ]
        }
    }
},
"sym_b1b": {
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
                    id: 'b1b_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'b1b_kimono',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1b_kimono.svg', '0px', '0px']
                },
                {
                    id: 'b1b_hand_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1b_hand_v.svg', '0px', '0px']
                },
                {
                    id: 'b1b_hand_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1b_hand_h.svg', '0px', '0px']
                },
                {
                    id: 'b1b_fuss_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1b_fuss_v.svg', '0px', '0px']
                },
                {
                    id: 'b1b_fuss_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1b_fuss_h.svg', '0px', '0px']
                },
                {
                    id: 'b1b_buch',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b1b_buch.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b1b_kimono}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1b_fuss_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1b_fuss_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_b1b_hand_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1b_kopf}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px']
            ],
            "${_b1b_buch}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1b_hand_v}": [
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
            duration: 6000,
            autoPlay: true,
            labels: {
                "oo_b1b": 0
            },
            timeline: [
                { id: "eid958", tween: [ "style", "${_b1b_hand_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid959", tween: [ "style", "${_b1b_hand_v}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid960", tween: [ "style", "${_b1b_hand_v}", "top", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
                { id: "eid902", tween: [ "style", "${_b1b_fuss_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid889", tween: [ "style", "${_b1b_buch}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid890", tween: [ "style", "${_b1b_buch}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid891", tween: [ "style", "${_b1b_buch}", "top", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
                { id: "eid957", tween: [ "transform", "${_b1b_hand_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid892", tween: [ "style", "${_b1b_buch}", "left", '-5px', { fromValue: '0px'}], position: 0, duration: 1500 },
                { id: "eid893", tween: [ "style", "${_b1b_buch}", "left", '-3px', { fromValue: '-5px'}], position: 1500, duration: 750 },
                { id: "eid894", tween: [ "style", "${_b1b_buch}", "left", '0px', { fromValue: '-3px'}], position: 2250, duration: 750 },
                { id: "eid895", tween: [ "style", "${_b1b_buch}", "left", '-5px', { fromValue: '0px'}], position: 3000, duration: 1500 },
                { id: "eid896", tween: [ "style", "${_b1b_buch}", "left", '-3px', { fromValue: '-5px'}], position: 4500, duration: 750 },
                { id: "eid897", tween: [ "style", "${_b1b_buch}", "left", '0px', { fromValue: '-3px'}], position: 5250, duration: 750 },
                { id: "eid973", tween: [ "style", "${_b1b_kimono}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid974", tween: [ "style", "${_b1b_kimono}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid975", tween: [ "style", "${_b1b_kimono}", "left", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
                { id: "eid920", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 0, duration: 375 },
                { id: "eid921", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 375, duration: 375 },
                { id: "eid922", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 750, duration: 375 },
                { id: "eid923", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 1125, duration: 375 },
                { id: "eid924", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 1500, duration: 375 },
                { id: "eid925", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 1875, duration: 375 },
                { id: "eid926", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 2250, duration: 375 },
                { id: "eid927", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 2625, duration: 375 },
                { id: "eid928", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 3000, duration: 375 },
                { id: "eid929", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 3375, duration: 375 },
                { id: "eid930", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 3750, duration: 375 },
                { id: "eid931", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 4125, duration: 375 },
                { id: "eid932", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 4500, duration: 375 },
                { id: "eid933", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 4875, duration: 375 },
                { id: "eid934", tween: [ "style", "${_b1b_fuss_v}", "left", '-1px', { fromValue: '0px'}], position: 5250, duration: 375 },
                { id: "eid935", tween: [ "style", "${_b1b_fuss_v}", "left", '0px', { fromValue: '-1px'}], position: 5625, duration: 375 },
                { id: "eid901", tween: [ "style", "${_b1b_fuss_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid903", tween: [ "transform", "${_b1b_fuss_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid997", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 1125 },
                { id: "eid998", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1125, duration: 375 },
                { id: "eid999", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 1125 },
                { id: "eid1000", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2625, duration: 375 },
                { id: "eid1001", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 3000, duration: 1125 },
                { id: "eid1002", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 4125, duration: 375 },
                { id: "eid1003", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 4500, duration: 1125 },
                { id: "eid1004", tween: [ "transform", "${_b1b_kopf}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 5625, duration: 375 },
                { id: "eid970", tween: [ "style", "${_b1b_kimono}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid971", tween: [ "style", "${_b1b_kimono}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid972", tween: [ "style", "${_b1b_kimono}", "top", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
                { id: "eid956", tween: [ "style", "${_b1b_hand_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid961", tween: [ "style", "${_b1b_hand_v}", "left", '-5px', { fromValue: '0px'}], position: 0, duration: 1500 },
                { id: "eid962", tween: [ "style", "${_b1b_hand_v}", "left", '-3px', { fromValue: '-5px'}], position: 1500, duration: 750 },
                { id: "eid963", tween: [ "style", "${_b1b_hand_v}", "left", '0px', { fromValue: '-3px'}], position: 2250, duration: 750 },
                { id: "eid964", tween: [ "style", "${_b1b_hand_v}", "left", '-5px', { fromValue: '0px'}], position: 3000, duration: 1500 },
                { id: "eid965", tween: [ "style", "${_b1b_hand_v}", "left", '-3px', { fromValue: '-5px'}], position: 4500, duration: 750 },
                { id: "eid966", tween: [ "style", "${_b1b_hand_v}", "left", '0px', { fromValue: '-3px'}], position: 5250, duration: 750 },
                { id: "eid989", tween: [ "style", "${_b1b_kopf}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 1125 },
                { id: "eid990", tween: [ "style", "${_b1b_kopf}", "left", '-4px', { fromValue: '2px'}], position: 1125, duration: 375 },
                { id: "eid991", tween: [ "style", "${_b1b_kopf}", "left", '4px', { fromValue: '-4px'}], position: 1500, duration: 1125 },
                { id: "eid992", tween: [ "style", "${_b1b_kopf}", "left", '0px', { fromValue: '4px'}], position: 2625, duration: 375 },
                { id: "eid993", tween: [ "style", "${_b1b_kopf}", "left", '2px', { fromValue: '0px'}], position: 3000, duration: 1125 },
                { id: "eid994", tween: [ "style", "${_b1b_kopf}", "left", '-4px', { fromValue: '2px'}], position: 4125, duration: 375 },
                { id: "eid995", tween: [ "style", "${_b1b_kopf}", "left", '4px', { fromValue: '-4px'}], position: 4500, duration: 1125 },
                { id: "eid996", tween: [ "style", "${_b1b_kopf}", "left", '0px', { fromValue: '4px'}], position: 5625, duration: 375 },
                { id: "eid967", tween: [ "transform", "${_b1b_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid968", tween: [ "transform", "${_b1b_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid969", tween: [ "transform", "${_b1b_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid936", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 375 },
                { id: "eid937", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 375, duration: 375 },
                { id: "eid938", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 750, duration: 375 },
                { id: "eid939", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1125, duration: 375 },
                { id: "eid940", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 1500, duration: 375 },
                { id: "eid941", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1875, duration: 375 },
                { id: "eid942", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 2250, duration: 375 },
                { id: "eid943", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 2625, duration: 375 },
                { id: "eid944", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 3000, duration: 375 },
                { id: "eid945", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 3375, duration: 375 },
                { id: "eid946", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 3750, duration: 375 },
                { id: "eid947", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 4125, duration: 375 },
                { id: "eid948", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 4500, duration: 375 },
                { id: "eid949", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 4875, duration: 375 },
                { id: "eid950", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 5250, duration: 375 },
                { id: "eid951", tween: [ "transform", "${_b1b_fuss_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 5625, duration: 375 },
                { id: "eid976", tween: [ "transform", "${_b1b_kimono}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 1500 },
                { id: "eid977", tween: [ "transform", "${_b1b_kimono}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1500, duration: 1500 },
                { id: "eid978", tween: [ "transform", "${_b1b_kimono}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 3000, duration: 1500 },
                { id: "eid979", tween: [ "transform", "${_b1b_kimono}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 4500, duration: 1500 },
                { id: "eid980", tween: [ "style", "${_b1b_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid981", tween: [ "style", "${_b1b_kopf}", "top", '-4px', { fromValue: '0px'}], position: 1125, duration: 375 },
                { id: "eid982", tween: [ "style", "${_b1b_kopf}", "top", '3px', { fromValue: '-4px'}], position: 1500, duration: 1125 },
                { id: "eid983", tween: [ "style", "${_b1b_kopf}", "top", '0px', { fromValue: '3px'}], position: 3000, duration: 1125 },
                { id: "eid984", tween: [ "style", "${_b1b_kopf}", "top", '-4px', { fromValue: '0px'}], position: 4125, duration: 375 },
                { id: "eid985", tween: [ "style", "${_b1b_kopf}", "top", '3px', { fromValue: '-4px'}], position: 4500, duration: 1125 },
                { id: "eid986", tween: [ "style", "${_b1b_kopf}", "top", '0px', { fromValue: '3px'}], position: 5625, duration: 375 },
                { id: "eid898", tween: [ "transform", "${_b1b_buch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid899", tween: [ "transform", "${_b1b_buch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid900", tween: [ "transform", "${_b1b_buch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid952", tween: [ "style", "${_b1b_hand_h}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 1500 },
                { id: "eid953", tween: [ "style", "${_b1b_hand_h}", "top", '0px', { fromValue: '-4px'}], position: 1500, duration: 1500 },
                { id: "eid954", tween: [ "style", "${_b1b_hand_h}", "top", '-4px', { fromValue: '0px'}], position: 3000, duration: 1500 },
                { id: "eid955", tween: [ "style", "${_b1b_hand_h}", "top", '0px', { fromValue: '-4px'}], position: 4500, duration: 1500 },
                { id: "eid904", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 0, duration: 375 },
                { id: "eid905", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 375, duration: 375 },
                { id: "eid906", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 750, duration: 375 },
                { id: "eid907", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 1125, duration: 375 },
                { id: "eid908", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 1500, duration: 375 },
                { id: "eid909", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 1875, duration: 375 },
                { id: "eid910", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 2250, duration: 375 },
                { id: "eid911", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 2625, duration: 375 },
                { id: "eid912", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 3000, duration: 375 },
                { id: "eid913", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 3375, duration: 375 },
                { id: "eid914", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 3750, duration: 375 },
                { id: "eid915", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 4125, duration: 375 },
                { id: "eid916", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 4500, duration: 375 },
                { id: "eid917", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 4875, duration: 375 },
                { id: "eid918", tween: [ "style", "${_b1b_fuss_v}", "top", '9px', { fromValue: '0px'}], position: 5250, duration: 375 },
                { id: "eid919", tween: [ "style", "${_b1b_fuss_v}", "top", '0px', { fromValue: '9px'}], position: 5625, duration: 375 },
                { id: "eid987", tween: [ "transform", "${_b1b_kopf}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid988", tween: [ "transform", "${_b1b_kopf}", "scaleY", '1', { fromValue: '1'}], position: 6000, duration: 0 }            ]
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
                    id: 'sym_a3a',
                    type: 'rect',
                    rect: ['-1010px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_a3b',
                    type: 'rect',
                    rect: ['-1010px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'btxtb_1',
                    type: 'image',
                    rect: ['-41286px', '-1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btxtb_12.svg', '0px', '0px']
                },
                {
                    id: 'btxta_3',
                    type: 'image',
                    rect: ['-41286px', '-1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btxta_32.svg', '0px', '0px']
                },
                {
                    id: 'btxta_2',
                    type: 'image',
                    rect: ['-41286px', '-1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btxta_22.svg', '0px', '0px']
                },
                {
                    id: 'btxta_1',
                    type: 'image',
                    rect: ['-41286px', '-1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/btxta_12.svg', '0px', '0px']
                },
                {
                    id: 'bheada_1',
                    type: 'image',
                    rect: ['-40062px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bheada_12.svg', '0px', '0px']
                },
                {
                    id: 'bheada_2',
                    type: 'image',
                    rect: ['-40062px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bheada_22.svg', '0px', '0px']
                },
                {
                    id: 'bheadb_1',
                    type: 'image',
                    rect: ['-40062px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bheadb_12.svg', '0px', '0px']
                },
                {
                    id: 'bheadb_2',
                    type: 'image',
                    rect: ['-40062px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bheadb_22.svg', '0px', '0px']
                },
                {
                    id: 'sym_b1a',
                    type: 'rect',
                    rect: ['-1012px', '-3px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_b1b',
                    type: 'rect',
                    rect: ['-1010px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_b1b',
                symbolName: 'sym_b1b',
                autoPlay: {

               }
            },
            {
                id: 'sym_a3a',
                symbolName: 'sym_a3a',
                autoPlay: {

               }
            },
            {
                id: 'sym_a3b',
                symbolName: 'sym_a3b',
                autoPlay: {

               }
            },
            {
                id: 'sym_b1a',
                symbolName: 'sym_b1a',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_a3b}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_btxta_3}": [
                ["style", "left", '2070px'],
                ["style", "top", '0px']
            ],
            "${_btxta_1}": [
                ["style", "left", '2070px'],
                ["style", "top", '0px']
            ],
            "${_bheadb_2}": [
                ["style", "left", '3730px'],
                ["style", "top", '0px']
            ],
            "${_bheada_1}": [
                ["style", "left", '3735px'],
                ["style", "top", '0px']
            ],
            "${_sym_a3a}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_bheada_2}": [
                ["style", "left", '3730px'],
                ["style", "top", '0px']
            ],
            "${_sym_b1b}": [
                ["style", "left", '5490px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '7540px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bheadb_1}": [
                ["style", "left", '3730px'],
                ["style", "top", '0px']
            ],
            "${_btxta_2}": [
                ["style", "left", '2070px'],
                ["style", "top", '0px']
            ],
            "${_btxtb_1}": [
                ["style", "left", '2070px'],
                ["style", "top", '0px']
            ],
            "${_sym_b1a}": [
                ["style", "left", '5490px'],
                ["style", "top", '0px']
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
                { id: "eid1500", tween: [ "style", "${_btxta_3}", "left", '2070px', { fromValue: '2070px'}], position: 0, duration: 0 },
                { id: "eid1551", tween: [ "style", "${_btxta_3}", "left", '1920px', { fromValue: '2070px'}], position: 3500, duration: 1750 },
                { id: "eid1498", tween: [ "style", "${_btxtb_1}", "left", '2070px', { fromValue: '2070px'}], position: 0, duration: 0 },
                { id: "eid1548", tween: [ "style", "${_btxtb_1}", "left", '1770px', { fromValue: '2070px'}], position: 3500, duration: 1750 },
                { id: "eid1506", tween: [ "style", "${_sym_b1a}", "left", '5490px', { fromValue: '5490px'}], position: 0, duration: 0 },
                { id: "eid1567", tween: [ "style", "${_sym_b1a}", "left", '5090px', { fromValue: '5490px'}], position: 7500, duration: 2000 },
                { id: "eid1493", tween: [ "style", "${_sym_a3b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1486", tween: [ "style", "${_btxta_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1472", tween: [ "style", "${_sym_b1b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1484", tween: [ "style", "${_btxta_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1539", tween: [ "style", "${_btxta_1}", "top", '0px', { fromValue: '0px'}], position: 10000, duration: 0 },
                { id: "eid1491", tween: [ "style", "${_btxtb_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1478", tween: [ "style", "${_bheadb_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1482", tween: [ "style", "${_bheada_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1499", tween: [ "style", "${_btxta_1}", "left", '2070px', { fromValue: '2070px'}], position: 0, duration: 0 },
                { id: "eid1549", tween: [ "style", "${_btxta_1}", "left", '1770px', { fromValue: '2070px'}], position: 3500, duration: 1750 },
                { id: "eid1489", tween: [ "style", "${_btxta_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1504", tween: [ "style", "${_bheada_2}", "left", '3730px', { fromValue: '3730px'}], position: 0, duration: 0 },
                { id: "eid1562", tween: [ "style", "${_bheada_2}", "left", '3530px', { fromValue: '3730px'}], position: 5250, duration: 1750 },
                { id: "eid1507", tween: [ "style", "${_sym_b1b}", "left", '5490px', { fromValue: '5490px'}], position: 0, duration: 0 },
                { id: "eid1566", tween: [ "style", "${_sym_b1b}", "left", '5090px', { fromValue: '5490px'}], position: 7500, duration: 2000 },
                { id: "eid1497", tween: [ "style", "${_sym_a3b}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1537", tween: [ "style", "${_sym_a3b}", "left", '-400px', { fromValue: '0px'}], position: 1000, duration: 2000 },
                { id: "eid1519", tween: [ "style", "${_bheada_1}", "left", '3735px', { fromValue: '3735px'}], position: 0, duration: 0 },
                { id: "eid1563", tween: [ "style", "${_bheada_1}", "left", '3535px', { fromValue: '3735px'}], position: 5250, duration: 1750 },
                { id: "eid1495", tween: [ "style", "${_sym_a3a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1501", tween: [ "style", "${_btxta_2}", "left", '2070px', { fromValue: '2070px'}], position: 0, duration: 0 },
                { id: "eid1550", tween: [ "style", "${_btxta_2}", "left", '1920px', { fromValue: '2070px'}], position: 3500, duration: 1750 },
                { id: "eid1476", tween: [ "style", "${_bheadb_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1496", tween: [ "style", "${_sym_a3a}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1538", tween: [ "style", "${_sym_a3a}", "left", '-400px', { fromValue: '0px'}], position: 1000, duration: 2000 },
                { id: "eid1480", tween: [ "style", "${_bheada_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1502", tween: [ "style", "${_bheadb_2}", "left", '3730px', { fromValue: '3730px'}], position: 0, duration: 0 },
                { id: "eid1560", tween: [ "style", "${_bheadb_2}", "left", '3330px', { fromValue: '3730px'}], position: 5250, duration: 1750 },
                { id: "eid1474", tween: [ "style", "${_sym_b1a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1505", tween: [ "style", "${_bheadb_1}", "left", '3730px', { fromValue: '3730px'}], position: 0, duration: 0 },
                { id: "eid1561", tween: [ "style", "${_bheadb_1}", "left", '3330px', { fromValue: '3730px'}], position: 5250, duration: 1750 }            ]
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
            duration: 3000,
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
                    id: 'welle32',
                    type: 'image',
                    rect: ['0', '0px', '4096px', '900px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle3.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_welle32}": [
                ["style", "top", '20px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_Rectangle2}": [
                ["style", "top", '-1344px'],
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
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
            duration: 3000,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1533", tween: [ "style", "${_welle32}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
                { id: "eid1524", tween: [ "transform", "${_welle32}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 499, easing: "easeInOutQuad" },
                { id: "eid1525", tween: [ "transform", "${_welle32}", "scaleY", '1', { fromValue: '0.8'}], position: 499, duration: 499, easing: "easeInOutQuad" },
                { id: "eid1526", tween: [ "transform", "${_welle32}", "scaleY", '0.9', { fromValue: '1'}], position: 1001, duration: 499, easing: "easeInOutQuad" },
                { id: "eid1527", tween: [ "transform", "${_welle32}", "scaleY", '1', { fromValue: '0.9'}], position: 1500, duration: 499, easing: "easeInOutQuad" },
                { id: "eid1528", tween: [ "transform", "${_welle32}", "scaleY", '0.8', { fromValue: '1'}], position: 1999, duration: 499, easing: "easeInOutQuad" },
                { id: "eid1529", tween: [ "transform", "${_welle32}", "scaleY", '1', { fromValue: '0.8'}], position: 2501, duration: 499, easing: "easeInOutQuad" },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1532", tween: [ "style", "${_welle32}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 3000 },
                { id: "eid1534", tween: [ "style", "${_Rectangle2}", "top", '-1344px', { fromValue: '-1344px'}], position: 0, duration: 0 }            ]
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
