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
                            rect: ['0px', '0px', '6819', '1536px', 'auto', 'auto'],
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
                            rect: ['0', '0', '6144', '1536', 'auto', 'auto'],
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
                    duration: 6000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1621",
                            "left",
                            0,
                            6000,
                            "linear",
                            "${sym_all}",
                            '0px',
                            '-500px'
                        ],
                        [
                            "eid1466",
                            "left",
                            0,
                            6000,
                            "linear",
                            "${sym_welleframe}",
                            '0px',
                            '4771px'
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
                            type: 'image',
                            id: 'titela',
                            rect: [0, 4, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/titela.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'titelb',
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/titelb.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atxta_3',
                            rect: [2078, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atxta_3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atxta_2',
                            rect: [2148, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atxta_2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atxtb_3',
                            rect: [2074, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atxtb_3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atxta_1',
                            rect: [2068, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atxta_1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atxtb_2',
                            rect: [2058, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atxtb_2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atxtb_1',
                            rect: [2048, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atxtb_1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'aheada_1',
                            rect: [4096, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aheada_1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'aheada_2',
                            rect: [4096, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aheada_2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'aheadb_1',
                            rect: [4096, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aheadb_1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'aheadb_2',
                            rect: [4096, 0, '2048px', '1536px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aheadb_2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 6144, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1591",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${aheada_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1589",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${aheada_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1587",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${aheadb_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1577",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${atxtb_1}",
                            '2048px',
                            '1648px'
                        ],
                        [
                            "eid1536",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${atxta_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1606",
                            "left",
                            5000,
                            750,
                            "linear",
                            "${aheadb_1}",
                            '4096px',
                            '3796px'
                        ],
                        [
                            "eid1607",
                            "left",
                            5000,
                            750,
                            "linear",
                            "${aheada_2}",
                            '4096px',
                            '3896px'
                        ],
                        [
                            "eid1573",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${atxta_2}",
                            '2148px',
                            '1948px'
                        ],
                        [
                            "eid1362",
                            "left",
                            0,
                            0,
                            "linear",
                            "${titelb}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1585",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${aheadb_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1576",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${atxtb_2}",
                            '2058px',
                            '1758px'
                        ],
                        [
                            "eid1363",
                            "left",
                            0,
                            0,
                            "linear",
                            "${titela}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1524",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${atxtb_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1547",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${atxtb_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1605",
                            "left",
                            5000,
                            750,
                            "linear",
                            "${aheadb_2}",
                            '4096px',
                            '3796px'
                        ],
                        [
                            "eid1574",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${atxtb_3}",
                            '2074px',
                            '1874px'
                        ],
                        [
                            "eid1533",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${atxtb_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1611",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${atxta_3}",
                            '2078px',
                            '1978px'
                        ],
                        [
                            "eid1527",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${atxtb_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1539",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${atxta_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1622",
                            "top",
                            0,
                            6000,
                            "linear",
                            "${titelb}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid1530",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${atxta_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1378",
                            "top",
                            0,
                            0,
                            "linear",
                            "${titela}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid1575",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${atxta_1}",
                            '2068px',
                            '1768px'
                        ],
                        [
                            "eid1608",
                            "left",
                            5000,
                            750,
                            "linear",
                            "${aheada_1}",
                            '4096px',
                            '3896px'
                        ]
                    ]
                }
            },
            "sym_welle": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, -1317, 2048, '1536px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,80,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'welle12',
                            rect: [0, 47, '4096px', '800px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/welle1.svg', '0px', '0px']
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
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "loop_welle": 0
                    },
                    data: [
                        [
                            "eid1476",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-1317px',
                            '-1317px'
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
                            "eid1475",
                            "top",
                            0,
                            0,
                            "linear",
                            "${welle12}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid1453",
                            "scaleY",
                            0,
                            583,
                            "easeInOutQuad",
                            "${welle12}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1454",
                            "scaleY",
                            583,
                            583,
                            "easeInOutQuad",
                            "${welle12}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1455",
                            "scaleY",
                            1167,
                            583,
                            "easeInOutQuad",
                            "${welle12}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1456",
                            "scaleY",
                            1750,
                            583,
                            "easeInOutQuad",
                            "${welle12}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1457",
                            "scaleY",
                            2333,
                            583,
                            "easeInOutQuad",
                            "${welle12}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1458",
                            "scaleY",
                            2917,
                            583,
                            "easeInOutQuad",
                            "${welle12}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1461",
                            "left",
                            0,
                            3500,
                            "linear",
                            "${welle12}",
                            '0px',
                            '-2048px'
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
                            id: 'sym_welle',
                            symbolName: 'sym_welle',
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
                    duration: 3500,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("thread_1_edgeActions.js");
})("EDGE-5245403");
