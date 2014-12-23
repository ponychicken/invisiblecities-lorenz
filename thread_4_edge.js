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
                rect: ['0px', '0px','7416px','1536px','auto', 'auto'],
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
                rect: ['1590', '0','auto','auto','auto', 'auto']
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
                ["style", "left", '1590px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '2048px'],
                ["style", "height", '1536px'],
                ["style", "overflow", 'auto']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '7416px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6750,
            autoPlay: false,
            timeline: [
                { id: "eid1564", tween: [ "style", "${_sym_all}", "left", '1090px', { fromValue: '1590px'}], position: 0, duration: 6750 },
                { id: "eid1527", tween: [ "style", "${_sym_welleframe}", "left", '5368px', { fromValue: '0px'}], position: 0, duration: 6750 }            ]
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
            duration: 2250,
            autoPlay: true,
            labels: {
                "oo_b2a": 0
            },
            timeline: [
                { id: "eid1052", tween: [ "style", "${_b2a_handflach}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1053", tween: [ "style", "${_b2a_handflach}", "left", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1031", tween: [ "style", "${_b2a_finger}", "top", '-15px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid1032", tween: [ "style", "${_b2a_finger}", "top", '0px', { fromValue: '-15px'}], position: 250, duration: 250 },
                { id: "eid1033", tween: [ "style", "${_b2a_finger}", "top", '-15px', { fromValue: '0px'}], position: 500, duration: 250 },
                { id: "eid1034", tween: [ "style", "${_b2a_finger}", "top", '0px', { fromValue: '-15px'}], position: 750, duration: 250 },
                { id: "eid1035", tween: [ "style", "${_b2a_finger}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1036", tween: [ "transform", "${_b2a_finger}", "scaleY", '0.95', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid1037", tween: [ "transform", "${_b2a_finger}", "scaleY", '1', { fromValue: '0.95'}], position: 250, duration: 250 },
                { id: "eid1038", tween: [ "transform", "${_b2a_finger}", "scaleY", '0.95', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid1039", tween: [ "transform", "${_b2a_finger}", "scaleY", '1', { fromValue: '0.95'}], position: 750, duration: 250 },
                { id: "eid1029", tween: [ "transform", "${_b2a_daumen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1030", tween: [ "transform", "${_b2a_daumen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2250, duration: 0 },
                { id: "eid1027", tween: [ "style", "${_b2a_daumen}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1028", tween: [ "style", "${_b2a_daumen}", "left", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1015", tween: [ "style", "${_b2a_phone}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1016", tween: [ "style", "${_b2a_phone}", "left", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1023", tween: [ "transform", "${_b2a_handphone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1024", tween: [ "transform", "${_b2a_handphone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2250, duration: 0 },
                { id: "eid1017", tween: [ "transform", "${_b2a_phone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1018", tween: [ "transform", "${_b2a_phone}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2250, duration: 0 },
                { id: "eid1040", tween: [ "style", "${_b2a_finger}", "left", '2px', { fromValue: '0px'}], position: 0, duration: 250 },
                { id: "eid1041", tween: [ "style", "${_b2a_finger}", "left", '0px', { fromValue: '2px'}], position: 250, duration: 250 },
                { id: "eid1042", tween: [ "style", "${_b2a_finger}", "left", '2px', { fromValue: '0px'}], position: 500, duration: 250 },
                { id: "eid1043", tween: [ "style", "${_b2a_finger}", "left", '0px', { fromValue: '2px'}], position: 750, duration: 250 },
                { id: "eid1044", tween: [ "style", "${_b2a_finger}", "left", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1050", tween: [ "style", "${_b2a_handflach}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1051", tween: [ "style", "${_b2a_handflach}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1045", tween: [ "transform", "${_b2a_finger}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid1046", tween: [ "transform", "${_b2a_finger}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 250, duration: 250 },
                { id: "eid1047", tween: [ "transform", "${_b2a_finger}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 500, duration: 250 },
                { id: "eid1048", tween: [ "transform", "${_b2a_finger}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 750, duration: 250 },
                { id: "eid1049", tween: [ "transform", "${_b2a_finger}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2250, duration: 0 },
                { id: "eid1013", tween: [ "style", "${_b2a_phone}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1014", tween: [ "style", "${_b2a_phone}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1054", tween: [ "transform", "${_b2a_handflach}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1055", tween: [ "transform", "${_b2a_handflach}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2250, duration: 0 },
                { id: "eid1019", tween: [ "style", "${_b2a_handphone}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1020", tween: [ "style", "${_b2a_handphone}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1025", tween: [ "style", "${_b2a_daumen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_b2a_daumen}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1021", tween: [ "style", "${_b2a_handphone}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1022", tween: [ "style", "${_b2a_handphone}", "left", '0px', { fromValue: '0px'}], position: 2250, duration: 0 }            ]
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
            "${_sym_bling3}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ],
            "${_sym_bling1}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_bling2}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_bling5}": [
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
                    type: 'image',
                    id: 'b2b_bling2Copy6',
                    rect: ['278px', '195px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b2b_bling3Copy6',
                    rect: ['228px', '195px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_b2b_bling2Copy6}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '50px']
            ],
            "${_b2b_bling3Copy6}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_b2b_bling2Copy7}": [
                ["style", "top", '50px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '25px']
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
                { id: "eid216", tween: [ "transform", "${_b2b_bling3Copy6}", "scaleX", '1', { fromValue: '1'}], position: 625, duration: 0 },
                { id: "eid239", tween: [ "style", "${_b2b_bling2Copy6}", "left", '60px', { fromValue: '50px'}], position: 625, duration: 250 },
                { id: "eid231", tween: [ "transform", "${_b2b_bling2Copy7}", "scaleX", '1', { fromValue: '1'}], position: 625, duration: 0 },
                { id: "eid240", tween: [ "style", "${_b2b_bling3Copy7}", "top", '-10px', { fromValue: '0px'}], position: 625, duration: 250 },
                { id: "eid215", tween: [ "transform", "${_b2b_bling3Copy6}", "scaleY", '0.5', { fromValue: '1'}], position: 625, duration: 250 },
                { id: "eid277", tween: [ "style", "${_b2b_bling2Copy7}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 125 },
                { id: "eid232", tween: [ "style", "${_b2b_bling2Copy7}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 250 },
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
                { id: "eid234", tween: [ "style", "${_b2b_bling2Copy6}", "top", '25px', { fromValue: '25px'}], position: 625, duration: 0 },
                { id: "eid226", tween: [ "transform", "${_b2b_bling3Copy7}", "scaleX", '1', { fromValue: '1'}], position: 625, duration: 0 }            ]
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
                    type: 'image',
                    id: 'b2b_bling2Copy4',
                    rect: ['-11px', '354px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b2b_bling3Copy4',
                    rect: ['-61px', '354px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
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
                { id: "eid191", tween: [ "transform", "${_b2b_bling3Copy5}", "scaleX", '1', { fromValue: '1'}], position: 375, duration: 0 },
                { id: "eid208", tween: [ "style", "${_b2b_bling3Copy5}", "left", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
                { id: "eid196", tween: [ "transform", "${_b2b_bling2Copy5}", "scaleX", '1', { fromValue: '1'}], position: 375, duration: 0 },
                { id: "eid278", tween: [ "style", "${_b2b_bling2Copy5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 125 },
                { id: "eid197", tween: [ "style", "${_b2b_bling2Copy5}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid207", tween: [ "style", "${_b2b_bling2Copy5}", "left", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
                { id: "eid180", tween: [ "transform", "${_b2b_bling3Copy4}", "scaleY", '0.5', { fromValue: '1'}], position: 375, duration: 250 },
                { id: "eid213", tween: [ "style", "${_b2b_bling2Copy5}", "top", '60px', { fromValue: '50px'}], position: 375, duration: 250 },
                { id: "eid205", tween: [ "style", "${_b2b_bling3Copy4}", "top", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
                { id: "eid186", tween: [ "transform", "${_b2b_bling2Copy4}", "scaleX", '1', { fromValue: '1'}], position: 375, duration: 0 },
                { id: "eid206", tween: [ "style", "${_b2b_bling2Copy4}", "top", '25px', { fromValue: '25px'}], position: 375, duration: 0 },
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
                    type: 'image',
                    id: 'b2b_bling2Copy8',
                    rect: ['142px', '356px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b2b_bling3Copy8',
                    rect: ['92px', '356px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
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
                { id: "eid269", tween: [ "style", "${_b2b_bling3Copy8}", "left", '-10px', { fromValue: '0px'}], position: 875, duration: 250 },
                { id: "eid259", tween: [ "transform", "${_b2b_bling2Copy9}", "scaleX", '1', { fromValue: '1'}], position: 875, duration: 0 },
                { id: "eid265", tween: [ "style", "${_b2b_bling3Copy8}", "top", '25px', { fromValue: '25px'}], position: 875, duration: 0 },
                { id: "eid271", tween: [ "style", "${_b2b_bling2Copy8}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 225 },
                { id: "eid250", tween: [ "style", "${_b2b_bling2Copy8}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid243", tween: [ "transform", "${_b2b_bling3Copy8}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid268", tween: [ "style", "${_b2b_bling2Copy8}", "left", '60px', { fromValue: '50px'}], position: 875, duration: 250 },
                { id: "eid249", tween: [ "transform", "${_b2b_bling2Copy8}", "scaleX", '1', { fromValue: '1'}], position: 875, duration: 0 },
                { id: "eid270", tween: [ "style", "${_b2b_bling3Copy8}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 225 },
                { id: "eid245", tween: [ "style", "${_b2b_bling3Copy8}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid244", tween: [ "transform", "${_b2b_bling3Copy8}", "scaleX", '1', { fromValue: '1'}], position: 875, duration: 0 },
                { id: "eid262", tween: [ "style", "${_b2b_bling2Copy8}", "top", '25px', { fromValue: '25px'}], position: 875, duration: 0 },
                { id: "eid248", tween: [ "transform", "${_b2b_bling2Copy8}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid266", tween: [ "style", "${_b2b_bling2Copy9}", "top", '60px', { fromValue: '50px'}], position: 875, duration: 250 },
                { id: "eid253", tween: [ "transform", "${_b2b_bling3Copy9}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid272", tween: [ "style", "${_b2b_bling3Copy9}", "opacity", '1', { fromValue: '0'}], position: 650, duration: 225 },
                { id: "eid255", tween: [ "style", "${_b2b_bling3Copy9}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 250 },
                { id: "eid267", tween: [ "style", "${_b2b_bling3Copy9}", "top", '-10px', { fromValue: '0px'}], position: 875, duration: 250 },
                { id: "eid258", tween: [ "transform", "${_b2b_bling2Copy9}", "scaleY", '0.5', { fromValue: '1'}], position: 875, duration: 250 },
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
                    type: 'image',
                    id: 'b2b_bling2Copy2',
                    rect: ['344px', '532px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b2b_bling3Copy2',
                    rect: ['294px', '532px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
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
                { id: "eid177", tween: [ "style", "${_b2b_bling3Copy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid120", tween: [ "style", "${_b2b_bling3Copy2}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid154", tween: [ "style", "${_b2b_bling2Copy2}", "top", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid138", tween: [ "style", "${_b2b_bling2Copy2}", "top", '35px', { fromValue: '35px'}], position: 250, duration: 1370 },
                { id: "eid119", tween: [ "transform", "${_b2b_bling3Copy2}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid170", tween: [ "style", "${_b2b_bling2Copy3}", "top", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
                { id: "eid132", tween: [ "style", "${_b2b_bling2Copy3}", "top", '80px', { fromValue: '70px'}], position: 250, duration: 250 },
                { id: "eid144", tween: [ "style", "${_b2b_bling2Copy3}", "top", '70px', { fromValue: '80px'}], position: 500, duration: 1120 },
                { id: "eid134", tween: [ "transform", "${_b2b_bling2Copy3}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid118", tween: [ "transform", "${_b2b_bling3Copy2}", "scaleY", '0.5', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid133", tween: [ "transform", "${_b2b_bling2Copy3}", "scaleY", '0.5', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid124", tween: [ "transform", "${_b2b_bling2Copy2}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
                { id: "eid153", tween: [ "style", "${_b2b_bling3Copy2}", "top", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${_b2b_bling3Copy2}", "top", '35px', { fromValue: '35px'}], position: 250, duration: 1370 },
                { id: "eid129", tween: [ "transform", "${_b2b_bling3Copy3}", "scaleX", '1', { fromValue: '1'}], position: 250, duration: 0 },
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
                { id: "eid166", tween: [ "style", "${_b2b_bling2Copy3}", "left", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_b2b_bling2Copy3}", "left", '35px', { fromValue: '35px'}], position: 250, duration: 0 },
                { id: "eid168", tween: [ "style", "${_b2b_bling2Copy3}", "left", '35px', { fromValue: '35px'}], position: 1620, duration: 0 },
                { id: "eid178", tween: [ "style", "${_b2b_bling2Copy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid135", tween: [ "style", "${_b2b_bling2Copy3}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid123", tween: [ "transform", "${_b2b_bling2Copy2}", "scaleY", '0.5', { fromValue: '1'}], position: 250, duration: 250 },
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
                    type: 'image',
                    id: 'b2b_bling2Copy',
                    rect: ['50px', '25px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'b2b_bling3Copy',
                    rect: ['0px', '25px', '50px', '50px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
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
                { id: "eid90", tween: [ "transform", "${_b2b_bling3}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid98", tween: [ "style", "${_b2b_bling2Copy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid99", tween: [ "style", "${_b2b_bling3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid74", tween: [ "transform", "${_b2b_bling3}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_b2b_bling2}", "top", '60px', { fromValue: '50px'}], position: 0, duration: 250 },
                { id: "eid73", tween: [ "transform", "${_b2b_bling2Copy}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "transform", "${_b2b_bling2}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid72", tween: [ "transform", "${_b2b_bling3Copy}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_b2b_bling3Copy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid68", tween: [ "style", "${_b2b_bling3}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "transform", "${_b2b_bling3Copy}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid87", tween: [ "transform", "${_b2b_bling2Copy}", "scaleY", '0.5', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid65", tween: [ "style", "${_b2b_bling3Copy}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
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
                symbolName: 'sym_bling',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_b2b_phoneCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sym_blingCopy}": [
                ["style", "top", '1388px'],
                ["style", "left", '724px']
            ],
            "${_b2b_handflachCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
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
            autoPlay: true,
            labels: {
                "oo_b2b": 0
            },
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
            "${_b3a_kissen}": [
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
            "${_b3a_kopf}": [
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
            autoPlay: true,
            labels: {
                "oo_b3a": 0
            },
            timeline: [
                { id: "eid1186", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid1187", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 500, duration: 500 },
                { id: "eid1188", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid1189", tween: [ "transform", "${_b3a_zehen_v}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1500, duration: 500 },
                { id: "eid1213", tween: [ "transform", "${_b3a_decke}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1178", tween: [ "style", "${_b3a_zehen_v}", "top", '-26px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1179", tween: [ "style", "${_b3a_zehen_v}", "top", '0px', { fromValue: '-26px'}], position: 500, duration: 500 },
                { id: "eid1180", tween: [ "style", "${_b3a_zehen_v}", "top", '-26px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1181", tween: [ "style", "${_b3a_zehen_v}", "top", '0px', { fromValue: '-26px'}], position: 1500, duration: 500 },
                { id: "eid1216", tween: [ "transform", "${_b3a_corpus}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1190", tween: [ "style", "${_b3a_zehen_h}", "top", '-35px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1191", tween: [ "style", "${_b3a_zehen_h}", "top", '0px', { fromValue: '-35px'}], position: 500, duration: 500 },
                { id: "eid1192", tween: [ "style", "${_b3a_zehen_h}", "top", '-35px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1193", tween: [ "style", "${_b3a_zehen_h}", "top", '0px', { fromValue: '-35px'}], position: 1500, duration: 500 },
                { id: "eid1202", tween: [ "style", "${_b3a_kopf}", "top", '21px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid1203", tween: [ "style", "${_b3a_kopf}", "top", '0px', { fromValue: '21px'}], position: 1000, duration: 1000 },
                { id: "eid1194", tween: [ "style", "${_b3a_zehen_h}", "left", '-4px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1195", tween: [ "style", "${_b3a_zehen_h}", "left", '0px', { fromValue: '-4px'}], position: 500, duration: 500 },
                { id: "eid1196", tween: [ "style", "${_b3a_zehen_h}", "left", '-4px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1197", tween: [ "style", "${_b3a_zehen_h}", "left", '0px', { fromValue: '-4px'}], position: 1500, duration: 500 },
                { id: "eid1209", tween: [ "style", "${_b3a_kissen}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1208", tween: [ "style", "${_b3a_kissen}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1206", tween: [ "transform", "${_b3a_kopf}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid1207", tween: [ "transform", "${_b3a_kopf}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 1000, duration: 1000 },
                { id: "eid1210", tween: [ "transform", "${_b3a_kissen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1204", tween: [ "style", "${_b3a_kopf}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1205", tween: [ "style", "${_b3a_kopf}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid1211", tween: [ "style", "${_b3a_decke}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_b3a_corpus}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1215", tween: [ "style", "${_b3a_corpus}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1212", tween: [ "style", "${_b3a_decke}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1198", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 500 },
                { id: "eid1199", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 500, duration: 500 },
                { id: "eid1200", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
                { id: "eid1201", tween: [ "transform", "${_b3a_zehen_h}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1500, duration: 500 },
                { id: "eid1182", tween: [ "style", "${_b3a_zehen_v}", "left", '6px', { fromValue: '0px'}], position: 0, duration: 500 },
                { id: "eid1183", tween: [ "style", "${_b3a_zehen_v}", "left", '0px', { fromValue: '6px'}], position: 500, duration: 500 },
                { id: "eid1184", tween: [ "style", "${_b3a_zehen_v}", "left", '6px', { fromValue: '0px'}], position: 1000, duration: 500 },
                { id: "eid1185", tween: [ "style", "${_b3a_zehen_v}", "left", '0px', { fromValue: '6px'}], position: 1500, duration: 500 }            ]
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
            "${symbolSelector}": [
                ["style", "height", '1607px'],
                ["style", "width", '2100px']
            ],
            "${_b3b_zehen_v}": [
                ["style", "top", '21px'],
                ["style", "left", '14px'],
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
                "oo_b3b": 0
            },
            timeline: [
                { id: "eid1244", tween: [ "style", "${_b3b_frau}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_b3b_fussm_h}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1223", tween: [ "style", "${_b3b_unterarmm}", "top", '21px', { fromValue: '41px'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid1224", tween: [ "style", "${_b3b_unterarmm}", "top", '41px', { fromValue: '21px'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid1222", tween: [ "transform", "${_b3b_zehen_h}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1227", tween: [ "transform", "${_b3b_unterarmm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1228", tween: [ "transform", "${_b3b_unterarmm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_b3b_decke}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1240", tween: [ "transform", "${_b3b_fussm_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1246", tween: [ "transform", "${_b3b_frau}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1218", tween: [ "style", "${_b3b_zehen_v}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1239", tween: [ "style", "${_b3b_fussm_v}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1219", tween: [ "transform", "${_b3b_zehen_v}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1249", tween: [ "transform", "${_b3b_decke}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1237", tween: [ "transform", "${_b3b_kissen}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1250", tween: [ "style", "${_b3b_corpusm}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1235", tween: [ "style", "${_b3b_kissen}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1233", tween: [ "transform", "${_b3b_oberarmm}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid1234", tween: [ "transform", "${_b3b_oberarmm}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 1750, duration: 1750, easing: "easeInOutQuad" },
                { id: "eid1247", tween: [ "style", "${_b3b_decke}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
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
                { id: "eid1221", tween: [ "style", "${_b3b_zehen_h}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1241", tween: [ "style", "${_b3b_fussm_h}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
                { id: "eid1236", tween: [ "style", "${_b3b_kissen}", "left", '14px', { fromValue: '14px'}], position: 0, duration: 0 },
                { id: "eid1217", tween: [ "style", "${_b3b_zehen_v}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 }            ]
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
                    id: 'sym_b2a',
                    type: 'rect',
                    rect: ['-1590px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_b2b',
                    type: 'rect',
                    rect: ['-1590px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_b3a',
                    type: 'rect',
                    rect: ['-1590px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_b3b',
                    type: 'rect',
                    rect: ['-1604px', '-21px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_b3a',
                symbolName: 'sym_b3a',
                autoPlay: {

               }
            },
            {
                id: 'sym_b3b',
                symbolName: 'sym_b3b',
                autoPlay: {

               }
            },
            {
                id: 'sym_b2a',
                symbolName: 'sym_b2a',
                autoPlay: {

               }
            },
            {
                id: 'sym_b2b',
                symbolName: 'sym_b2b',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '4440px']
            ],
            "${_sym_b2b}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_b3a}": [
                ["style", "left", '2340px'],
                ["style", "top", '0px']
            ],
            "${_sym_b3b}": [
                ["style", "left", '2340px'],
                ["style", "top", '0px']
            ],
            "${_sym_b2a}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6750,
            autoPlay: false,
            timeline: [
                { id: "eid1513", tween: [ "style", "${_sym_b3a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1515", tween: [ "style", "${_sym_b2a}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1517", tween: [ "style", "${_sym_b3b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1548", tween: [ "style", "${_sym_b3b}", "top", '0px', { fromValue: '0px'}], position: 6750, duration: 0 },
                { id: "eid1523", tween: [ "style", "${_sym_b3a}", "left", '2340px', { fromValue: '2340px'}], position: 0, duration: 0 },
                { id: "eid1557", tween: [ "style", "${_sym_b3a}", "left", '1840px', { fromValue: '2340px'}], position: 4500, duration: 1750 },
                { id: "eid1521", tween: [ "style", "${_sym_b2a}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1552", tween: [ "style", "${_sym_b2a}", "left", '-500px', { fromValue: '0px'}], position: 1750, duration: 2045 },
                { id: "eid1522", tween: [ "style", "${_sym_b2b}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1561", tween: [ "style", "${_sym_b2b}", "left", '-500px', { fromValue: '0px'}], position: 1750, duration: 2045 },
                { id: "eid1514", tween: [ "style", "${_sym_b2b}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1524", tween: [ "style", "${_sym_b3b}", "left", '2340px', { fromValue: '2340px'}], position: 0, duration: 0 },
                { id: "eid1559", tween: [ "style", "${_sym_b3b}", "left", '1840px', { fromValue: '2340px'}], position: 4500, duration: 1750 }            ]
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
            duration: 2750,
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
                    rect: ['0px', '-1364px', '2048px', '1536px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,80,1.00)']
                },
                {
                    id: 'welle4',
                    type: 'image',
                    rect: ['0', '0', '4096px', '950px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_welle4}": [
                ["style", "top", '19px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "top", '-1345px'],
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
            duration: 2750,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1530", tween: [ "transform", "${_welle4}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 460, easing: "easeInOutQuad" },
                { id: "eid1531", tween: [ "transform", "${_welle4}", "scaleY", '1', { fromValue: '0.8'}], position: 460, duration: 455, easing: "easeInOutQuad" },
                { id: "eid1532", tween: [ "transform", "${_welle4}", "scaleY", '0.9', { fromValue: '1'}], position: 915, duration: 460, easing: "easeInOutQuad" },
                { id: "eid1533", tween: [ "transform", "${_welle4}", "scaleY", '1', { fromValue: '0.9'}], position: 1375, duration: 460, easing: "easeInOutQuad" },
                { id: "eid1534", tween: [ "transform", "${_welle4}", "scaleY", '0.8', { fromValue: '1'}], position: 1835, duration: 454, easing: "easeInOutQuad" },
                { id: "eid1535", tween: [ "transform", "${_welle4}", "scaleY", '1', { fromValue: '0.8'}], position: 2289, duration: 460, easing: "easeInOutQuad" },
                { id: "eid1536", tween: [ "style", "${_welle4}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 2749 },
                { id: "eid1537", tween: [ "style", "${_welle4}", "left", '0px', { fromValue: '-2048px'}], position: 2749, duration: 1, easing: "easeInOutQuad" },
                { id: "eid1547", tween: [ "style", "${_welle4}", "top", '19px', { fromValue: '19px'}], position: 0, duration: 0 },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1546", tween: [ "style", "${_Rectangle2}", "top", '-1345px', { fromValue: '-1345px'}], position: 0, duration: 0 }            ]
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
