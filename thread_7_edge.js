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
                id: 'sym_welleframe',
                type: 'rect',
                rect: ['0px', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_all',
                type: 'rect',
                rect: ['1430', '0','auto','auto','auto', 'auto']
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
                ["style", "left", '1430px'],
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
                ["style", "width", '10000px']
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
                { id: "eid1996", tween: [ "style", "${_sym_all}", "left", '930px', { fromValue: '1430px'}], position: 0, duration: 10000 },
                { id: "eid1953", tween: [ "style", "${_sym_welleframe}", "left", '7952px', { fromValue: '0px'}], position: 0, duration: 10000 }            ]
        }
    }
},
"sym_d1b": {
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
                    id: 'd1b_1',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1b_1.svg', '0px', '0px']
                },
                {
                    id: 'd1b_2',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1b_2.svg', '0px', '0px']
                },
                {
                    id: 'd1b_3',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1b_3.svg', '0px', '0px']
                },
                {
                    id: 'd1b_4',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1b_4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_d1b_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_d1b_3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_d1b_4}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_d1b_1}": [
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
                { id: "eid1945", tween: [ "transform", "${_d1b_3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1948", tween: [ "transform", "${_d1b_2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1947", tween: [ "style", "${_d1b_2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1942", tween: [ "transform", "${_d1b_4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1951", tween: [ "transform", "${_d1b_1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1943", tween: [ "style", "${_d1b_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1950", tween: [ "style", "${_d1b_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1946", tween: [ "style", "${_d1b_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1940", tween: [ "style", "${_d1b_4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1944", tween: [ "style", "${_d1b_3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1941", tween: [ "style", "${_d1b_4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1949", tween: [ "style", "${_d1b_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_d1a": {
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
                    id: 'd1a_1',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1a_1.svg', '0px', '0px']
                },
                {
                    id: 'd1a_2',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1a_2.svg', '0px', '0px']
                },
                {
                    id: 'd1a_3',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1a_3.svg', '0px', '0px']
                },
                {
                    id: 'd1a_4',
                    type: 'image',
                    rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/d1a_4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_d1a_1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_d1a_2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_d1a_3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_d1a_4}": [
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
                { id: "eid1929", tween: [ "style", "${_d1a_4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1930", tween: [ "transform", "${_d1a_4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1932", tween: [ "style", "${_d1a_3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1928", tween: [ "style", "${_d1a_4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1939", tween: [ "transform", "${_d1a_1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1933", tween: [ "transform", "${_d1a_3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1936", tween: [ "transform", "${_d1a_2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid1938", tween: [ "style", "${_d1a_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1934", tween: [ "style", "${_d1a_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1935", tween: [ "style", "${_d1a_2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1931", tween: [ "style", "${_d1a_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1937", tween: [ "style", "${_d1a_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    id: 'dtxta_1',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxta_1.svg', '0px', '0px']
                },
                {
                    id: 'dtxta_2',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxta_2.svg', '0px', '0px']
                },
                {
                    id: 'dtxta_3',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxta_3.svg', '0px', '0px']
                },
                {
                    id: 'dtxta_4',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxta_4.svg', '0px', '0px']
                },
                {
                    id: 'dtxtb_1',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxtb_1.svg', '0px', '0px']
                },
                {
                    id: 'dtxtb_2',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxtb_2.svg', '0px', '0px']
                },
                {
                    id: 'dtxtb_3',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxtb_3.svg', '0px', '0px']
                },
                {
                    id: 'dtxtb_4',
                    type: 'image',
                    rect: ['-21414px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/dtxtb_4.svg', '0px', '0px']
                },
                {
                    id: 'sym_d1a',
                    type: 'rect',
                    rect: ['-1430px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sym_d1b',
                    type: 'rect',
                    rect: ['-1430px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'eheadb_',
                    type: 'image',
                    rect: ['5151px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/eheadb_.svg', '0px', '0px']
                },
                {
                    id: 'eheada_',
                    type: 'image',
                    rect: ['5151px', '0px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/eheada_.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_d1a',
                symbolName: 'sym_d1a',
                autoPlay: {

               }
            },
            {
                id: 'sym_d1b',
                symbolName: 'sym_d1b',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_dtxta_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_dtxta_3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_d1a}": [
                ["style", "left", '1853px'],
                ["style", "top", '0px']
            ],
            "${_dtxtb_4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_dtxtb_1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_eheada_}": [
                ["style", "left", '5151px'],
                ["style", "top", '0px']
            ],
            "${_dtxtb_2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_eheadb_}": [
                ["style", "left", '5151px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "width", '7199px']
            ],
            "${_dtxta_2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_dtxtb_3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sym_d1b}": [
                ["style", "left", '1853px'],
                ["style", "top", '0px']
            ],
            "${_dtxta_4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                { id: "eid1913", tween: [ "style", "${_dtxtb_3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1982", tween: [ "style", "${_dtxtb_3}", "left", '-160px', { fromValue: '0px'}], position: 1296, duration: 1794 },
                { id: "eid1912", tween: [ "style", "${_dtxtb_2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1981", tween: [ "style", "${_dtxtb_2}", "left", '-320px', { fromValue: '0px'}], position: 1296, duration: 1794 },
                { id: "eid1907", tween: [ "style", "${_dtxta_4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1984", tween: [ "style", "${_dtxtb_4}", "left", '-240px', { fromValue: '0px'}], position: 1296, duration: 1794 },
                { id: "eid1993", tween: [ "style", "${_eheada_}", "left", '5751px', { fromValue: '5151px'}], position: 7419, duration: 1500 },
                { id: "eid1902", tween: [ "style", "${_dtxta_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1925", tween: [ "style", "${_dtxtb_4}", "top", '3px', { fromValue: '0px'}], position: 10000, duration: 0 },
                { id: "eid1911", tween: [ "style", "${_dtxta_2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1977", tween: [ "style", "${_dtxta_2}", "left", '-320px', { fromValue: '0px'}], position: 1296, duration: 1794 },
                { id: "eid1905", tween: [ "style", "${_dtxtb_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1990", tween: [ "style", "${_eheada_}", "top", '0px', { fromValue: '0px'}], position: 7419, duration: 0 },
                { id: "eid1915", tween: [ "style", "${_dtxta_4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1979", tween: [ "style", "${_dtxta_4}", "left", '-160px', { fromValue: '0px'}], position: 1296, duration: 1794 },
                { id: "eid1904", tween: [ "style", "${_dtxtb_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1916", tween: [ "style", "${_dtxta_3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1978", tween: [ "style", "${_dtxta_3}", "left", '-240px', { fromValue: '0px'}], position: 1296, duration: 1794 },
                { id: "eid1994", tween: [ "style", "${_eheadb_}", "left", '5751px', { fromValue: '5151px'}], position: 7419, duration: 1500 },
                { id: "eid1992", tween: [ "style", "${_eheadb_}", "top", '0px', { fromValue: '0px'}], position: 7419, duration: 0 },
                { id: "eid1918", tween: [ "style", "${_sym_d1a}", "left", '1853px', { fromValue: '1853px'}], position: 0, duration: 0 },
                { id: "eid1988", tween: [ "style", "${_sym_d1a}", "left", '1253px', { fromValue: '1853px'}], position: 4188, duration: 1812 },
                { id: "eid1910", tween: [ "style", "${_dtxta_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1976", tween: [ "style", "${_dtxta_1}", "left", '-400px', { fromValue: '0px'}], position: 1296, duration: 1794 },
                { id: "eid1908", tween: [ "style", "${_dtxta_3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1906", tween: [ "style", "${_dtxtb_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1903", tween: [ "style", "${_dtxta_2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1919", tween: [ "style", "${_sym_d1b}", "left", '1853px', { fromValue: '1853px'}], position: 0, duration: 0 },
                { id: "eid1987", tween: [ "style", "${_sym_d1b}", "left", '1253px', { fromValue: '1853px'}], position: 4188, duration: 1812 },
                { id: "eid1914", tween: [ "style", "${_dtxtb_1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1980", tween: [ "style", "${_dtxtb_1}", "left", '-400px', { fromValue: '0px'}], position: 1296, duration: 1794 }            ]
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
            duration: 2000,
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
                    id: 'welle7',
                    type: 'image',
                    rect: ['0px', '0', '4096px', '1150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle7.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '-1357px'],
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
            ],
            "${_welle7}": [
                ["style", "top", '8px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
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
            duration: 2000,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1958", tween: [ "transform", "${_welle7}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 334, easing: "easeInOutQuad" },
                { id: "eid1959", tween: [ "transform", "${_welle7}", "scaleY", '1', { fromValue: '0.8'}], position: 334, duration: 333, easing: "easeInOutQuad" },
                { id: "eid1960", tween: [ "transform", "${_welle7}", "scaleY", '0.9', { fromValue: '1'}], position: 666, duration: 334, easing: "easeInOutQuad" },
                { id: "eid1961", tween: [ "transform", "${_welle7}", "scaleY", '1', { fromValue: '0.9'}], position: 1000, duration: 334, easing: "easeInOutQuad" },
                { id: "eid1962", tween: [ "transform", "${_welle7}", "scaleY", '0.8', { fromValue: '1'}], position: 1334, duration: 331, easing: "easeInOutQuad" },
                { id: "eid1963", tween: [ "transform", "${_welle7}", "scaleY", '1', { fromValue: '0.8'}], position: 1665, duration: 334, easing: "easeInOutQuad" },
                { id: "eid1956", tween: [ "style", "${_welle7}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 1999 },
                { id: "eid1957", tween: [ "style", "${_welle7}", "left", '0px', { fromValue: '-2048px'}], position: 1999, duration: 1, easing: "easeInOutQuad" },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1968", tween: [ "style", "${_welle7}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
                { id: "eid1967", tween: [ "style", "${_Rectangle2}", "top", '-1357px', { fromValue: '-1357px'}], position: 0, duration: 0 }            ]
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
