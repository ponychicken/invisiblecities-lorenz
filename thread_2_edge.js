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
                rect: ['0px', '0px','6115px','1536px','auto', 'auto'],
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
                rect: ['1038', '-103','auto','auto','auto', 'auto']
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
                ["style", "left", '1038px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '6115px']
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
                { id: "eid1446", tween: [ "style", "${_sym_all}", "top", '0px', { fromValue: '0px'}], position: 4500, duration: 0 },
                { id: "eid1459", tween: [ "style", "${_sym_welleframe}", "left", '4067px', { fromValue: '0px'}], position: 0, duration: 4500 },
                { id: "eid1496", tween: [ "style", "${_sym_all}", "left", '538px', { fromValue: '1038px'}], position: 0, duration: 4500 }            ]
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
            "${_a1a_arm_h}": [
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
            "${_a1a_arm_v}": [
                ["style", "top", '112px'],
                ["style", "left", '76px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1742px'],
                ["style", "width", '2197px']
            ],
            "${_a1a_beine}": [
                ["style", "top", '106px'],
                ["style", "left", '55px'],
                ["transform", "rotateZ", '0deg']
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
                "oo_a1a": 0
            },
            timeline: [
                { id: "eid41", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid42", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid43", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid44", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid45", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid46", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1063, duration: 437, easing: "easeInOutQuad" },
                { id: "eid47", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid48", tween: [ "transform", "${_a1a_arm_v}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid84", tween: [ "style", "${_a1a_corpus}", "top", '106px', { fromValue: '106px'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_a1a_corpus}", "top", '104px', { fromValue: '106px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid86", tween: [ "style", "${_a1a_corpus}", "top", '106px', { fromValue: '104px'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
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
                { id: "eid63", tween: [ "transform", "${_a1a_ball}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid64", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid65", tween: [ "transform", "${_a1a_ball}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid66", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "transform", "${_a1a_ball}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1063, duration: 437, easing: "easeInOutQuad" },
                { id: "eid69", tween: [ "transform", "${_a1a_ball}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid70", tween: [ "transform", "${_a1a_ball}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
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
                { id: "eid91", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 625, easing: "easeInOutQuad" },
                { id: "eid92", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 625, duration: 875, easing: "easeInOutQuad" },
                { id: "eid93", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid94", tween: [ "transform", "${_a1a_corpus}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid78", tween: [ "transform", "${_a1a_beine}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid79", tween: [ "transform", "${_a1a_beine}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 250, duration: 250 },
                { id: "eid80", tween: [ "transform", "${_a1a_beine}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 375 },
                { id: "eid81", tween: [ "transform", "${_a1a_beine}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 875, duration: 625 },
                { id: "eid82", tween: [ "transform", "${_a1a_beine}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid83", tween: [ "transform", "${_a1a_beine}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid115", tween: [ "style", "${_a1a_windel}", "left", '56px', { fromValue: '55px'}], position: 0, duration: 1500 },
                { id: "eid116", tween: [ "style", "${_a1a_windel}", "left", '55px', { fromValue: '56px'}], position: 1500, duration: 750, easing: "easeInOutQuad" },
                { id: "eid95", tween: [ "style", "${_a1a_kopf}", "top", '116px', { fromValue: '103px'}], position: 0, duration: 313, easing: "easeInOutQuad" },
                { id: "eid96", tween: [ "style", "${_a1a_kopf}", "top", '106px', { fromValue: '116px'}], position: 313, duration: 312, easing: "easeInOutQuad" },
                { id: "eid97", tween: [ "style", "${_a1a_kopf}", "top", '118px', { fromValue: '106px'}], position: 625, duration: 313, easing: "easeInOutQuad" },
                { id: "eid98", tween: [ "style", "${_a1a_kopf}", "top", '106px', { fromValue: '118px'}], position: 938, duration: 562, easing: "easeInOutQuad" },
                { id: "eid99", tween: [ "style", "${_a1a_kopf}", "top", '105px', { fromValue: '106px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid100", tween: [ "style", "${_a1a_kopf}", "top", '103px', { fromValue: '105px'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid49", tween: [ "style", "${_a1a_ball}", "top", '129px', { fromValue: '112px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid50", tween: [ "style", "${_a1a_ball}", "top", '106px', { fromValue: '129px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid51", tween: [ "style", "${_a1a_ball}", "top", '125px', { fromValue: '106px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "style", "${_a1a_ball}", "top", '108px', { fromValue: '125px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid53", tween: [ "style", "${_a1a_ball}", "top", '130px', { fromValue: '108px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid54", tween: [ "style", "${_a1a_ball}", "top", '112px', { fromValue: '130px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid55", tween: [ "style", "${_a1a_ball}", "top", '112px', { fromValue: '112px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid87", tween: [ "style", "${_a1a_corpus}", "left", '45px', { fromValue: '55px'}], position: 0, duration: 625, easing: "easeInOutQuad" },
                { id: "eid88", tween: [ "style", "${_a1a_corpus}", "left", '55px', { fromValue: '45px'}], position: 625, duration: 875, easing: "easeInOutQuad" },
                { id: "eid89", tween: [ "style", "${_a1a_corpus}", "left", '45px', { fromValue: '55px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid90", tween: [ "style", "${_a1a_corpus}", "left", '55px', { fromValue: '45px'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid113", tween: [ "style", "${_a1a_windel}", "top", '106px', { fromValue: '106px'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_a1a_windel}", "top", '106px', { fromValue: '106px'}], position: 1500, duration: 0 },
                { id: "eid101", tween: [ "style", "${_a1a_kopf}", "left", '31px', { fromValue: '75px'}], position: 0, duration: 313, easing: "easeInOutQuad" },
                { id: "eid102", tween: [ "style", "${_a1a_kopf}", "left", '55px', { fromValue: '31px'}], position: 313, duration: 312, easing: "easeInOutQuad" },
                { id: "eid103", tween: [ "style", "${_a1a_kopf}", "left", '29px', { fromValue: '55px'}], position: 625, duration: 313, easing: "easeInOutQuad" },
                { id: "eid104", tween: [ "style", "${_a1a_kopf}", "left", '55px', { fromValue: '29px'}], position: 938, duration: 562, easing: "easeInOutQuad" },
                { id: "eid105", tween: [ "style", "${_a1a_kopf}", "left", '35px', { fromValue: '55px'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid106", tween: [ "style", "${_a1a_kopf}", "left", '75px', { fromValue: '35px'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid107", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '5deg', { fromValue: '-6deg'}], position: 0, duration: 313, easing: "easeInOutQuad" },
                { id: "eid108", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 313, duration: 312, easing: "easeInOutQuad" },
                { id: "eid109", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 625, duration: 313, easing: "easeInOutQuad" },
                { id: "eid110", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 938, duration: 562, easing: "easeInOutQuad" },
                { id: "eid111", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid112", tween: [ "transform", "${_a1a_kopf}", "rotateZ", '-6deg', { fromValue: '3deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "style", "${_a1a_arm_v}", "top", '129px', { fromValue: '112px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid28", tween: [ "style", "${_a1a_arm_v}", "top", '106px', { fromValue: '129px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid29", tween: [ "style", "${_a1a_arm_v}", "top", '125px', { fromValue: '106px'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_a1a_arm_v}", "top", '108px', { fromValue: '125px'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid31", tween: [ "style", "${_a1a_arm_v}", "top", '130px', { fromValue: '108px'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid32", tween: [ "style", "${_a1a_arm_v}", "top", '112px', { fromValue: '130px'}], position: 1063, duration: 438, easing: "easeInOutQuad" },
                { id: "eid33", tween: [ "style", "${_a1a_arm_v}", "top", '112px', { fromValue: '112px'}], position: 2250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 250, duration: 250, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 500, duration: 188, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 688, duration: 187, easing: "easeInOutQuad" },
                { id: "eid23", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 875, duration: 188, easing: "easeInOutQuad" },
                { id: "eid24", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1063, duration: 437, easing: "easeInOutQuad" },
                { id: "eid25", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1500, duration: 600, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "transform", "${_a1a_arm_h}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 2100, duration: 150, easing: "easeInOutQuad" }            ]
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
                    rect: ['56px', '60px', '2048px', '1536px', 'auto', 'auto'],
                    id: 'a1b_kopf',
                    transform: [[0, 0], ['-6']],
                    type: 'image',
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
            "${symbolSelector}": [
                ["style", "height", '1641px'],
                ["style", "width", '2126px']
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
            "${_a1b_arm_v}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_a1b_kopf}": [
                ["style", "top", '53px'],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '-3deg']
            ],
            "${_a1b_beine}": [
                ["style", "top", '61px'],
                ["style", "left", '59px'],
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
                "oo_a1b": 0
            },
            timeline: [
                { id: "eid203", tween: [ "style", "${_a1b_kopf}", "left", '8px', { fromValue: '39px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
                { id: "eid204", tween: [ "style", "${_a1b_kopf}", "left", '46px', { fromValue: '8px'}], position: 250, duration: 275, easing: "easeInOutQuad" },
                { id: "eid205", tween: [ "style", "${_a1b_kopf}", "left", '29px', { fromValue: '46px'}], position: 525, duration: 225, easing: "easeInOutQuad" },
                { id: "eid206", tween: [ "style", "${_a1b_kopf}", "left", '49px', { fromValue: '29px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid207", tween: [ "style", "${_a1b_kopf}", "left", '100px', { fromValue: '49px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid208", tween: [ "style", "${_a1b_kopf}", "left", '39px', { fromValue: '100px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid209", tween: [ "style", "${_a1b_kopf}", "left", '39px', { fromValue: '39px'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "style", "${_a1b_corpus}", "top", '62px', { fromValue: '61px'}], position: 0, duration: 1125, easing: "easeInOutQuad" },
                { id: "eid187", tween: [ "style", "${_a1b_corpus}", "top", '63px', { fromValue: '62px'}], position: 1125, duration: 1125, easing: "easeInOutQuad" },
                { id: "eid188", tween: [ "style", "${_a1b_corpus}", "top", '61px', { fromValue: '63px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
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
                { id: "eid145", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid146", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '-10deg', { fromValue: '4deg'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid147", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid148", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid149", tween: [ "transform", "${_a1b_arm_v}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid189", tween: [ "style", "${_a1b_corpus}", "left", '70px', { fromValue: '59px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid190", tween: [ "style", "${_a1b_corpus}", "left", '52px', { fromValue: '70px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid191", tween: [ "style", "${_a1b_corpus}", "left", '59px', { fromValue: '52px'}], position: 1125, duration: 1125, easing: "easeInOutQuad" },
                { id: "eid150", tween: [ "style", "${_a1b_wurfel}", "top", '71px', { fromValue: '61px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid151", tween: [ "style", "${_a1b_wurfel}", "top", '51px', { fromValue: '71px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid152", tween: [ "style", "${_a1b_wurfel}", "top", '61px', { fromValue: '51px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid153", tween: [ "style", "${_a1b_wurfel}", "top", '71px', { fromValue: '61px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid154", tween: [ "style", "${_a1b_wurfel}", "top", '61px', { fromValue: '71px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid125", tween: [ "style", "${_a1b_arm_h}", "left", '85px', { fromValue: '59px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid126", tween: [ "style", "${_a1b_arm_h}", "left", '29px', { fromValue: '85px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid127", tween: [ "style", "${_a1b_arm_h}", "left", '59px', { fromValue: '29px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid128", tween: [ "style", "${_a1b_arm_h}", "left", '85px', { fromValue: '59px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid129", tween: [ "style", "${_a1b_arm_h}", "left", '59px', { fromValue: '85px'}], position: 2250, duration: 750, easing: "easeInOutQuad" },
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
                { id: "eid155", tween: [ "style", "${_a1b_wurfel}", "left", '85px', { fromValue: '59px'}], position: 0, duration: 750, easing: "easeInOutQuad" },
                { id: "eid156", tween: [ "style", "${_a1b_wurfel}", "left", '29px', { fromValue: '85px'}], position: 750, duration: 375, easing: "easeInOutQuad" },
                { id: "eid157", tween: [ "style", "${_a1b_wurfel}", "left", '59px', { fromValue: '29px'}], position: 1125, duration: 560, easing: "easeInOutQuad" },
                { id: "eid158", tween: [ "style", "${_a1b_wurfel}", "left", '85px', { fromValue: '59px'}], position: 1685, duration: 565, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "style", "${_a1b_wurfel}", "left", '59px', { fromValue: '85px'}], position: 2250, duration: 750, easing: "easeInOutQuad" }            ]
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
            "${_a2a_bein_h}": [
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
            "${_a2a_kopf}": [
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
            autoPlay: true,
            labels: {
                "oo_a2a": 0
            },
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
                { id: "eid232", tween: [ "style", "${_a2a_zehen_v}", "left", '18px', { fromValue: '0px'}], position: 0, duration: 2005, easing: "easeInOutQuad" },
                { id: "eid233", tween: [ "style", "${_a2a_zehen_v}", "left", '-18px', { fromValue: '18px'}], position: 2005, duration: 179, easing: "easeInOutQuad" },
                { id: "eid234", tween: [ "style", "${_a2a_zehen_v}", "left", '9px', { fromValue: '-18px'}], position: 2184, duration: 147, easing: "easeInOutQuad" },
                { id: "eid235", tween: [ "style", "${_a2a_zehen_v}", "left", '-12px', { fromValue: '9px'}], position: 2331, duration: 133, easing: "easeInOutQuad" },
                { id: "eid236", tween: [ "style", "${_a2a_zehen_v}", "left", '0px', { fromValue: '-12px'}], position: 2464, duration: 1093, easing: "easeInOutQuad" },
                { id: "eid264", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid265", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 889, duration: 889, easing: "easeInOutQuad" },
                { id: "eid266", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '9deg', { fromValue: '0deg'}], position: 1778, duration: 889, easing: "easeInOutQuad" },
                { id: "eid267", tween: [ "transform", "${_a2a_teddy}", "rotateZ", '0deg', { fromValue: '9deg'}], position: 2667, duration: 889, easing: "easeInOutQuad" },
                { id: "eid291", tween: [ "style", "${_a2a_arm_v}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid292", tween: [ "style", "${_a2a_arm_v}", "left", '-33px', { fromValue: '0px'}], position: 2806, duration: 195, easing: "easeOutQuad" },
                { id: "eid293", tween: [ "style", "${_a2a_arm_v}", "left", '-2px', { fromValue: '-33px'}], position: 3001, duration: 170, easing: "easeInOutQuad" },
                { id: "eid294", tween: [ "style", "${_a2a_arm_v}", "left", '-58px', { fromValue: '-2px'}], position: 3171, duration: 230, easing: "easeInOutQuad" },
                { id: "eid295", tween: [ "style", "${_a2a_arm_v}", "left", '0px', { fromValue: '-58px'}], position: 3401, duration: 155, easing: "easeInOutQuad" },
                { id: "eid270", tween: [ "style", "${_a2a_kopf}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 1243, easing: "easeInOutQuad" },
                { id: "eid271", tween: [ "style", "${_a2a_kopf}", "left", '0px', { fromValue: '10px'}], position: 1243, duration: 2313, easing: "easeInOutQuad" },
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
                { id: "eid237", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 2005, easing: "easeInOutQuad" },
                { id: "eid238", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '-13deg', { fromValue: '5deg'}], position: 2005, duration: 179, easing: "easeInOutQuad" },
                { id: "eid239", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '1deg', { fromValue: '-13deg'}], position: 2184, duration: 147, easing: "easeInOutQuad" },
                { id: "eid240", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '-7deg', { fromValue: '1deg'}], position: 2331, duration: 133, easing: "easeInOutQuad" },
                { id: "eid241", tween: [ "transform", "${_a2a_zehen_v}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 2464, duration: 1093, easing: "easeInOutQuad" },
                { id: "eid272", tween: [ "transform", "${_a2a_kopf}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 1243, easing: "easeInOutQuad" },
                { id: "eid273", tween: [ "transform", "${_a2a_kopf}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 1243, duration: 2313, easing: "easeInOutQuad" },
                { id: "eid282", tween: [ "transform", "${_a2a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid257", tween: [ "style", "${_a2a_teddy}", "top", '20px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInOutQuad" },
                { id: "eid258", tween: [ "style", "${_a2a_teddy}", "top", '0px', { fromValue: '20px'}], position: 889, duration: 889, easing: "easeInOutQuad" },
                { id: "eid259", tween: [ "style", "${_a2a_teddy}", "top", '20px', { fromValue: '0px'}], position: 1778, duration: 889, easing: "easeInOutQuad" },
                { id: "eid260", tween: [ "style", "${_a2a_teddy}", "top", '0px', { fromValue: '20px'}], position: 2667, duration: 889, easing: "easeInOutQuad" },
                { id: "eid242", tween: [ "style", "${_a2a_zehen_h}", "top", '11px', { fromValue: '0px'}], position: 0, duration: 1146, easing: "easeInQuad" },
                { id: "eid243", tween: [ "style", "${_a2a_zehen_h}", "top", '-4px', { fromValue: '11px'}], position: 1146, duration: 133, easing: "easeInOutQuad" },
                { id: "eid244", tween: [ "style", "${_a2a_zehen_h}", "top", '5px', { fromValue: '-4px'}], position: 1279, duration: 169, easing: "easeInOutQuad" },
                { id: "eid245", tween: [ "style", "${_a2a_zehen_h}", "top", '-5px', { fromValue: '5px'}], position: 1448, duration: 156, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "style", "${_a2a_zehen_h}", "top", '0px', { fromValue: '-5px'}], position: 1604, duration: 1952, easing: "easeInOutQuad" },
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
            "${symbolSelector}": [
                ["style", "height", '1537px'],
                ["style", "width", '2051px']
            ],
            "${_a2b_bein_h}": [
                ["style", "left", '0px'],
                ["style", "top", '1px']
            ],
            "${_a2b_barbieCopy}": [
                ["style", "top", '1px'],
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
            autoPlay: true,
            labels: {
                "oo_a2b": 0
            },
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
                { id: "eid383", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '13px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid384", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '34px', { fromValue: '13px'}], position: 889, duration: 731, easing: "easeOutQuad" },
                { id: "eid385", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '-45px', { fromValue: '34px'}], position: 1620, duration: 179, easing: "easeInOutQuad" },
                { id: "eid386", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '8px', { fromValue: '-45px'}], position: 1799, duration: 147, easing: "easeInOutQuad" },
                { id: "eid387", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '-53px', { fromValue: '8px'}], position: 1946, duration: 133, easing: "easeInOutQuad" },
                { id: "eid388", tween: [ "style", "${_a2b_zehen_vCopy}", "top", '0px', { fromValue: '-53px'}], position: 2079, duration: 1478, easing: "easeInOutQuad" },
                { id: "eid453", tween: [ "style", "${_a2b_arm_hCopy}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
                { id: "eid394", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid395", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '-5deg', { fromValue: '-2deg'}], position: 889, duration: 731, easing: "easeOutQuad" },
                { id: "eid396", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '6deg', { fromValue: '-5deg'}], position: 1620, duration: 179, easing: "easeInOutQuad" },
                { id: "eid397", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '-1deg', { fromValue: '6deg'}], position: 1799, duration: 147, easing: "easeInOutQuad" },
                { id: "eid398", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '7deg', { fromValue: '-1deg'}], position: 1946, duration: 133, easing: "easeInOutQuad" },
                { id: "eid399", tween: [ "transform", "${_a2b_zehen_vCopy}", "rotateZ", '0deg', { fromValue: '7deg'}], position: 2079, duration: 1478, easing: "easeInOutQuad" },
                { id: "eid418", tween: [ "style", "${_a2b_kopfCopy}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 1687, easing: "easeInOutQuad" },
                { id: "eid419", tween: [ "style", "${_a2b_kopfCopy}", "left", '0px', { fromValue: '10px'}], position: 1687, duration: 1869, easing: "easeInOutQuad" },
                { id: "eid400", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '-1px', { fromValue: '1px'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid401", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '-2px', { fromValue: '-1px'}], position: 889, duration: 1340, easing: "easeInOutQuad" },
                { id: "eid402", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '1px', { fromValue: '-2px'}], position: 2229, duration: 271, easing: "easeInOutQuad" },
                { id: "eid403", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '0px', { fromValue: '1px'}], position: 2500, duration: 228, easing: "easeInOutQuad" },
                { id: "eid404", tween: [ "style", "${_a2b_zehen_hCopy}", "top", '1px', { fromValue: '0px'}], position: 2728, duration: 828, easing: "easeInOutQuad" },
                { id: "eid405", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '8px', { fromValue: '0px'}], position: 0, duration: 889, easing: "easeInQuad" },
                { id: "eid406", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '14px', { fromValue: '8px'}], position: 889, duration: 1340, easing: "easeInOutQuad" },
                { id: "eid407", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '-6px', { fromValue: '14px'}], position: 2229, duration: 271, easing: "easeInOutQuad" },
                { id: "eid408", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '-17px', { fromValue: '-6px'}], position: 2500, duration: 228, easing: "easeInOutQuad" },
                { id: "eid409", tween: [ "style", "${_a2b_zehen_hCopy}", "left", '0px', { fromValue: '-17px'}], position: 2728, duration: 828, easing: "easeInOutQuad" },
                { id: "eid445", tween: [ "style", "${_a2b_arm_vCopy}", "left", '-33px', { fromValue: '0px'}], position: 555, duration: 195, easing: "easeOutQuad" },
                { id: "eid446", tween: [ "style", "${_a2b_arm_vCopy}", "left", '-2px', { fromValue: '-33px'}], position: 750, duration: 170, easing: "easeInOutQuad" },
                { id: "eid447", tween: [ "style", "${_a2b_arm_vCopy}", "left", '-58px', { fromValue: '-2px'}], position: 920, duration: 230, easing: "easeInOutQuad" },
                { id: "eid448", tween: [ "style", "${_a2b_arm_vCopy}", "left", '0px', { fromValue: '-58px'}], position: 1150, duration: 155, easing: "easeInOutQuad" }            ]
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
                    id: 'sym_a1a',
                    type: 'rect',
                    rect: ['-1093px', '-3px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_a1b',
                    type: 'rect',
                    rect: ['-1097px', '42px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_a2a',
                    type: 'rect',
                    rect: ['-1038px', '103px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_a2b',
                    type: 'rect',
                    rect: ['-1038px', '102px', 'auto', 'auto', 'auto', 'auto']
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
            },
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
            "${_sym_a1b}": [
                ["style", "left", '0px'],
                ["style", "top", '-58px']
            ],
            "${_sym_a2a}": [
                ["style", "left", '1786px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '3837px']
            ],
            "${_sym_a1a}": [
                ["style", "left", '0px'],
                ["style", "top", '-103px']
            ],
            "${_sym_a2b}": [
                ["style", "left", '1786px'],
                ["style", "top", '0px']
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
                { id: "eid1442", tween: [ "style", "${_sym_a1b}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1486", tween: [ "style", "${_sym_a1b}", "left", '-400px', { fromValue: '0px'}], position: 1250, duration: 1750 },
                { id: "eid1453", tween: [ "style", "${_sym_a1b}", "top", '-58px', { fromValue: '-58px'}], position: 0, duration: 0 },
                { id: "eid1441", tween: [ "style", "${_sym_a2a}", "left", '1786px', { fromValue: '1786px'}], position: 0, duration: 0 },
                { id: "eid1491", tween: [ "style", "${_sym_a2a}", "left", '1286px', { fromValue: '1786px'}], position: 3460, duration: 1040 },
                { id: "eid1439", tween: [ "style", "${_sym_a1a}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1487", tween: [ "style", "${_sym_a1a}", "left", '-400px', { fromValue: '0px'}], position: 1250, duration: 1750 },
                { id: "eid1454", tween: [ "style", "${_sym_a1a}", "top", '-103px', { fromValue: '-103px'}], position: 0, duration: 0 },
                { id: "eid1451", tween: [ "style", "${_sym_a2b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1483", tween: [ "style", "${_sym_a2b}", "top", '0px', { fromValue: '0px'}], position: 4500, duration: 0 },
                { id: "eid1440", tween: [ "style", "${_sym_a2b}", "left", '1786px', { fromValue: '1786px'}], position: 0, duration: 0 },
                { id: "eid1490", tween: [ "style", "${_sym_a2b}", "left", '1286px', { fromValue: '1786px'}], position: 3460, duration: 1040 },
                { id: "eid1452", tween: [ "style", "${_sym_a2a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
            duration: 3250,
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
                    id: 'welle2',
                    type: 'image',
                    rect: ['0', '0', '4096px', '900px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_welle2}": [
                ["style", "top", '30px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "top", '-1334px'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
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
            duration: 3250,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1477", tween: [ "style", "${_welle2}", "top", '30px', { fromValue: '30px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1475", tween: [ "style", "${_welle2}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 3250 },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1478", tween: [ "style", "${_Rectangle2}", "top", '-1334px', { fromValue: '-1334px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1466", tween: [ "transform", "${_welle2}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 541, easing: "easeInOutQuad" },
                { id: "eid1467", tween: [ "transform", "${_welle2}", "scaleY", '1', { fromValue: '0.8'}], position: 541, duration: 541, easing: "easeInOutQuad" },
                { id: "eid1468", tween: [ "transform", "${_welle2}", "scaleY", '0.9', { fromValue: '1'}], position: 1084, duration: 541, easing: "easeInOutQuad" },
                { id: "eid1469", tween: [ "transform", "${_welle2}", "scaleY", '1', { fromValue: '0.9'}], position: 1625, duration: 541, easing: "easeInOutQuad" },
                { id: "eid1470", tween: [ "transform", "${_welle2}", "scaleY", '0.8', { fromValue: '1'}], position: 2166, duration: 541, easing: "easeInOutQuad" },
                { id: "eid1471", tween: [ "transform", "${_welle2}", "scaleY", '1', { fromValue: '0.8'}], position: 2709, duration: 541, easing: "easeInOutQuad" }            ]
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
