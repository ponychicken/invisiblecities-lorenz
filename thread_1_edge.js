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
                rect: ['0px', '0px','6819px','1536px','auto', 'auto'],
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
                rect: ['0', '0','auto','auto','auto', 'auto']
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
                ["transform", "skewY", '0deg'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '1536px'],
                ["style", "width", '2048px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(23,25,40,1.00)'],
                ["style", "width", '6819px']
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
                { id: "eid1621", tween: [ "style", "${_sym_all}", "left", '-500px', { fromValue: '0px'}], position: 0, duration: 6000 },
                { id: "eid1466", tween: [ "style", "${_sym_welleframe}", "left", '4771px', { fromValue: '0px'}], position: 0, duration: 6000 }            ]
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
                    id: 'titela',
                    type: 'image',
                    rect: ['-52525px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/titela.svg', '0px', '0px']
                },
                {
                    id: 'titelb',
                    type: 'image',
                    rect: ['-52525px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/titelb.svg', '0px', '0px']
                },
                {
                    id: 'atxta_3',
                    type: 'image',
                    rect: ['-50477px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxta_3.svg', '0px', '0px']
                },
                {
                    id: 'atxta_2',
                    type: 'image',
                    rect: ['-50477px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxta_2.svg', '0px', '0px']
                },
                {
                    id: 'atxtb_3',
                    type: 'image',
                    rect: ['-50477px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxtb_3.svg', '0px', '0px']
                },
                {
                    id: 'atxta_1',
                    type: 'image',
                    rect: ['-50477px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxta_1.svg', '0px', '0px']
                },
                {
                    id: 'atxtb_2',
                    type: 'image',
                    rect: ['-50477px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxtb_2.svg', '0px', '0px']
                },
                {
                    id: 'atxtb_1',
                    type: 'image',
                    rect: ['-50477px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/atxtb_1.svg', '0px', '0px']
                },
                {
                    id: 'aheada_1',
                    type: 'image',
                    rect: ['-49247px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheada_1.svg', '0px', '0px']
                },
                {
                    id: 'aheada_2',
                    type: 'image',
                    rect: ['-49247px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheada_2.svg', '0px', '0px']
                },
                {
                    id: 'aheadb_1',
                    type: 'image',
                    rect: ['-49247px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheadb_1.svg', '0px', '0px']
                },
                {
                    id: 'aheadb_2',
                    type: 'image',
                    rect: ['-49247px', '3px', '2048px', '1536px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/aheadb_2.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_titela}": [
                ["style", "left", '0px'],
                ["style", "top", '4px']
            ],
            "${_aheada_2}": [
                ["style", "left", '4096px'],
                ["style", "top", '0px']
            ],
            "${_aheadb_2}": [
                ["style", "left", '4096px'],
                ["style", "top", '0px']
            ],
            "${_atxta_1}": [
                ["style", "left", '2068px'],
                ["style", "top", '0px']
            ],
            "${_atxta_3}": [
                ["style", "left", '2078px'],
                ["style", "top", '0px']
            ],
            "${_atxtb_2}": [
                ["style", "left", '2058px'],
                ["style", "top", '0px']
            ],
            "${_titelb}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_atxtb_1}": [
                ["style", "left", '2048px'],
                ["style", "top", '0px']
            ],
            "${_aheada_1}": [
                ["style", "left", '4096px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1536px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '6144px']
            ],
            "${_atxtb_3}": [
                ["style", "left", '2074px'],
                ["style", "top", '0px']
            ],
            "${_atxta_2}": [
                ["style", "left", '2148px'],
                ["style", "top", '0px']
            ],
            "${_aheadb_1}": [
                ["style", "left", '4096px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid1607", tween: [ "style", "${_aheada_2}", "left", '3896px', { fromValue: '4096px'}], position: 5000, duration: 750 },
                { id: "eid1378", tween: [ "style", "${_titela}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
                { id: "eid1577", tween: [ "style", "${_atxtb_1}", "left", '1648px', { fromValue: '2048px'}], position: 2250, duration: 750 },
                { id: "eid1585", tween: [ "style", "${_aheadb_2}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid1575", tween: [ "style", "${_atxta_1}", "left", '1768px', { fromValue: '2068px'}], position: 2250, duration: 750 },
                { id: "eid1606", tween: [ "style", "${_aheadb_1}", "left", '3796px', { fromValue: '4096px'}], position: 5000, duration: 750 },
                { id: "eid1524", tween: [ "style", "${_atxtb_1}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1547", tween: [ "style", "${_atxtb_1}", "top", '0px', { fromValue: '0px'}], position: 6000, duration: 0 },
                { id: "eid1533", tween: [ "style", "${_atxtb_3}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1527", tween: [ "style", "${_atxtb_2}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1587", tween: [ "style", "${_aheadb_1}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid1605", tween: [ "style", "${_aheadb_2}", "left", '3796px', { fromValue: '4096px'}], position: 5000, duration: 750 },
                { id: "eid1574", tween: [ "style", "${_atxtb_3}", "left", '1874px', { fromValue: '2074px'}], position: 2250, duration: 750 },
                { id: "eid1530", tween: [ "style", "${_atxta_1}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1362", tween: [ "style", "${_titelb}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1363", tween: [ "style", "${_titela}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1589", tween: [ "style", "${_aheada_2}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid1591", tween: [ "style", "${_aheada_1}", "top", '0px', { fromValue: '0px'}], position: 5000, duration: 0 },
                { id: "eid1622", tween: [ "style", "${_titelb}", "top", '10px', { fromValue: '0px'}], position: 0, duration: 6000 },
                { id: "eid1608", tween: [ "style", "${_aheada_1}", "left", '3896px', { fromValue: '4096px'}], position: 5000, duration: 750 },
                { id: "eid1576", tween: [ "style", "${_atxtb_2}", "left", '1758px', { fromValue: '2058px'}], position: 2250, duration: 750 },
                { id: "eid1536", tween: [ "style", "${_atxta_2}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1539", tween: [ "style", "${_atxta_3}", "top", '0px', { fromValue: '0px'}], position: 2250, duration: 0 },
                { id: "eid1573", tween: [ "style", "${_atxta_2}", "left", '1948px', { fromValue: '2148px'}], position: 2250, duration: 750 },
                { id: "eid1611", tween: [ "style", "${_atxta_3}", "left", '1978px', { fromValue: '2078px'}], position: 2250, duration: 750 }            ]
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
                    rect: ['0px', '-1364px', '2048px', '1536px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,0,80,1.00)']
                },
                {
                    id: 'welle12',
                    type: 'image',
                    rect: ['0', '0', '4096px', '800px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/welle1.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '-1317px'],
                ["color", "background-color", 'rgba(255,0,80,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '2048px']
            ],
            "${_welle12}": [
                ["style", "top", '47px'],
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
            duration: 3500,
            autoPlay: true,
            labels: {
                "loop_welle": 0
            },
            timeline: [
                { id: "eid1453", tween: [ "transform", "${_welle12}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1454", tween: [ "transform", "${_welle12}", "scaleY", '1', { fromValue: '0.8'}], position: 583, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1455", tween: [ "transform", "${_welle12}", "scaleY", '0.9', { fromValue: '1'}], position: 1167, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1456", tween: [ "transform", "${_welle12}", "scaleY", '1', { fromValue: '0.9'}], position: 1750, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1457", tween: [ "transform", "${_welle12}", "scaleY", '0.8', { fromValue: '1'}], position: 2333, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1458", tween: [ "transform", "${_welle12}", "scaleY", '1', { fromValue: '0.8'}], position: 2917, duration: 583, easing: "easeInOutQuad" },
                { id: "eid1475", tween: [ "style", "${_welle12}", "top", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
                { id: "eid1461", tween: [ "style", "${_welle12}", "left", '-2048px', { fromValue: '0px'}], position: 0, duration: 3500 },
                { id: "eid1462", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1476", tween: [ "style", "${_Rectangle2}", "top", '-1317px', { fromValue: '-1317px'}], position: 0, duration: 0 }            ]
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
                    id: 'sym_welle',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym_welle',
                symbolName: 'sym_welle',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_sym_welle}": [
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
            duration: 3500,
            autoPlay: false,
            timeline: [
            ]
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
