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
                            rect: ['0px', '0px', '10000', '1536px', 'auto', 'auto'],
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
                            rect: ['1430', '0', '7199', '1536', 'auto', 'auto'],
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
                            "eid1996",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${sym_all}",
                            '1430px',
                            '930px'
                        ],
                        [
                            "eid1953",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${sym_welleframe}",
                            '0px',
                            '7952px'
                        ]
                    ]
                }
            },
            "sym_d1b": {
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
                            id: 'd1b_1',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1b_1.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'd1b_2',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1b_2.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'd1b_3',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1b_3.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'd1b_4',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1b_4.svg', '0px', '0px']
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
                            "eid1943",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1b_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1948",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1b_2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1951",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1b_1}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1950",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1b_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1942",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1b_4}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1941",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1b_4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1944",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1b_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1945",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1b_3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1947",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1b_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1949",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1b_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1940",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1b_4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1946",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1b_2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "sym_d1a": {
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
                            id: 'd1a_1',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1a_1.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'd1a_2',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1a_2.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'd1a_3',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1a_3.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'd1a_4',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d1a_4.svg', '0px', '0px']
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
                            "eid1936",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1a_2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1937",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1a_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1938",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1a_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1939",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1a_1}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1930",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1a_4}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1932",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1a_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1933",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${d1a_3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1931",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1a_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1929",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1a_4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1935",
                            "left",
                            0,
                            0,
                            "linear",
                            "${d1a_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1934",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1a_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1928",
                            "top",
                            0,
                            0,
                            "linear",
                            "${d1a_4}",
                            '0px',
                            '0px'
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
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxta_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxta_1.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxta_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxta_2.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxta_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxta_3.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxta_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxta_4.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxtb_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxtb_1.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxtb_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxtb_2.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxtb_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxtb_3.svg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'dtxtb_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dtxtb_4.svg', '0px', '0px']
                        },
                        {
                            rect: [1853, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_d1a',
                            symbolName: 'sym_d1a',
                            type: 'rect'
                        },
                        {
                            rect: [1853, 0, 2048, 1536, 'auto', 'auto'],
                            id: 'sym_d1b',
                            symbolName: 'sym_d1b',
                            type: 'rect'
                        },
                        {
                            rect: [5151, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'eheadb_',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/eheadb_.svg', '0px', '0px']
                        },
                        {
                            rect: [5151, 0, '2048px', '1536px', 'auto', 'auto'],
                            id: 'eheada_',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/eheada_.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 7199, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1913",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dtxtb_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1982",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxtb_3}",
                            '0px',
                            '-160px'
                        ],
                        [
                            "eid1912",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dtxtb_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1981",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxtb_2}",
                            '0px',
                            '-320px'
                        ],
                        [
                            "eid1992",
                            "top",
                            7419,
                            0,
                            "linear",
                            "${eheadb_}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1906",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dtxtb_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1914",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dtxtb_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1980",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxtb_1}",
                            '0px',
                            '-400px'
                        ],
                        [
                            "eid1918",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_d1a}",
                            '1853px',
                            '1853px'
                        ],
                        [
                            "eid1988",
                            "left",
                            4188,
                            1812,
                            "linear",
                            "${sym_d1a}",
                            '1853px',
                            '1253px'
                        ],
                        [
                            "eid1990",
                            "top",
                            7419,
                            0,
                            "linear",
                            "${eheada_}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1919",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sym_d1b}",
                            '1853px',
                            '1853px'
                        ],
                        [
                            "eid1987",
                            "left",
                            4188,
                            1812,
                            "linear",
                            "${sym_d1b}",
                            '1853px',
                            '1253px'
                        ],
                        [
                            "eid1908",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dtxta_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1905",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dtxtb_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1925",
                            "top",
                            10000,
                            0,
                            "linear",
                            "${dtxtb_4}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid1994",
                            "left",
                            7419,
                            1500,
                            "linear",
                            "${eheadb_}",
                            '5151px',
                            '5751px'
                        ],
                        [
                            "eid1916",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dtxta_3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1978",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxta_3}",
                            '0px',
                            '-240px'
                        ],
                        [
                            "eid1993",
                            "left",
                            7419,
                            1500,
                            "linear",
                            "${eheada_}",
                            '5151px',
                            '5751px'
                        ],
                        [
                            "eid1910",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dtxta_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1976",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxta_1}",
                            '0px',
                            '-400px'
                        ],
                        [
                            "eid1907",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dtxta_4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1915",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dtxta_4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1979",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxta_4}",
                            '0px',
                            '-160px'
                        ],
                        [
                            "eid1903",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dtxta_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1902",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dtxta_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1911",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dtxta_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1977",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxta_2}",
                            '0px',
                            '-320px'
                        ],
                        [
                            "eid1984",
                            "left",
                            1296,
                            1794,
                            "linear",
                            "${dtxtb_4}",
                            '0px',
                            '-240px'
                        ],
                        [
                            "eid1904",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dtxtb_2}",
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
                    duration: 2000,
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
                            rect: [0, -1357, 2048, '1536px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,80,1.00)']
                        },
                        {
                            rect: [0, 8, '4096px', '1150px', 'auto', 'auto'],
                            id: 'welle7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/welle7.svg', '0px', '0px']
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
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "loop_welle": 0
                    },
                    data: [
                        [
                            "eid1967",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-1357px',
                            '-1357px'
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
                            "eid1968",
                            "top",
                            0,
                            0,
                            "linear",
                            "${welle7}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid1956",
                            "left",
                            0,
                            1999,
                            "linear",
                            "${welle7}",
                            '0px',
                            '-2048px'
                        ],
                        [
                            "eid1957",
                            "left",
                            1999,
                            1,
                            "easeInOutQuad",
                            "${welle7}",
                            '-2048px',
                            '0px'
                        ],
                        [
                            "eid1958",
                            "scaleY",
                            0,
                            334,
                            "easeInOutQuad",
                            "${welle7}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1959",
                            "scaleY",
                            334,
                            333,
                            "easeInOutQuad",
                            "${welle7}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1960",
                            "scaleY",
                            666,
                            334,
                            "easeInOutQuad",
                            "${welle7}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1961",
                            "scaleY",
                            1000,
                            334,
                            "easeInOutQuad",
                            "${welle7}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1962",
                            "scaleY",
                            1334,
                            331,
                            "easeInOutQuad",
                            "${welle7}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid1963",
                            "scaleY",
                            1665,
                            334,
                            "easeInOutQuad",
                            "${welle7}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("thread_7_edgeActions.js");
})("EDGE-5245403");
