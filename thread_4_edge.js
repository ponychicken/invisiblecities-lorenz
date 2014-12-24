/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '7416', '1536px', 'auto', 'auto'],
                            fill: ["rgba(23,25,40,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'sym_welleframe',
                            symbolName: 'sym_welleframe',
                            type: 'rect',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'sym_all',
                            symbolName: 'sym_all',
                            type: 'rect',
                            rect: ['1590', '0', '4440', '1536', 'auto', 'auto'],
                            overflow: 'hidden'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048', '1536', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1564",
                            "left",
                            0,
                            6750,
                            "linear",
                            "${sym_all}",
                            '1590px',
                            '1090px'
                        ],
                        [
                            "eid1527",
                            "left",
                            0,
                            6750,
                            "linear",
                            "${sym_welleframe}",
                            '0px',
                            '5368px'
                        ]
                    ]
                }
            },
            "sym_b2a": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2a_handflach',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2a_handflach.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2a_finger',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2a_finger.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2a_daumen',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2a_daumen.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2a_handphone',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2a_handphone.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2a_phone',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2a_phone.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "oo_b2a": 0
                    },
                    data: [
                        [
                            "eid1021",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2a_handphone}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1022",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${b2a_handphone}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1019",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2a_handphone}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1020",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${b2a_handphone}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1029",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2a_daumen}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1030",
                            "rotateZ",
                            2250,
                            0,
                            "linear",
                            "${b2a_daumen}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1052",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2a_handflach}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1053",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${b2a_handflach}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1054",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2a_handflach}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1055",
                            "rotateZ",
                            2250,
                            0,
                            "linear",
                            "${b2a_handflach}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1045",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1046",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid1047",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1048",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid1049",
                            "rotateZ",
                            2250,
                            0,
                            "linear",
                            "${b2a_finger}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1027",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2a_daumen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1028",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${b2a_daumen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1036",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid1037",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid1038",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid1039",
                            "scaleY",
                            750,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid1013",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2a_phone}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1014",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${b2a_phone}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1031",
                            "top",
                            0,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0px',
                            '-15px'
                        ],
                        [
                            "eid1032",
                            "top",
                            250,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid1033",
                            "top",
                            500,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0px',
                            '-15px'
                        ],
                        [
                            "eid1034",
                            "top",
                            750,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '-15px',
                            '0px'
                        ],
                        [
                            "eid1035",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${b2a_finger}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1023",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2a_handphone}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1024",
                            "rotateZ",
                            2250,
                            0,
                            "linear",
                            "${b2a_handphone}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1025",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2a_daumen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1026",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${b2a_daumen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1017",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2a_phone}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1018",
                            "rotateZ",
                            2250,
                            0,
                            "linear",
                            "${b2a_phone}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1040",
                            "left",
                            0,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid1041",
                            "left",
                            250,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid1042",
                            "left",
                            500,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid1043",
                            "left",
                            750,
                            250,
                            "linear",
                            "${b2a_finger}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid1044",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${b2a_finger}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1050",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2a_handflach}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1051",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${b2a_handflach}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1015",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2a_phone}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1016",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${b2a_phone}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_bling": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', 100, 100, 'auto', 'auto'],
                            id: 'sym_bling5',
                            symbolName: 'sym_bling5',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
                        },
                        {
                            rect: ['61', '-329', 100, 100, 'auto', 'auto'],
                            id: 'sym_bling4',
                            symbolName: 'sym_bling4',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
                        },
                        {
                            rect: ['-228', '-170', 100, 100, 'auto', 'auto'],
                            id: 'sym_bling3',
                            symbolName: 'sym_bling3',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
                        },
                        {
                            rect: ['-92', '-331', 100, 100, 'auto', 'auto'],
                            id: 'sym_bling2',
                            symbolName: 'sym_bling2',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
                        },
                        {
                            rect: ['-294', '-507', 120, 120, 'auto', 'auto'],
                            id: 'sym_bling1',
                            symbolName: 'sym_bling1',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 100]
                        }
                    }
                },
                timeline: {
                    duration: 1620,
                    autoPlay: true,
                    labels: {
                        "loop_bling": 0
                    },
                    data: [
                        [
                            "eid296",
                            "rotateZ",
                            0,
                            1125,
                            "linear",
                            "${sym_bling5}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid294",
                            "rotateZ",
                            0,
                            1125,
                            "linear",
                            "${sym_bling3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid292",
                            "rotateZ",
                            0,
                            1125,
                            "linear",
                            "${sym_bling1}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid293",
                            "rotateZ",
                            0,
                            1125,
                            "linear",
                            "${sym_bling2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid295",
                            "rotateZ",
                            0,
                            1125,
                            "linear",
                            "${sym_bling4}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "sym_bling3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [25, 50, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling2Copy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [25, 0, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling3Copy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [50, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling2Copy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling3Copy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 100]
                        }
                    }
                },
                timeline: {
                    duration: 1095,
                    autoPlay: true,
                    labels: {
                        "loop_bling3": 395
                    },
                    data: [
                        [
                            "eid238",
                            "left",
                            625,
                            250,
                            "linear",
                            "${b2b_bling3Copy6}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid240",
                            "top",
                            625,
                            250,
                            "linear",
                            "${b2b_bling3Copy7}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid237",
                            "top",
                            625,
                            0,
                            "linear",
                            "${b2b_bling3Copy6}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid241",
                            "top",
                            625,
                            250,
                            "linear",
                            "${b2b_bling2Copy7}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid215",
                            "scaleY",
                            625,
                            250,
                            "linear",
                            "${b2b_bling3Copy6}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid235",
                            "left",
                            625,
                            0,
                            "linear",
                            "${b2b_bling2Copy7}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid275",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${b2b_bling2Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            625,
                            250,
                            "linear",
                            "${b2b_bling2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid216",
                            "scaleX",
                            625,
                            0,
                            "linear",
                            "${b2b_bling3Copy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "left",
                            625,
                            0,
                            "linear",
                            "${b2b_bling3Copy7}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid276",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${b2b_bling3Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            625,
                            250,
                            "linear",
                            "${b2b_bling3Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid277",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${b2b_bling2Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "opacity",
                            625,
                            250,
                            "linear",
                            "${b2b_bling2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid226",
                            "scaleX",
                            625,
                            0,
                            "linear",
                            "${b2b_bling3Copy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid221",
                            "scaleX",
                            625,
                            0,
                            "linear",
                            "${b2b_bling2Copy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${b2b_bling3Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "opacity",
                            625,
                            250,
                            "linear",
                            "${b2b_bling3Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid234",
                            "top",
                            625,
                            0,
                            "linear",
                            "${b2b_bling2Copy6}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            625,
                            0,
                            "linear",
                            "${b2b_bling2Copy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid239",
                            "left",
                            625,
                            250,
                            "linear",
                            "${b2b_bling2Copy6}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid230",
                            "scaleY",
                            625,
                            250,
                            "linear",
                            "${b2b_bling2Copy7}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid225",
                            "scaleY",
                            625,
                            250,
                            "linear",
                            "${b2b_bling3Copy7}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            625,
                            250,
                            "linear",
                            "${b2b_bling2Copy6}",
                            '1',
                            '0.5'
                        ]
                    ]
                }
            },
            "sym_bling4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [25, 50, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling2Copy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [25, 0, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling3Copy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [50, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling2Copy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling3Copy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 100]
                        }
                    }
                },
                timeline: {
                    duration: 1070,
                    autoPlay: true,
                    labels: {
                        "loop_bling4": 0
                    },
                    data: [
                        [
                            "eid206",
                            "top",
                            375,
                            0,
                            "linear",
                            "${b2b_bling2Copy4}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid186",
                            "scaleX",
                            375,
                            0,
                            "linear",
                            "${b2b_bling2Copy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            375,
                            250,
                            "linear",
                            "${b2b_bling2Copy4}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid180",
                            "scaleY",
                            375,
                            250,
                            "linear",
                            "${b2b_bling3Copy4}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid279",
                            "opacity",
                            250,
                            125,
                            "linear",
                            "${b2b_bling3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid192",
                            "opacity",
                            375,
                            250,
                            "linear",
                            "${b2b_bling3Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid208",
                            "left",
                            375,
                            0,
                            "linear",
                            "${b2b_bling3Copy5}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid280",
                            "opacity",
                            250,
                            125,
                            "linear",
                            "${b2b_bling2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "opacity",
                            375,
                            250,
                            "linear",
                            "${b2b_bling2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            375,
                            0,
                            "linear",
                            "${b2b_bling3Copy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid210",
                            "left",
                            375,
                            250,
                            "linear",
                            "${b2b_bling3Copy4}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid207",
                            "left",
                            375,
                            0,
                            "linear",
                            "${b2b_bling2Copy5}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid278",
                            "opacity",
                            250,
                            125,
                            "linear",
                            "${b2b_bling2Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            375,
                            250,
                            "linear",
                            "${b2b_bling2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "top",
                            375,
                            0,
                            "linear",
                            "${b2b_bling3Copy4}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid212",
                            "top",
                            375,
                            250,
                            "linear",
                            "${b2b_bling3Copy5}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid211",
                            "left",
                            375,
                            250,
                            "linear",
                            "${b2b_bling2Copy4}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid195",
                            "scaleY",
                            375,
                            250,
                            "linear",
                            "${b2b_bling2Copy5}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid196",
                            "scaleX",
                            375,
                            0,
                            "linear",
                            "${b2b_bling2Copy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid190",
                            "scaleY",
                            375,
                            250,
                            "linear",
                            "${b2b_bling3Copy5}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid181",
                            "scaleX",
                            375,
                            0,
                            "linear",
                            "${b2b_bling3Copy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid213",
                            "top",
                            375,
                            250,
                            "linear",
                            "${b2b_bling2Copy5}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid281",
                            "opacity",
                            250,
                            125,
                            "linear",
                            "${b2b_bling3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            375,
                            250,
                            "linear",
                            "${b2b_bling3Copy4}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sym_bling2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [25, 50, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling2Copy9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [25, 0, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling3Copy9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [50, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling2Copy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling3Copy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 100]
                        }
                    }
                },
                timeline: {
                    duration: 1420,
                    autoPlay: true,
                    labels: {
                        "loop_bling2": 0
                    },
                    data: [
                        [
                            "eid263",
                            "left",
                            875,
                            0,
                            "linear",
                            "${b2b_bling2Copy9}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid249",
                            "scaleX",
                            875,
                            0,
                            "linear",
                            "${b2b_bling2Copy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid266",
                            "top",
                            875,
                            250,
                            "linear",
                            "${b2b_bling2Copy9}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid270",
                            "opacity",
                            650,
                            225,
                            "linear",
                            "${b2b_bling3Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "opacity",
                            875,
                            250,
                            "linear",
                            "${b2b_bling3Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid265",
                            "top",
                            875,
                            0,
                            "linear",
                            "${b2b_bling3Copy8}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid243",
                            "scaleY",
                            875,
                            250,
                            "linear",
                            "${b2b_bling3Copy8}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid272",
                            "opacity",
                            650,
                            225,
                            "linear",
                            "${b2b_bling3Copy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid255",
                            "opacity",
                            875,
                            250,
                            "linear",
                            "${b2b_bling3Copy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid273",
                            "opacity",
                            650,
                            225,
                            "linear",
                            "${b2b_bling2Copy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid260",
                            "opacity",
                            875,
                            250,
                            "linear",
                            "${b2b_bling2Copy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid262",
                            "top",
                            875,
                            0,
                            "linear",
                            "${b2b_bling2Copy8}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid254",
                            "scaleX",
                            875,
                            0,
                            "linear",
                            "${b2b_bling3Copy9}",
                            '1',
                            '1'
                        ],
                        [
                            "eid264",
                            "left",
                            875,
                            0,
                            "linear",
                            "${b2b_bling3Copy9}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid258",
                            "scaleY",
                            875,
                            250,
                            "linear",
                            "${b2b_bling2Copy9}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid269",
                            "left",
                            875,
                            250,
                            "linear",
                            "${b2b_bling3Copy8}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid267",
                            "top",
                            875,
                            250,
                            "linear",
                            "${b2b_bling3Copy9}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid268",
                            "left",
                            875,
                            250,
                            "linear",
                            "${b2b_bling2Copy8}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            875,
                            250,
                            "linear",
                            "${b2b_bling3Copy9}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid259",
                            "scaleX",
                            875,
                            0,
                            "linear",
                            "${b2b_bling2Copy9}",
                            '1',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            650,
                            225,
                            "linear",
                            "${b2b_bling2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            875,
                            250,
                            "linear",
                            "${b2b_bling2Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid248",
                            "scaleY",
                            875,
                            250,
                            "linear",
                            "${b2b_bling2Copy8}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid244",
                            "scaleX",
                            875,
                            0,
                            "linear",
                            "${b2b_bling3Copy8}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "sym_bling1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [35, 70, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling2Copy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [35, 0, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling3Copy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [70, 35, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling2Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 35, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling3Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 120, 120]
                        }
                    }
                },
                timeline: {
                    duration: 1620,
                    autoPlay: true,
                    labels: {
                        "loop_bling1": 0
                    },
                    data: [
                        [
                            "eid169",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid127",
                            "top",
                            250,
                            250,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid142",
                            "top",
                            500,
                            1120,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid153",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid140",
                            "top",
                            250,
                            1370,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid159",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid171",
                            "left",
                            250,
                            250,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '70px',
                            '80px'
                        ],
                        [
                            "eid172",
                            "left",
                            500,
                            1120,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '80px',
                            '70px'
                        ],
                        [
                            "eid119",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid155",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid173",
                            "left",
                            250,
                            250,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid174",
                            "left",
                            500,
                            1120,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid123",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid166",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid167",
                            "left",
                            250,
                            0,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid168",
                            "left",
                            1620,
                            0,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid170",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid132",
                            "top",
                            250,
                            250,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '70px',
                            '80px'
                        ],
                        [
                            "eid144",
                            "top",
                            500,
                            1120,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '80px',
                            '70px'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid134",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${b2b_bling2Copy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid163",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid164",
                            "left",
                            250,
                            0,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid165",
                            "left",
                            1620,
                            0,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid177",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${b2b_bling3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${b2b_bling3Copy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid154",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid138",
                            "top",
                            250,
                            1370,
                            "linear",
                            "${b2b_bling2Copy2}",
                            '35px',
                            '35px'
                        ]
                    ]
                }
            },
            "sym_bling5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [25, 50, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [25, 0, '50px', '50px', 'auto', 'auto'],
                            id: 'b2b_bling3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [50, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling2Copy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 25, '50px', '50px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'b2b_bling3Copy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_bling4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 100]
                        }
                    }
                },
                timeline: {
                    duration: 850,
                    autoPlay: true,
                    labels: {
                        "loop_bling1": 0
                    },
                    data: [
                        [
                            "eid96",
                            "top",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid65",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3Copy}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid70",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid95",
                            "top",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid97",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid67",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_bling2Copy}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid93",
                            "left",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3Copy}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid94",
                            "left",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2Copy}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2Copy}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid99",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid91",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid98",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${b2b_bling3Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${b2b_bling2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${b2b_bling3Copy}",
                            '1',
                            '0.5'
                        ]
                    ]
                }
            },
            "sym_b2b": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2b_daumenCopy',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_daumen.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2b_fingerCopy',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_finger.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2b_handflachCopy',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_handflach.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2b_handphoneCopy',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_handphone.svg', '0px', '0px']
                        },
                        {
                            rect: [44, 84, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2b_moneyCopy',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_money.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b2b_phoneCopy',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b2b_phone.svg', '0px', '0px']
                        },
                        {
                            rect: [724, 1388, 100, 100, 'auto', 'auto'],
                            id: 'sym_blingCopy',
                            symbolName: 'sym_bling',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2092, 1620]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "oo_b2b": 0
                    },
                    data: [
                        [
                            "eid1113",
                            "top",
                            0,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid1114",
                            "top",
                            250,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '83px',
                            '84px'
                        ],
                        [
                            "eid1115",
                            "top",
                            500,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '84px',
                            '85px'
                        ],
                        [
                            "eid1116",
                            "top",
                            750,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid1117",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid1118",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '83px',
                            '84px'
                        ],
                        [
                            "eid1119",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '84px',
                            '85px'
                        ],
                        [
                            "eid1120",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid1110",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_phoneCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1159",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_fingerCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1160",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b2b_fingerCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1121",
                            "left",
                            0,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '44px',
                            '45px'
                        ],
                        [
                            "eid1122",
                            "left",
                            250,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '45px',
                            '44px'
                        ],
                        [
                            "eid1123",
                            "left",
                            500,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '44px',
                            '43px'
                        ],
                        [
                            "eid1124",
                            "left",
                            750,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '43px',
                            '44px'
                        ],
                        [
                            "eid1125",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '44px',
                            '43px'
                        ],
                        [
                            "eid1126",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '43px',
                            '44px'
                        ],
                        [
                            "eid1127",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '44px',
                            '45px'
                        ],
                        [
                            "eid1128",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${b2b_moneyCopy}",
                            '45px',
                            '44px'
                        ],
                        [
                            "eid1130",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_handphoneCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1129",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2b_moneyCopy}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1157",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_handflachCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1158",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b2b_handflachCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1112",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2b_phoneCopy}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1164",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${sym_blingCopy}",
                            '724px',
                            '724px'
                        ],
                        [
                            "eid1139",
                            "top",
                            0,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid1140",
                            "top",
                            375,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid1141",
                            "top",
                            1000,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid1142",
                            "top",
                            1375,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid1136",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_fingerCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1132",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2b_handphoneCopy}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1165",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_phoneCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1166",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b2b_phoneCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1147",
                            "rotateZ",
                            0,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1148",
                            "rotateZ",
                            375,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid1149",
                            "rotateZ",
                            1000,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1150",
                            "rotateZ",
                            1375,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '-1deg',
                            '0deg'
                        ],
                        [
                            "eid1143",
                            "left",
                            0,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '0px',
                            '-11px'
                        ],
                        [
                            "eid1144",
                            "left",
                            375,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '-11px',
                            '0px'
                        ],
                        [
                            "eid1145",
                            "left",
                            1000,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '0px',
                            '-11px'
                        ],
                        [
                            "eid1146",
                            "left",
                            1375,
                            375,
                            "linear",
                            "${b2b_daumenCopy}",
                            '-11px',
                            '0px'
                        ],
                        [
                            "eid1161",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b2b_daumenCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1162",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b2b_handphoneCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1163",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b2b_handphoneCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1135",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2b_handflachCopy}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1138",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b2b_fingerCopy}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1133",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b2b_handflachCopy}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_b3a": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3a_corpus',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3a_corpus.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3a_decke',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3a_decke.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3a_kissen',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3a_kissen.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3a_kopf',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3a_kopf.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3a_zehen_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3a_zehen_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3a_zehen_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3a_zehen_v.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "oo_b3a": 0
                    },
                    data: [
                        [
                            "eid1214",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3a_corpus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1211",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3a_decke}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1209",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3a_kissen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1182",
                            "left",
                            0,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid1183",
                            "left",
                            500,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid1184",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid1185",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid1212",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3a_decke}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1210",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3a_kissen}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1208",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3a_kissen}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1202",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${b3a_kopf}",
                            '0px',
                            '21px'
                        ],
                        [
                            "eid1203",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${b3a_kopf}",
                            '21px',
                            '0px'
                        ],
                        [
                            "eid1194",
                            "left",
                            0,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1195",
                            "left",
                            500,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '-4px',
                            '0px'
                        ],
                        [
                            "eid1196",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1197",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '-4px',
                            '0px'
                        ],
                        [
                            "eid1213",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3a_decke}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1190",
                            "top",
                            0,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '0px',
                            '-35px'
                        ],
                        [
                            "eid1191",
                            "top",
                            500,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '-35px',
                            '0px'
                        ],
                        [
                            "eid1192",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '0px',
                            '-35px'
                        ],
                        [
                            "eid1193",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '-35px',
                            '0px'
                        ],
                        [
                            "eid1204",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3a_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1205",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b3a_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1198",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '0deg',
                            '3deg'
                        ],
                        [
                            "eid1199",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid1200",
                            "rotateZ",
                            1000,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '0deg',
                            '3deg'
                        ],
                        [
                            "eid1201",
                            "rotateZ",
                            1500,
                            500,
                            "linear",
                            "${b3a_zehen_h}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid1186",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '0deg',
                            '3deg'
                        ],
                        [
                            "eid1187",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid1188",
                            "rotateZ",
                            1000,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '0deg',
                            '3deg'
                        ],
                        [
                            "eid1189",
                            "rotateZ",
                            1500,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid1206",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${b3a_kopf}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid1207",
                            "rotateZ",
                            1000,
                            1000,
                            "linear",
                            "${b3a_kopf}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid1216",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3a_corpus}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1178",
                            "top",
                            0,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '0px',
                            '-26px'
                        ],
                        [
                            "eid1179",
                            "top",
                            500,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '-26px',
                            '0px'
                        ],
                        [
                            "eid1180",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '0px',
                            '-26px'
                        ],
                        [
                            "eid1181",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${b3a_zehen_v}",
                            '-26px',
                            '0px'
                        ],
                        [
                            "eid1215",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3a_corpus}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_b3b": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_corpusm',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_corpusm.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_decke',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_decke.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_frau',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_frau.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_fussm_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_fussm_h.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_fussm_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_fussm_v.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_kissen',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_kissen.svg', '0px', '0px']
                        },
                        {
                            rect: [26, 35, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_oberarmm',
                            transform: [[0, 0, 0], ['2', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_oberarmm.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 41, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_unterarmm',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_unterarmm.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_zehen_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_zehen_h.svg', '0px', '0px']
                        },
                        {
                            rect: [14, 21, '2048px', '1536px', 'auto', 'auto'],
                            id: 'b3b_zehen_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/b3b_zehen_v.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2100, 1607]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "oo_b3b": 0
                    },
                    data: [
                        [
                            "eid1250",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_corpusm}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1217",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_zehen_v}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1247",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_decke}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1236",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_kissen}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1251",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_corpusm}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1235",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_kissen}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1233",
                            "rotateZ",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${b3b_oberarmm}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid1234",
                            "rotateZ",
                            1750,
                            1750,
                            "easeInOutQuad",
                            "${b3b_oberarmm}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid1241",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_fussm_h}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1221",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_zehen_h}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1222",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_zehen_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1220",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_zehen_h}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1239",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_fussm_v}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1227",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_unterarmm}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1228",
                            "rotateZ",
                            3500,
                            0,
                            "linear",
                            "${b3b_unterarmm}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1238",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_fussm_v}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1229",
                            "top",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${b3b_oberarmm}",
                            '35px',
                            '21px'
                        ],
                        [
                            "eid1230",
                            "top",
                            1750,
                            1750,
                            "easeInOutQuad",
                            "${b3b_oberarmm}",
                            '21px',
                            '35px'
                        ],
                        [
                            "eid1223",
                            "top",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${b3b_unterarmm}",
                            '41px',
                            '21px'
                        ],
                        [
                            "eid1224",
                            "top",
                            1750,
                            1750,
                            "easeInOutQuad",
                            "${b3b_unterarmm}",
                            '21px',
                            '41px'
                        ],
                        [
                            "eid1243",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_fussm_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1252",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_corpusm}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1245",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_frau}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1225",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_unterarmm}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1226",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${b3b_unterarmm}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1219",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_zehen_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1218",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_zehen_v}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1242",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_fussm_h}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1240",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_fussm_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1231",
                            "left",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${b3b_oberarmm}",
                            '26px',
                            '14px'
                        ],
                        [
                            "eid1232",
                            "left",
                            1750,
                            1750,
                            "easeInOutQuad",
                            "${b3b_oberarmm}",
                            '14px',
                            '26px'
                        ],
                        [
                            "eid1244",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b3b_frau}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid1249",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_decke}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1248",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b3b_decke}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1237",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_kissen}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1246",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${b3b_frau}",
                            '0deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "sym_all": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_b2a',
                            symbolName: 'sym_b2a',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 2092, 1620, 'auto', 'auto'],
                            id: 'sym_b2b',
                            symbolName: 'sym_b2b',
                            type: 'rect'
                        },
                        {
                            rect: [2340, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_b3a',
                            symbolName: 'sym_b3a',
                            type: 'rect'
                        },
                        {
                            rect: [2340, 0, 2100, 1607, 'auto', 'auto'],
                            id: 'sym_b3b',
                            symbolName: 'sym_b3b',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 4440, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 6750,
                    autoPlay: false,
                    data: [
                        [
                            "eid1524",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_b3b}",
                            '2340px',
                            '2340px'
                        ],
                        [
                            "eid1559",
                            "left",
                            4500,
                            1750,
                            "linear",
                            "${sym_b3b}",
                            '2340px',
                            '1840px'
                        ],
                        [
                            "eid1522",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_b2b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1561",
                            "left",
                            1750,
                            2045,
                            "linear",
                            "${sym_b2b}",
                            '0px',
                            '-500px'
                        ],
                        [
                            "eid1513",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_b3a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1521",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_b2a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1552",
                            "left",
                            1750,
                            2045,
                            "linear",
                            "${sym_b2a}",
                            '0px',
                            '-500px'
                        ],
                        [
                            "eid1523",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_b3a}",
                            '2340px',
                            '2340px'
                        ],
                        [
                            "eid1557",
                            "left",
                            4500,
                            1750,
                            "linear",
                            "${sym_b3a}",
                            '2340px',
                            '1840px'
                        ],
                        [
                            "eid1514",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_b2b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1517",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_b3b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1548",
                            "top",
                            6750,
                            0,
                            "linear",
                            "${sym_b3b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1515",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_b2a}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_welleframe": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 2048, 1536, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'sym_welle_2',
                            symbolName: 'sym_welle_2',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_welle_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [0, -1345, 2048, '1536px', 'auto', 'auto'],
                            fill: ['rgba(255,0,80,1.00)']
                        },
                        {
                            rect: [0, 19, '4096px', '950px', 'auto', 'auto'],
                            id: 'welle4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/welle4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "loop_welle": 0
                    },
                    data: [
                        [
                            "eid1546",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-1345px',
                            '-1345px'
                        ],
                        [
                            "eid1536",
                            "left",
                            0,
                            2749,
                            "linear",
                            "${welle4}",
                            '0px',
                            '-2048px'
                        ],
                        [
                            "eid1537",
                            "left",
                            2749,
                            1,
                            "easeInOutQuad",
                            "${welle4}",
                            '-2048px',
                            '0px'
                        ],
                        [
                            "eid1530",
                            "scaleY",
                            0,
                            460,
                            "easeInOutQuad",
                            "${welle4}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1531",
                            "scaleY",
                            460,
                            455,
                            "easeInOutQuad",
                            "${welle4}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1532",
                            "scaleY",
                            915,
                            460,
                            "easeInOutQuad",
                            "${welle4}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1533",
                            "scaleY",
                            1375,
                            460,
                            "easeInOutQuad",
                            "${welle4}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1534",
                            "scaleY",
                            1835,
                            454,
                            "easeInOutQuad",
                            "${welle4}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1535",
                            "scaleY",
                            2289,
                            460,
                            "easeInOutQuad",
                            "${welle4}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1462",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1547",
                            "top",
                            0,
                            0,
                            "linear",
                            "${welle4}",
                            '19px',
                            '19px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("thread_4_edgeActions.js");
})("EDGE-5245403");
