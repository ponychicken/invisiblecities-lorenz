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
                id: 'sym_welle',
                type: 'rect',
                rect: ['0', '-1536','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_welle',
                symbolName: 'sym_welle',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '10000px']
            ],
            "${_sym_welle}": [
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'auto']
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
                { id: "eid1317", tween: [ "style", "${_sym_welle}", "left", '7952px', { fromValue: '0px'}], position: 0, duration: 10000 }            ]
        }
    }
},
"sym_welle": {
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
                    id: 'welle',
                    type: 'image',
                    rect: ['0px', '2087px', '4096px', '300px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '2048px', '2210px', 'auto', 'auto'],
                    id: 'rect_welle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,80,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rect_welle}": [
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "width", '2048px']
            ],
            "${_welle}": [
                ["style", "top", '2087px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '3072px'],
                ["style", "overflow", 'hidden'],
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
                "loop_welle1": 0
            },
            timeline: [
                { id: "eid5", tween: [ "style", "${_welle}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 3000 },
                { id: "eid7", tween: [ "transform", "${_welle}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1500 },
                { id: "eid8", tween: [ "transform", "${_welle}", "scaleY", '1', { fromValue: '0.8'}], position: 1500, duration: 1500 },
                { id: "eid2", tween: [ "style", "${_welle}", "top", '2087px', { fromValue: '2087px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_a1a": {
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
                    id: 'a1a_windel',
                    type: 'image',
                    rect: ['55px', '106px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1a_windel.svg', '0px', '0px']
                },
                {
                    id: 'a1a_kopf',
                    type: 'image',
                    rect: ['55px', '106px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'a1a_corpus',
                    type: 'image',
                    rect: ['55px', '106px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'a1a_beine',
                    type: 'image',
                    rect: ['55px', '106px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1a_beine.svg', '0px', '0px']
                },
                {
                    id: 'a1a_ball',
                    type: 'image',
                    rect: ['55px', '106px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1a_ball.svg', '0px', '0px']
                },
                {
                    id: 'a1a_arm_v',
                    type: 'image',
                    rect: ['55px', '106px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1a_arm_v.svg', '0px', '0px']
                },
                {
                    id: 'a1a_arm_h',
                    type: 'image',
                    rect: ['55px', '106px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1a_arm_h.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a1a_kopf}": [
                ["style", "top", '103px'],
                ["style", "left", '75px'],
                ["transform", "rotateZ", '-6deg']
            ],
            "${_a1a_arm_v}": [
                ["style", "top", '112px'],
                ["style", "left", '76px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1a_corpus}": [
                ["style", "top", '106px'],
                ["style", "left", '55px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1a_windel}": [
                ["style", "top", '106px'],
                ["style", "left", '55px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1a_ball}": [
                ["style", "top", '112px'],
                ["style", "left", '76px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1a_beine}": [
                ["style", "top", '106px'],
                ["style", "left", '55px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1742px'],
                ["style", "width", '2197px']
            ],
            "${_a1a_arm_h}": [
                ["style", "top", '112px'],
                ["style", "left", '76px'],
                ["transform", "rotateZ", '0deg']
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
                { id: "eid41", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid42", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid43", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid44", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid45", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid46", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1063, duration: 437, easing: "easeInOutQuad" },
                { id: "eid47", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid48", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid101", tween: [ "style", "${_a1a_kopf}", "left", '31px', { fromValue: '75px'}], position: 0, duration: 313, easing: "easeInOutQuad" },
                { id: "eid102", tween: [ "style", "${_a1a_kopf}", "left", '55px', { fromValue: '31px'}], position: 313, duration: 312, easing: "easeInOutQuad" },
                { id: "eid103", tween: [ "style", "${_a1a_kopf}", "left", '29px', { fromValue: '55px'}], position: 625, duration: 313, easing: "easeInOutQuad" },
                { id: "eid104", tween: [ "style", "${_a1a_kopf}", "left", '55px', { fromValue: '29px'}], position: 938, duration: 562, easing: "easeInOutQuad" },
                { id: "eid105", tween: [ "style", "${_a1a_kopf}", "left", '35px', { fromValue: '55px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid106", tween: [ "style", "${_a1a_kopf}", "left", '75px', { fromValue: '35px'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid71", tween: [ "style", "${_a1a_beine}", "top", '106px', { fromValue: '106px'}], position: 0, duration: 250 },
                { id: "eid72", tween: [ "style", "${_a1a_beine}", "top", '106px', { fromValue: '106px'}], position: 250, duration: 250 },
                { id: "eid73", tween: [ "style", "${_a1a_beine}", "top", '128px', { fromValue: '106px'}], position: 500, duration: 375 },
                { id: "eid74", tween: [ "style", "${_a1a_beine}", "top", '106px', { fromValue: '128px'}], position: 875, duration: 625 },
                { id: "eid75", tween: [ "style", "${_a1a_beine}", "left", '30px', { fromValue: '55px'}], position: 0, duration: 250 },
                { id: "eid76", tween: [ "style", "${_a1a_beine}", "left", '55px', { fromValue: '30px'}], position: 250, duration: 250 },
                { id: "eid77", tween: [ "style", "${_a1a_beine}", "left", '55px', { fromValue: '55px'}], position: 1500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_a1a_ball}", "left", '54px', { fromValue: '76px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid57", tween: [ "style", "${_a1a_ball}", "left", '70px', { fromValue: '54px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid58", tween: [ "style", "${_a1a_ball}", "left", '53px', { fromValue: '70px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid59", tween: [ "style", "${_a1a_ball}", "left", '75px', { fromValue: '53px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid60", tween: [ "style", "${_a1a_ball}", "left", '67px', { fromValue: '75px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid61", tween: [ "style", "${_a1a_ball}", "left", '76px', { fromValue: '67px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid62", tween: [ "style", "${_a1a_ball}", "left", '76px', { fromValue: '76px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid117", tween: [ "transform", "${_a1a_windel}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "transform", "${_a1a_windel}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid119", tween: [ "transform", "${_a1a_windel}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid113", tween: [ "style", "${_a1a_windel}", "top", '106px', { fromValue: '106px'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_a1a_windel}", "top", '106px', { fromValue: '106px'}], position: 1500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_a1a_arm_h}", "left", '54px', { fromValue: '76px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid13", tween: [ "style", "${_a1a_arm_h}", "left", '70px', { fromValue: '54px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_a1a_arm_h}", "left", '53px', { fromValue: '70px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid15", tween: [ "style", "${_a1a_arm_h}", "left", '75px', { fromValue: '53px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid16", tween: [ "style", "${_a1a_arm_h}", "left", '67px', { fromValue: '75px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid17", tween: [ "style", "${_a1a_arm_h}", "left", '76px', { fromValue: '67px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid18", tween: [ "style", "${_a1a_arm_h}", "left", '76px', { fromValue: '76px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid34", tween: [ "style", "${_a1a_arm_v}", "left", '54px', { fromValue: '76px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid35", tween: [ "style", "${_a1a_arm_v}", "left", '70px', { fromValue: '54px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid36", tween: [ "style", "${_a1a_arm_v}", "left", '53px', { fromValue: '70px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${_a1a_arm_v}", "left", '75px', { fromValue: '53px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid38", tween: [ "style", "${_a1a_arm_v}", "left", '67px', { fromValue: '75px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid39", tween: [ "style", "${_a1a_arm_v}", "left", '76px', { fromValue: '67px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid40", tween: [ "style", "${_a1a_arm_v}", "left", '76px', { fromValue: '76px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1", tween: [ "style", "${_a1a_arm_h}", "top", '129px', { fromValue: '112px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid3", tween: [ "style", "${_a1a_arm_h}", "top", '106px', { fromValue: '129px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_a1a_arm_h}", "top", '125px', { fromValue: '106px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${_a1a_arm_h}", "top", '108px', { fromValue: '125px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid9", tween: [ "style", "${_a1a_arm_h}", "top", '130px', { fromValue: '108px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid10", tween: [ "style", "${_a1a_arm_h}", "top", '112px', { fromValue: '130px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid11", tween: [ "style", "${_a1a_arm_h}", "top", '112px', { fromValue: '112px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid23", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid24", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1063, duration: 437, easing: "easeInOutQuad" },
                { id: "eid25", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "style", "${_a1a_arm_v}", "top", '129px', { fromValue: '112px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid28", tween: [ "style", "${_a1a_arm_v}", "top", '106px', { fromValue: '129px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_a1a_arm_v}", "top", '125px', { fromValue: '106px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_a1a_arm_v}", "top", '108px', { fromValue: '125px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid31", tween: [ "style", "${_a1a_arm_v}", "top", '130px', { fromValue: '108px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid32", tween: [ "style", "${_a1a_arm_v}", "top", '112px', { fromValue: '130px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid33", tween: [ "style", "${_a1a_arm_v}", "top", '112px', { fromValue: '112px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid107", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '5deg', { fromValue: '-6deg'}], position: 0, duration: 313, easing: "easeInOutQuad" },
                { id: "eid108", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 313, duration: 312, easing: "easeInOutQuad" },
                { id: "eid109", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 625, duration: 313, easing: "easeInOutQuad" },
                { id: "eid110", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 938, duration: 562, easing: "easeInOutQuad" },
                { id: "eid111", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid112", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '-6deg', { fromValue: '3deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid84", tween: [ "style", "${_a1a_corpus}", "top", '106px', { fromValue: '106px'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_a1a_corpus}", "top", '104px', { fromValue: '106px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid86", tween: [ "style", "${_a1a_corpus}", "top", '106px', { fromValue: '104px'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid63", tween: [ "transform", "${_a1a_ball}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid64", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid65", tween: [ "transform", "${_a1a_ball}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid66", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "transform", "${_a1a_ball}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1063, duration: 437, easing: "easeInOutQuad" },
                { id: "eid69", tween: [ "transform", "${_a1a_ball}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid70", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid87", tween: [ "style", "${_a1a_corpus}", "left", '45px', { fromValue: '55px'}], position: 0, duration: 625, easing: "easeInOutQuad" },
                { id: "eid88", tween: [ "style", "${_a1a_corpus}", "left", '55px', { fromValue: '45px'}], position: 625, duration: 875, easing: "easeInOutQuad" },
                { id: "eid89", tween: [ "style", "${_a1a_corpus}", "left", '45px', { fromValue: '55px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid90", tween: [ "style", "${_a1a_corpus}", "left", '55px', { fromValue: '45px'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid49", tween: [ "style", "${_a1a_ball}", "top", '129px', { fromValue: '112px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid50", tween: [ "style", "${_a1a_ball}", "top", '106px', { fromValue: '129px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid51", tween: [ "style", "${_a1a_ball}", "top", '125px', { fromValue: '106px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "style", "${_a1a_ball}", "top", '108px', { fromValue: '125px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid53", tween: [ "style", "${_a1a_ball}", "top", '130px', { fromValue: '108px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid54", tween: [ "style", "${_a1a_ball}", "top", '112px', { fromValue: '130px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid55", tween: [ "style", "${_a1a_ball}", "top", '112px', { fromValue: '112px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid78", tween: [ "transform", "${_a1a_beine}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid79", tween: [ "transform", "${_a1a_beine}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 250, duration: 250 },
                { id: "eid80", tween: [ "transform", "${_a1a_beine}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 375 },
                { id: "eid81", tween: [ "transform", "${_a1a_beine}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 875, duration: 625 },
                { id: "eid82", tween: [ "transform", "${_a1a_beine}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid83", tween: [ "transform", "${_a1a_beine}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid115", tween: [ "style", "${_a1a_windel}", "left", '56px', { fromValue: '55px'}], position: 0, duration: 1500 },
                { id: "eid116", tween: [ "style", "${_a1a_windel}", "left", '55px', { fromValue: '56px'}], position: 1500, duration: 750, easing: "easeInOutQuad" },
                { id: "eid91", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 625, easing: "easeInOutQuad" },
                { id: "eid92", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 625, duration: 875, easing: "easeInOutQuad" },
                { id: "eid93", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid94", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid95", tween: [ "style", "${_a1a_kopf}", "top", '116px', { fromValue: '103px'}], position: 0, duration: 313, easing: "easeInOutQuad" },
                { id: "eid96", tween: [ "style", "${_a1a_kopf}", "top", '106px', { fromValue: '116px'}], position: 313, duration: 312, easing: "easeInOutQuad" },
                { id: "eid97", tween: [ "style", "${_a1a_kopf}", "top", '118px', { fromValue: '106px'}], position: 625, duration: 313, easing: "easeInOutQuad" },
                { id: "eid98", tween: [ "style", "${_a1a_kopf}", "top", '106px', { fromValue: '118px'}], position: 938, duration: 562, easing: "easeInOutQuad" },
                { id: "eid99", tween: [ "style", "${_a1a_kopf}", "top", '105px', { fromValue: '106px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid100", tween: [ "style", "${_a1a_kopf}", "top", '103px', { fromValue: '105px'}], position: 2100, duration: 150, easing: "easeInOutQuad" }            ]
        }
    }
},
"sym_a1b": {
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
                    id: 'a1b_windel',
                    type: 'image',
                    rect: ['59px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1b_windel.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['-6']],
                    id: 'a1b_kopf',
                    type: 'image',
                    rect: ['56px', '60px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'a1b_corpus',
                    type: 'image',
                    rect: ['59px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1b_corpus.svg', '0px', '0px']
                },
                {
                    id: 'a1b_beine',
                    type: 'image',
                    rect: ['59px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1b_beine.svg', '0px', '0px']
                },
                {
                    id: 'a1b_wurfel',
                    type: 'image',
                    rect: ['59px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1b_wurfel.svg', '0px', '0px']
                },
                {
                    id: 'a1b_arm_v',
                    type: 'image',
                    rect: ['59px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1b_arm_v.svg', '0px', '0px']
                },
                {
                    id: 'a1b_arm_h',
                    type: 'image',
                    rect: ['59px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a1b_arm_h.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a1b_arm_h}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1b_kopf}": [
                ["style", "top", '53px'],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '-3deg']
            ],
            "${_a1b_windel}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1b_corpus}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1b_wurfel}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1b_beine}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1b_arm_v}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1641px'],
                ["style", "width", '2126px']
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
                { id: "eid203", tween: [ "style", "${_a1b_kopf}", "left", '8px', { fromValue: '39px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid204", tween: [ "style", "${_a1b_kopf}", "left", '46px', { fromValue: '8px'}], position: 250, duration: 275, easing: "easeInOutQuad" },
                { id: "eid205", tween: [ "style", "${_a1b_kopf}", "left", '29px', { fromValue: '46px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid206", tween: [ "style", "${_a1b_kopf}", "left", '49px', { fromValue: '29px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid207", tween: [ "style", "${_a1b_kopf}", "left", '100px', { fromValue: '49px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid208", tween: [ "style", "${_a1b_kopf}", "left", '39px', { fromValue: '100px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid209", tween: [ "style", "${_a1b_kopf}", "left", '39px', { fromValue: '39px'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${_a1b_wurfel}", "top", '71px', { fromValue: '61px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid151", tween: [ "style", "${_a1b_wurfel}", "top", '51px', { fromValue: '71px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid152", tween: [ "style", "${_a1b_wurfel}", "top", '61px', { fromValue: '51px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid153", tween: [ "style", "${_a1b_wurfel}", "top", '71px', { fromValue: '61px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid154", tween: [ "style", "${_a1b_wurfel}", "top", '61px', { fromValue: '71px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid120", tween: [ "style", "${_a1b_arm_h}", "top", '71px', { fromValue: '61px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid121", tween: [ "style", "${_a1b_arm_h}", "top", '59px', { fromValue: '71px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid122", tween: [ "style", "${_a1b_arm_h}", "top", '61px', { fromValue: '59px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid123", tween: [ "style", "${_a1b_arm_h}", "top", '71px', { fromValue: '61px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid124", tween: [ "style", "${_a1b_arm_h}", "top", '61px', { fromValue: '71px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid221", tween: [ "transform", "${_a1b_windel}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 2250, easing: "easeInOutQuad" },
                { id: "eid222", tween: [ "transform", "${_a1b_windel}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid135", tween: [ "style", "${_a1b_arm_v}", "top", '71px', { fromValue: '61px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid136", tween: [ "style", "${_a1b_arm_v}", "top", '51px', { fromValue: '71px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid137", tween: [ "style", "${_a1b_arm_v}", "top", '61px', { fromValue: '51px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid138", tween: [ "style", "${_a1b_arm_v}", "top", '71px', { fromValue: '61px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid139", tween: [ "style", "${_a1b_arm_v}", "top", '61px', { fromValue: '71px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid172", tween: [ "style", "${_a1b_beine}", "left", '48px', { fromValue: '59px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid173", tween: [ "style", "${_a1b_beine}", "left", '68px', { fromValue: '48px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid174", tween: [ "style", "${_a1b_beine}", "left", '28px', { fromValue: '68px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid175", tween: [ "style", "${_a1b_beine}", "left", '42px', { fromValue: '28px'}], position: 1125, duration: 285, easing: "easeInOutQuad" },
                { id: "eid176", tween: [ "style", "${_a1b_beine}", "left", '22px', { fromValue: '42px'}], position: 1410, duration: 275, easing: "easeInOutQuad" },
                { id: "eid177", tween: [ "style", "${_a1b_beine}", "left", '59px', { fromValue: '22px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid178", tween: [ "style", "${_a1b_beine}", "left", '59px', { fromValue: '59px'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid160", tween: [ "transform", "${_a1b_wurfel}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid161", tween: [ "transform", "${_a1b_wurfel}", "rotateZ", '-10deg', { fromValue: '4deg'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid162", tween: [ "transform", "${_a1b_wurfel}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid163", tween: [ "transform", "${_a1b_wurfel}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid164", tween: [ "transform", "${_a1b_wurfel}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid219", tween: [ "style", "${_a1b_windel}", "left", '59px', { fromValue: '59px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid220", tween: [ "style", "${_a1b_windel}", "left", '59px', { fromValue: '59px'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid165", tween: [ "style", "${_a1b_beine}", "top", '75px', { fromValue: '61px'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid166", tween: [ "style", "${_a1b_beine}", "top", '54px', { fromValue: '75px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid167", tween: [ "style", "${_a1b_beine}", "top", '99px', { fromValue: '54px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid168", tween: [ "style", "${_a1b_beine}", "top", '74px', { fromValue: '99px'}], position: 1125, duration: 285, easing: "easeInOutQuad" },
                { id: "eid169", tween: [ "style", "${_a1b_beine}", "top", '112px', { fromValue: '74px'}], position: 1410, duration: 275, easing: "easeInOutQuad" },
                { id: "eid170", tween: [ "style", "${_a1b_beine}", "top", '61px', { fromValue: '112px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid171", tween: [ "style", "${_a1b_beine}", "top", '61px', { fromValue: '61px'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid210", tween: [ "transform", "${_a1b_kopf}", "rotateZ", '-10deg', { fromValue: '-3deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid211", tween: [ "transform", "${_a1b_kopf}", "rotateZ", '-1deg', { fromValue: '-10deg'}], position: 250, duration: 275, easing: "easeInOutQuad" },
                { id: "eid212", tween: [ "transform", "${_a1b_kopf}", "rotateZ", '-6deg', { fromValue: '-1deg'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid213", tween: [ "transform", "${_a1b_kopf}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid214", tween: [ "transform", "${_a1b_kopf}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid215", tween: [ "transform", "${_a1b_kopf}", "rotateZ", '-4deg', { fromValue: '12deg'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid216", tween: [ "transform", "${_a1b_kopf}", "rotateZ", '-3deg', { fromValue: '-4deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid217", tween: [ "style", "${_a1b_windel}", "top", '61px', { fromValue: '61px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid218", tween: [ "style", "${_a1b_windel}", "top", '61px', { fromValue: '61px'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid125", tween: [ "style", "${_a1b_arm_h}", "left", '85px', { fromValue: '59px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid126", tween: [ "style", "${_a1b_arm_h}", "left", '29px', { fromValue: '85px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid127", tween: [ "style", "${_a1b_arm_h}", "left", '59px', { fromValue: '29px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid128", tween: [ "style", "${_a1b_arm_h}", "left", '85px', { fromValue: '59px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid129", tween: [ "style", "${_a1b_arm_h}", "left", '59px', { fromValue: '85px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid155", tween: [ "style", "${_a1b_wurfel}", "left", '85px', { fromValue: '59px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid156", tween: [ "style", "${_a1b_wurfel}", "left", '29px', { fromValue: '85px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid157", tween: [ "style", "${_a1b_wurfel}", "left", '59px', { fromValue: '29px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid158", tween: [ "style", "${_a1b_wurfel}", "left", '85px', { fromValue: '59px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "style", "${_a1b_wurfel}", "left", '59px', { fromValue: '85px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid186", tween: [ "style", "${_a1b_corpus}", "top", '62px', { fromValue: '61px'}], position: 0, duration: 1125, easing: "easeInOutQuad" },
                { id: "eid187", tween: [ "style", "${_a1b_corpus}", "top", '63px', { fromValue: '62px'}], position: 1125, duration: 1125, easing: "easeInOutQuad" },
                { id: "eid188", tween: [ "style", "${_a1b_corpus}", "top", '61px', { fromValue: '63px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid189", tween: [ "style", "${_a1b_corpus}", "left", '70px', { fromValue: '59px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid190", tween: [ "style", "${_a1b_corpus}", "left", '52px', { fromValue: '70px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid191", tween: [ "style", "${_a1b_corpus}", "left", '59px', { fromValue: '52px'}], position: 1125, duration: 1125, easing: "easeInOutQuad" },
                { id: "eid130", tween: [ "transform", "${_a1b_arm_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid131", tween: [ "transform", "${_a1b_arm_h}", "rotateZ", '-5deg', { fromValue: '4deg'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid132", tween: [ "transform", "${_a1b_arm_h}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid133", tween: [ "transform", "${_a1b_arm_h}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid134", tween: [ "transform", "${_a1b_arm_h}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid192", tween: [ "transform", "${_a1b_corpus}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid193", tween: [ "transform", "${_a1b_corpus}", "rotateZ", '-2deg', { fromValue: '2deg'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid194", tween: [ "transform", "${_a1b_corpus}", "rotateZ", '-1deg', { fromValue: '-2deg'}], position: 1125, duration: 1125, easing: "easeInOutQuad" },
                { id: "eid195", tween: [ "transform", "${_a1b_corpus}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid179", tween: [ "transform", "${_a1b_beine}", "rotateZ", '-4deg', { fromValue: '0deg'}], position: 0, duration: 525, easing: "easeInOutQuad" },
                { id: "eid180", tween: [ "transform", "${_a1b_beine}", "rotateZ", '2deg', { fromValue: '-4deg'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid181", tween: [ "transform", "${_a1b_beine}", "rotateZ", '-10deg', { fromValue: '2deg'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid182", tween: [ "transform", "${_a1b_beine}", "rotateZ", '-5deg', { fromValue: '-10deg'}], position: 1125, duration: 285, easing: "easeInOutQuad" },
                { id: "eid183", tween: [ "transform", "${_a1b_beine}", "rotateZ", '-13deg', { fromValue: '-5deg'}], position: 1410, duration: 275, easing: "easeInOutQuad" },
                { id: "eid184", tween: [ "transform", "${_a1b_beine}", "rotateZ", '-1deg', { fromValue: '-13deg'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid185", tween: [ "transform", "${_a1b_beine}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid140", tween: [ "style", "${_a1b_arm_v}", "left", '85px', { fromValue: '59px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid141", tween: [ "style", "${_a1b_arm_v}", "left", '29px', { fromValue: '85px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid142", tween: [ "style", "${_a1b_arm_v}", "left", '59px', { fromValue: '29px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid143", tween: [ "style", "${_a1b_arm_v}", "left", '85px', { fromValue: '59px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid144", tween: [ "style", "${_a1b_arm_v}", "left", '59px', { fromValue: '85px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid196", tween: [ "style", "${_a1b_kopf}", "top", '47px', { fromValue: '53px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid197", tween: [ "style", "${_a1b_kopf}", "top", '52px', { fromValue: '47px'}], position: 250, duration: 275, easing: "easeInOutQuad" },
                { id: "eid198", tween: [ "style", "${_a1b_kopf}", "top", '46px', { fromValue: '52px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid199", tween: [ "style", "${_a1b_kopf}", "top", '49px', { fromValue: '46px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid200", tween: [ "style", "${_a1b_kopf}", "top", '82px', { fromValue: '49px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid201", tween: [ "style", "${_a1b_kopf}", "top", '53px', { fromValue: '82px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid202", tween: [ "style", "${_a1b_kopf}", "top", '53px', { fromValue: '53px'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid146", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '-10deg', { fromValue: '4deg'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid147", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid148", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid149", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" }            ]
        }
    }
},
"sym_a2a": {
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
                    id: 'a2a_arm_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_arm_h.svg', '0px', '0px']
                },
                {
                    id: 'a2a_arm_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_arm_v.svg', '0px', '0px']
                },
                {
                    id: 'a2a_bein_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_bein_v.svg', '0px', '0px']
                },
                {
                    id: 'a2a_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'a2a_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'a2a_teddy',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_teddy.svg', '0px', '0px']
                },
                {
                    id: 'a2a_zehen_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_zehen_h.svg', '0px', '0px']
                },
                {
                    id: 'a2a_zehen_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_zehen_v.svg', '0px', '0px']
                },
                {
                    id: 'a2a_bein_h',
                    type: 'image',
                    rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2a_bein_h.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a2a_bein_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2a_teddy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2a_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2a_arm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2a_zehen_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2a_zehen_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2a_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2a_arm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_a2a_bein_h}": [
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
            duration: 3557,
            autoPlay: false,
            timeline: [
                { id: "eid274", tween: [ "style", "${_a2a_corpus}", "top", '1px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid275", tween: [ "style", "${_a2a_corpus}", "top", '0px', { fromValue: '1px'}], position: 889, duration: 827, easing: "easeInOutQuad" },
                { id: "eid276", tween: [ "style", "${_a2a_corpus}", "top", '1px', { fromValue: '0px'}], position: 1717, duration: 654, easing: "easeInOutQuad" },
                { id: "eid277", tween: [ "style", "${_a2a_corpus}", "top", '0px', { fromValue: '1px'}], position: 2371, duration: 1185, easing: "easeInOutQuad" },
                { id: "eid285", tween: [ "transform", "${_a2a_bein_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid247", tween: [ "style", "${_a2a_zehen_h}", "left", '11px', { fromValue: '0px'}], position: 0, duration: 1146, easing: "easeInQuad" },
                { id: "eid248", tween: [ "style", "${_a2a_zehen_h}", "left", '-17px', { fromValue: '11px'}], position: 1146, duration: 133, easing: "easeInOutQuad" },
                { id: "eid249", tween: [ "style", "${_a2a_zehen_h}", "left", '12px', { fromValue: '-17px'}], position: 1279, duration: 169, easing: "easeInOutQuad" },
                { id: "eid250", tween: [ "style", "${_a2a_zehen_h}", "left", '-17px', { fromValue: '12px'}], position: 1448, duration: 156, easing: "easeInOutQuad" },
                { id: "eid251", tween: [ "style", "${_a2a_zehen_h}", "left", '0px', { fromValue: '-17px'}], position: 1604, duration: 1952, easing: "easeInOutQuad" },
                { id: "eid283", tween: [ "style", "${_a2a_bein_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid302", tween: [ "style", "${_a2a_arm_h}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid284", tween: [ "style", "${_a2a_bein_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid268", tween: [ "style", "${_a2a_kopf}", "top", '-9px', { fromValue: '0px'}], position: 0, duration: 1243, easing: "easeInOutQuad" },
                { id: "eid269", tween: [ "style", "${_a2a_kopf}", "top", '0px', { fromValue: '-9px'}], position: 1243, duration: 2313, easing: "easeInOutQuad" },
                { id: "eid278", tween: [ "style", "${_a2a_corpus}", "left", '-4px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid279", tween: [ "style", "${_a2a_corpus}", "left", '0px', { fromValue: '-4px'}], position: 889, duration: 827, easing: "easeInOutQuad" },
                { id: "eid280", tween: [ "style", "${_a2a_corpus}", "left", '-3px', { fromValue: '0px'}], position: 1717, duration: 654, easing: "easeInOutQuad" },
                { id: "eid281", tween: [ "style", "${_a2a_corpus}", "left", '0px', { fromValue: '-3px'}], position: 2371, duration: 1185, easing: "easeInOutQuad" },
                { id: "eid270", tween: [ "style", "${_a2a_kopf}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 1243, easing: "easeInOutQuad" },
                { id: "eid271", tween: [ "style", "${_a2a_kopf}", "left", '0px', { fromValue: '10px'}], position: 1243, duration: 2313, easing: "easeInOutQuad" },
                { id: "eid264", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid265", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 889, duration: 889, easing: "easeInOutQuad" },
                { id: "eid266", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 1778, duration: 889, easing: "easeInOutQuad" },
                { id: "eid267", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 2667, duration: 889, easing: "easeInOutQuad" },
                { id: "eid291", tween: [ "style", "${_a2a_arm_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid292", tween: [ "style", "${_a2a_arm_v}", "left", '-33px', { fromValue: '0px'}], position: 2806, duration: 195, easing: "easeOutQuad" },
                { id: "eid293", tween: [ "style", "${_a2a_arm_v}", "left", '-2px', { fromValue: '-33px'}], position: 3001, duration: 170, easing: "easeInOutQuad" },
                { id: "eid294", tween: [ "style", "${_a2a_arm_v}", "left", '-58px', { fromValue: '-2px'}], position: 3171, duration: 230, easing: "easeInOutQuad" },
                { id: "eid295", tween: [ "style", "${_a2a_arm_v}", "left", '0px', { fromValue: '-58px'}], position: 3401, duration: 155, easing: "easeInOutQuad" },
                { id: "eid232", tween: [ "style", "${_a2a_zehen_v}", "left", '18px', { fromValue: '0px'}], position: 0, duration: 2005, easing: "easeInOutQuad" },
                { id: "eid233", tween: [ "style", "${_a2a_zehen_v}", "left", '-18px', { fromValue: '18px'}], position: 2005, duration: 179, easing: "easeInOutQuad" },
                { id: "eid234", tween: [ "style", "${_a2a_zehen_v}", "left", '9px', { fromValue: '-18px'}], position: 2184, duration: 147, easing: "easeInOutQuad" },
                { id: "eid235", tween: [ "style", "${_a2a_zehen_v}", "left", '-12px', { fromValue: '9px'}], position: 2331, duration: 133, easing: "easeInOutQuad" },
                { id: "eid236", tween: [ "style", "${_a2a_zehen_v}", "left", '0px', { fromValue: '-12px'}], position: 2464, duration: 1093, easing: "easeInOutQuad" },
                { id: "eid227", tween: [ "style", "${_a2a_zehen_v}", "top", '-31px', { fromValue: '0px'}], position: 0, duration: 2005, easing: "easeInOutQuad" },
                { id: "eid228", tween: [ "style", "${_a2a_zehen_v}", "top", '96px', { fromValue: '-31px'}], position: 2005, duration: 179, easing: "easeInOutQuad" },
                { id: "eid229", tween: [ "style", "${_a2a_zehen_v}", "top", '-9px', { fromValue: '96px'}], position: 2184, duration: 147, easing: "easeInOutQuad" },
                { id: "eid230", tween: [ "style", "${_a2a_zehen_v}", "top", '57px', { fromValue: '-9px'}], position: 2331, duration: 133, easing: "easeInOutQuad" },
                { id: "eid231", tween: [ "style", "${_a2a_zehen_v}", "top", '0px', { fromValue: '57px'}], position: 2464, duration: 1093, easing: "easeInOutQuad" },
                { id: "eid296", tween: [ "transform", "${_a2a_arm_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid297", tween: [ "transform", "${_a2a_arm_v}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 2806, duration: 195, easing: "easeOutQuad" },
                { id: "eid298", tween: [ "transform", "${_a2a_arm_v}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 3001, duration: 170, easing: "easeInOutQuad" },
                { id: "eid299", tween: [ "transform", "${_a2a_arm_v}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 3171, duration: 230, easing: "easeInOutQuad" },
                { id: "eid300", tween: [ "transform", "${_a2a_arm_v}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 3401, duration: 155, easing: "easeInOutQuad" },
                { id: "eid261", tween: [ "style", "${_a2a_teddy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid262", tween: [ "style", "${_a2a_teddy}", "left", '0px', { fromValue: '0px'}], position: 1778, duration: 0, easing: "easeInOutQuad" },
                { id: "eid263", tween: [ "style", "${_a2a_teddy}", "left", '0px', { fromValue: '0px'}], position: 3556, duration: 0, easing: "easeInOutQuad" },
                { id: "eid301", tween: [ "style", "${_a2a_arm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid303", tween: [ "transform", "${_a2a_arm_h}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid304", tween: [ "transform", "${_a2a_arm_h}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 889, duration: 827, easing: "easeInOutQuad" },
                { id: "eid305", tween: [ "transform", "${_a2a_arm_h}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1717, duration: 654, easing: "easeInOutQuad" },
                { id: "eid306", tween: [ "transform", "${_a2a_arm_h}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2371, duration: 1185, easing: "easeInOutQuad" },
                { id: "eid242", tween: [ "style", "${_a2a_zehen_h}", "top", '11px', { fromValue: '0px'}], position: 0, duration: 1146, easing: "easeInQuad" },
                { id: "eid243", tween: [ "style", "${_a2a_zehen_h}", "top", '-4px', { fromValue: '11px'}], position: 1146, duration: 133, easing: "easeInOutQuad" },
                { id: "eid244", tween: [ "style", "${_a2a_zehen_h}", "top", '5px', { fromValue: '-4px'}], position: 1279, duration: 169, easing: "easeInOutQuad" },
                { id: "eid245", tween: [ "style", "${_a2a_zehen_h}", "top", '-5px', { fromValue: '5px'}], position: 1448, duration: 156, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "style", "${_a2a_zehen_h}", "top", '0px', { fromValue: '-5px'}], position: 1604, duration: 1952, easing: "easeInOutQuad" },
                { id: "eid272", tween: [ "transform", "${_a2a_kopf}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 1243, easing: "easeInOutQuad" },
                { id: "eid273", tween: [ "transform", "${_a2a_kopf}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1243, duration: 2313, easing: "easeInOutQuad" },
                { id: "eid282", tween: [ "transform", "${_a2a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_a2a_teddy}", "top", '20px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid258", tween: [ "style", "${_a2a_teddy}", "top", '0px', { fromValue: '20px'}], position: 889, duration: 889, easing: "easeInOutQuad" },
                { id: "eid259", tween: [ "style", "${_a2a_teddy}", "top", '20px', { fromValue: '0px'}], position: 1778, duration: 889, easing: "easeInOutQuad" },
                { id: "eid260", tween: [ "style", "${_a2a_teddy}", "top", '0px', { fromValue: '20px'}], position: 2667, duration: 889, easing: "easeInOutQuad" },
                { id: "eid237", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 2005, easing: "easeInOutQuad" },
                { id: "eid238", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '-13deg', { fromValue: '5deg'}], position: 2005, duration: 179, easing: "easeInOutQuad" },
                { id: "eid239", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '1deg', { fromValue: '-13deg'}], position: 2184, duration: 147, easing: "easeInOutQuad" },
                { id: "eid240", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '-7deg', { fromValue: '1deg'}], position: 2331, duration: 133, easing: "easeInOutQuad" },
                { id: "eid241", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 2464, duration: 1093, easing: "easeInOutQuad" },
                { id: "eid286", tween: [ "style", "${_a2a_arm_v}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid287", tween: [ "style", "${_a2a_arm_v}", "top", '0px', { fromValue: '0px'}], position: 2806, duration: 0, easing: "easeInOutQuad" },
                { id: "eid288", tween: [ "style", "${_a2a_arm_v}", "top", '-2px', { fromValue: '0px'}], position: 3001, duration: 170, easing: "easeInOutQuad" },
                { id: "eid289", tween: [ "style", "${_a2a_arm_v}", "top", '-4px', { fromValue: '-2px'}], position: 3171, duration: 230, easing: "easeOutQuad" },
                { id: "eid290", tween: [ "style", "${_a2a_arm_v}", "top", '0px', { fromValue: '-4px'}], position: 3401, duration: 155, easing: "easeInOutQuad" },
                { id: "eid252", tween: [ "transform", "${_a2a_zehen_h}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 0, duration: 1146, easing: "easeInQuad" },
                { id: "eid253", tween: [ "transform", "${_a2a_zehen_h}", "rotateZ", '-10deg', { fromValue: '9deg'}], position: 1146, duration: 133, easing: "easeInOutQuad" },
                { id: "eid254", tween: [ "transform", "${_a2a_zehen_h}", "rotateZ", '6deg', { fromValue: '-10deg'}], position: 1279, duration: 169, easing: "easeInOutQuad" },
                { id: "eid255", tween: [ "transform", "${_a2a_zehen_h}", "rotateZ", '-11deg', { fromValue: '6deg'}], position: 1448, duration: 156, easing: "easeOutQuad" },
                { id: "eid256", tween: [ "transform", "${_a2a_zehen_h}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 1604, duration: 1952, easing: "easeInOutQuad" }            ]
        }
    }
},
"sym_a2b": {
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
                    id: 'a2b_arm_hCopy',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_arm_h.svg', '0px', '0px']
                },
                {
                    id: 'a2b_arm_vCopy',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_arm_v.svg', '0px', '0px']
                },
                {
                    id: 'a2b_barbieCopy',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_barbie.svg', '0px', '0px']
                },
                {
                    id: 'a2b_bein_h',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_bein_h.svg', '0px', '0px']
                },
                {
                    id: 'a2b_bein_v',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_bein_v.svg', '0px', '0px']
                },
                {
                    id: 'a2b_corpusCopy',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_corpus.svg', '0px', '0px']
                },
                {
                    id: 'a2b_kopfCopy',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'a2b_zehen_hCopy',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_zehen_h.svg', '0px', '0px']
                },
                {
                    id: 'a2b_zehen_vCopy',
                    type: 'image',
                    rect: ['0px', '1px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/a2b_zehen_v.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_a2b_bein_v}": [
                ["style", "left", '0px'],
                ["style", "top", '1px']
            ],
            "${_a2b_zehen_vCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2b_arm_hCopy}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2b_zehen_hCopy}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2b_kopfCopy}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2b_arm_vCopy}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2b_corpusCopy}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2b_barbieCopy}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a2b_bein_h}": [
                ["style", "left", '0px'],
                ["style", "top", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1537px'],
                ["style", "width", '2051px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3557,
            autoPlay: false,
            timeline: [
                { id: "eid410", tween: [ "transform", "${_a2b_zehen_hCopy}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid411", tween: [ "transform", "${_a2b_zehen_hCopy}", "rotateZ", '-9deg', { fromValue: '-5deg'}], position: 889, duration: 1340, easing: "easeInOutQuad" },
                { id: "eid412", tween: [ "transform", "${_a2b_zehen_hCopy}", "rotateZ", '4deg', { fromValue: '-9deg'}], position: 2229, duration: 271, easing: "easeInOutQuad" },
                { id: "eid413", tween: [ "transform", "${_a2b_zehen_hCopy}", "rotateZ", '11deg', { fromValue: '4deg'}], position: 2500, duration: 228, easing: "easeInOutQuad" },
                { id: "eid414", tween: [ "transform", "${_a2b_zehen_hCopy}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 2728, duration: 828, easing: "easeInOutQuad" },
                { id: "eid449", tween: [ "transform", "${_a2b_arm_vCopy}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 555, duration: 195, easing: "easeOutQuad" },
                { id: "eid450", tween: [ "transform", "${_a2b_arm_vCopy}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 750, duration: 170, easing: "easeInOutQuad" },
                { id: "eid451", tween: [ "transform", "${_a2b_arm_vCopy}", "rotateZ", '-7deg', { fromValue: '0deg'}], position: 920, duration: 230, easing: "easeInOutQuad" },
                { id: "eid452", tween: [ "transform", "${_a2b_arm_vCopy}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 1150, duration: 155, easing: "easeInOutQuad" },
                { id: "eid454", tween: [ "style", "${_a2b_arm_hCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid455", tween: [ "transform", "${_a2b_arm_hCopy}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid456", tween: [ "transform", "${_a2b_arm_hCopy}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 889, duration: 827, easing: "easeInOutQuad" },
                { id: "eid457", tween: [ "transform", "${_a2b_arm_hCopy}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1717, duration: 654, easing: "easeInOutQuad" },
                { id: "eid458", tween: [ "transform", "${_a2b_arm_hCopy}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2371, duration: 1185, easing: "easeInOutQuad" },
                { id: "eid422", tween: [ "style", "${_a2b_corpusCopy}", "top", '0px', { fromValue: '1px'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid423", tween: [ "style", "${_a2b_corpusCopy}", "top", '1px', { fromValue: '0px'}], position: 889, duration: 827, easing: "easeInOutQuad" },
                { id: "eid424", tween: [ "style", "${_a2b_corpusCopy}", "top", '0px', { fromValue: '1px'}], position: 1717, duration: 654, easing: "easeInOutQuad" },
                { id: "eid425", tween: [ "style", "${_a2b_corpusCopy}", "top", '1px', { fromValue: '0px'}], position: 2371, duration: 1185, easing: "easeInOutQuad" },
                { id: "eid437", tween: [ "transform", "${_a2b_barbieCopy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid438", tween: [ "transform", "${_a2b_barbieCopy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 889, duration: 889, easing: "easeInOutQuad" },
                { id: "eid439", tween: [ "transform", "${_a2b_barbieCopy}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 1778, duration: 889, easing: "easeInOutQuad" },
                { id: "eid440", tween: [ "transform", "${_a2b_barbieCopy}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 2667, duration: 889, easing: "easeInOutQuad" },
                { id: "eid435", tween: [ "style", "${_a2b_barbieCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid436", tween: [ "style", "${_a2b_barbieCopy}", "left", '0px', { fromValue: '0px'}], position: 1778, duration: 0, easing: "easeInOutQuad" },
                { id: "eid415", tween: [ "style", "${_a2b_kopfCopy}", "top", '9px', { fromValue: '1px'}], position: 0, duration: 1206, easing: "easeInQuad" },
                { id: "eid416", tween: [ "style", "${_a2b_kopfCopy}", "top", '10px', { fromValue: '9px'}], position: 1333, duration: 354, easing: "easeOutQuad" },
                { id: "eid417", tween: [ "style", "${_a2b_kopfCopy}", "top", '1px', { fromValue: '10px'}], position: 1687, duration: 1869, easing: "easeInOutQuad" },
                { id: "eid420", tween: [ "transform", "${_a2b_kopfCopy}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 1206, easing: "easeInQuad" },
                { id: "eid421", tween: [ "transform", "${_a2b_kopfCopy}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1687, duration: 1869, easing: "easeInOutQuad" },
                { id: "eid430", tween: [ "transform", "${_a2b_corpusCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid431", tween: [ "style", "${_a2b_barbieCopy}", "top", '-19px', { fromValue: '1px'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid432", tween: [ "style", "${_a2b_barbieCopy}", "top", '1px', { fromValue: '-19px'}], position: 889, duration: 889, easing: "easeInOutQuad" },
                { id: "eid433", tween: [ "style", "${_a2b_barbieCopy}", "top", '-19px', { fromValue: '1px'}], position: 1778, duration: 889, easing: "easeInOutQuad" },
                { id: "eid434", tween: [ "style", "${_a2b_barbieCopy}", "top", '1px', { fromValue: '-19px'}], position: 2667, duration: 889, easing: "easeInOutQuad" },
                { id: "eid389", tween: [ "style", "${_a2b_zehen_vCopy}", "left", '13px', { fromValue: '3px'}], position: 0, duration: 1620, easing: "easeInOutQuad" },
                { id: "eid390", tween: [ "style", "${_a2b_zehen_vCopy}", "left", '-6px', { fromValue: '13px'}], position: 1620, duration: 179, easing: "easeInOutQuad" },
                { id: "eid391", tween: [ "style", "${_a2b_zehen_vCopy}", "left", '4px', { fromValue: '-6px'}], position: 1799, duration: 147, easing: "easeInOutQuad" },
                { id: "eid392", tween: [ "style", "${_a2b_zehen_vCopy}", "left", '-9px', { fromValue: '4px'}], position: 1946, duration: 133, easing: "easeInOutQuad" },
                { id: "eid393", tween: [ "style", "${_a2b_zehen_vCopy}", "left", '3px', { fromValue: '-9px'}], position: 2079, duration: 1478, easing: "easeInOutQuad" },
                { id: "eid441", tween: [ "style", "${_a2b_arm_vCopy}", "top", '1px', { fromValue: '1px'}], position: 555, duration: 0, easing: "easeInOutQuad" },
                { id: "eid442", tween: [ "style", "${_a2b_arm_vCopy}", "top", '3px', { fromValue: '1px'}], position: 750, duration: 170, easing: "easeInOutQuad" },
                { id: "eid443", tween: [ "style", "${_a2b_arm_vCopy}", "top", '5px', { fromValue: '3px'}], position: 920, duration: 230, easing: "easeOutQuad" },
                { id: "eid444", tween: [ "style", "${_a2b_arm_vCopy}", "top", '1px', { fromValue: '5px'}], position: 1150, duration: 155, easing: "easeInOutQuad" },
                { id: "eid426", tween: [ "style", "${_a2b_corpusCopy}", "left", '-4px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid427", tween: [ "style", "${_a2b_corpusCopy}", "left", '0px', { fromValue: '-4px'}], position: 889, duration: 827, easing: "easeInOutQuad" },
                { id: "eid428", tween: [ "style", "${_a2b_corpusCopy}", "left", '-3px', { fromValue: '0px'}], position: 1717, duration: 654, easing: "easeInOutQuad" },
                { id: "eid429", tween: [ "style", "${_a2b_corpusCopy}", "left", '0px', { fromValue: '-3px'}], position: 2371, duration: 1185, easing: "easeInOutQuad" },
                { id: "eid445", tween: [ "style", "${_a2b_arm_vCopy}", "left", '-33px', { fromValue: '0px'}], position: 555, duration: 195, easing: "easeOutQuad" },
                { id: "eid446", tween: [ "style", "${_a2b_arm_vCopy}", "left", '-2px', { fromValue: '-33px'}], position: 750, duration: 170, easing: "easeInOutQuad" },
                { id: "eid447", tween: [ "style", "${_a2b_arm_vCopy}", "left", '-58px', { fromValue: '-2px'}], position: 920, duration: 230, easing: "easeInOutQuad" },
                { id: "eid448", tween: [ "style", "${_a2b_arm_vCopy}", "left", '0px', { fromValue: '-58px'}], position: 1150, duration: 155, easing: "easeInOutQuad" },
                { id: "eid453", tween: [ "style", "${_a2b_arm_hCopy}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid405", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '8px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid406", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '14px', { fromValue: '8px'}], position: 889, duration: 1340, easing: "easeInOutQuad" },
                { id: "eid407", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '-6px', { fromValue: '14px'}], position: 2229, duration: 271, easing: "easeInOutQuad" },
                { id: "eid408", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '-17px', { fromValue: '-6px'}], position: 2500, duration: 228, easing: "easeInOutQuad" },
                { id: "eid409", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '0px', { fromValue: '-17px'}], position: 2728, duration: 828, easing: "easeInOutQuad" },
                { id: "eid418", tween: [ "style", "${_a2b_kopfCopy}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 1687, easing: "easeInOutQuad" },
                { id: "eid419", tween: [ "style", "${_a2b_kopfCopy}", "left", '0px', { fromValue: '10px'}], position: 1687, duration: 1869, easing: "easeInOutQuad" },
                { id: "eid400", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '-1px', { fromValue: '1px'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid401", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '-2px', { fromValue: '-1px'}], position: 889, duration: 1340, easing: "easeInOutQuad" },
                { id: "eid402", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '1px', { fromValue: '-2px'}], position: 2229, duration: 271, easing: "easeInOutQuad" },
                { id: "eid403", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '0px', { fromValue: '1px'}], position: 2500, duration: 228, easing: "easeInOutQuad" },
                { id: "eid404", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '1px', { fromValue: '0px'}], position: 2728, duration: 828, easing: "easeInOutQuad" },
                { id: "eid394", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid395", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '-5deg', { fromValue: '-2deg'}], position: 889, duration: 731, easing: "easeOutQuad" },
                { id: "eid396", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '6deg', { fromValue: '-5deg'}], position: 1620, duration: 179, easing: "easeInOutQuad" },
                { id: "eid397", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '-1deg', { fromValue: '6deg'}], position: 1799, duration: 147, easing: "easeInOutQuad" },
                { id: "eid398", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '7deg', { fromValue: '-1deg'}], position: 1946, duration: 133, easing: "easeInOutQuad" },
                { id: "eid399", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 2079, duration: 1478, easing: "easeInOutQuad" },
                { id: "eid383", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '13px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid384", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '34px', { fromValue: '13px'}], position: 889, duration: 731, easing: "easeOutQuad" },
                { id: "eid385", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '-45px', { fromValue: '34px'}], position: 1620, duration: 179, easing: "easeInOutQuad" },
                { id: "eid386", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '8px', { fromValue: '-45px'}], position: 1799, duration: 147, easing: "easeInOutQuad" },
                { id: "eid387", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '-53px', { fromValue: '8px'}], position: 1946, duration: 133, easing: "easeInOutQuad" },
                { id: "eid388", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '0px', { fromValue: '-53px'}], position: 2079, duration: 1478, easing: "easeInOutQuad" }            ]
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
            duration: 5175,
            autoPlay: false,
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
            "${_a3b_schulter_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
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
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11370,
            autoPlay: false,
            timeline: [
                { id: "eid584", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid585", tween: [ "style", "${_a3b_hand_v}", "left", '-20px', { fromValue: '-16px'}], position: 5700, duration: 221, easing: "easeInOutQuad" },
                { id: "eid586", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '-20px'}], position: 6010, duration: 221, easing: "easeInOutQuad" },
                { id: "eid587", tween: [ "style", "${_a3b_hand_v}", "left", '0px', { fromValue: '-16px'}], position: 6231, duration: 525, easing: "easeInOutQuad" },
                { id: "eid588", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid589", tween: [ "style", "${_a3b_hand_v}", "left", '-20px', { fromValue: '-16px'}], position: 7440, duration: 221, easing: "easeInOutQuad" },
                { id: "eid590", tween: [ "style", "${_a3b_hand_v}", "left", '-8px', { fromValue: '-20px'}], position: 8345, duration: 309, easing: "easeInOutQuad" },
                { id: "eid591", tween: [ "style", "${_a3b_hand_v}", "left", '-20px', { fromValue: '-8px'}], position: 8654, duration: 236, easing: "easeInOutQuad" },
                { id: "eid592", tween: [ "style", "${_a3b_hand_v}", "left", '-16px', { fromValue: '-20px'}], position: 9044, duration: 486, easing: "easeInOutQuad" },
                { id: "eid593", tween: [ "style", "${_a3b_hand_v}", "left", '0px', { fromValue: '-16px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid574", tween: [ "style", "${_a3b_hand_v}", "top", '-3px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid575", tween: [ "style", "${_a3b_hand_v}", "top", '14px', { fromValue: '-3px'}], position: 5700, duration: 221, easing: "easeInOutQuad" },
                { id: "eid576", tween: [ "style", "${_a3b_hand_v}", "top", '-3px', { fromValue: '14px'}], position: 6010, duration: 221, easing: "easeInOutQuad" },
                { id: "eid577", tween: [ "style", "${_a3b_hand_v}", "top", '0px', { fromValue: '-3px'}], position: 6231, duration: 525, easing: "easeInOutQuad" },
                { id: "eid578", tween: [ "style", "${_a3b_hand_v}", "top", '-3px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid579", tween: [ "style", "${_a3b_hand_v}", "top", '14px', { fromValue: '-3px'}], position: 7440, duration: 221, easing: "easeInOutQuad" },
                { id: "eid580", tween: [ "style", "${_a3b_hand_v}", "top", '30px', { fromValue: '14px'}], position: 8345, duration: 309, easing: "easeInOutQuad" },
                { id: "eid581", tween: [ "style", "${_a3b_hand_v}", "top", '15px', { fromValue: '30px'}], position: 8654, duration: 236, easing: "easeInOutQuad" },
                { id: "eid582", tween: [ "style", "${_a3b_hand_v}", "top", '3px', { fromValue: '15px'}], position: 9044, duration: 486, easing: "easeInOutQuad" },
                { id: "eid583", tween: [ "style", "${_a3b_hand_v}", "top", '0px', { fromValue: '3px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid650", tween: [ "style", "${_a3b_hand_h}", "top", '10px', { fromValue: '0px'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid651", tween: [ "style", "${_a3b_hand_h}", "top", '0px', { fromValue: '10px'}], position: 6010, duration: 750, easing: "easeInOutQuad" },
                { id: "eid652", tween: [ "style", "${_a3b_hand_h}", "top", '10px', { fromValue: '0px'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid653", tween: [ "style", "${_a3b_hand_h}", "top", '0px', { fromValue: '10px'}], position: 9604, duration: 741, easing: "easeInOutQuad" },
                { id: "eid737", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid738", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '8deg', { fromValue: '5deg'}], position: 5700, duration: 221, easing: "easeInOutQuad" },
                { id: "eid739", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '5deg', { fromValue: '8deg'}], position: 6015, duration: 220, easing: "easeInOutQuad" },
                { id: "eid740", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid741", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid742", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '8deg', { fromValue: '5deg'}], position: 7440, duration: 221, easing: "easeInOutQuad" },
                { id: "eid743", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '-8deg', { fromValue: '8deg'}], position: 9033, duration: 497, easing: "easeInOutQuad" },
                { id: "eid744", tween: [ "transform", "${_a3b_arm_v}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 9600, duration: 730, easing: "easeInOutQuad" },
                { id: "eid717", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid718", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 6010, duration: 525, easing: "easeInOutQuad" },
                { id: "eid719", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid720", tween: [ "transform", "${_a3b_bein_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid749", tween: [ "style", "${_a3b_arm_h}", "left", '24px', { fromValue: '0px'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid750", tween: [ "style", "${_a3b_arm_h}", "left", '0px', { fromValue: '24px'}], position: 6009, duration: 750, easing: "easeInOutQuad" },
                { id: "eid751", tween: [ "style", "${_a3b_arm_h}", "left", '24px', { fromValue: '0px'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid752", tween: [ "style", "${_a3b_arm_h}", "left", '0px', { fromValue: '24px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid633", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 5175, duration: 0, easing: "easeInOutQuad" },
                { id: "eid634", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 5925, duration: 0, easing: "easeInOutQuad" },
                { id: "eid635", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 6010, duration: 0, easing: "easeInOutQuad" },
                { id: "eid636", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 6760, duration: 0, easing: "easeInOutQuad" },
                { id: "eid637", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 6915, duration: 0, easing: "easeInOutQuad" },
                { id: "eid638", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 7665, duration: 0, easing: "easeInOutQuad" },
                { id: "eid639", tween: [ "style", "${_a3b_kopf}", "left", '-7px', { fromValue: '0px'}], position: 8845, duration: 320, easing: "easeInOutQuad" },
                { id: "eid640", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '-7px'}], position: 9165, duration: 314, easing: "easeInOutQuad" },
                { id: "eid641", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 9604, duration: 0, easing: "easeInOutQuad" },
                { id: "eid642", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '0px'}], position: 10345, duration: 0, easing: "easeInOutQuad" },
                { id: "eid643", tween: [ "style", "${_a3b_kopf}", "left", '-10px', { fromValue: '0px'}], position: 10445, duration: 537, easing: "easeInOutQuad" },
                { id: "eid644", tween: [ "style", "${_a3b_kopf}", "left", '0px', { fromValue: '-10px'}], position: 10982, duration: 388, easing: "easeInOutQuad" },
                { id: "eid662", tween: [ "style", "${_a3b_ferrari}", "top", '-9px', { fromValue: '3px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid663", tween: [ "style", "${_a3b_ferrari}", "top", '4px', { fromValue: '-9px'}], position: 5700, duration: 225, easing: "easeInOutQuad" },
                { id: "eid664", tween: [ "style", "${_a3b_ferrari}", "top", '-9px', { fromValue: '4px'}], position: 6010, duration: 225, easing: "easeInOutQuad" },
                { id: "eid665", tween: [ "style", "${_a3b_ferrari}", "top", '3px', { fromValue: '-9px'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid666", tween: [ "style", "${_a3b_ferrari}", "top", '-9px', { fromValue: '3px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid667", tween: [ "style", "${_a3b_ferrari}", "top", '4px', { fromValue: '-9px'}], position: 7440, duration: 225, easing: "easeInOutQuad" },
                { id: "eid668", tween: [ "style", "${_a3b_ferrari}", "top", '32px', { fromValue: '4px'}], position: 8345, duration: 309, easing: "easeInOutQuad" },
                { id: "eid669", tween: [ "style", "${_a3b_ferrari}", "top", '8px', { fromValue: '32px'}], position: 8654, duration: 236, easing: "easeInOutQuad" },
                { id: "eid670", tween: [ "style", "${_a3b_ferrari}", "top", '15px', { fromValue: '8px'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid671", tween: [ "style", "${_a3b_ferrari}", "top", '7px', { fromValue: '15px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid612", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid613", tween: [ "style", "${_a3b_schulter_v}", "left", '-7px', { fromValue: '-3px'}], position: 5700, duration: 225, easing: "easeInOutQuad" },
                { id: "eid614", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '-7px'}], position: 6010, duration: 225, easing: "easeInOutQuad" },
                { id: "eid615", tween: [ "style", "${_a3b_schulter_v}", "left", '0px', { fromValue: '-3px'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid616", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid617", tween: [ "style", "${_a3b_schulter_v}", "left", '-7px', { fromValue: '-3px'}], position: 7440, duration: 225, easing: "easeInOutQuad" },
                { id: "eid618", tween: [ "style", "${_a3b_schulter_v}", "left", '-3px', { fromValue: '-7px'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid619", tween: [ "style", "${_a3b_schulter_v}", "left", '0px', { fromValue: '-3px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid620", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid621", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '2deg', { fromValue: '1deg'}], position: 5700, duration: 225, easing: "easeInOutQuad" },
                { id: "eid622", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '1deg', { fromValue: '2deg'}], position: 6010, duration: 225, easing: "easeInOutQuad" },
                { id: "eid623", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid624", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid625", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '2deg', { fromValue: '1deg'}], position: 7440, duration: 225, easing: "easeInOutQuad" },
                { id: "eid626", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '-1deg', { fromValue: '2deg'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid627", tween: [ "transform", "${_a3b_schulter_v}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid721", tween: [ "style", "${_a3b_arm_v}", "top", '8px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid722", tween: [ "style", "${_a3b_arm_v}", "top", '14px', { fromValue: '8px'}], position: 5920, duration: 5, easing: "easeInOutQuad" },
                { id: "eid723", tween: [ "style", "${_a3b_arm_v}", "top", '8px', { fromValue: '14px'}], position: 6010, duration: 5, easing: "easeInOutQuad" },
                { id: "eid724", tween: [ "style", "${_a3b_arm_v}", "top", '0px', { fromValue: '8px'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid725", tween: [ "style", "${_a3b_arm_v}", "top", '8px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid726", tween: [ "style", "${_a3b_arm_v}", "top", '14px', { fromValue: '8px'}], position: 7660, duration: 5, easing: "easeInOutQuad" },
                { id: "eid727", tween: [ "style", "${_a3b_arm_v}", "top", '10px', { fromValue: '14px'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid728", tween: [ "style", "${_a3b_arm_v}", "top", '0px', { fromValue: '10px'}], position: 9600, duration: 730, easing: "easeInOutQuad" },
                { id: "eid692", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 5175, duration: 0, easing: "easeInOutQuad" },
                { id: "eid693", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 6010, duration: 0, easing: "easeInOutQuad" },
                { id: "eid694", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 6915, duration: 0, easing: "easeInOutQuad" },
                { id: "eid695", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 10445, duration: 0, easing: "easeInOutQuad" },
                { id: "eid696", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 10982, duration: 0, easing: "easeInOutQuad" },
                { id: "eid697", tween: [ "style", "${_a3b_corpus}", "top", '0px', { fromValue: '0px'}], position: 11370, duration: 0, easing: "easeInOutQuad" },
                { id: "eid594", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid595", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '8deg', { fromValue: '7deg'}], position: 5700, duration: 221, easing: "easeInOutQuad" },
                { id: "eid596", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '7deg', { fromValue: '8deg'}], position: 6010, duration: 221, easing: "easeInOutQuad" },
                { id: "eid597", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 6231, duration: 525, easing: "easeInOutQuad" },
                { id: "eid598", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid599", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '8deg', { fromValue: '7deg'}], position: 7440, duration: 221, easing: "easeInOutQuad" },
                { id: "eid600", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '5deg', { fromValue: '8deg'}], position: 8345, duration: 309, easing: "easeInOutQuad" },
                { id: "eid601", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '8deg', { fromValue: '5deg'}], position: 8654, duration: 236, easing: "easeInOutQuad" },
                { id: "eid602", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '-7deg', { fromValue: '8deg'}], position: 9044, duration: 486, easing: "easeInOutQuad" },
                { id: "eid603", tween: [ "transform", "${_a3b_hand_v}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid672", tween: [ "style", "${_a3b_ferrari}", "left", '-16px', { fromValue: '3px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid673", tween: [ "style", "${_a3b_ferrari}", "left", '-21px', { fromValue: '-16px'}], position: 5700, duration: 225, easing: "easeInOutQuad" },
                { id: "eid674", tween: [ "style", "${_a3b_ferrari}", "left", '-16px', { fromValue: '-21px'}], position: 6010, duration: 225, easing: "easeInOutQuad" },
                { id: "eid675", tween: [ "style", "${_a3b_ferrari}", "left", '3px', { fromValue: '-16px'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid676", tween: [ "style", "${_a3b_ferrari}", "left", '-16px', { fromValue: '3px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid677", tween: [ "style", "${_a3b_ferrari}", "left", '-21px', { fromValue: '-16px'}], position: 7440, duration: 225, easing: "easeInOutQuad" },
                { id: "eid678", tween: [ "style", "${_a3b_ferrari}", "left", '-9px', { fromValue: '-21px'}], position: 8345, duration: 309, easing: "easeInOutQuad" },
                { id: "eid679", tween: [ "style", "${_a3b_ferrari}", "left", '-22px', { fromValue: '-9px'}], position: 8654, duration: 236, easing: "easeInOutQuad" },
                { id: "eid680", tween: [ "style", "${_a3b_ferrari}", "left", '-11px', { fromValue: '-22px'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid681", tween: [ "style", "${_a3b_ferrari}", "left", '-1px', { fromValue: '-11px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid745", tween: [ "style", "${_a3b_arm_h}", "top", '10px', { fromValue: '0px'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid746", tween: [ "style", "${_a3b_arm_h}", "top", '0px', { fromValue: '10px'}], position: 6009, duration: 750, easing: "easeInOutQuad" },
                { id: "eid747", tween: [ "style", "${_a3b_arm_h}", "top", '10px', { fromValue: '0px'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid748", tween: [ "style", "${_a3b_arm_h}", "top", '0px', { fromValue: '10px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid628", tween: [ "style", "${_a3b_kopf}", "top", '67px', { fromValue: '0px'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid629", tween: [ "style", "${_a3b_kopf}", "top", '0px', { fromValue: '67px'}], position: 6010, duration: 750, easing: "easeInOutQuad" },
                { id: "eid630", tween: [ "style", "${_a3b_kopf}", "top", '67px', { fromValue: '0px'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid631", tween: [ "style", "${_a3b_kopf}", "top", '-67px', { fromValue: '67px'}], position: 9031, duration: 573, easing: "easeInOutQuad" },
                { id: "eid632", tween: [ "style", "${_a3b_kopf}", "top", '0px', { fromValue: '-67px'}], position: 9604, duration: 741, easing: "easeInOutQuad" },
                { id: "eid713", tween: [ "style", "${_a3b_bein_v}", "left", '-14px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid714", tween: [ "style", "${_a3b_bein_v}", "left", '0px', { fromValue: '-14px'}], position: 6010, duration: 525, easing: "easeInOutQuad" },
                { id: "eid715", tween: [ "style", "${_a3b_bein_v}", "left", '-14px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid716", tween: [ "style", "${_a3b_bein_v}", "left", '0px', { fromValue: '-14px'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid682", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid683", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '9deg', { fromValue: '8deg'}], position: 5700, duration: 225, easing: "easeInOutQuad" },
                { id: "eid684", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '8deg', { fromValue: '9deg'}], position: 6010, duration: 225, easing: "easeInOutQuad" },
                { id: "eid685", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid686", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid687", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '9deg', { fromValue: '8deg'}], position: 7440, duration: 225, easing: "easeInOutQuad" },
                { id: "eid688", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '5deg', { fromValue: '9deg'}], position: 8345, duration: 309, easing: "easeInOutQuad" },
                { id: "eid689", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '9deg', { fromValue: '5deg'}], position: 8654, duration: 236, easing: "easeInOutQuad" },
                { id: "eid690", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '-8deg', { fromValue: '9deg'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid691", tween: [ "transform", "${_a3b_ferrari}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid729", tween: [ "style", "${_a3b_arm_v}", "left", '-11px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid730", tween: [ "style", "${_a3b_arm_v}", "left", '-20px', { fromValue: '-11px'}], position: 5700, duration: 221, easing: "easeInOutQuad" },
                { id: "eid731", tween: [ "style", "${_a3b_arm_v}", "left", '-11px', { fromValue: '-20px'}], position: 6015, duration: 220, easing: "easeInOutQuad" },
                { id: "eid732", tween: [ "style", "${_a3b_arm_v}", "left", '0px', { fromValue: '-11px'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid733", tween: [ "style", "${_a3b_arm_v}", "left", '-11px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid734", tween: [ "style", "${_a3b_arm_v}", "left", '-20px', { fromValue: '-11px'}], position: 7440, duration: 221, easing: "easeInOutQuad" },
                { id: "eid735", tween: [ "style", "${_a3b_arm_v}", "left", '-15px', { fromValue: '-20px'}], position: 9033, duration: 497, easing: "easeInOutQuad" },
                { id: "eid736", tween: [ "style", "${_a3b_arm_v}", "left", '0px', { fromValue: '-15px'}], position: 9600, duration: 730, easing: "easeInOutQuad" },
                { id: "eid604", tween: [ "style", "${_a3b_schulter_v}", "top", '6px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid605", tween: [ "style", "${_a3b_schulter_v}", "top", '15px', { fromValue: '6px'}], position: 5700, duration: 225, easing: "easeInOutQuad" },
                { id: "eid606", tween: [ "style", "${_a3b_schulter_v}", "top", '6px', { fromValue: '15px'}], position: 6010, duration: 225, easing: "easeInOutQuad" },
                { id: "eid607", tween: [ "style", "${_a3b_schulter_v}", "top", '0px', { fromValue: '6px'}], position: 6235, duration: 525, easing: "easeInOutQuad" },
                { id: "eid608", tween: [ "style", "${_a3b_schulter_v}", "top", '6px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid609", tween: [ "style", "${_a3b_schulter_v}", "top", '15px', { fromValue: '6px'}], position: 7440, duration: 225, easing: "easeInOutQuad" },
                { id: "eid610", tween: [ "style", "${_a3b_schulter_v}", "top", '-6px', { fromValue: '15px'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid611", tween: [ "style", "${_a3b_schulter_v}", "top", '0px', { fromValue: '-6px'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid645", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid646", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 6010, duration: 750, easing: "easeInOutQuad" },
                { id: "eid647", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '8deg', { fromValue: '0deg'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid648", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '-8deg', { fromValue: '8deg'}], position: 9031, duration: 573, easing: "easeInOutQuad" },
                { id: "eid649", tween: [ "transform", "${_a3b_kopf}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 9604, duration: 741, easing: "easeInOutQuad" },
                { id: "eid709", tween: [ "style", "${_a3b_bein_v}", "top", '7px', { fromValue: '0px'}], position: 5175, duration: 525, easing: "easeInOutQuad" },
                { id: "eid710", tween: [ "style", "${_a3b_bein_v}", "top", '0px', { fromValue: '7px'}], position: 6010, duration: 525, easing: "easeInOutQuad" },
                { id: "eid711", tween: [ "style", "${_a3b_bein_v}", "top", '7px', { fromValue: '0px'}], position: 6915, duration: 525, easing: "easeInOutQuad" },
                { id: "eid712", tween: [ "style", "${_a3b_bein_v}", "top", '0px', { fromValue: '7px'}], position: 9031, duration: 499, easing: "easeInOutQuad" },
                { id: "eid703", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5175, duration: 0, easing: "easeInOutQuad" },
                { id: "eid704", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6010, duration: 0, easing: "easeInOutQuad" },
                { id: "eid705", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6915, duration: 0, easing: "easeInOutQuad" },
                { id: "eid706", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 10445, duration: 0, easing: "easeInOutQuad" },
                { id: "eid707", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 10982, duration: 0, easing: "easeInOutQuad" },
                { id: "eid708", tween: [ "transform", "${_a3b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 11370, duration: 0, easing: "easeInOutQuad" },
                { id: "eid753", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid754", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 6009, duration: 750, easing: "easeInOutQuad" },
                { id: "eid755", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid756", tween: [ "transform", "${_a3b_arm_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 9604, duration: 730, easing: "easeInOutQuad" },
                { id: "eid658", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid659", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 6010, duration: 750, easing: "easeInOutQuad" },
                { id: "eid660", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid661", tween: [ "transform", "${_a3b_hand_h}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 9604, duration: 741, easing: "easeInOutQuad" },
                { id: "eid698", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '0px'}], position: 5175, duration: 0 },
                { id: "eid699", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '0px'}], position: 6010, duration: 0, easing: "easeInOutQuad" },
                { id: "eid700", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '0px'}], position: 6915, duration: 0, easing: "easeInOutQuad" },
                { id: "eid701", tween: [ "style", "${_a3b_corpus}", "left", '-4px', { fromValue: '0px'}], position: 10445, duration: 537, easing: "easeInOutQuad" },
                { id: "eid702", tween: [ "style", "${_a3b_corpus}", "left", '0px', { fromValue: '-4px'}], position: 10982, duration: 388, easing: "easeInOutQuad" },
                { id: "eid654", tween: [ "style", "${_a3b_hand_h}", "left", '24px', { fromValue: '0px'}], position: 5175, duration: 750, easing: "easeInOutQuad" },
                { id: "eid655", tween: [ "style", "${_a3b_hand_h}", "left", '0px', { fromValue: '24px'}], position: 6010, duration: 750, easing: "easeInOutQuad" },
                { id: "eid656", tween: [ "style", "${_a3b_hand_h}", "left", '24px', { fromValue: '0px'}], position: 6915, duration: 750, easing: "easeInOutQuad" },
                { id: "eid657", tween: [ "style", "${_a3b_hand_h}", "left", '0px', { fromValue: '24px'}], position: 9604, duration: 741, easing: "easeInOutQuad" }            ]
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
            "${_b1a_fuss_v}": [
                ["style", "top", '3px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
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
            "${symbolSelector}": [
                ["style", "height", '1539px'],
                ["style", "width", '2050px']
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
            autoPlay: false,
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
                { id: "eid886", tween: [ "transform", "${_b1a_zeitung}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid887", tween: [ "transform", "${_b1a_zeitung}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid888", tween: [ "transform", "${_b1a_zeitung}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
                { id: "eid841", tween: [ "style", "${_b1a_hand_v}", "left", '-3px', { fromValue: '2px'}], position: 0, duration: 1500 },
                { id: "eid842", tween: [ "style", "${_b1a_hand_v}", "left", '-1px', { fromValue: '-3px'}], position: 1500, duration: 750 },
                { id: "eid843", tween: [ "style", "${_b1a_hand_v}", "left", '2px', { fromValue: '-1px'}], position: 2250, duration: 750 },
                { id: "eid844", tween: [ "style", "${_b1a_hand_v}", "left", '-3px', { fromValue: '2px'}], position: 3000, duration: 1500 },
                { id: "eid845", tween: [ "style", "${_b1a_hand_v}", "left", '-1px', { fromValue: '-3px'}], position: 4500, duration: 750 },
                { id: "eid846", tween: [ "style", "${_b1a_hand_v}", "left", '2px', { fromValue: '-1px'}], position: 5250, duration: 750 },
                { id: "eid880", tween: [ "style", "${_b1a_zeitung}", "left", '-3px', { fromValue: '2px'}], position: 0, duration: 1500 },
                { id: "eid881", tween: [ "style", "${_b1a_zeitung}", "left", '-1px', { fromValue: '-3px'}], position: 1500, duration: 750 },
                { id: "eid882", tween: [ "style", "${_b1a_zeitung}", "left", '2px', { fromValue: '-1px'}], position: 2250, duration: 750 },
                { id: "eid883", tween: [ "style", "${_b1a_zeitung}", "left", '-3px', { fromValue: '2px'}], position: 3000, duration: 1500 },
                { id: "eid884", tween: [ "style", "${_b1a_zeitung}", "left", '-1px', { fromValue: '-3px'}], position: 4500, duration: 750 },
                { id: "eid885", tween: [ "style", "${_b1a_zeitung}", "left", '2px', { fromValue: '-1px'}], position: 5250, duration: 750 },
                { id: "eid853", tween: [ "style", "${_b1a_kimono}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid854", tween: [ "style", "${_b1a_kimono}", "left", '2px', { fromValue: '2px'}], position: 3000, duration: 0 },
                { id: "eid855", tween: [ "style", "${_b1a_kimono}", "left", '2px', { fromValue: '2px'}], position: 6000, duration: 0 },
                { id: "eid850", tween: [ "style", "${_b1a_kimono}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid851", tween: [ "style", "${_b1a_kimono}", "top", '3px', { fromValue: '3px'}], position: 3000, duration: 0 },
                { id: "eid852", tween: [ "style", "${_b1a_kimono}", "top", '3px', { fromValue: '3px'}], position: 6000, duration: 0 },
                { id: "eid832", tween: [ "style", "${_b1a_hand_h}", "top", '7px', { fromValue: '3px'}], position: 0, duration: 1500 },
                { id: "eid833", tween: [ "style", "${_b1a_hand_h}", "top", '3px', { fromValue: '7px'}], position: 1500, duration: 1500 },
                { id: "eid834", tween: [ "style", "${_b1a_hand_h}", "top", '7px', { fromValue: '3px'}], position: 3000, duration: 1500 },
                { id: "eid835", tween: [ "style", "${_b1a_hand_h}", "top", '3px', { fromValue: '7px'}], position: 4500, duration: 1500 },
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
            "${_b1b_buch}": [
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
            "${_b1b_hand_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b1b_kimono}": [
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
            "${_b1b_hand_h}": [
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
            autoPlay: false,
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
"sym_b2a": {
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
                    id: 'b2a_handflach',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2a_handflach.svg', '0px', '0px']
                },
                {
                    id: 'b2a_finger',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2a_finger.svg', '0px', '0px']
                },
                {
                    id: 'b2a_daumen',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2a_daumen.svg', '0px', '0px']
                },
                {
                    id: 'b2a_handphone',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2a_handphone.svg', '0px', '0px']
                },
                {
                    id: 'b2a_phone',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2a_phone.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b2a_finger}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2a_daumen}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2a_handphone}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2a_phone}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2a_handflach}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
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
            autoPlay: false,
            timeline: [
                { id: "eid1052", tween: [ "style", "${_b2a_handflach}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1053", tween: [ "style", "${_b2a_handflach}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_b2a_finger}", "top", '-15px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid1032", tween: [ "style", "${_b2a_finger}", "top", '0px', { fromValue: '-15px'}], position: 250, duration: 250 },
                { id: "eid1033", tween: [ "style", "${_b2a_finger}", "top", '-15px', { fromValue: '0px'}], position: 500, duration: 250 },
                { id: "eid1034", tween: [ "style", "${_b2a_finger}", "top", '0px', { fromValue: '-15px'}], position: 750, duration: 250 },
                { id: "eid1035", tween: [ "style", "${_b2a_finger}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1023", tween: [ "transform", "${_b2a_handphone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1024", tween: [ "transform", "${_b2a_handphone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid1029", tween: [ "transform", "${_b2a_daumen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1030", tween: [ "transform", "${_b2a_daumen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid1036", tween: [ "transform", "${_b2a_finger}", "scaleY", '0.95', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1037", tween: [ "transform", "${_b2a_finger}", "scaleY", '1', { fromValue: '0.95'}], position: 250, duration: 250 },
                { id: "eid1038", tween: [ "transform", "${_b2a_finger}", "scaleY", '0.95', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid1039", tween: [ "transform", "${_b2a_finger}", "scaleY", '1', { fromValue: '0.95'}], position: 750, duration: 250 },
                { id: "eid1015", tween: [ "style", "${_b2a_phone}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1016", tween: [ "style", "${_b2a_phone}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1019", tween: [ "style", "${_b2a_handphone}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1020", tween: [ "style", "${_b2a_handphone}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1017", tween: [ "transform", "${_b2a_phone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1018", tween: [ "transform", "${_b2a_phone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid1050", tween: [ "style", "${_b2a_handflach}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1051", tween: [ "style", "${_b2a_handflach}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1054", tween: [ "transform", "${_b2a_handflach}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1055", tween: [ "transform", "${_b2a_handflach}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid1045", tween: [ "transform", "${_b2a_finger}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid1046", tween: [ "transform", "${_b2a_finger}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 250, duration: 250 },
                { id: "eid1047", tween: [ "transform", "${_b2a_finger}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 500, duration: 250 },
                { id: "eid1048", tween: [ "transform", "${_b2a_finger}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 750, duration: 250 },
                { id: "eid1049", tween: [ "transform", "${_b2a_finger}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
                { id: "eid1013", tween: [ "style", "${_b2a_phone}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1014", tween: [ "style", "${_b2a_phone}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1040", tween: [ "style", "${_b2a_finger}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid1041", tween: [ "style", "${_b2a_finger}", "left", '0px', { fromValue: '2px'}], position: 250, duration: 250 },
                { id: "eid1042", tween: [ "style", "${_b2a_finger}", "left", '2px', { fromValue: '0px'}], position: 500, duration: 250 },
                { id: "eid1043", tween: [ "style", "${_b2a_finger}", "left", '0px', { fromValue: '2px'}], position: 750, duration: 250 },
                { id: "eid1044", tween: [ "style", "${_b2a_finger}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1027", tween: [ "style", "${_b2a_daumen}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1028", tween: [ "style", "${_b2a_daumen}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_b2a_daumen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_b2a_daumen}", "top", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
                { id: "eid1021", tween: [ "style", "${_b2a_handphone}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1022", tween: [ "style", "${_b2a_handphone}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 }            ]
        }
    }
},
"sym_bling": {
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
                    id: 'sym_bling5',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_bling4',
                    type: 'rect',
                    rect: ['61', '-329', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_bling3',
                    type: 'rect',
                    rect: ['-228', '-170', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_bling2',
                    type: 'rect',
                    rect: ['-92', '-331', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_bling1',
                    type: 'rect',
                    rect: ['-294', '-507', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_bling3',
                symbolName: 'sym_bling3',
                autoPlay: {

               }
            },
            {
                id: 'sym_bling5',
                symbolName: 'sym_bling5',
                autoPlay: {

               }
            },
            {
                id: 'sym_bling4',
                symbolName: 'sym_bling4',
                autoPlay: {

               }
            },
            {
                id: 'sym_bling1',
                symbolName: 'sym_bling1',
                autoPlay: {

               }
            },
            {
                id: 'sym_bling2',
                symbolName: 'sym_bling2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_bling5}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ],
            "${_sym_bling1}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_bling3}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_bling2}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_bling4}": [
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1620,
            autoPlay: true,
            labels: {
                "loop_bling": 0
            },
            timeline: [
                { id: "eid293", tween: [ "transform", "${_sym_bling2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1125 },
                { id: "eid292", tween: [ "transform", "${_sym_bling1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1125 },
                { id: "eid294", tween: [ "transform", "${_sym_bling3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1125 },
                { id: "eid296", tween: [ "transform", "${_sym_bling5}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1125 },
                { id: "eid295", tween: [ "transform", "${_sym_bling4}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1125 }            ]
        }
    }
},
"sym_bling3": {
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
                    id: 'b2b_bling2Copy7',
                    type: 'image',
                    rect: ['253px', '220px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    id: 'b2b_bling3Copy7',
                    type: 'image',
                    rect: ['253px', '170px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling2Copy6',
                    type: 'image',
                    rect: ['278px', '195px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling3Copy6',
                    type: 'image',
                    rect: ['228px', '195px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b2b_bling2Copy7}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '25px']
            ],
            "${_b2b_bling3Copy6}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_b2b_bling2Copy6}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '50px']
            ],
            "${_b2b_bling3Copy7}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1095,
            autoPlay: true,
            labels: {
                "loop_bling3": 395
            },
            timeline: [
                { id: "eid276", tween: [ "style", "${_b2b_bling3Copy7}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 125 },
                { id: "eid227", tween: [ "style", "${_b2b_bling3Copy7}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid238", tween: [ "style", "${_b2b_bling3Copy6}", "left", '-10px', { fromValue: '0px'}], position: 625, duration: 250 },
                { id: "eid275", tween: [ "style", "${_b2b_bling2Copy6}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 125 },
                { id: "eid222", tween: [ "style", "${_b2b_bling2Copy6}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid226", tween: [ "transform", "${_b2b_bling3Copy7}", "scaleX", '1', { fromValue: '1'}], position: 625, duration: 0 },
                { id: "eid239", tween: [ "style", "${_b2b_bling2Copy6}", "left", '60px', { fromValue: '50px'}], position: 625, duration: 250 },
                { id: "eid231", tween: [ "transform", "${_b2b_bling2Copy7}", "scaleX", '1', { fromValue: '1'}], position: 625, duration: 0 },
                { id: "eid277", tween: [ "style", "${_b2b_bling2Copy7}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 125 },
                { id: "eid232", tween: [ "style", "${_b2b_bling2Copy7}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid215", tween: [ "transform", "${_b2b_bling3Copy6}", "scaleY", '0.5', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid240", tween: [ "style", "${_b2b_bling3Copy7}", "top", '-10px', { fromValue: '0px'}], position: 625, duration: 250 },
                { id: "eid230", tween: [ "transform", "${_b2b_bling2Copy7}", "scaleY", '0.5', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid235", tween: [ "style", "${_b2b_bling2Copy7}", "left", '25px', { fromValue: '25px'}], position: 625, duration: 0 },
                { id: "eid241", tween: [ "style", "${_b2b_bling2Copy7}", "top", '60px', { fromValue: '50px'}], position: 625, duration: 250 },
                { id: "eid237", tween: [ "style", "${_b2b_bling3Copy6}", "top", '25px', { fromValue: '25px'}], position: 625, duration: 0 },
                { id: "eid220", tween: [ "transform", "${_b2b_bling2Copy6}", "scaleY", '0.5', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid225", tween: [ "transform", "${_b2b_bling3Copy7}", "scaleY", '0.5', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid221", tween: [ "transform", "${_b2b_bling2Copy6}", "scaleX", '1', { fromValue: '1'}], position: 625, duration: 0 },
                { id: "eid236", tween: [ "style", "${_b2b_bling3Copy7}", "left", '25px', { fromValue: '25px'}], position: 625, duration: 0 },
                { id: "eid274", tween: [ "style", "${_b2b_bling3Copy6}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 125 },
                { id: "eid217", tween: [ "style", "${_b2b_bling3Copy6}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid216", tween: [ "transform", "${_b2b_bling3Copy6}", "scaleX", '1', { fromValue: '1'}], position: 625, duration: 0 },
                { id: "eid234", tween: [ "style", "${_b2b_bling2Copy6}", "top", '25px', { fromValue: '25px'}], position: 625, duration: 0 }            ]
        }
    }
},
"sym_bling4": {
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
                    id: 'b2b_bling2Copy5',
                    type: 'image',
                    rect: ['-36px', '379px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    id: 'b2b_bling3Copy5',
                    type: 'image',
                    rect: ['-36px', '329px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling2Copy4',
                    type: 'image',
                    rect: ['-11px', '354px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling3Copy4',
                    type: 'image',
                    rect: ['-61px', '354px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b2b_bling2Copy4}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '50px']
            ],
            "${_b2b_bling2Copy5}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '25px']
            ],
            "${_b2b_bling3Copy5}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '25px']
            ],
            "${_b2b_bling3Copy4}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1070,
            autoPlay: true,
            labels: {
                "loop_bling4": 0
            },
            timeline: [
                { id: "eid280", tween: [ "style", "${_b2b_bling2Copy4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 125 },
                { id: "eid187", tween: [ "style", "${_b2b_bling2Copy4}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid210", tween: [ "style", "${_b2b_bling3Copy4}", "left", '-10px', { fromValue: '0px'}], position: 375, duration: 250 },
                { id: "eid211", tween: [ "style", "${_b2b_bling2Copy4}", "left", '60px', { fromValue: '50px'}], position: 375, duration: 250 },
                { id: "eid206", tween: [ "style", "${_b2b_bling2Copy4}", "top", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
                { id: "eid208", tween: [ "style", "${_b2b_bling3Copy5}", "left", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
                { id: "eid196", tween: [ "transform", "${_b2b_bling2Copy5}", "scaleX", '1', { fromValue: '1'}], position: 375, duration: 0 },
                { id: "eid278", tween: [ "style", "${_b2b_bling2Copy5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 125 },
                { id: "eid197", tween: [ "style", "${_b2b_bling2Copy5}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid207", tween: [ "style", "${_b2b_bling2Copy5}", "left", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
                { id: "eid180", tween: [ "transform", "${_b2b_bling3Copy4}", "scaleY", '0.5', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid213", tween: [ "style", "${_b2b_bling2Copy5}", "top", '60px', { fromValue: '50px'}], position: 375, duration: 250 },
                { id: "eid205", tween: [ "style", "${_b2b_bling3Copy4}", "top", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
                { id: "eid186", tween: [ "transform", "${_b2b_bling2Copy4}", "scaleX", '1', { fromValue: '1'}], position: 375, duration: 0 },
                { id: "eid191", tween: [ "transform", "${_b2b_bling3Copy5}", "scaleX", '1', { fromValue: '1'}], position: 375, duration: 0 },
                { id: "eid181", tween: [ "transform", "${_b2b_bling3Copy4}", "scaleX", '1', { fromValue: '1'}], position: 375, duration: 0 },
                { id: "eid190", tween: [ "transform", "${_b2b_bling3Copy5}", "scaleY", '0.5', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid185", tween: [ "transform", "${_b2b_bling2Copy4}", "scaleY", '0.5', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid279", tween: [ "style", "${_b2b_bling3Copy5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 125 },
                { id: "eid192", tween: [ "style", "${_b2b_bling3Copy5}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid212", tween: [ "style", "${_b2b_bling3Copy5}", "top", '-10px', { fromValue: '0px'}], position: 375, duration: 250 },
                { id: "eid195", tween: [ "transform", "${_b2b_bling2Copy5}", "scaleY", '0.5', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid281", tween: [ "style", "${_b2b_bling3Copy4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 125 },
                { id: "eid182", tween: [ "style", "${_b2b_bling3Copy4}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 250 }            ]
        }
    }
},
"sym_bling2": {
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
                    id: 'b2b_bling2Copy9',
                    type: 'image',
                    rect: ['117px', '381px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    id: 'b2b_bling3Copy9',
                    type: 'image',
                    rect: ['117px', '331px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling2Copy8',
                    type: 'image',
                    rect: ['142px', '356px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling3Copy8',
                    type: 'image',
                    rect: ['92px', '356px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b2b_bling2Copy8}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '50px']
            ],
            "${_b2b_bling3Copy9}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '25px']
            ],
            "${_b2b_bling2Copy9}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '25px']
            ],
            "${_b2b_bling3Copy8}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1420,
            autoPlay: true,
            labels: {
                "loop_bling2": 0
            },
            timeline: [
                { id: "eid263", tween: [ "style", "${_b2b_bling2Copy9}", "left", '25px', { fromValue: '25px'}], position: 875, duration: 0 },
                { id: "eid264", tween: [ "style", "${_b2b_bling3Copy9}", "left", '25px', { fromValue: '25px'}], position: 875, duration: 0 },
                { id: "eid254", tween: [ "transform", "${_b2b_bling3Copy9}", "scaleX", '1', { fromValue: '1'}], position: 875, duration: 0 },
                { id: "eid270", tween: [ "style", "${_b2b_bling3Copy8}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 225 },
                { id: "eid245", tween: [ "style", "${_b2b_bling3Copy8}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid259", tween: [ "transform", "${_b2b_bling2Copy9}", "scaleX", '1', { fromValue: '1'}], position: 875, duration: 0 },
                { id: "eid265", tween: [ "style", "${_b2b_bling3Copy8}", "top", '25px', { fromValue: '25px'}], position: 875, duration: 0 },
                { id: "eid271", tween: [ "style", "${_b2b_bling2Copy8}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 225 },
                { id: "eid250", tween: [ "style", "${_b2b_bling2Copy8}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid243", tween: [ "transform", "${_b2b_bling3Copy8}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid268", tween: [ "style", "${_b2b_bling2Copy8}", "left", '60px', { fromValue: '50px'}], position: 875, duration: 250 },
                { id: "eid258", tween: [ "transform", "${_b2b_bling2Copy9}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid269", tween: [ "style", "${_b2b_bling3Copy8}", "left", '-10px', { fromValue: '0px'}], position: 875, duration: 250 },
                { id: "eid244", tween: [ "transform", "${_b2b_bling3Copy8}", "scaleX", '1', { fromValue: '1'}], position: 875, duration: 0 },
                { id: "eid262", tween: [ "style", "${_b2b_bling2Copy8}", "top", '25px', { fromValue: '25px'}], position: 875, duration: 0 },
                { id: "eid248", tween: [ "transform", "${_b2b_bling2Copy8}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid266", tween: [ "style", "${_b2b_bling2Copy9}", "top", '60px', { fromValue: '50px'}], position: 875, duration: 250 },
                { id: "eid253", tween: [ "transform", "${_b2b_bling3Copy9}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid272", tween: [ "style", "${_b2b_bling3Copy9}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 225 },
                { id: "eid255", tween: [ "style", "${_b2b_bling3Copy9}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid267", tween: [ "style", "${_b2b_bling3Copy9}", "top", '-10px', { fromValue: '0px'}], position: 875, duration: 250 },
                { id: "eid249", tween: [ "transform", "${_b2b_bling2Copy8}", "scaleX", '1', { fromValue: '1'}], position: 875, duration: 0 },
                { id: "eid273", tween: [ "style", "${_b2b_bling2Copy9}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 225 },
                { id: "eid260", tween: [ "style", "${_b2b_bling2Copy9}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 250 }            ]
        }
    }
},
"sym_bling1": {
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
                    id: 'b2b_bling2Copy3',
                    type: 'image',
                    rect: ['319px', '557px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    id: 'b2b_bling3Copy3',
                    type: 'image',
                    rect: ['319px', '507px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling2Copy2',
                    type: 'image',
                    rect: ['344px', '532px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling3Copy2',
                    type: 'image',
                    rect: ['294px', '532px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b2b_bling3Copy3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '35px']
            ],
            "${_b2b_bling3Copy2}": [
                ["style", "top", '35px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '120px']
            ],
            "${_b2b_bling2Copy3}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '35px']
            ],
            "${_b2b_bling2Copy2}": [
                ["style", "top", '35px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1620,
            autoPlay: true,
            labels: {
                "loop_bling1": 0
            },
            timeline: [
                { id: "eid166", tween: [ "style", "${_b2b_bling2Copy3}", "left", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_b2b_bling2Copy3}", "left", '35px', { fromValue: '35px'}], position: 250, duration: 0 },
                { id: "eid168", tween: [ "style", "${_b2b_bling2Copy3}", "left", '35px', { fromValue: '35px'}], position: 1620, duration: 0 },
                { id: "eid154", tween: [ "style", "${_b2b_bling2Copy2}", "top", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid138", tween: [ "style", "${_b2b_bling2Copy2}", "top", '35px', { fromValue: '35px'}], position: 250, duration: 1370 },
                { id: "eid129", tween: [ "transform", "${_b2b_bling3Copy3}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid153", tween: [ "style", "${_b2b_bling3Copy2}", "top", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${_b2b_bling3Copy2}", "top", '35px', { fromValue: '35px'}], position: 250, duration: 1370 },
                { id: "eid123", tween: [ "transform", "${_b2b_bling2Copy2}", "scaleY", '0.5', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid118", tween: [ "transform", "${_b2b_bling3Copy2}", "scaleY", '0.5', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid133", tween: [ "transform", "${_b2b_bling2Copy3}", "scaleY", '0.5', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid124", tween: [ "transform", "${_b2b_bling2Copy2}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid119", tween: [ "transform", "${_b2b_bling3Copy2}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid134", tween: [ "transform", "${_b2b_bling2Copy3}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid175", tween: [ "style", "${_b2b_bling3Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid130", tween: [ "style", "${_b2b_bling3Copy3}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid163", tween: [ "style", "${_b2b_bling3Copy3}", "left", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_b2b_bling3Copy3}", "left", '35px', { fromValue: '35px'}], position: 250, duration: 0 },
                { id: "eid165", tween: [ "style", "${_b2b_bling3Copy3}", "left", '35px', { fromValue: '35px'}], position: 1620, duration: 0 },
                { id: "eid128", tween: [ "transform", "${_b2b_bling3Copy3}", "scaleY", '0.5', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid176", tween: [ "style", "${_b2b_bling2Copy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid125", tween: [ "style", "${_b2b_bling2Copy2}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid169", tween: [ "style", "${_b2b_bling3Copy3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_b2b_bling3Copy3}", "top", '-10px', { fromValue: '0px'}], position: 250, duration: 250 },
                { id: "eid142", tween: [ "style", "${_b2b_bling3Copy3}", "top", '0px', { fromValue: '-10px'}], position: 500, duration: 1120 },
                { id: "eid155", tween: [ "style", "${_b2b_bling3Copy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid173", tween: [ "style", "${_b2b_bling3Copy2}", "left", '-10px', { fromValue: '0px'}], position: 250, duration: 250 },
                { id: "eid174", tween: [ "style", "${_b2b_bling3Copy2}", "left", '0px', { fromValue: '-10px'}], position: 500, duration: 1120 },
                { id: "eid177", tween: [ "style", "${_b2b_bling3Copy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid120", tween: [ "style", "${_b2b_bling3Copy2}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid178", tween: [ "style", "${_b2b_bling2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid135", tween: [ "style", "${_b2b_bling2Copy3}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid170", tween: [ "style", "${_b2b_bling2Copy3}", "top", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
                { id: "eid132", tween: [ "style", "${_b2b_bling2Copy3}", "top", '80px', { fromValue: '70px'}], position: 250, duration: 250 },
                { id: "eid144", tween: [ "style", "${_b2b_bling2Copy3}", "top", '70px', { fromValue: '80px'}], position: 500, duration: 1120 },
                { id: "eid159", tween: [ "style", "${_b2b_bling2Copy2}", "left", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_b2b_bling2Copy2}", "left", '80px', { fromValue: '70px'}], position: 250, duration: 250 },
                { id: "eid172", tween: [ "style", "${_b2b_bling2Copy2}", "left", '70px', { fromValue: '80px'}], position: 500, duration: 1120 }            ]
        }
    }
},
"sym_bling5": {
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
                    id: 'b2b_bling2',
                    type: 'image',
                    rect: ['25px', '50px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    id: 'b2b_bling3',
                    type: 'image',
                    rect: ['25px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling2Copy',
                    type: 'image',
                    rect: ['50px', '25px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: 'b2b_bling3Copy',
                    type: 'image',
                    rect: ['0px', '25px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ],
            "${_b2b_bling3Copy}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_b2b_bling3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '25px']
            ],
            "${_b2b_bling2Copy}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '50px']
            ],
            "${_b2b_bling2}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 850,
            autoPlay: true,
            labels: {
                "loop_bling1": 0
            },
            timeline: [
                { id: "eid95", tween: [ "style", "${_b2b_bling3}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid75", tween: [ "transform", "${_b2b_bling2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_b2b_bling2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid67", tween: [ "style", "${_b2b_bling2Copy}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_b2b_bling2}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "transform", "${_b2b_bling2}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid65", tween: [ "style", "${_b2b_bling3Copy}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid99", tween: [ "style", "${_b2b_bling3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid72", tween: [ "transform", "${_b2b_bling3Copy}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_b2b_bling2}", "top", '60px', { fromValue: '50px'}], position: 0, duration: 250 },
                { id: "eid74", tween: [ "transform", "${_b2b_bling3}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "transform", "${_b2b_bling3}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid73", tween: [ "transform", "${_b2b_bling2Copy}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_b2b_bling3Copy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid68", tween: [ "style", "${_b2b_bling3}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "transform", "${_b2b_bling2Copy}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid85", tween: [ "transform", "${_b2b_bling3Copy}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid98", tween: [ "style", "${_b2b_bling2Copy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid94", tween: [ "style", "${_b2b_bling2Copy}", "left", '60px', { fromValue: '50px'}], position: 0, duration: 250 },
                { id: "eid93", tween: [ "style", "${_b2b_bling3Copy}", "left", '-10px', { fromValue: '0px'}], position: 0, duration: 250 }            ]
        }
    }
},
"sym_b2b": {
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
                    id: 'b2b_daumenCopy',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_daumen.svg', '0px', '0px']
                },
                {
                    id: 'b2b_fingerCopy',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_finger.svg', '0px', '0px']
                },
                {
                    id: 'b2b_handflachCopy',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_handflach.svg', '0px', '0px']
                },
                {
                    id: 'b2b_handphoneCopy',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_handphone.svg', '0px', '0px']
                },
                {
                    id: 'b2b_moneyCopy',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_money.svg', '0px', '0px']
                },
                {
                    id: 'b2b_phoneCopy',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_phone.svg', '0px', '0px']
                },
                {
                    id: 'sym_blingCopy',
                    type: 'rect',
                    rect: ['820px', '1228px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_blingCopy',
                symbolName: 'sym_bling'
            }            ]
        },
    states: {
        "Base State": {
            "${_b2b_phoneCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2b_handflachCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_blingCopy}": [
                ["style", "top", '1388px'],
                ["style", "left", '724px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1620px'],
                ["style", "width", '2092px']
            ],
            "${_b2b_handphoneCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2b_daumenCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2b_fingerCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b2b_moneyCopy}": [
                ["style", "top", '84px'],
                ["style", "left", '44px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid1139", tween: [ "style", "${_b2b_daumenCopy}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 375 },
                { id: "eid1140", tween: [ "style", "${_b2b_daumenCopy}", "top", '0px', { fromValue: '10px'}], position: 375, duration: 375 },
                { id: "eid1141", tween: [ "style", "${_b2b_daumenCopy}", "top", '10px', { fromValue: '0px'}], position: 1000, duration: 375 },
                { id: "eid1142", tween: [ "style", "${_b2b_daumenCopy}", "top", '0px', { fromValue: '10px'}], position: 1375, duration: 375 },
                { id: "eid1113", tween: [ "style", "${_b2b_moneyCopy}", "top", '83px', { fromValue: '84px'}], position: 0, duration: 250 },
                { id: "eid1114", tween: [ "style", "${_b2b_moneyCopy}", "top", '84px', { fromValue: '83px'}], position: 250, duration: 250 },
                { id: "eid1115", tween: [ "style", "${_b2b_moneyCopy}", "top", '85px', { fromValue: '84px'}], position: 500, duration: 250 },
                { id: "eid1116", tween: [ "style", "${_b2b_moneyCopy}", "top", '84px', { fromValue: '85px'}], position: 750, duration: 250 },
                { id: "eid1117", tween: [ "style", "${_b2b_moneyCopy}", "top", '83px', { fromValue: '84px'}], position: 1000, duration: 250 },
                { id: "eid1118", tween: [ "style", "${_b2b_moneyCopy}", "top", '84px', { fromValue: '83px'}], position: 1250, duration: 250 },
                { id: "eid1119", tween: [ "style", "${_b2b_moneyCopy}", "top", '85px', { fromValue: '84px'}], position: 1500, duration: 250 },
                { id: "eid1120", tween: [ "style", "${_b2b_moneyCopy}", "top", '84px', { fromValue: '85px'}], position: 1750, duration: 250 },
                { id: "eid1162", tween: [ "style", "${_b2b_handphoneCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1163", tween: [ "style", "${_b2b_handphoneCopy}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1112", tween: [ "transform", "${_b2b_phoneCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1135", tween: [ "transform", "${_b2b_handflachCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1164", tween: [ "style", "${_sym_blingCopy}", "left", '724px', { fromValue: '724px'}], position: 2000, duration: 0 },
                { id: "eid1121", tween: [ "style", "${_b2b_moneyCopy}", "left", '45px', { fromValue: '44px'}], position: 0, duration: 250 },
                { id: "eid1122", tween: [ "style", "${_b2b_moneyCopy}", "left", '44px', { fromValue: '45px'}], position: 250, duration: 250 },
                { id: "eid1123", tween: [ "style", "${_b2b_moneyCopy}", "left", '43px', { fromValue: '44px'}], position: 500, duration: 250 },
                { id: "eid1124", tween: [ "style", "${_b2b_moneyCopy}", "left", '44px', { fromValue: '43px'}], position: 750, duration: 250 },
                { id: "eid1125", tween: [ "style", "${_b2b_moneyCopy}", "left", '43px', { fromValue: '44px'}], position: 1000, duration: 250 },
                { id: "eid1126", tween: [ "style", "${_b2b_moneyCopy}", "left", '44px', { fromValue: '43px'}], position: 1250, duration: 250 },
                { id: "eid1127", tween: [ "style", "${_b2b_moneyCopy}", "left", '45px', { fromValue: '44px'}], position: 1500, duration: 250 },
                { id: "eid1128", tween: [ "style", "${_b2b_moneyCopy}", "left", '44px', { fromValue: '45px'}], position: 1750, duration: 250 },
                { id: "eid1133", tween: [ "style", "${_b2b_handflachCopy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1159", tween: [ "style", "${_b2b_fingerCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1160", tween: [ "style", "${_b2b_fingerCopy}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1130", tween: [ "style", "${_b2b_handphoneCopy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1157", tween: [ "style", "${_b2b_handflachCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1158", tween: [ "style", "${_b2b_handflachCopy}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1129", tween: [ "transform", "${_b2b_moneyCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1136", tween: [ "style", "${_b2b_fingerCopy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1138", tween: [ "transform", "${_b2b_fingerCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1143", tween: [ "style", "${_b2b_daumenCopy}", "left", '-11px', { fromValue: '0px'}], position: 0, duration: 375 },
                { id: "eid1144", tween: [ "style", "${_b2b_daumenCopy}", "left", '0px', { fromValue: '-11px'}], position: 375, duration: 375 },
                { id: "eid1145", tween: [ "style", "${_b2b_daumenCopy}", "left", '-11px', { fromValue: '0px'}], position: 1000, duration: 375 },
                { id: "eid1146", tween: [ "style", "${_b2b_daumenCopy}", "left", '0px', { fromValue: '-11px'}], position: 1375, duration: 375 },
                { id: "eid1161", tween: [ "style", "${_b2b_daumenCopy}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1132", tween: [ "transform", "${_b2b_handphoneCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1147", tween: [ "transform", "${_b2b_daumenCopy}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 375 },
                { id: "eid1148", tween: [ "transform", "${_b2b_daumenCopy}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 375, duration: 375 },
                { id: "eid1149", tween: [ "transform", "${_b2b_daumenCopy}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 1000, duration: 375 },
                { id: "eid1150", tween: [ "transform", "${_b2b_daumenCopy}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 1375, duration: 375 },
                { id: "eid1165", tween: [ "style", "${_b2b_phoneCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1166", tween: [ "style", "${_b2b_phoneCopy}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1110", tween: [ "style", "${_b2b_phoneCopy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_b3a": {
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
                    id: 'b3a_corpus',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'b3a_decke',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3a_decke.svg', '0px', '0px']
                },
                {
                    id: 'b3a_kissen',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3a_kissen.svg', '0px', '0px']
                },
                {
                    id: 'b3a_kopf',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'b3a_zehen_h',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3a_zehen_h.svg', '0px', '0px']
                },
                {
                    id: 'b3a_zehen_v',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3a_zehen_v.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b3a_zehen_h}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3a_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3a_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_b3a_decke}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3a_zehen_v}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3a_kissen}": [
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
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid1186", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid1187", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 500, duration: 500 },
                { id: "eid1188", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid1189", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1500, duration: 500 },
                { id: "eid1213", tween: [ "transform", "${_b3a_decke}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1182", tween: [ "style", "${_b3a_zehen_v}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1183", tween: [ "style", "${_b3a_zehen_v}", "left", '0px', { fromValue: '6px'}], position: 500, duration: 500 },
                { id: "eid1184", tween: [ "style", "${_b3a_zehen_v}", "left", '6px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1185", tween: [ "style", "${_b3a_zehen_v}", "left", '0px', { fromValue: '6px'}], position: 1500, duration: 500 },
                { id: "eid1216", tween: [ "transform", "${_b3a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1190", tween: [ "style", "${_b3a_zehen_h}", "top", '-35px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1191", tween: [ "style", "${_b3a_zehen_h}", "top", '0px', { fromValue: '-35px'}], position: 500, duration: 500 },
                { id: "eid1192", tween: [ "style", "${_b3a_zehen_h}", "top", '-35px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1193", tween: [ "style", "${_b3a_zehen_h}", "top", '0px', { fromValue: '-35px'}], position: 1500, duration: 500 },
                { id: "eid1202", tween: [ "style", "${_b3a_kopf}", "top", '21px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid1203", tween: [ "style", "${_b3a_kopf}", "top", '0px', { fromValue: '21px'}], position: 1000, duration: 1000 },
                { id: "eid1212", tween: [ "style", "${_b3a_decke}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1209", tween: [ "style", "${_b3a_kissen}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1206", tween: [ "transform", "${_b3a_kopf}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1207", tween: [ "transform", "${_b3a_kopf}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1000, duration: 1000 },
                { id: "eid1208", tween: [ "style", "${_b3a_kissen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1210", tween: [ "transform", "${_b3a_kissen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1204", tween: [ "style", "${_b3a_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1205", tween: [ "style", "${_b3a_kopf}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1211", tween: [ "style", "${_b3a_decke}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_b3a_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1215", tween: [ "style", "${_b3a_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1194", tween: [ "style", "${_b3a_zehen_h}", "left", '-4px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1195", tween: [ "style", "${_b3a_zehen_h}", "left", '0px', { fromValue: '-4px'}], position: 500, duration: 500 },
                { id: "eid1196", tween: [ "style", "${_b3a_zehen_h}", "left", '-4px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1197", tween: [ "style", "${_b3a_zehen_h}", "left", '0px', { fromValue: '-4px'}], position: 1500, duration: 500 },
                { id: "eid1198", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid1199", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 500, duration: 500 },
                { id: "eid1200", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid1201", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1500, duration: 500 },
                { id: "eid1178", tween: [ "style", "${_b3a_zehen_v}", "top", '-26px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1179", tween: [ "style", "${_b3a_zehen_v}", "top", '0px', { fromValue: '-26px'}], position: 500, duration: 500 },
                { id: "eid1180", tween: [ "style", "${_b3a_zehen_v}", "top", '-26px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1181", tween: [ "style", "${_b3a_zehen_v}", "top", '0px', { fromValue: '-26px'}], position: 1500, duration: 500 }            ]
        }
    }
},
"sym_b3b": {
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
                    id: 'b3b_corpusm',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_corpusm.svg', '0px', '0px']
                },
                {
                    id: 'b3b_decke',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_decke.svg', '0px', '0px']
                },
                {
                    id: 'b3b_frau',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_frau.svg', '0px', '0px']
                },
                {
                    id: 'b3b_fussm_h',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_fussm_h.svg', '0px', '0px']
                },
                {
                    id: 'b3b_fussm_v',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_fussm_v.svg', '0px', '0px']
                },
                {
                    id: 'b3b_kissen',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_kissen.svg', '0px', '0px']
                },
                {
                    id: 'b3b_oberarmm',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_oberarmm.svg', '0px', '0px']
                },
                {
                    id: 'b3b_unterarmm',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_unterarmm.svg', '0px', '0px']
                },
                {
                    id: 'b3b_zehen_h',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_zehen_h.svg', '0px', '0px']
                },
                {
                    id: 'b3b_zehen_v',
                    type: 'image',
                    rect: ['14px', '21px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/b3b_zehen_v.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b3b_decke}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_frau}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_unterarmm}": [
                ["style", "top", '41px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_fussm_h}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_zehen_h}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_kissen}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_corpusm}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_fussm_v}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_b3b_oberarmm}": [
                ["style", "top", '35px'],
                ["style", "left", '26px'],
                ["transform", "rotateZ", '2deg']
            ],
            "${_b3b_zehen_v}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1607px'],
                ["style", "width", '2100px']
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
                { id: "eid1244", tween: [ "style", "${_b3b_frau}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_b3b_fussm_h}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1223", tween: [ "style", "${_b3b_unterarmm}", "top", '21px', { fromValue: '41px'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid1224", tween: [ "style", "${_b3b_unterarmm}", "top", '41px', { fromValue: '21px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid1222", tween: [ "transform", "${_b3b_zehen_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1249", tween: [ "transform", "${_b3b_decke}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1240", tween: [ "transform", "${_b3b_fussm_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1236", tween: [ "style", "${_b3b_kissen}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_b3b_decke}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1218", tween: [ "style", "${_b3b_zehen_v}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1239", tween: [ "style", "${_b3b_fussm_v}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1219", tween: [ "transform", "${_b3b_zehen_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1227", tween: [ "transform", "${_b3b_unterarmm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1228", tween: [ "transform", "${_b3b_unterarmm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
                { id: "eid1237", tween: [ "transform", "${_b3b_kissen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1246", tween: [ "transform", "${_b3b_frau}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_b3b_kissen}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1233", tween: [ "transform", "${_b3b_oberarmm}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid1234", tween: [ "transform", "${_b3b_oberarmm}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid1221", tween: [ "style", "${_b3b_zehen_h}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1251", tween: [ "style", "${_b3b_corpusm}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1225", tween: [ "style", "${_b3b_unterarmm}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1226", tween: [ "style", "${_b3b_unterarmm}", "left", '14px', { fromValue: '14px'}], position: 3500, duration: 0 },
                { id: "eid1243", tween: [ "transform", "${_b3b_fussm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1252", tween: [ "transform", "${_b3b_corpusm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_b3b_frau}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_b3b_oberarmm}", "top", '21px', { fromValue: '35px'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid1230", tween: [ "style", "${_b3b_oberarmm}", "top", '35px', { fromValue: '21px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid1238", tween: [ "style", "${_b3b_fussm_v}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1231", tween: [ "style", "${_b3b_oberarmm}", "left", '14px', { fromValue: '26px'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid1232", tween: [ "style", "${_b3b_oberarmm}", "left", '26px', { fromValue: '14px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid1220", tween: [ "style", "${_b3b_zehen_h}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_b3b_decke}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_b3b_fussm_h}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1250", tween: [ "style", "${_b3b_corpusm}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1217", tween: [ "style", "${_b3b_zehen_v}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_b": {
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
                    id: 'titelb',
                    type: 'image',
                    rect: ['0px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/titelb.svg', '0px', '0px']
                },
                {
                    id: 'atxtb_3',
                    type: 'image',
                    rect: ['2048px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxtb_3.svg', '0px', '0px']
                },
                {
                    id: 'atxtb_2',
                    type: 'image',
                    rect: ['2048px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxtb_2.svg', '0px', '0px']
                },
                {
                    id: 'atxtb_1',
                    type: 'image',
                    rect: ['2048px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxtb_1.svg', '0px', '0px']
                },
                {
                    id: 'aheadb_1',
                    type: 'image',
                    rect: ['3278px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheadb_1.svg', '0px', '0px']
                },
                {
                    id: 'aheadb_2',
                    type: 'image',
                    rect: ['3278px', '61px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheadb_2.svg', '0px', '0px']
                },
                {
                    id: 'sym_a1b',
                    type: 'rect',
                    rect: ['21682px', '-3px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_a2b',
                    type: 'rect',
                    rect: ['21741px', '57px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_a1b',
                symbolName: 'sym_a1b',
                autoPlay: {

               }
            },
            {
                id: 'sym_a2b',
                symbolName: 'sym_a2b',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_a2b}": [
                ["style", "left", '7006px'],
                ["style", "top", '0px']
            ],
            "${_titelb}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '10000px']
            ],
            "${_atxtb_3}": [
                ["style", "left", '2048px'],
                ["style", "top", '0px']
            ],
            "${_aheadb_1}": [
                ["style", "left", '3278px'],
                ["style", "top", '0px']
            ],
            "${_atxtb_2}": [
                ["style", "left", '2048px'],
                ["style", "top", '0px']
            ],
            "${_atxtb_1}": [
                ["style", "left", '2048px'],
                ["style", "top", '0px']
            ],
            "${_aheadb_2}": [
                ["style", "left", '3278px'],
                ["style", "top", '0px']
            ],
            "${_sym_a1b}": [
                ["style", "left", '4880px'],
                ["style", "top", '0px']
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
                { id: "eid1312", tween: [ "style", "${_atxtb_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1308", tween: [ "style", "${_aheadb_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1305", tween: [ "style", "${_titelb}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1306", tween: [ "style", "${_sym_a1b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_atxtb_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1265", tween: [ "style", "${_sym_a2b}", "left", '7006px', { fromValue: '7006px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1271", tween: [ "style", "${_sym_a1b}", "left", '4880px', { fromValue: '4880px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1307", tween: [ "style", "${_sym_a2b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_atxtb_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_aheadb_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_a": {
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
                    id: 'titela',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/titela.svg', '0px', '0px']
                },
                {
                    id: 'atxta_3',
                    type: 'image',
                    rect: ['2048px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxta_3.svg', '0px', '0px']
                },
                {
                    id: 'atxta_2',
                    type: 'image',
                    rect: ['2048px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxta_2.svg', '0px', '0px']
                },
                {
                    id: 'atxta_1',
                    type: 'image',
                    rect: ['2048px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxta_1.svg', '0px', '0px']
                },
                {
                    id: 'aheada_1',
                    type: 'image',
                    rect: ['3278px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheada_1.svg', '0px', '0px']
                },
                {
                    id: 'aheada_2',
                    type: 'image',
                    rect: ['3278px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheada_2.svg', '0px', '0px']
                },
                {
                    id: 'sym_a1a',
                    type: 'rect',
                    rect: ['21686px', '-3px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_a2a',
                    type: 'rect',
                    rect: ['21741px', '103px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_a2a',
                symbolName: 'sym_a2a',
                autoPlay: {

               }
            },
            {
                id: 'sym_a1a',
                symbolName: 'sym_a1a',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_aheada_2}": [
                ["style", "left", '3278px'],
                ["style", "top", '0px']
            ],
            "${_sym_a2a}": [
                ["style", "left", '7006px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '10000px']
            ],
            "${_titela}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_atxta_1}": [
                ["style", "left", '2048px'],
                ["style", "top", '0px']
            ],
            "${_atxta_2}": [
                ["style", "left", '2048px'],
                ["style", "top", '0px']
            ],
            "${_aheada_1}": [
                ["style", "left", '3278px'],
                ["style", "top", '0px']
            ],
            "${_sym_a1a}": [
                ["style", "left", '4884px'],
                ["style", "top", '0px']
            ],
            "${_atxta_3}": [
                ["style", "left", '2048px'],
                ["style", "top", '0px']
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
                { id: "eid1272", tween: [ "style", "${_sym_a2a}", "left", '7006px', { fromValue: '7006px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1273", tween: [ "style", "${_sym_a1a}", "left", '4884px', { fromValue: '4884px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid226", tween: [ "style", "${_sym_a1a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1314", tween: [ "style", "${_sym_a2a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
