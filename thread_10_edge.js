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
                rect: ['0px', '0px','5548px','1536px','auto', 'auto'],
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
                rect: ['1820', '-1','auto','auto','auto', 'auto']
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
                ["style", "left", '1820px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'auto']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '5548px']
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
                { id: "eid1981", tween: [ "style", "${_sym_all}", "top", '0px', { fromValue: '0px'}], position: 4426, duration: 0 },
                { id: "eid2256", tween: [ "style", "${_sym_welleframe}", "left", '3500px', { fromValue: '0px'}], position: 0, duration: 4426 },
                { id: "eid2271", tween: [ "style", "${_sym_all}", "left", '1320px', { fromValue: '1820px'}], position: 0, duration: 4426 }            ]
        }
    }
},
"sym_e1b": {
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
                    id: 'e1b_arm_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_arm_l.svg', '0px', '0px']
                },
                {
                    id: 'e1b_arm_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_arm_r.svg', '0px', '0px']
                },
                {
                    id: 'e1b_beine_inner',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_beine_inner.svg', '0px', '0px']
                },
                {
                    id: 'e1b_beinout_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_beinout_l.svg', '0px', '0px']
                },
                {
                    id: 'e1b_beinout_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_beinout_r.svg', '0px', '0px']
                },
                {
                    id: 'e1b_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_corpus.svg', '0px', '0px']
                },
                {
                    id: 'e1b_fuss_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_fuss_l.svg', '0px', '0px']
                },
                {
                    id: 'e1b_fuss_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_fuss_r.svg', '0px', '0px']
                },
                {
                    id: 'e1b_hand_l',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_hand_l.svg', '0px', '0px']
                },
                {
                    id: 'e1b_hand_r',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_hand_r.svg', '0px', '0px']
                },
                {
                    id: 'e1b_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1b_kopf.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_e1b_kopf}": [
                ["style", "top", '838px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '200px'],
                ["style", "left", '25px'],
                ["style", "width", '300px']
            ],
            "${_e1b_arm_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1b_arm_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1b_fuss_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1b_fuss_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1b_beinout_r}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1b_beine_inner}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_e1b_hand_r}": [
                ["style", "top", '493px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '150px'],
                ["style", "left", '337px'],
                ["style", "width", '200px']
            ],
            "${_e1b_hand_l}": [
                ["style", "top", '1227px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '150px'],
                ["style", "left", '333px'],
                ["style", "width", '200px']
            ],
            "${_e1b_beinout_l}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1b_corpus}": [
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
            duration: 3500,
            autoPlay: true,
            labels: {
                "oo_e1b": 0
            },
            timeline: [
                { id: "eid4210", tween: [ "style", "${_e1b_hand_l}", "top", '1227px', { fromValue: '1227px'}], position: 0, duration: 0 },
                { id: "eid4202", tween: [ "style", "${_e1b_kopf}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid4207", tween: [ "style", "${_e1b_hand_r}", "height", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
                { id: "eid4228", tween: [ "style", "${_e1b_beinout_l}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4225", tween: [ "style", "${_e1b_beinout_r}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4215", tween: [ "style", "${_e1b_hand_l}", "width", '200px', { fromValue: '200px'}], position: 0, duration: 0 },
                { id: "eid4216", tween: [ "style", "${_e1b_fuss_r}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4219", tween: [ "style", "${_e1b_fuss_l}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4233", tween: [ "transform", "${_e1b_beine_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4239", tween: [ "transform", "${_e1b_arm_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4231", tween: [ "style", "${_e1b_beine_inner}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4208", tween: [ "style", "${_e1b_hand_r}", "left", '337px', { fromValue: '337px'}], position: 0, duration: 0 },
                { id: "eid4222", tween: [ "style", "${_e1b_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4199", tween: [ "style", "${_e1b_kopf}", "top", '838px', { fromValue: '838px'}], position: 0, duration: 0 },
                { id: "eid4220", tween: [ "style", "${_e1b_fuss_l}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4203", tween: [ "style", "${_e1b_kopf}", "width", '300px', { fromValue: '300px'}], position: 0, duration: 0 },
                { id: "eid4238", tween: [ "style", "${_e1b_arm_l}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4205", tween: [ "transform", "${_e1b_hand_r}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 400, duration: 1000 },
                { id: "eid4206", tween: [ "transform", "${_e1b_hand_r}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1830, duration: 1000 },
                { id: "eid4211", tween: [ "transform", "${_e1b_hand_l}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid4212", tween: [ "transform", "${_e1b_hand_l}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 1830, duration: 1000 },
                { id: "eid4229", tween: [ "style", "${_e1b_beinout_l}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4218", tween: [ "transform", "${_e1b_fuss_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4217", tween: [ "style", "${_e1b_fuss_r}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4237", tween: [ "style", "${_e1b_arm_l}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4224", tween: [ "transform", "${_e1b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4209", tween: [ "style", "${_e1b_hand_r}", "width", '200px', { fromValue: '200px'}], position: 0, duration: 0 },
                { id: "eid4221", tween: [ "transform", "${_e1b_fuss_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4232", tween: [ "style", "${_e1b_beine_inner}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4200", tween: [ "transform", "${_e1b_kopf}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1000, duration: 1000 },
                { id: "eid4204", tween: [ "style", "${_e1b_hand_r}", "top", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
                { id: "eid4236", tween: [ "transform", "${_e1b_arm_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4214", tween: [ "style", "${_e1b_hand_l}", "left", '333px', { fromValue: '333px'}], position: 0, duration: 0 },
                { id: "eid4213", tween: [ "style", "${_e1b_hand_l}", "height", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
                { id: "eid4201", tween: [ "style", "${_e1b_kopf}", "height", '200px', { fromValue: '200px'}], position: 0, duration: 0 },
                { id: "eid4227", tween: [ "transform", "${_e1b_beinout_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4235", tween: [ "style", "${_e1b_arm_r}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4230", tween: [ "transform", "${_e1b_beinout_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4226", tween: [ "style", "${_e1b_beinout_r}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4223", tween: [ "style", "${_e1b_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid4234", tween: [ "style", "${_e1b_arm_r}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_e1a": {
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
                    id: 'e1a_corpus_inner',
                    type: 'image',
                    rect: ['1px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1a_corpus_inner.svg', '0px', '0px']
                },
                {
                    id: 'e1a_corpus_outer',
                    type: 'image',
                    rect: ['1px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1a_corpus_outer.svg', '0px', '0px']
                },
                {
                    id: 'e1a_fuss_l',
                    type: 'image',
                    rect: ['1px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1a_fuss_l.svg', '0px', '0px']
                },
                {
                    id: 'e1a_fuss_r',
                    type: 'image',
                    rect: ['1px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1a_fuss_r.svg', '0px', '0px']
                },
                {
                    id: 'e1a_hand_l',
                    type: 'image',
                    rect: ['1px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1a_hand_l.svg', '0px', '0px']
                },
                {
                    id: 'e1a_hand_r',
                    type: 'image',
                    rect: ['1px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1a_hand_r.svg', '0px', '0px']
                },
                {
                    id: 'e1a_kopf',
                    type: 'image',
                    rect: ['1px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/e1a_kopf.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_e1a_hand_r}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1538px'],
                ["style", "width", '2049px']
            ],
            "${_e1a_kopf}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1a_fuss_l}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1a_corpus_inner}": [
                ["style", "top", '2px'],
                ["style", "opacity", '1'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1a_corpus_outer}": [
                ["style", "top", '1px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1a_hand_l}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_e1a_fuss_r}": [
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            labels: {
                "oo_e1a": 0
            },
            timeline: [
                { id: "eid4119", tween: [ "transform", "${_e1a_fuss_l}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid4120", tween: [ "transform", "${_e1a_fuss_l}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 500, duration: 500 },
                { id: "eid4121", tween: [ "transform", "${_e1a_fuss_l}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid4122", tween: [ "transform", "${_e1a_fuss_l}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 2500, duration: 500 },
                { id: "eid4111", tween: [ "style", "${_e1a_fuss_l}", "left", '7px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4112", tween: [ "style", "${_e1a_fuss_l}", "left", '1px', { fromValue: '7px'}], position: 500, duration: 500 },
                { id: "eid4113", tween: [ "style", "${_e1a_fuss_l}", "left", '7px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4114", tween: [ "style", "${_e1a_fuss_l}", "left", '1px', { fromValue: '7px'}], position: 1500, duration: 500 },
                { id: "eid4115", tween: [ "style", "${_e1a_fuss_l}", "left", '7px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4116", tween: [ "style", "${_e1a_fuss_l}", "left", '1px', { fromValue: '7px'}], position: 2500, duration: 500 },
                { id: "eid4117", tween: [ "style", "${_e1a_fuss_l}", "left", '7px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4118", tween: [ "style", "${_e1a_fuss_l}", "left", '1px', { fromValue: '7px'}], position: 3500, duration: 500 },
                { id: "eid4047", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid4048", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 500, duration: 500 },
                { id: "eid4049", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid4050", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1500, duration: 500 },
                { id: "eid4051", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid4052", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 2500, duration: 500 },
                { id: "eid4053", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
                { id: "eid4054", tween: [ "transform", "${_e1a_hand_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 3500, duration: 500 },
                { id: "eid4103", tween: [ "style", "${_e1a_fuss_l}", "top", '22px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4104", tween: [ "style", "${_e1a_fuss_l}", "top", '1px', { fromValue: '22px'}], position: 500, duration: 500 },
                { id: "eid4105", tween: [ "style", "${_e1a_fuss_l}", "top", '22px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4106", tween: [ "style", "${_e1a_fuss_l}", "top", '1px', { fromValue: '22px'}], position: 1500, duration: 500 },
                { id: "eid4107", tween: [ "style", "${_e1a_fuss_l}", "top", '22px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4108", tween: [ "style", "${_e1a_fuss_l}", "top", '1px', { fromValue: '22px'}], position: 2500, duration: 500 },
                { id: "eid4109", tween: [ "style", "${_e1a_fuss_l}", "top", '22px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4110", tween: [ "style", "${_e1a_fuss_l}", "top", '1px', { fromValue: '22px'}], position: 3500, duration: 500 },
                { id: "eid4071", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid4072", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 500, duration: 500 },
                { id: "eid4073", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid4074", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1500, duration: 500 },
                { id: "eid4075", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid4076", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 2500, duration: 500 },
                { id: "eid4077", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
                { id: "eid4078", tween: [ "transform", "${_e1a_hand_l}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 3500, duration: 500 },
                { id: "eid4123", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '1px'}], position: 0, duration: 250 },
                { id: "eid4124", tween: [ "style", "${_e1a_corpus_outer}", "top", '2px', { fromValue: '0px'}], position: 250, duration: 250 },
                { id: "eid4125", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '2px'}], position: 500, duration: 500 },
                { id: "eid4126", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '1px'}], position: 1000, duration: 250 },
                { id: "eid4127", tween: [ "style", "${_e1a_corpus_outer}", "top", '2px', { fromValue: '0px'}], position: 1250, duration: 250 },
                { id: "eid4128", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '2px'}], position: 1500, duration: 500 },
                { id: "eid4129", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '1px'}], position: 2000, duration: 250 },
                { id: "eid4130", tween: [ "style", "${_e1a_corpus_outer}", "top", '2px', { fromValue: '0px'}], position: 2250, duration: 250 },
                { id: "eid4131", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '2px'}], position: 2500, duration: 500 },
                { id: "eid4132", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '1px'}], position: 3000, duration: 250 },
                { id: "eid4133", tween: [ "style", "${_e1a_corpus_outer}", "top", '2px', { fromValue: '0px'}], position: 3250, duration: 250 },
                { id: "eid4134", tween: [ "style", "${_e1a_corpus_outer}", "top", '0px', { fromValue: '2px'}], position: 3500, duration: 500 },
                { id: "eid4055", tween: [ "style", "${_e1a_hand_l}", "top", '-6px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4056", tween: [ "style", "${_e1a_hand_l}", "top", '1px', { fromValue: '-6px'}], position: 500, duration: 500 },
                { id: "eid4057", tween: [ "style", "${_e1a_hand_l}", "top", '-6px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4058", tween: [ "style", "${_e1a_hand_l}", "top", '1px', { fromValue: '-6px'}], position: 1500, duration: 500 },
                { id: "eid4059", tween: [ "style", "${_e1a_hand_l}", "top", '-6px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4060", tween: [ "style", "${_e1a_hand_l}", "top", '1px', { fromValue: '-6px'}], position: 2500, duration: 500 },
                { id: "eid4061", tween: [ "style", "${_e1a_hand_l}", "top", '-6px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4062", tween: [ "style", "${_e1a_hand_l}", "top", '1px', { fromValue: '-6px'}], position: 3500, duration: 500 },
                { id: "eid4039", tween: [ "style", "${_e1a_hand_r}", "left", '16px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4040", tween: [ "style", "${_e1a_hand_r}", "left", '1px', { fromValue: '16px'}], position: 500, duration: 500 },
                { id: "eid4041", tween: [ "style", "${_e1a_hand_r}", "left", '16px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4042", tween: [ "style", "${_e1a_hand_r}", "left", '1px', { fromValue: '16px'}], position: 1500, duration: 500 },
                { id: "eid4043", tween: [ "style", "${_e1a_hand_r}", "left", '16px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4044", tween: [ "style", "${_e1a_hand_r}", "left", '1px', { fromValue: '16px'}], position: 2500, duration: 500 },
                { id: "eid4045", tween: [ "style", "${_e1a_hand_r}", "left", '16px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4046", tween: [ "style", "${_e1a_hand_r}", "left", '1px', { fromValue: '16px'}], position: 3500, duration: 500 },
                { id: "eid4015", tween: [ "style", "${_e1a_kopf}", "left", '4px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4016", tween: [ "style", "${_e1a_kopf}", "left", '1px', { fromValue: '4px'}], position: 500, duration: 500 },
                { id: "eid4017", tween: [ "style", "${_e1a_kopf}", "left", '4px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4018", tween: [ "style", "${_e1a_kopf}", "left", '1px', { fromValue: '4px'}], position: 1500, duration: 500 },
                { id: "eid4019", tween: [ "style", "${_e1a_kopf}", "left", '4px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4020", tween: [ "style", "${_e1a_kopf}", "left", '1px', { fromValue: '4px'}], position: 2500, duration: 500 },
                { id: "eid4021", tween: [ "style", "${_e1a_kopf}", "left", '4px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4022", tween: [ "style", "${_e1a_kopf}", "left", '1px', { fromValue: '4px'}], position: 3500, duration: 500 },
                { id: "eid4087", tween: [ "style", "${_e1a_fuss_r}", "left", '16px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4088", tween: [ "style", "${_e1a_fuss_r}", "left", '1px', { fromValue: '16px'}], position: 500, duration: 500 },
                { id: "eid4089", tween: [ "style", "${_e1a_fuss_r}", "left", '16px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4090", tween: [ "style", "${_e1a_fuss_r}", "left", '1px', { fromValue: '16px'}], position: 1500, duration: 500 },
                { id: "eid4091", tween: [ "style", "${_e1a_fuss_r}", "left", '16px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4092", tween: [ "style", "${_e1a_fuss_r}", "left", '1px', { fromValue: '16px'}], position: 2500, duration: 500 },
                { id: "eid4093", tween: [ "style", "${_e1a_fuss_r}", "left", '16px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4094", tween: [ "style", "${_e1a_fuss_r}", "left", '1px', { fromValue: '16px'}], position: 3500, duration: 500 },
                { id: "eid4191", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4192", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid4193", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid4194", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
                { id: "eid4195", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid4196", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
                { id: "eid4197", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid4198", tween: [ "transform", "${_e1a_corpus_inner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
                { id: "eid4079", tween: [ "style", "${_e1a_fuss_r}", "top", '23px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4080", tween: [ "style", "${_e1a_fuss_r}", "top", '1px', { fromValue: '23px'}], position: 500, duration: 500 },
                { id: "eid4081", tween: [ "style", "${_e1a_fuss_r}", "top", '23px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4082", tween: [ "style", "${_e1a_fuss_r}", "top", '1px', { fromValue: '23px'}], position: 1500, duration: 500 },
                { id: "eid4083", tween: [ "style", "${_e1a_fuss_r}", "top", '23px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4084", tween: [ "style", "${_e1a_fuss_r}", "top", '1px', { fromValue: '23px'}], position: 2500, duration: 500 },
                { id: "eid4085", tween: [ "style", "${_e1a_fuss_r}", "top", '23px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4086", tween: [ "style", "${_e1a_fuss_r}", "top", '1px', { fromValue: '23px'}], position: 3500, duration: 500 },
                { id: "eid4135", tween: [ "style", "${_e1a_corpus_outer}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid4136", tween: [ "style", "${_e1a_corpus_outer}", "opacity", '0.55', { fromValue: '0'}], position: 2625, duration: 125 },
                { id: "eid4137", tween: [ "style", "${_e1a_corpus_outer}", "opacity", '0', { fromValue: '0.55'}], position: 2750, duration: 125 },
                { id: "eid4138", tween: [ "style", "${_e1a_corpus_outer}", "opacity", '1', { fromValue: '0'}], position: 3625, duration: 375 },
                { id: "eid4031", tween: [ "style", "${_e1a_hand_r}", "top", '-8px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4032", tween: [ "style", "${_e1a_hand_r}", "top", '1px', { fromValue: '-8px'}], position: 500, duration: 500 },
                { id: "eid4033", tween: [ "style", "${_e1a_hand_r}", "top", '-8px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4034", tween: [ "style", "${_e1a_hand_r}", "top", '1px', { fromValue: '-8px'}], position: 1500, duration: 500 },
                { id: "eid4035", tween: [ "style", "${_e1a_hand_r}", "top", '-8px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4036", tween: [ "style", "${_e1a_hand_r}", "top", '1px', { fromValue: '-8px'}], position: 2500, duration: 500 },
                { id: "eid4037", tween: [ "style", "${_e1a_hand_r}", "top", '-8px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4038", tween: [ "style", "${_e1a_hand_r}", "top", '1px', { fromValue: '-8px'}], position: 3500, duration: 500 },
                { id: "eid4147", tween: [ "transform", "${_e1a_corpus_outer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid4148", tween: [ "transform", "${_e1a_corpus_outer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid4149", tween: [ "transform", "${_e1a_corpus_outer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid4150", tween: [ "transform", "${_e1a_corpus_outer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid4151", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 0, duration: 125 },
                { id: "eid4152", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 125, duration: 125 },
                { id: "eid4153", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 250, duration: 250 },
                { id: "eid4154", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 500, duration: 125 },
                { id: "eid4155", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 625, duration: 125 },
                { id: "eid4156", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 750, duration: 250 },
                { id: "eid4157", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 1000, duration: 125 },
                { id: "eid4158", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 1125, duration: 125 },
                { id: "eid4159", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 1250, duration: 250 },
                { id: "eid4160", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 1500, duration: 125 },
                { id: "eid4161", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 1625, duration: 125 },
                { id: "eid4162", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 1750, duration: 250 },
                { id: "eid4163", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 2000, duration: 125 },
                { id: "eid4164", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 2125, duration: 125 },
                { id: "eid4165", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 2250, duration: 250 },
                { id: "eid4166", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 2500, duration: 125 },
                { id: "eid4167", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 2625, duration: 125 },
                { id: "eid4168", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 2750, duration: 250 },
                { id: "eid4169", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 3000, duration: 125 },
                { id: "eid4170", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 3125, duration: 125 },
                { id: "eid4171", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 3250, duration: 250 },
                { id: "eid4172", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '2px'}], position: 3500, duration: 125 },
                { id: "eid4173", tween: [ "style", "${_e1a_corpus_inner}", "top", '3px', { fromValue: '1px'}], position: 3625, duration: 125 },
                { id: "eid4174", tween: [ "style", "${_e1a_corpus_inner}", "top", '1px', { fromValue: '3px'}], position: 3750, duration: 250 },
                { id: "eid4095", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid4096", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 500, duration: 500 },
                { id: "eid4097", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid4098", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1500, duration: 500 },
                { id: "eid4099", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid4100", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 2500, duration: 500 },
                { id: "eid4101", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
                { id: "eid4102", tween: [ "transform", "${_e1a_fuss_r}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 3500, duration: 500 },
                { id: "eid4175", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 0, duration: 125 },
                { id: "eid4176", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 125, duration: 250 },
                { id: "eid4177", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 500, duration: 125 },
                { id: "eid4178", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 625, duration: 250 },
                { id: "eid4179", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 1000, duration: 125 },
                { id: "eid4180", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 1125, duration: 250 },
                { id: "eid4181", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 1500, duration: 125 },
                { id: "eid4182", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 1625, duration: 250 },
                { id: "eid4183", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 2000, duration: 125 },
                { id: "eid4184", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 2125, duration: 250 },
                { id: "eid4185", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 2500, duration: 125 },
                { id: "eid4186", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 2625, duration: 250 },
                { id: "eid4187", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 3000, duration: 125 },
                { id: "eid4188", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 3125, duration: 250 },
                { id: "eid4189", tween: [ "style", "${_e1a_corpus_inner}", "left", '3px', { fromValue: '1px'}], position: 3500, duration: 125 },
                { id: "eid4190", tween: [ "style", "${_e1a_corpus_inner}", "left", '1px', { fromValue: '3px'}], position: 3625, duration: 250 },
                { id: "eid4007", tween: [ "style", "${_e1a_kopf}", "top", '-28px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4008", tween: [ "style", "${_e1a_kopf}", "top", '1px', { fromValue: '-28px'}], position: 500, duration: 500 },
                { id: "eid4009", tween: [ "style", "${_e1a_kopf}", "top", '-28px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4010", tween: [ "style", "${_e1a_kopf}", "top", '1px', { fromValue: '-28px'}], position: 1500, duration: 500 },
                { id: "eid4011", tween: [ "style", "${_e1a_kopf}", "top", '-28px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4012", tween: [ "style", "${_e1a_kopf}", "top", '1px', { fromValue: '-28px'}], position: 2500, duration: 500 },
                { id: "eid4013", tween: [ "style", "${_e1a_kopf}", "top", '-28px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4014", tween: [ "style", "${_e1a_kopf}", "top", '1px', { fromValue: '-28px'}], position: 3500, duration: 500 },
                { id: "eid4023", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid4024", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 500, duration: 500 },
                { id: "eid4025", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid4026", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1500, duration: 500 },
                { id: "eid4027", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
                { id: "eid4028", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 2500, duration: 500 },
                { id: "eid4029", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
                { id: "eid4030", tween: [ "transform", "${_e1a_kopf}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 3500, duration: 500 },
                { id: "eid4063", tween: [ "style", "${_e1a_hand_l}", "left", '-8px', { fromValue: '1px'}], position: 0, duration: 500 },
                { id: "eid4064", tween: [ "style", "${_e1a_hand_l}", "left", '1px', { fromValue: '-8px'}], position: 500, duration: 500 },
                { id: "eid4065", tween: [ "style", "${_e1a_hand_l}", "left", '-8px', { fromValue: '1px'}], position: 1000, duration: 500 },
                { id: "eid4066", tween: [ "style", "${_e1a_hand_l}", "left", '1px', { fromValue: '-8px'}], position: 1500, duration: 500 },
                { id: "eid4067", tween: [ "style", "${_e1a_hand_l}", "left", '-8px', { fromValue: '1px'}], position: 2000, duration: 500 },
                { id: "eid4068", tween: [ "style", "${_e1a_hand_l}", "left", '1px', { fromValue: '-8px'}], position: 2500, duration: 500 },
                { id: "eid4069", tween: [ "style", "${_e1a_hand_l}", "left", '-8px', { fromValue: '1px'}], position: 3000, duration: 500 },
                { id: "eid4070", tween: [ "style", "${_e1a_hand_l}", "left", '1px', { fromValue: '-8px'}], position: 3500, duration: 500 },
                { id: "eid4139", tween: [ "style", "${_e1a_corpus_outer}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid4140", tween: [ "style", "${_e1a_corpus_outer}", "left", '0px', { fromValue: '2px'}], position: 250, duration: 500 },
                { id: "eid4141", tween: [ "style", "${_e1a_corpus_outer}", "left", '2px', { fromValue: '0px'}], position: 1000, duration: 250 },
                { id: "eid4142", tween: [ "style", "${_e1a_corpus_outer}", "left", '0px', { fromValue: '2px'}], position: 1250, duration: 500 },
                { id: "eid4143", tween: [ "style", "${_e1a_corpus_outer}", "left", '2px', { fromValue: '0px'}], position: 2000, duration: 250 },
                { id: "eid4144", tween: [ "style", "${_e1a_corpus_outer}", "left", '0px', { fromValue: '2px'}], position: 2250, duration: 500 },
                { id: "eid4145", tween: [ "style", "${_e1a_corpus_outer}", "left", '2px', { fromValue: '0px'}], position: 3000, duration: 250 },
                { id: "eid4146", tween: [ "style", "${_e1a_corpus_outer}", "left", '0px', { fromValue: '2px'}], position: 3250, duration: 500 }            ]
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
                    id: 'sym_e1a',
                    type: 'rect',
                    rect: ['-1821px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_e1b',
                    type: 'rect',
                    rect: ['-1820px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_e1a',
                symbolName: 'sym_e1a',
                autoPlay: {

               }
            },
            {
                id: 'sym_e1b',
                symbolName: 'sym_e1b',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_e1b}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_e1a}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '2049px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid1967", tween: [ "style", "${_sym_e1b}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2267", tween: [ "style", "${_sym_e1b}", "left", '-600px', { fromValue: '0px'}], position: 1250, duration: 1500 },
                { id: "eid1966", tween: [ "style", "${_sym_e1b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1969", tween: [ "style", "${_sym_e1a}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2268", tween: [ "style", "${_sym_e1a}", "left", '-600px', { fromValue: '0px'}], position: 1250, duration: 1500 },
                { id: "eid1968", tween: [ "style", "${_sym_e1a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2269", tween: [ "style", "${_sym_e1a}", "top", '0px', { fromValue: '0px'}], position: 4000, duration: 0 }            ]
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
            duration: 1250,
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
                    id: 'welle9',
                    type: 'image',
                    rect: ['0px', '0px', '4096px', '1250px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle9.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "top", '-1343px'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
            ],
            "${_welle9}": [
                ["style", "top", '21px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
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
            duration: 1250,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid2242", tween: [ "transform", "${_welle9}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 208, easing: "easeInOutQuad" },
                { id: "eid2243", tween: [ "transform", "${_welle9}", "scaleY", '1', { fromValue: '0.8'}], position: 208, duration: 208, easing: "easeInOutQuad" },
                { id: "eid2244", tween: [ "transform", "${_welle9}", "scaleY", '0.9', { fromValue: '1'}], position: 417, duration: 208, easing: "easeInOutQuad" },
                { id: "eid2245", tween: [ "transform", "${_welle9}", "scaleY", '1', { fromValue: '0.9'}], position: 625, duration: 208, easing: "easeInOutQuad" },
                { id: "eid2246", tween: [ "transform", "${_welle9}", "scaleY", '0.8', { fromValue: '1'}], position: 833, duration: 208, easing: "easeInOutQuad" },
                { id: "eid2247", tween: [ "transform", "${_welle9}", "scaleY", '1', { fromValue: '0.8'}], position: 1041, duration: 208, easing: "easeInOutQuad" },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid2264", tween: [ "style", "${_welle9}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid2253", tween: [ "style", "${_welle9}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 1250 },
                { id: "eid2263", tween: [ "style", "${_Rectangle2}", "top", '-1343px', { fromValue: '-1343px'}], position: 0, duration: 0 }            ]
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
