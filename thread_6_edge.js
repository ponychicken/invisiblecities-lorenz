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
                rect: ['0px', '0px','7217px','1536px','auto', 'auto'],
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
                rect: ['1940', '0','auto','auto','auto', 'auto']
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
                ["style", "overflow", 'hidden']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'auto']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '7217px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: false,
            timeline: [
                { id: "eid1854", tween: [ "style", "${_sym_welleframe}", "left", '5169px', { fromValue: '0px'}], position: 0, duration: 6500 }            ]
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
                    id: 'sym_welle2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_welle2',
                symbolName: 'sym_welle_2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_welle2}": [
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
            duration: 2250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"sym_c2a": {
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
                    id: 'c2a_bein_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_bein_h.svg', '0px', '0px']
                },
                {
                    id: 'c2a_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'c2a_fuss_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_fuss_h.svg', '0px', '0px']
                },
                {
                    id: 'c2a_fuss_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_fuss_v.svg', '0px', '0px']
                },
                {
                    id: 'c2a_hand_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_hand_h.svg', '0px', '0px']
                },
                {
                    id: 'c2a_hand_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_hand_v.svg', '0px', '0px']
                },
                {
                    id: 'c2a_kiefer',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_kiefer.svg', '0px', '0px']
                },
                {
                    id: 'c2a_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'c2a_oberarm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_oberarm_h.svg', '0px', '0px']
                },
                {
                    id: 'c2a_oberarm_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_oberarm_v.svg', '0px', '0px']
                },
                {
                    id: 'c2a_schenkel_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_schenkel_v.svg', '0px', '0px']
                },
                {
                    id: 'c2a_unterarm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_unterarm_h.svg', '0px', '0px']
                },
                {
                    id: 'c2a_unterarm_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_unterarm_v.svg', '0px', '0px']
                },
                {
                    id: 'c2a_wade_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_wade_v.svg', '0px', '0px']
                },
                {
                    id: 'c2a_warze',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2a_warze.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_c2a_hand_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_wade_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_bein_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_unterarm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_oberarm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_kiefer}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_fuss_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_unterarm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_hand_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_schenkel_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_c2a_warze}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px']
            ],
            "${_c2a_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_fuss_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2a_oberarm_h}": [
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
            duration: 1000,
            autoPlay: true,
            labels: {
                "oo_c2a": 0
            },
            timeline: [
                { id: "eid1690", tween: [ "style", "${_c2a_fuss_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1701", tween: [ "transform", "${_c2a_bein_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1679", tween: [ "style", "${_c2a_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1673", tween: [ "style", "${_c2a_oberarm_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1683", tween: [ "transform", "${_c2a_kiefer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1667", tween: [ "style", "${_c2a_unterarm_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1688", tween: [ "style", "${_c2a_hand_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1663", tween: [ "style", "${_c2a_unterarm_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1700", tween: [ "style", "${_c2a_bein_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1687", tween: [ "style", "${_c2a_hand_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1685", tween: [ "style", "${_c2a_hand_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1694", tween: [ "style", "${_c2a_fuss_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1696", tween: [ "style", "${_c2a_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1695", tween: [ "transform", "${_c2a_fuss_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1661", tween: [ "style", "${_c2a_wade_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1669", tween: [ "style", "${_c2a_schenkel_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1662", tween: [ "transform", "${_c2a_wade_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1660", tween: [ "style", "${_c2a_wade_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1672", tween: [ "style", "${_c2a_oberarm_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1678", tween: [ "style", "${_c2a_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1656", tween: [ "transform", "${_c2a_warze}", "scaleX", '1.2', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1657", tween: [ "transform", "${_c2a_warze}", "scaleX", '1', { fromValue: '1.2'}], position: 500, duration: 500 },
                { id: "eid1681", tween: [ "style", "${_c2a_kiefer}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1655", tween: [ "transform", "${_c2a_warze}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1674", tween: [ "transform", "${_c2a_oberarm_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1697", tween: [ "style", "${_c2a_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1691", tween: [ "style", "${_c2a_fuss_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1666", tween: [ "style", "${_c2a_unterarm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1675", tween: [ "style", "${_c2a_oberarm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1653", tween: [ "transform", "${_c2a_warze}", "scaleY", '1.2', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1654", tween: [ "transform", "${_c2a_warze}", "scaleY", '1', { fromValue: '1.2'}], position: 500, duration: 500 },
                { id: "eid1689", tween: [ "transform", "${_c2a_hand_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1676", tween: [ "style", "${_c2a_oberarm_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1658", tween: [ "style", "${_c2a_warze}", "left", '30px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1659", tween: [ "style", "${_c2a_warze}", "left", '0px', { fromValue: '30px'}], position: 500, duration: 500 },
                { id: "eid1677", tween: [ "transform", "${_c2a_oberarm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1699", tween: [ "style", "${_c2a_bein_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1698", tween: [ "transform", "${_c2a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1671", tween: [ "transform", "${_c2a_schenkel_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1684", tween: [ "style", "${_c2a_hand_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1682", tween: [ "style", "${_c2a_kiefer}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1664", tween: [ "style", "${_c2a_unterarm_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1692", tween: [ "transform", "${_c2a_fuss_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1680", tween: [ "transform", "${_c2a_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1670", tween: [ "style", "${_c2a_schenkel_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1668", tween: [ "transform", "${_c2a_unterarm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1686", tween: [ "transform", "${_c2a_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1651", tween: [ "style", "${_c2a_warze}", "top", '48px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1652", tween: [ "style", "${_c2a_warze}", "top", '0px', { fromValue: '48px'}], position: 500, duration: 500 },
                { id: "eid1665", tween: [ "transform", "${_c2a_unterarm_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1693", tween: [ "style", "${_c2a_fuss_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_c2b": {
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
                    id: 'c2b_bein_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_bein_h.svg', '0px', '0px']
                },
                {
                    id: 'c2b_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_corpus.svg', '0px', '0px']
                },
                {
                    id: 'c2b_fuss_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_fuss_h.svg', '0px', '0px']
                },
                {
                    id: 'c2b_fuss_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_fuss_v.svg', '0px', '0px']
                },
                {
                    id: 'c2b_hand_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_hand_h.svg', '0px', '0px']
                },
                {
                    id: 'c2b_hand_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_hand_v.svg', '0px', '0px']
                },
                {
                    id: 'c2b_kiefer',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_kiefer.svg', '0px', '0px']
                },
                {
                    id: 'c2b_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'c2b_oberarm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_oberarm_h.svg', '0px', '0px']
                },
                {
                    id: 'c2b_oberarm_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_oberarm_v.svg', '0px', '0px']
                },
                {
                    id: 'c2b_schenkel_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_schenkel_v.svg', '0px', '0px']
                },
                {
                    id: 'c2b_unterarm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_unterarm_h.svg', '0px', '0px']
                },
                {
                    id: 'c2b_unterarm_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_unterarm_v.svg', '0px', '0px']
                },
                {
                    id: 'c2b_wade_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c2b_wade_v.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_c2b_hand_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_kiefer}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_unterarm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_oberarm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_schenkel_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_oberarm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_hand_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_fuss_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_c2b_fuss_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_unterarm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_wade_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c2b_bein_h}": [
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
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid1737", tween: [ "transform", "${_c2b_fuss_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1735", tween: [ "style", "${_c2b_fuss_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1710", tween: [ "transform", "${_c2b_unterarm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1741", tween: [ "style", "${_c2b_bein_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1705", tween: [ "style", "${_c2b_unterarm_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1731", tween: [ "transform", "${_c2b_hand_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1722", tween: [ "transform", "${_c2b_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1732", tween: [ "style", "${_c2b_fuss_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1719", tween: [ "transform", "${_c2b_oberarm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1704", tween: [ "transform", "${_c2b_wade_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1726", tween: [ "style", "${_c2b_hand_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1738", tween: [ "style", "${_c2b_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1708", tween: [ "style", "${_c2b_unterarm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1734", tween: [ "transform", "${_c2b_fuss_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1730", tween: [ "style", "${_c2b_hand_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1729", tween: [ "style", "${_c2b_hand_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1717", tween: [ "style", "${_c2b_oberarm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1702", tween: [ "style", "${_c2b_wade_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1727", tween: [ "style", "${_c2b_hand_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1716", tween: [ "transform", "${_c2b_oberarm_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1742", tween: [ "style", "${_c2b_bein_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1721", tween: [ "style", "${_c2b_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1712", tween: [ "style", "${_c2b_schenkel_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1715", tween: [ "style", "${_c2b_oberarm_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1733", tween: [ "style", "${_c2b_fuss_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1724", tween: [ "style", "${_c2b_kiefer}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1739", tween: [ "style", "${_c2b_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1711", tween: [ "style", "${_c2b_schenkel_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1703", tween: [ "style", "${_c2b_wade_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1718", tween: [ "style", "${_c2b_oberarm_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1728", tween: [ "transform", "${_c2b_hand_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1736", tween: [ "style", "${_c2b_fuss_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1723", tween: [ "style", "${_c2b_kiefer}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1713", tween: [ "transform", "${_c2b_schenkel_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1743", tween: [ "transform", "${_c2b_bein_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1720", tween: [ "style", "${_c2b_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1725", tween: [ "transform", "${_c2b_kiefer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1709", tween: [ "style", "${_c2b_unterarm_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1706", tween: [ "style", "${_c2b_unterarm_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1714", tween: [ "style", "${_c2b_oberarm_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1707", tween: [ "transform", "${_c2b_unterarm_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1740", tween: [ "transform", "${_c2b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_c3a": {
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
                    id: 'c3a_beine',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3a_beine.svg', '0px', '0px']
                },
                {
                    id: 'c3a_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'c3a_fuss_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3a_fuss_h.svg', '0px', '0px']
                },
                {
                    id: 'c3a_fuss_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3a_fuss_v.svg', '0px', '0px']
                },
                {
                    id: 'c3a_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'c3a_schritt',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3a_schritt.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_c3a_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3a_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3a_schritt}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3a_fuss_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3a_fuss_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_c3a_beine}": [
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
            duration: 3000,
            autoPlay: true,
            labels: {
                "oo_c3a": 0
            },
            timeline: [
                { id: "eid1784", tween: [ "transform", "${_c3a_corpus}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1785", tween: [ "transform", "${_c3a_corpus}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 1000, duration: 1000 },
                { id: "eid1786", tween: [ "transform", "${_c3a_corpus}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 1999, duration: 1000 },
                { id: "eid1778", tween: [ "style", "${_c3a_fuss_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1763", tween: [ "style", "${_c3a_schritt}", "left", '0px', { fromValue: '0px'}], position: 1, duration: 0 },
                { id: "eid1770", tween: [ "style", "${_c3a_kopf}", "left", '0px', { fromValue: '0px'}], position: 1, duration: 0 },
                { id: "eid1789", tween: [ "transform", "${_c3a_beine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1760", tween: [ "style", "${_c3a_schritt}", "top", '-4px', { fromValue: '0px'}], position: 1, duration: 1000 },
                { id: "eid1761", tween: [ "style", "${_c3a_schritt}", "top", '4px', { fromValue: '-4px'}], position: 1001, duration: 1000 },
                { id: "eid1762", tween: [ "style", "${_c3a_schritt}", "top", '0px', { fromValue: '4px'}], position: 2000, duration: 1000 },
                { id: "eid1780", tween: [ "style", "${_c3a_corpus}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid1781", tween: [ "style", "${_c3a_corpus}", "top", '4px', { fromValue: '-4px'}], position: 1000, duration: 1000 },
                { id: "eid1782", tween: [ "style", "${_c3a_corpus}", "top", '0px', { fromValue: '4px'}], position: 1999, duration: 1000 },
                { id: "eid1764", tween: [ "transform", "${_c3a_schritt}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 1, duration: 1000 },
                { id: "eid1765", tween: [ "transform", "${_c3a_schritt}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 1001, duration: 1000 },
                { id: "eid1766", tween: [ "transform", "${_c3a_schritt}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2000, duration: 1000 },
                { id: "eid1787", tween: [ "style", "${_c3a_beine}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1783", tween: [ "style", "${_c3a_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1777", tween: [ "style", "${_c3a_fuss_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1776", tween: [ "transform", "${_c3a_fuss_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1788", tween: [ "style", "${_c3a_beine}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1775", tween: [ "style", "${_c3a_fuss_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1779", tween: [ "transform", "${_c3a_fuss_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1771", tween: [ "transform", "${_c3a_kopf}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 1, duration: 1000 },
                { id: "eid1772", tween: [ "transform", "${_c3a_kopf}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 1001, duration: 1000 },
                { id: "eid1773", tween: [ "transform", "${_c3a_kopf}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2000, duration: 1000 },
                { id: "eid1767", tween: [ "style", "${_c3a_kopf}", "top", '-4px', { fromValue: '0px'}], position: 1, duration: 1000 },
                { id: "eid1768", tween: [ "style", "${_c3a_kopf}", "top", '4px', { fromValue: '-4px'}], position: 1001, duration: 1000 },
                { id: "eid1769", tween: [ "style", "${_c3a_kopf}", "top", '0px', { fromValue: '4px'}], position: 2000, duration: 1000 },
                { id: "eid1774", tween: [ "style", "${_c3a_fuss_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_c3b": {
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
                    id: 'c3b_unterhose',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_unterhose.svg', '0px', '0px']
                },
                {
                    id: 'c3b_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'c3b_handzu',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_handzu.svg', '0px', '0px']
                },
                {
                    id: 'c3b_handflach',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_handflach.svg', '0px', '0px']
                },
                {
                    id: 'c3b_fuss_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_fuss_v.svg', '0px', '0px']
                },
                {
                    id: 'c3b_fuss_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_fuss_h.svg', '0px', '0px']
                },
                {
                    id: 'c3b_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_corpus.svg', '0px', '0px']
                },
                {
                    id: 'c3b_beine',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c3b_beine.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_c3b_handflach}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3b_handzu}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3b_unterhose}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3b_beine}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_c3b_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3b_fuss_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3b_fuss_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c3b_kopf}": [
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
                "oo_c3b": 0
            },
            timeline: [
                { id: "eid1817", tween: [ "transform", "${_c3b_handzu}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid1818", tween: [ "transform", "${_c3b_handzu}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 2000, duration: 2000 },
                { id: "eid1819", tween: [ "transform", "${_c3b_handzu}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 4000, duration: 2000 },
                { id: "eid1791", tween: [ "style", "${_c3b_beine}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1809", tween: [ "style", "${_c3b_handflach}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1806", tween: [ "style", "${_c3b_handflach}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid1807", tween: [ "style", "${_c3b_handflach}", "top", '4px', { fromValue: '-4px'}], position: 2000, duration: 2000 },
                { id: "eid1808", tween: [ "style", "${_c3b_handflach}", "top", '0px', { fromValue: '4px'}], position: 4000, duration: 2000 },
                { id: "eid1801", tween: [ "style", "${_c3b_fuss_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1800", tween: [ "style", "${_c3b_fuss_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1831", tween: [ "transform", "${_c3b_unterhose}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid1832", tween: [ "transform", "${_c3b_unterhose}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 2000, duration: 2000 },
                { id: "eid1833", tween: [ "transform", "${_c3b_unterhose}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 4000, duration: 2000 },
                { id: "eid1804", tween: [ "style", "${_c3b_fuss_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1820", tween: [ "style", "${_c3b_kopf}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid1821", tween: [ "style", "${_c3b_kopf}", "top", '4px', { fromValue: '-4px'}], position: 2000, duration: 2000 },
                { id: "eid1822", tween: [ "style", "${_c3b_kopf}", "top", '0px', { fromValue: '4px'}], position: 4000, duration: 2000 },
                { id: "eid1813", tween: [ "style", "${_c3b_handzu}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid1814", tween: [ "style", "${_c3b_handzu}", "top", '4px', { fromValue: '-4px'}], position: 2000, duration: 2000 },
                { id: "eid1815", tween: [ "style", "${_c3b_handzu}", "top", '0px', { fromValue: '4px'}], position: 4000, duration: 2000 },
                { id: "eid1792", tween: [ "transform", "${_c3b_beine}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1797", tween: [ "transform", "${_c3b_corpus}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid1798", tween: [ "transform", "${_c3b_corpus}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 2000, duration: 2000 },
                { id: "eid1799", tween: [ "transform", "${_c3b_corpus}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 4000, duration: 2000 },
                { id: "eid1816", tween: [ "style", "${_c3b_handzu}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1802", tween: [ "transform", "${_c3b_fuss_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1805", tween: [ "transform", "${_c3b_fuss_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1827", tween: [ "style", "${_c3b_unterhose}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid1828", tween: [ "style", "${_c3b_unterhose}", "top", '4px', { fromValue: '-4px'}], position: 2000, duration: 2000 },
                { id: "eid1829", tween: [ "style", "${_c3b_unterhose}", "top", '0px', { fromValue: '4px'}], position: 4000, duration: 2000 },
                { id: "eid1830", tween: [ "style", "${_c3b_unterhose}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1824", tween: [ "transform", "${_c3b_kopf}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid1825", tween: [ "transform", "${_c3b_kopf}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 2000, duration: 2000 },
                { id: "eid1826", tween: [ "transform", "${_c3b_kopf}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 4000, duration: 2000 },
                { id: "eid1810", tween: [ "transform", "${_c3b_handflach}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 2000 },
                { id: "eid1811", tween: [ "transform", "${_c3b_handflach}", "rotateZ", '1deg', { fromValue: '-1deg'}], position: 2000, duration: 2000 },
                { id: "eid1812", tween: [ "transform", "${_c3b_handflach}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 4000, duration: 2000 },
                { id: "eid1793", tween: [ "style", "${_c3b_corpus}", "top", '-4px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid1794", tween: [ "style", "${_c3b_corpus}", "top", '4px', { fromValue: '-4px'}], position: 2000, duration: 2000 },
                { id: "eid1795", tween: [ "style", "${_c3b_corpus}", "top", '0px', { fromValue: '4px'}], position: 4000, duration: 2000 },
                { id: "eid1823", tween: [ "style", "${_c3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1790", tween: [ "style", "${_c3b_beine}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1803", tween: [ "style", "${_c3b_fuss_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1796", tween: [ "style", "${_c3b_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    id: 'sym_c2a',
                    type: 'rect',
                    rect: ['-1940px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_c2b',
                    type: 'rect',
                    rect: ['-1940px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_c3a',
                    type: 'rect',
                    rect: ['-1940px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_c3b',
                    type: 'rect',
                    rect: ['-1940px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_c3b',
                symbolName: 'sym_c3b',
                autoPlay: {

               }
            },
            {
                id: 'sym_c2b',
                symbolName: 'sym_c2b',
                autoPlay: {

               }
            },
            {
                id: 'sym_c2a',
                symbolName: 'sym_c2a',
                autoPlay: {

               }
            },
            {
                id: 'sym_c3a',
                symbolName: 'sym_c3a',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_c2b}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '3848px']
            ],
            "${_sym_c3b}": [
                ["style", "left", '1800px'],
                ["style", "top", '0px']
            ],
            "${_sym_c2a}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_c3a}": [
                ["style", "left", '1800px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid1746", tween: [ "style", "${_sym_c2b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1748", tween: [ "style", "${_sym_c3b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1753", tween: [ "style", "${_sym_c2a}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1754", tween: [ "style", "${_sym_c2b}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1756", tween: [ "style", "${_sym_c3b}", "left", '1800px', { fromValue: '1800px'}], position: 0, duration: 0 },
                { id: "eid1747", tween: [ "style", "${_sym_c3a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1745", tween: [ "style", "${_sym_c2a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1755", tween: [ "style", "${_sym_c3a}", "left", '1800px', { fromValue: '1800px'}], position: 0, duration: 0 }            ]
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
                    rect: ['0px', '-1364px', '2048px', '1536px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,80,1.00)']
                },
                {
                    id: 'welle6',
                    type: 'image',
                    rect: ['0', '0px', '4096px', '1100px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle6.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '-1344px'],
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
            ],
            "${_welle6}": [
                ["style", "top", '20px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
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
            duration: 2250,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1875", tween: [ "style", "${_Rectangle2}", "top", '-1344px', { fromValue: '-1344px'}], position: 0, duration: 0 },
                { id: "eid1873", tween: [ "style", "${_welle6}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 2249 },
                { id: "eid1874", tween: [ "style", "${_welle6}", "left", '0px', { fromValue: '-2048px'}], position: 2249, duration: 1, easing: "easeInOutQuad" },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1867", tween: [ "transform", "${_welle6}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 376, easing: "easeInOutQuad" },
                { id: "eid1868", tween: [ "transform", "${_welle6}", "scaleY", '1', { fromValue: '0.8'}], position: 376, duration: 374, easing: "easeInOutQuad" },
                { id: "eid1869", tween: [ "transform", "${_welle6}", "scaleY", '0.9', { fromValue: '1'}], position: 749, duration: 376, easing: "easeInOutQuad" },
                { id: "eid1870", tween: [ "transform", "${_welle6}", "scaleY", '1', { fromValue: '0.9'}], position: 1125, duration: 376, easing: "easeInOutQuad" },
                { id: "eid1871", tween: [ "transform", "${_welle6}", "scaleY", '0.8', { fromValue: '1'}], position: 1501, duration: 372, easing: "easeInOutQuad" },
                { id: "eid1872", tween: [ "transform", "${_welle6}", "scaleY", '1', { fromValue: '0.8'}], position: 1873, duration: 376, easing: "easeInOutQuad" },
                { id: "eid1876", tween: [ "style", "${_welle6}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 }            ]
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
