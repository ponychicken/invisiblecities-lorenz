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
                            rect: ['0px', '0px', '7217', '1536px', 'auto', 'auto'],
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
                            rect: ['1940', '0', '3848', '1536', 'auto', 'auto'],
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
                    duration: 6500,
                    autoPlay: false,
                    data: [
                        [
                            "eid1854",
                            "left",
                            0,
                            6500,
                            "linear",
                            "${sym_welleframe}",
                            '0px',
                            '5169px'
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
                            id: 'sym_welle2',
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
                    duration: 2250,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_c2a": {
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
                            id: 'c2a_bein_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_bein_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_corpus',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_corpus.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_fuss_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_fuss_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_fuss_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_fuss_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_hand_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_hand_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_hand_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_hand_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_kiefer',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_kiefer.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_kopf',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_kopf.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_oberarm_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_oberarm_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_oberarm_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_oberarm_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_schenkel_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_schenkel_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_unterarm_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_unterarm_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_unterarm_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_unterarm_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_wade_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_wade_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2a_warze',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['1', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2a_warze.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "oo_c2a": 0
                    },
                    data: [
                        [
                            "eid1675",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_oberarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1683",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_kiefer}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1677",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_oberarm_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1691",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1668",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_unterarm_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1688",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_hand_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1655",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_warze}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1678",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1666",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_unterarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1674",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_oberarm_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1700",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_bein_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1694",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1679",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1695",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_fuss_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1696",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_corpus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1686",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_hand_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1697",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_corpus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1690",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1681",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_kiefer}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1693",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1665",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_unterarm_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1651",
                            "top",
                            0,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '0px',
                            '48px'
                        ],
                        [
                            "eid1652",
                            "top",
                            500,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '48px',
                            '0px'
                        ],
                        [
                            "eid1662",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_wade_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1670",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_schenkel_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1680",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_kopf}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1692",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_fuss_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1687",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_hand_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1669",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_schenkel_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1664",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_unterarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1682",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_kiefer}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1673",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_oberarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1672",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_oberarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1684",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_hand_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1699",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_bein_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1656",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1657",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid1698",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_corpus}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1671",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_schenkel_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1658",
                            "left",
                            0,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '0px',
                            '30px'
                        ],
                        [
                            "eid1659",
                            "left",
                            500,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '30px',
                            '0px'
                        ],
                        [
                            "eid1676",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_oberarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1685",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_hand_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1653",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1654",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${c2a_warze}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid1667",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_unterarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1701",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_bein_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1661",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2a_wade_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1689",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2a_hand_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1663",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_unterarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1660",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2a_wade_v}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_c2b": {
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
                            id: 'c2b_bein_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_bein_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_corpus',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_corpus.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_fuss_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_fuss_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_fuss_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_fuss_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_hand_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_hand_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_hand_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_hand_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_kiefer',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_kiefer.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_kopf',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_kopf.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_oberarm_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_oberarm_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_oberarm_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_oberarm_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_schenkel_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_schenkel_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_unterarm_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_unterarm_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_unterarm_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_unterarm_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c2b_wade_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c2b_wade_v.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid1721",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1716",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_oberarm_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1717",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_oberarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1739",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_corpus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1712",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_schenkel_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1702",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_wade_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1704",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_wade_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1731",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_hand_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1714",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_oberarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1742",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_bein_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1736",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1724",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_kiefer}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1709",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_unterarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1729",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_hand_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1725",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_kiefer}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1705",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_unterarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1728",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_hand_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1719",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_oberarm_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1737",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_fuss_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1711",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_schenkel_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1722",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_kopf}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1740",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_corpus}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1707",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_unterarm_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1706",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_unterarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1718",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_oberarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1720",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1732",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1727",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_hand_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1743",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_bein_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1733",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1715",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_oberarm_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1713",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_schenkel_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1708",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_unterarm_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1738",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_corpus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1703",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_wade_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1730",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c2b_hand_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1741",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_bein_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1726",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_hand_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1710",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_unterarm_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1723",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_kiefer}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1735",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c2b_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1734",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c2b_fuss_v}",
                            '0deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "sym_c3a": {
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
                            id: 'c3a_beine',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3a_beine.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3a_corpus',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3a_corpus.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3a_fuss_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3a_fuss_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3a_fuss_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3a_fuss_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3a_kopf',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3a_kopf.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3a_schritt',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3a_schritt.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "oo_c3a": 0
                    },
                    data: [
                        [
                            "eid1779",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c3a_fuss_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1777",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c3a_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1764",
                            "rotateZ",
                            1,
                            1000,
                            "linear",
                            "${c3a_schritt}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1765",
                            "rotateZ",
                            1001,
                            1000,
                            "linear",
                            "${c3a_schritt}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1766",
                            "rotateZ",
                            2000,
                            1000,
                            "linear",
                            "${c3a_schritt}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1783",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3a_corpus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1778",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3a_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1767",
                            "top",
                            1,
                            1000,
                            "linear",
                            "${c3a_kopf}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1768",
                            "top",
                            1001,
                            1000,
                            "linear",
                            "${c3a_kopf}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1769",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${c3a_kopf}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid1776",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c3a_fuss_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1771",
                            "rotateZ",
                            1,
                            1000,
                            "linear",
                            "${c3a_kopf}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1772",
                            "rotateZ",
                            1001,
                            1000,
                            "linear",
                            "${c3a_kopf}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1773",
                            "rotateZ",
                            2000,
                            1000,
                            "linear",
                            "${c3a_kopf}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1774",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c3a_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1784",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${c3a_corpus}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1785",
                            "rotateZ",
                            1000,
                            1000,
                            "linear",
                            "${c3a_corpus}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1786",
                            "rotateZ",
                            1999,
                            1000,
                            "linear",
                            "${c3a_corpus}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1789",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c3a_beine}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1780",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${c3a_corpus}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1781",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${c3a_corpus}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1782",
                            "top",
                            1999,
                            1000,
                            "linear",
                            "${c3a_corpus}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid1763",
                            "left",
                            1,
                            0,
                            "linear",
                            "${c3a_schritt}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1787",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c3a_beine}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1775",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3a_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1788",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3a_beine}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1770",
                            "left",
                            1,
                            0,
                            "linear",
                            "${c3a_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1760",
                            "top",
                            1,
                            1000,
                            "linear",
                            "${c3a_schritt}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1761",
                            "top",
                            1001,
                            1000,
                            "linear",
                            "${c3a_schritt}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1762",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${c3a_schritt}",
                            '4px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_c3b": {
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
                            id: 'c3b_unterhose',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_unterhose.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3b_kopf',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_kopf.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3b_handzu',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_handzu.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3b_handflach',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_handflach.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3b_fuss_v',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_fuss_v.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3b_fuss_h',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_fuss_h.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3b_corpus',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_corpus.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'c3b_beine',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/c3b_beine.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "oo_c3b": 0
                    },
                    data: [
                        [
                            "eid1827",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${c3b_unterhose}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1828",
                            "top",
                            2000,
                            2000,
                            "linear",
                            "${c3b_unterhose}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1829",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${c3b_unterhose}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid1793",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${c3b_corpus}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1794",
                            "top",
                            2000,
                            2000,
                            "linear",
                            "${c3b_corpus}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1795",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${c3b_corpus}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid1801",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1791",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_beine}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1802",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c3b_fuss_h}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1820",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${c3b_kopf}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1821",
                            "top",
                            2000,
                            2000,
                            "linear",
                            "${c3b_kopf}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1822",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${c3b_kopf}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid1796",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_corpus}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1809",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_handflach}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1817",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${c3b_handzu}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1818",
                            "rotateZ",
                            2000,
                            2000,
                            "linear",
                            "${c3b_handzu}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1819",
                            "rotateZ",
                            4000,
                            2000,
                            "linear",
                            "${c3b_handzu}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1803",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c3b_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1805",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c3b_fuss_v}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1806",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${c3b_handflach}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1807",
                            "top",
                            2000,
                            2000,
                            "linear",
                            "${c3b_handflach}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1808",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${c3b_handflach}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid1810",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${c3b_handflach}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1811",
                            "rotateZ",
                            2000,
                            2000,
                            "linear",
                            "${c3b_handflach}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1812",
                            "rotateZ",
                            4000,
                            2000,
                            "linear",
                            "${c3b_handflach}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1813",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${c3b_handzu}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid1814",
                            "top",
                            2000,
                            2000,
                            "linear",
                            "${c3b_handzu}",
                            '-4px',
                            '4px'
                        ],
                        [
                            "eid1815",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${c3b_handzu}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid1804",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_fuss_v}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1790",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c3b_beine}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1823",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_kopf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1816",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_handzu}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1824",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${c3b_kopf}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1825",
                            "rotateZ",
                            2000,
                            2000,
                            "linear",
                            "${c3b_kopf}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1826",
                            "rotateZ",
                            4000,
                            2000,
                            "linear",
                            "${c3b_kopf}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1800",
                            "top",
                            0,
                            0,
                            "linear",
                            "${c3b_fuss_h}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1797",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${c3b_corpus}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1798",
                            "rotateZ",
                            2000,
                            2000,
                            "linear",
                            "${c3b_corpus}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1799",
                            "rotateZ",
                            4000,
                            2000,
                            "linear",
                            "${c3b_corpus}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid1830",
                            "left",
                            0,
                            0,
                            "linear",
                            "${c3b_unterhose}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1792",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${c3b_beine}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1831",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${c3b_unterhose}",
                            '0deg',
                            '-1deg'
                        ],
                        [
                            "eid1832",
                            "rotateZ",
                            2000,
                            2000,
                            "linear",
                            "${c3b_unterhose}",
                            '-1deg',
                            '1deg'
                        ],
                        [
                            "eid1833",
                            "rotateZ",
                            4000,
                            2000,
                            "linear",
                            "${c3b_unterhose}",
                            '1deg',
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
                            id: 'sym_c2a',
                            symbolName: 'sym_c2a',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_c2b',
                            symbolName: 'sym_c2b',
                            type: 'rect'
                        },
                        {
                            rect: [1800, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_c3a',
                            symbolName: 'sym_c3a',
                            type: 'rect'
                        },
                        {
                            rect: [1800, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_c3b',
                            symbolName: 'sym_c3b',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 3848, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1754",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_c2b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1746",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_c2b}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1747",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_c3a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1753",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_c2a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1745",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_c2a}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1756",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_c3b}",
                            '1800px',
                            '1800px'
                        ],
                        [
                            "eid1755",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_c3a}",
                            '1800px',
                            '1800px'
                        ],
                        [
                            "eid1748",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym_c3b}",
                            '0px',
                            '0px'
                        ]
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
                            rect: [0, -1344, 2048, '1536px', 'auto', 'auto'],
                            fill: ['rgba(255,0,80,1.00)']
                        },
                        {
                            rect: [0, 20, '4096px', '1100px', 'auto', 'auto'],
                            id: 'welle6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/welle6.svg', '0px', '0px']
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
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "loop_welle": 0
                    },
                    data: [
                        [
                            "eid1875",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-1344px',
                            '-1344px'
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
                            "eid1876",
                            "top",
                            0,
                            0,
                            "linear",
                            "${welle6}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid1867",
                            "scaleY",
                            0,
                            376,
                            "easeInOutQuad",
                            "${welle6}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1868",
                            "scaleY",
                            376,
                            374,
                            "easeInOutQuad",
                            "${welle6}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1869",
                            "scaleY",
                            749,
                            376,
                            "easeInOutQuad",
                            "${welle6}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1870",
                            "scaleY",
                            1125,
                            376,
                            "easeInOutQuad",
                            "${welle6}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1871",
                            "scaleY",
                            1501,
                            372,
                            "easeInOutQuad",
                            "${welle6}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1872",
                            "scaleY",
                            1873,
                            376,
                            "easeInOutQuad",
                            "${welle6}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1873",
                            "left",
                            0,
                            2249,
                            "linear",
                            "${welle6}",
                            '0px',
                            '-2048px'
                        ],
                        [
                            "eid1874",
                            "left",
                            2249,
                            1,
                            "easeInOutQuad",
                            "${welle6}",
                            '-2048px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("thread_6_edgeActions.js");
})("EDGE-5245403");
