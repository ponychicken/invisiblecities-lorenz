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
                rect: ['0px', '0px','6370px','1536px','auto', 'auto'],
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
                rect: ['1050', '0','auto','auto','auto', 'auto']
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
                ["style", "left", '1050px'],
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
                ["style", "width", '6370px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5435,
            autoPlay: false,
            timeline: [
                { id: "eid1682", tween: [ "style", "${_sym_all}", "left", '550px', { fromValue: '1050px'}], position: 0, duration: 5435 },
                { id: "eid1670", tween: [ "style", "${_sym_welleframe}", "left", '4322px', { fromValue: '0px'}], position: 0, duration: 5435 }            ]
        }
    }
},
"sym_c1b": {
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
                    id: 'c1b_zahne',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_zahne.svg', '0px', '0px']
                },
                {
                    id: 'c1b_warze_r',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_warze_r.svg', '0px', '0px']
                },
                {
                    id: 'c1b_warze_l',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_warze_l.svg', '0px', '0px']
                },
                {
                    id: 'c1b_ohr_l',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_ohr_l.svg', '0px', '0px']
                },
                {
                    id: 'c1b_kopf',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_kopf.svg', '0px', '0px']
                },
                {
                    id: 'c1b_hand_v',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_hand_v.svg', '0px', '0px']
                },
                {
                    id: 'c1b_hand_h',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_hand_h.svg', '0px', '0px']
                },
                {
                    id: 'c1b_fuss_l',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_fuss_l.svg', '0px', '0px']
                },
                {
                    id: 'c1b_corpus',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_corpus.svg', '0px', '0px']
                },
                {
                    id: 'c1b_braue_r',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_braue_r.svg', '0px', '0px']
                },
                {
                    id: 'c1b_braue_l',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_braue_l.svg', '0px', '0px']
                },
                {
                    id: 'c1b_augen',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_augen.svg', '0px', '0px']
                },
                {
                    id: 'c1b_arm_v',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_arm_v.svg', '0px', '0px']
                },
                {
                    id: 'c1b_arm_h',
                    type: 'image',
                    rect: ['2px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1b_arm_h.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_c1b_augen}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_braue_r}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_hand_v}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_fuss_l}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_arm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_zahne}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_braue_l}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_arm_v}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_hand_h}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_warze_r}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '2px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2050px']
            ],
            "${_c1b_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_ohr_l}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1b_warze_l}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '2px']
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
                "oo_c1b": 0
            },
            timeline: [
                { id: "eid1482", tween: [ "style", "${_c1b_hand_v}", "top", '-18px', { fromValue: '0px'}], position: 0, duration: 712, easing: "easeInOutQuad" },
                { id: "eid1483", tween: [ "style", "${_c1b_hand_v}", "top", '0px', { fromValue: '-18px'}], position: 712, duration: 788, easing: "easeInOutQuad" },
                { id: "eid1484", tween: [ "style", "${_c1b_hand_v}", "top", '23px', { fromValue: '0px'}], position: 2380, duration: 253, easing: "easeInOutQuad" },
                { id: "eid1485", tween: [ "style", "${_c1b_hand_v}", "top", '0px', { fromValue: '23px'}], position: 2633, duration: 127, easing: "easeInOutQuad" },
                { id: "eid1486", tween: [ "style", "${_c1b_hand_v}", "top", '5px', { fromValue: '0px'}], position: 2760, duration: 70, easing: "easeInOutQuad" },
                { id: "eid1487", tween: [ "style", "${_c1b_hand_v}", "top", '0px', { fromValue: '5px'}], position: 2830, duration: 50, easing: "easeInOutQuad" },
                { id: "eid1478", tween: [ "transform", "${_c1b_fuss_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1472", tween: [ "transform", "${_c1b_braue_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1475", tween: [ "transform", "${_c1b_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1549", tween: [ "transform", "${_c1b_warze_r}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1550", tween: [ "transform", "${_c1b_warze_r}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1551", tween: [ "transform", "${_c1b_warze_r}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1552", tween: [ "transform", "${_c1b_warze_r}", "scaleY", '1', { fromValue: '1.05'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1553", tween: [ "transform", "${_c1b_warze_r}", "scaleY", '1.05', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1554", tween: [ "transform", "${_c1b_warze_r}", "scaleY", '1', { fromValue: '1.05'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1555", tween: [ "transform", "${_c1b_warze_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1556", tween: [ "transform", "${_c1b_warze_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid1557", tween: [ "transform", "${_c1b_warze_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid1498", tween: [ "style", "${_c1b_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1480", tween: [ "style", "${_c1b_hand_h}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1492", tween: [ "transform", "${_c1b_hand_v}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 712, easing: "easeInOutQuad" },
                { id: "eid1493", tween: [ "transform", "${_c1b_hand_v}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 712, duration: 788, easing: "easeInOutQuad" },
                { id: "eid1494", tween: [ "transform", "${_c1b_hand_v}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 2380, duration: 253, easing: "easeInOutQuad" },
                { id: "eid1495", tween: [ "transform", "${_c1b_hand_v}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 2633, duration: 127, easing: "easeInOutQuad" },
                { id: "eid1496", tween: [ "transform", "${_c1b_hand_v}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 2760, duration: 70, easing: "easeInOutQuad" },
                { id: "eid1497", tween: [ "transform", "${_c1b_hand_v}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 2830, duration: 50, easing: "easeInOutQuad" },
                { id: "eid1466", tween: [ "transform", "${_c1b_augen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1468", tween: [ "style", "${_c1b_braue_l}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1534", tween: [ "transform", "${_c1b_warze_l}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1535", tween: [ "transform", "${_c1b_warze_l}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1536", tween: [ "transform", "${_c1b_warze_l}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1537", tween: [ "transform", "${_c1b_warze_l}", "scaleX", '1', { fromValue: '1.05'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1538", tween: [ "transform", "${_c1b_warze_l}", "scaleX", '1.05', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1539", tween: [ "transform", "${_c1b_warze_l}", "scaleX", '1', { fromValue: '1.05'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1477", tween: [ "style", "${_c1b_fuss_l}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1474", tween: [ "style", "${_c1b_corpus}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1513", tween: [ "transform", "${_c1b_ohr_l}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1514", tween: [ "transform", "${_c1b_ohr_l}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 569, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1515", tween: [ "transform", "${_c1b_ohr_l}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 639, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1516", tween: [ "transform", "${_c1b_ohr_l}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 708, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1517", tween: [ "transform", "${_c1b_ohr_l}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 777, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1518", tween: [ "transform", "${_c1b_ohr_l}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 847, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1469", tween: [ "transform", "${_c1b_braue_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1465", tween: [ "style", "${_c1b_augen}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1470", tween: [ "style", "${_c1b_braue_r}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1476", tween: [ "style", "${_c1b_fuss_l}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1543", tween: [ "style", "${_c1b_warze_r}", "top", '7px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1544", tween: [ "style", "${_c1b_warze_r}", "top", '0px', { fromValue: '7px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1545", tween: [ "style", "${_c1b_warze_r}", "top", '7px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1546", tween: [ "style", "${_c1b_warze_r}", "top", '0px', { fromValue: '7px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1547", tween: [ "style", "${_c1b_warze_r}", "top", '7px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1548", tween: [ "style", "${_c1b_warze_r}", "top", '0px', { fromValue: '7px'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1464", tween: [ "style", "${_c1b_augen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1479", tween: [ "style", "${_c1b_hand_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1564", tween: [ "style", "${_c1b_warze_r}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1565", tween: [ "style", "${_c1b_warze_r}", "left", '2px', { fromValue: '2px'}], position: 1000, duration: 0 },
                { id: "eid1566", tween: [ "style", "${_c1b_warze_r}", "left", '2px', { fromValue: '2px'}], position: 2000, duration: 0 },
                { id: "eid1488", tween: [ "style", "${_c1b_hand_v}", "left", '-13px', { fromValue: '2px'}], position: 0, duration: 712, easing: "easeInOutQuad" },
                { id: "eid1489", tween: [ "style", "${_c1b_hand_v}", "left", '2px', { fromValue: '-13px'}], position: 712, duration: 788, easing: "easeInOutQuad" },
                { id: "eid1490", tween: [ "style", "${_c1b_hand_v}", "left", '3px', { fromValue: '2px'}], position: 2380, duration: 253, easing: "easeInOutQuad" },
                { id: "eid1491", tween: [ "style", "${_c1b_hand_v}", "left", '2px', { fromValue: '3px'}], position: 2633, duration: 127, easing: "easeInOutQuad" },
                { id: "eid1471", tween: [ "style", "${_c1b_braue_r}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1507", tween: [ "style", "${_c1b_ohr_l}", "left", '-6px', { fromValue: '2px'}], position: 500, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1508", tween: [ "style", "${_c1b_ohr_l}", "left", '2px', { fromValue: '-6px'}], position: 569, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1509", tween: [ "style", "${_c1b_ohr_l}", "left", '-6px', { fromValue: '2px'}], position: 639, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1510", tween: [ "style", "${_c1b_ohr_l}", "left", '2px', { fromValue: '-6px'}], position: 708, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1511", tween: [ "style", "${_c1b_ohr_l}", "left", '-6px', { fromValue: '2px'}], position: 777, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1512", tween: [ "style", "${_c1b_ohr_l}", "left", '2px', { fromValue: '-6px'}], position: 847, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1591", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 85, easing: "easeInOutQuad" },
                { id: "eid1592", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 160, duration: 90, easing: "easeInOutQuad" },
                { id: "eid1593", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 300, duration: 80, easing: "easeInOutQuad" },
                { id: "eid1594", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 450, duration: 135, easing: "easeInOutQuad" },
                { id: "eid1595", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 660, duration: 90, easing: "easeInOutQuad" },
                { id: "eid1596", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 800, duration: 80, easing: "easeInOutQuad" },
                { id: "eid1597", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 950, duration: 50, easing: "easeInOutQuad" },
                { id: "eid1598", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 1000, duration: 85, easing: "easeInOutQuad" },
                { id: "eid1599", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 1160, duration: 90, easing: "easeInOutQuad" },
                { id: "eid1600", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 1300, duration: 80, easing: "easeInOutQuad" },
                { id: "eid1601", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 1450, duration: 135, easing: "easeInOutQuad" },
                { id: "eid1602", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 1660, duration: 90, easing: "easeInOutQuad" },
                { id: "eid1603", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 1800, duration: 80, easing: "easeInOutQuad" },
                { id: "eid1604", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 1950, duration: 50, easing: "easeInOutQuad" },
                { id: "eid1605", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 2000, duration: 85, easing: "easeInOutQuad" },
                { id: "eid1606", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 2160, duration: 90, easing: "easeInOutQuad" },
                { id: "eid1607", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 2300, duration: 80, easing: "easeInOutQuad" },
                { id: "eid1608", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 2450, duration: 135, easing: "easeInOutQuad" },
                { id: "eid1609", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 2660, duration: 90, easing: "easeInOutQuad" },
                { id: "eid1610", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 2800, duration: 80, easing: "easeInOutQuad" },
                { id: "eid1611", tween: [ "style", "${_c1b_zahne}", "left", '2px', { fromValue: '0px'}], position: 2950, duration: 50, easing: "easeInOutQuad" },
                { id: "eid1531", tween: [ "transform", "${_c1b_warze_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1532", tween: [ "transform", "${_c1b_warze_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid1533", tween: [ "transform", "${_c1b_warze_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid1481", tween: [ "transform", "${_c1b_hand_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1499", tween: [ "style", "${_c1b_kopf}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1567", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1568", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 160, duration: 0 },
                { id: "eid1569", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 300, duration: 0 },
                { id: "eid1570", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 450, duration: 0 },
                { id: "eid1571", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
                { id: "eid1572", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 660, duration: 0 },
                { id: "eid1573", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 800, duration: 0 },
                { id: "eid1574", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 950, duration: 0 },
                { id: "eid1575", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
                { id: "eid1576", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1160, duration: 0 },
                { id: "eid1577", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1300, duration: 0 },
                { id: "eid1578", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1450, duration: 0 },
                { id: "eid1579", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
                { id: "eid1580", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1660, duration: 0 },
                { id: "eid1581", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1800, duration: 0 },
                { id: "eid1582", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 1950, duration: 0 },
                { id: "eid1583", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1584", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2160, duration: 0 },
                { id: "eid1585", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2300, duration: 0 },
                { id: "eid1586", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2450, duration: 0 },
                { id: "eid1587", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
                { id: "eid1588", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2660, duration: 0 },
                { id: "eid1589", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2800, duration: 0 },
                { id: "eid1590", tween: [ "style", "${_c1b_zahne}", "top", '0px', { fromValue: '0px'}], position: 2950, duration: 0 },
                { id: "eid1558", tween: [ "transform", "${_c1b_warze_r}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1559", tween: [ "transform", "${_c1b_warze_r}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1560", tween: [ "transform", "${_c1b_warze_r}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1561", tween: [ "transform", "${_c1b_warze_r}", "scaleX", '1', { fromValue: '1.05'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1562", tween: [ "transform", "${_c1b_warze_r}", "scaleX", '1.05', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1563", tween: [ "transform", "${_c1b_warze_r}", "scaleX", '1', { fromValue: '1.05'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1540", tween: [ "style", "${_c1b_warze_l}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1541", tween: [ "style", "${_c1b_warze_l}", "left", '2px', { fromValue: '2px'}], position: 1000, duration: 0 },
                { id: "eid1542", tween: [ "style", "${_c1b_warze_l}", "left", '2px', { fromValue: '2px'}], position: 2000, duration: 0 },
                { id: "eid1612", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1613", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 160, duration: 0 },
                { id: "eid1614", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 300, duration: 0 },
                { id: "eid1615", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 450, duration: 0 },
                { id: "eid1616", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid1617", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 660, duration: 0 },
                { id: "eid1618", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 800, duration: 0 },
                { id: "eid1619", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 950, duration: 0 },
                { id: "eid1620", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid1621", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1160, duration: 0 },
                { id: "eid1622", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1300, duration: 0 },
                { id: "eid1623", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1450, duration: 0 },
                { id: "eid1624", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
                { id: "eid1625", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1660, duration: 0 },
                { id: "eid1626", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1800, duration: 0 },
                { id: "eid1627", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1950, duration: 0 },
                { id: "eid1628", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid1629", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2160, duration: 0 },
                { id: "eid1630", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2300, duration: 0 },
                { id: "eid1631", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2450, duration: 0 },
                { id: "eid1632", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
                { id: "eid1633", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2660, duration: 0 },
                { id: "eid1634", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2800, duration: 0 },
                { id: "eid1635", tween: [ "transform", "${_c1b_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2950, duration: 0 },
                { id: "eid1457", tween: [ "transform", "${_c1b_arm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1473", tween: [ "style", "${_c1b_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1525", tween: [ "transform", "${_c1b_warze_l}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1526", tween: [ "transform", "${_c1b_warze_l}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1527", tween: [ "transform", "${_c1b_warze_l}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1528", tween: [ "transform", "${_c1b_warze_l}", "scaleY", '1', { fromValue: '1.05'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1529", tween: [ "transform", "${_c1b_warze_l}", "scaleY", '1.05', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1530", tween: [ "transform", "${_c1b_warze_l}", "scaleY", '1', { fromValue: '1.05'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1455", tween: [ "style", "${_c1b_arm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1458", tween: [ "style", "${_c1b_arm_v}", "top", '-16px', { fromValue: '0px'}], position: 0, duration: 712, easing: "easeInOutQuad" },
                { id: "eid1459", tween: [ "style", "${_c1b_arm_v}", "top", '0px', { fromValue: '-16px'}], position: 712, duration: 788, easing: "easeInOutQuad" },
                { id: "eid1467", tween: [ "style", "${_c1b_braue_l}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1462", tween: [ "transform", "${_c1b_arm_v}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 712, easing: "easeInOutQuad" },
                { id: "eid1463", tween: [ "transform", "${_c1b_arm_v}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 712, duration: 788, easing: "easeInOutQuad" },
                { id: "eid1460", tween: [ "style", "${_c1b_arm_v}", "left", '-12px', { fromValue: '2px'}], position: 0, duration: 712, easing: "easeInOutQuad" },
                { id: "eid1461", tween: [ "style", "${_c1b_arm_v}", "left", '2px', { fromValue: '-12px'}], position: 712, duration: 788, easing: "easeInOutQuad" },
                { id: "eid1500", tween: [ "transform", "${_c1b_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1501", tween: [ "style", "${_c1b_ohr_l}", "top", '-33px', { fromValue: '0px'}], position: 500, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1502", tween: [ "style", "${_c1b_ohr_l}", "top", '0px', { fromValue: '-33px'}], position: 569, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1503", tween: [ "style", "${_c1b_ohr_l}", "top", '-33px', { fromValue: '0px'}], position: 639, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1504", tween: [ "style", "${_c1b_ohr_l}", "top", '0px', { fromValue: '-33px'}], position: 708, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1505", tween: [ "style", "${_c1b_ohr_l}", "top", '-33px', { fromValue: '0px'}], position: 777, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1506", tween: [ "style", "${_c1b_ohr_l}", "top", '0px', { fromValue: '-33px'}], position: 847, duration: 69, easing: "easeInOutQuad" },
                { id: "eid1456", tween: [ "style", "${_c1b_arm_h}", "left", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid1519", tween: [ "style", "${_c1b_warze_l}", "top", '-7px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1520", tween: [ "style", "${_c1b_warze_l}", "top", '0px', { fromValue: '-7px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1521", tween: [ "style", "${_c1b_warze_l}", "top", '-7px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1522", tween: [ "style", "${_c1b_warze_l}", "top", '0px', { fromValue: '-7px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1523", tween: [ "style", "${_c1b_warze_l}", "top", '-7px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1524", tween: [ "style", "${_c1b_warze_l}", "top", '0px', { fromValue: '-7px'}], position: 2500, duration: 500, easing: "easeInOutQuad" }            ]
        }
    }
},
"sym_c1a": {
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
                    id: 'c1a_armv',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_armv.svg', '0px', '0px']
                },
                {
                    id: 'c1a_augen',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_augen.svg', '0px', '0px']
                },
                {
                    id: 'c1a_augenrander',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_augenrander.svg', '0px', '0px']
                },
                {
                    id: 'c1a_corpus',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_corpus.svg', '0px', '0px']
                },
                {
                    id: 'c1a_fuss_r',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_fuss_r.svg', '0px', '0px']
                },
                {
                    id: 'c1a_hand_v',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_hand_v.svg', '0px', '0px']
                },
                {
                    id: 'c1a_kopf',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_kopf.svg', '0px', '0px']
                },
                {
                    id: 'c1a_oberarm_h',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_oberarm_h.svg', '0px', '0px']
                },
                {
                    id: 'c1a_unterarm_h',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_unterarm_h.svg', '0px', '0px']
                },
                {
                    id: 'c1a_warze_l',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_warze_l.svg', '0px', '0px']
                },
                {
                    id: 'c1a_warze_r',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_warze_r.svg', '0px', '0px']
                },
                {
                    id: 'c1a_zahne',
                    type: 'image',
                    rect: ['3px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/c1a_zahne.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_c1a_zahne}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_fuss_r}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_armv}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_kopf}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_hand_v}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_unterarm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_warze_l}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '3px']
            ],
            "${_c1a_augenrander}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_warze_r}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '3px']
            ],
            "${_c1a_corpus}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_c1a_augen}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2051px']
            ],
            "${_c1a_oberarm_h}": [
                ["style", "top", '0px'],
                ["style", "left", '3px'],
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
                "oo_c1a": 0
            },
            timeline: [
                { id: "eid1419", tween: [ "style", "${_c1a_unterarm_h}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1439", tween: [ "style", "${_c1a_corpus}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1424", tween: [ "style", "${_c1a_kopf}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1370", tween: [ "style", "${_c1a_warze_r}", "top", '7px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1371", tween: [ "style", "${_c1a_warze_r}", "top", '0px', { fromValue: '7px'}], position: 500, duration: 500 },
                { id: "eid1372", tween: [ "style", "${_c1a_warze_r}", "top", '7px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1373", tween: [ "style", "${_c1a_warze_r}", "top", '0px', { fromValue: '7px'}], position: 1500, duration: 500 },
                { id: "eid1374", tween: [ "style", "${_c1a_warze_r}", "top", '7px', { fromValue: '0px'}], position: 2000, duration: 500 },
                { id: "eid1375", tween: [ "style", "${_c1a_warze_r}", "top", '0px', { fromValue: '7px'}], position: 2500, duration: 500 },
                { id: "eid1447", tween: [ "style", "${_c1a_armv}", "top", '3px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid1448", tween: [ "style", "${_c1a_armv}", "top", '0px', { fromValue: '3px'}], position: 2000, duration: 1000 },
                { id: "eid1301", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1302", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 160, duration: 0 },
                { id: "eid1303", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 300, duration: 0 },
                { id: "eid1304", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 450, duration: 0 },
                { id: "eid1305", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
                { id: "eid1306", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 660, duration: 0 },
                { id: "eid1307", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 800, duration: 0 },
                { id: "eid1308", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 950, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1160, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1300, duration: 0 },
                { id: "eid1312", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1450, duration: 0 },
                { id: "eid1313", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
                { id: "eid1314", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1660, duration: 0 },
                { id: "eid1315", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1800, duration: 0 },
                { id: "eid1316", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 1950, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2160, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2300, duration: 0 },
                { id: "eid1320", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2450, duration: 0 },
                { id: "eid1321", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
                { id: "eid1322", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2660, duration: 0 },
                { id: "eid1323", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2800, duration: 0 },
                { id: "eid1324", tween: [ "style", "${_c1a_zahne}", "top", '0px', { fromValue: '0px'}], position: 2950, duration: 0 },
                { id: "eid1427", tween: [ "style", "${_c1a_hand_v}", "top", '3px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid1428", tween: [ "style", "${_c1a_hand_v}", "top", '0px', { fromValue: '3px'}], position: 2000, duration: 1000 },
                { id: "eid1426", tween: [ "transform", "${_c1a_kopf}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1444", tween: [ "style", "${_c1a_augen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1409", tween: [ "transform", "${_c1a_warze_l}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1410", tween: [ "transform", "${_c1a_warze_l}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 500 },
                { id: "eid1411", tween: [ "transform", "${_c1a_warze_l}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid1412", tween: [ "transform", "${_c1a_warze_l}", "scaleX", '1', { fromValue: '1.05'}], position: 1500, duration: 500 },
                { id: "eid1413", tween: [ "transform", "${_c1a_warze_l}", "scaleX", '1.05', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid1414", tween: [ "transform", "${_c1a_warze_l}", "scaleX", '1', { fromValue: '1.05'}], position: 2500, duration: 500 },
                { id: "eid1432", tween: [ "transform", "${_c1a_hand_v}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1433", tween: [ "transform", "${_c1a_hand_v}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 1000, duration: 1000 },
                { id: "eid1434", tween: [ "transform", "${_c1a_hand_v}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 2000, duration: 1000 },
                { id: "eid1438", tween: [ "style", "${_c1a_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1421", tween: [ "style", "${_c1a_oberarm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1415", tween: [ "style", "${_c1a_warze_l}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1416", tween: [ "style", "${_c1a_warze_l}", "left", '3px', { fromValue: '3px'}], position: 1000, duration: 0 },
                { id: "eid1417", tween: [ "style", "${_c1a_warze_l}", "left", '3px', { fromValue: '3px'}], position: 2000, duration: 0 },
                { id: "eid1441", tween: [ "style", "${_c1a_augenrander}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1325", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 0, duration: 85 },
                { id: "eid1326", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 160, duration: 90 },
                { id: "eid1327", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 300, duration: 80 },
                { id: "eid1328", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 450, duration: 135 },
                { id: "eid1329", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 660, duration: 90 },
                { id: "eid1330", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 800, duration: 80 },
                { id: "eid1331", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 950, duration: 50 },
                { id: "eid1332", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 1000, duration: 85 },
                { id: "eid1333", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 1160, duration: 90 },
                { id: "eid1334", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 1300, duration: 80 },
                { id: "eid1335", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 1450, duration: 135 },
                { id: "eid1336", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 1660, duration: 90 },
                { id: "eid1337", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 1800, duration: 80 },
                { id: "eid1338", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 1950, duration: 50 },
                { id: "eid1339", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 2000, duration: 85 },
                { id: "eid1340", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 2160, duration: 90 },
                { id: "eid1341", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 2300, duration: 80 },
                { id: "eid1342", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 2450, duration: 135 },
                { id: "eid1343", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 2660, duration: 90 },
                { id: "eid1344", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 2800, duration: 80 },
                { id: "eid1345", tween: [ "style", "${_c1a_zahne}", "left", '5px', { fromValue: '3px'}], position: 2950, duration: 50 },
                { id: "eid1436", tween: [ "style", "${_c1a_fuss_r}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1385", tween: [ "transform", "${_c1a_warze_r}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1386", tween: [ "transform", "${_c1a_warze_r}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 500 },
                { id: "eid1387", tween: [ "transform", "${_c1a_warze_r}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid1388", tween: [ "transform", "${_c1a_warze_r}", "scaleX", '1', { fromValue: '1.05'}], position: 1500, duration: 500 },
                { id: "eid1389", tween: [ "transform", "${_c1a_warze_r}", "scaleX", '1.05', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid1390", tween: [ "transform", "${_c1a_warze_r}", "scaleX", '1', { fromValue: '1.05'}], position: 2500, duration: 500 },
                { id: "eid1406", tween: [ "transform", "${_c1a_warze_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1407", tween: [ "transform", "${_c1a_warze_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid1408", tween: [ "transform", "${_c1a_warze_l}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid1382", tween: [ "transform", "${_c1a_warze_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1383", tween: [ "transform", "${_c1a_warze_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid1384", tween: [ "transform", "${_c1a_warze_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid1429", tween: [ "style", "${_c1a_hand_v}", "left", '6px', { fromValue: '3px'}], position: 0, duration: 1000 },
                { id: "eid1430", tween: [ "style", "${_c1a_hand_v}", "left", '-2px', { fromValue: '6px'}], position: 1000, duration: 1000 },
                { id: "eid1431", tween: [ "style", "${_c1a_hand_v}", "left", '3px', { fromValue: '-2px'}], position: 2000, duration: 1000 },
                { id: "eid1445", tween: [ "style", "${_c1a_augen}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1420", tween: [ "transform", "${_c1a_unterarm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1418", tween: [ "style", "${_c1a_unterarm_h}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1376", tween: [ "transform", "${_c1a_warze_r}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1377", tween: [ "transform", "${_c1a_warze_r}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 500 },
                { id: "eid1378", tween: [ "transform", "${_c1a_warze_r}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid1379", tween: [ "transform", "${_c1a_warze_r}", "scaleY", '1', { fromValue: '1.05'}], position: 1500, duration: 500 },
                { id: "eid1380", tween: [ "transform", "${_c1a_warze_r}", "scaleY", '1.05', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid1381", tween: [ "transform", "${_c1a_warze_r}", "scaleY", '1', { fromValue: '1.05'}], position: 2500, duration: 500 },
                { id: "eid1400", tween: [ "transform", "${_c1a_warze_l}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid1401", tween: [ "transform", "${_c1a_warze_l}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 500 },
                { id: "eid1402", tween: [ "transform", "${_c1a_warze_l}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid1403", tween: [ "transform", "${_c1a_warze_l}", "scaleY", '1', { fromValue: '1.05'}], position: 1500, duration: 500 },
                { id: "eid1404", tween: [ "transform", "${_c1a_warze_l}", "scaleY", '1.05', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid1405", tween: [ "transform", "${_c1a_warze_l}", "scaleY", '1', { fromValue: '1.05'}], position: 2500, duration: 500 },
                { id: "eid1446", tween: [ "transform", "${_c1a_augen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1443", tween: [ "transform", "${_c1a_augenrander}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1391", tween: [ "style", "${_c1a_warze_r}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1392", tween: [ "style", "${_c1a_warze_r}", "left", '3px', { fromValue: '3px'}], position: 1000, duration: 0 },
                { id: "eid1393", tween: [ "style", "${_c1a_warze_r}", "left", '3px', { fromValue: '3px'}], position: 2000, duration: 0 },
                { id: "eid1435", tween: [ "style", "${_c1a_fuss_r}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1423", tween: [ "transform", "${_c1a_oberarm_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1425", tween: [ "style", "${_c1a_kopf}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1440", tween: [ "transform", "${_c1a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1422", tween: [ "style", "${_c1a_oberarm_h}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid1437", tween: [ "transform", "${_c1a_fuss_r}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1346", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1347", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 160, duration: 0 },
                { id: "eid1348", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 300, duration: 0 },
                { id: "eid1349", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 450, duration: 0 },
                { id: "eid1350", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 500, duration: 0 },
                { id: "eid1351", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 660, duration: 0 },
                { id: "eid1352", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 800, duration: 0 },
                { id: "eid1353", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 950, duration: 0 },
                { id: "eid1354", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
                { id: "eid1355", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1160, duration: 0 },
                { id: "eid1356", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1300, duration: 0 },
                { id: "eid1357", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1450, duration: 0 },
                { id: "eid1358", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
                { id: "eid1359", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1660, duration: 0 },
                { id: "eid1360", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1800, duration: 0 },
                { id: "eid1361", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1950, duration: 0 },
                { id: "eid1362", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
                { id: "eid1363", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2160, duration: 0 },
                { id: "eid1364", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2300, duration: 0 },
                { id: "eid1365", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2450, duration: 0 },
                { id: "eid1366", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2500, duration: 0 },
                { id: "eid1367", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2660, duration: 0 },
                { id: "eid1368", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2800, duration: 0 },
                { id: "eid1369", tween: [ "transform", "${_c1a_zahne}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2950, duration: 0 },
                { id: "eid1442", tween: [ "style", "${_c1a_augenrander}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1452", tween: [ "transform", "${_c1a_armv}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1453", tween: [ "transform", "${_c1a_armv}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 1000, duration: 1000 },
                { id: "eid1454", tween: [ "transform", "${_c1a_armv}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 2000, duration: 1000 },
                { id: "eid1449", tween: [ "style", "${_c1a_armv}", "left", '6px', { fromValue: '3px'}], position: 0, duration: 1000 },
                { id: "eid1450", tween: [ "style", "${_c1a_armv}", "left", '-2px', { fromValue: '6px'}], position: 1000, duration: 1000 },
                { id: "eid1451", tween: [ "style", "${_c1a_armv}", "left", '3px', { fromValue: '-2px'}], position: 2000, duration: 1000 },
                { id: "eid1394", tween: [ "style", "${_c1a_warze_l}", "top", '-7px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1395", tween: [ "style", "${_c1a_warze_l}", "top", '0px', { fromValue: '-7px'}], position: 500, duration: 500 },
                { id: "eid1396", tween: [ "style", "${_c1a_warze_l}", "top", '-7px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1397", tween: [ "style", "${_c1a_warze_l}", "top", '0px', { fromValue: '-7px'}], position: 1500, duration: 500 },
                { id: "eid1398", tween: [ "style", "${_c1a_warze_l}", "top", '-7px', { fromValue: '0px'}], position: 2000, duration: 500 },
                { id: "eid1399", tween: [ "style", "${_c1a_warze_l}", "top", '0px', { fromValue: '-7px'}], position: 2500, duration: 500 }            ]
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
                    id: 'sym_c1b',
                    type: 'rect',
                    rect: ['-1052px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cheadb_',
                    type: 'image',
                    rect: ['-30714px', '-3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cheadb_2.svg', '0px', '0px']
                },
                {
                    id: 'sym_c1a',
                    type: 'rect',
                    rect: ['-1053px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'cheada_',
                    type: 'image',
                    rect: ['-30714px', '-3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cheada_2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_c1b',
                symbolName: 'sym_c1b',
                autoPlay: {

               }
            },
            {
                id: 'sym_c1a',
                symbolName: 'sym_c1a',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_c1b}": [
                ["style", "left", '1800px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '3851px']
            ],
            "${_cheada_}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_cheadb_}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_c1a}": [
                ["style", "left", '1800px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5425,
            autoPlay: false,
            timeline: [
                { id: "eid1644", tween: [ "style", "${_sym_c1a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1679", tween: [ "style", "${_cheada_}", "left", '-400px', { fromValue: '0px'}], position: 1250, duration: 1750 },
                { id: "eid1645", tween: [ "style", "${_sym_c1b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1680", tween: [ "style", "${_cheadb_}", "left", '-400px', { fromValue: '0px'}], position: 1250, duration: 1750 },
                { id: "eid1654", tween: [ "style", "${_sym_c1b}", "left", '1800px', { fromValue: '1800px'}], position: 0, duration: 0 },
                { id: "eid1676", tween: [ "style", "${_sym_c1b}", "left", '1300px', { fromValue: '1800px'}], position: 3250, duration: 2175 },
                { id: "eid1653", tween: [ "style", "${_sym_c1a}", "left", '1800px', { fromValue: '1800px'}], position: 0, duration: 0 },
                { id: "eid1678", tween: [ "style", "${_sym_c1a}", "left", '1300px', { fromValue: '1800px'}], position: 3250, duration: 2175 },
                { id: "eid1650", tween: [ "style", "${_cheada_}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1647", tween: [ "style", "${_cheadb_}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
            duration: 2500,
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
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "top", '-1364px'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '2048px']
            ],
            "${_welle6}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
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
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1672", tween: [ "style", "${_welle6}", "top", '8px', { fromValue: '0px'}], position: 0, duration: 2500 },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1873", tween: [ "style", "${_welle6}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 2499 },
                { id: "eid1874", tween: [ "style", "${_welle6}", "left", '0px', { fromValue: '-2048px'}], position: 2499, duration: 1, easing: "easeInOutQuad" },
                { id: "eid1867", tween: [ "transform", "${_welle6}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 418, easing: "easeInOutQuad" },
                { id: "eid1868", tween: [ "transform", "${_welle6}", "scaleY", '1', { fromValue: '0.8'}], position: 418, duration: 416, easing: "easeInOutQuad" },
                { id: "eid1869", tween: [ "transform", "${_welle6}", "scaleY", '0.9', { fromValue: '1'}], position: 832, duration: 418, easing: "easeInOutQuad" },
                { id: "eid1870", tween: [ "transform", "${_welle6}", "scaleY", '1', { fromValue: '0.9'}], position: 1250, duration: 418, easing: "easeInOutQuad" },
                { id: "eid1871", tween: [ "transform", "${_welle6}", "scaleY", '0.8', { fromValue: '1'}], position: 1668, duration: 413, easing: "easeInOutQuad" },
                { id: "eid1872", tween: [ "transform", "${_welle6}", "scaleY", '1', { fromValue: '0.8'}], position: 2081, duration: 418, easing: "easeInOutQuad" },
                { id: "eid1671", tween: [ "style", "${_Rectangle2}", "top", '-1356px', { fromValue: '-1364px'}], position: 0, duration: 2500 }            ]
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
