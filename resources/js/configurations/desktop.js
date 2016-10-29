/**
 * Shortcut alias definitions - will come in handy when declaring dependencies
 * Also, they allow you to keep the code free of any knowledge about library
 * locations and versions
 */

requirejs.config({
    baseUrl: "/resources/js",
//    enforceDefine: true,
       waitSeconds: 200,
//    enforceDefine: true,
//    waitSeconds: 200,
    paths: {
        google: 'http://maps.googleapis.com/maps/api/js?key=AIzaSyAFkfloEXDJriVvfkaci_YXG6xD_MXf-iI',
        jquery:'../../node_modules/jquery/dist/jquery.min',
//        jquery:'../../resources/v2/assets/js/jquery.min',
        countryselect:'../../node_modules/country-select-js/build/js/countrySelect.min',
//        countryselect:'../../resources/v2/assets/js/countrySelect.min',
//        jquery:'libs/jquery-2.0.3',
//        underscore:'libs/underscore183',
        underscore:'../../node_modules/underscore/underscore-min',
        text:'../../node_modules/requirejs-text/text',
//        text:'libs/text2015',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min',
//        bootstrap: '../../resources/v2/bootstrap/js/bootstrap.min',
        bootstrap_select: '../../node_modules/bootstrap-select/dist/js/bootstrap-select.min',
//        bootstrap_select: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min',
//        bootstrap: 'libs/bootstrap',
        rayasem: 'libs/rayasem',
        xlate: 'libs/xlate',
        translations: 'libs/TRANSLATIONS',
        salvattore:'../../node_modules/salvattore/dist/salvattore.min',
        wow:'../../js/about/wow',
//        recaptcha: 'https://www.google.com/recaptcha/api',
//        jquery_easing: '../../js/about/jquery.easing.min',
//        scrolling_nav: '../../js/about/scrolling-nav',
//        spin: 'libs/spin.min',
//        jqueryspin: 'libs/jquery.spin',
        slick: 'libs/slick.min',
//        slick: '../../node_modules/slick-lightbox/dist/slick-lightbox.min',
//        typeahead: 'libs/typeahead.bundle',
//        bloodhound: 'libs/typeahead.bundle',
//        typeahead: 'libs/typeahead.bundle.min',
//        typeahead: '../../node_modules/typeahead/typeahead',
        typeahead: 'libs/typeahead',
        block: 'libs/block',
//        typeahead: 'libs/typeahead.jquery',
//        bloodhound: 'libs/bloodhound',
//        bootstrap_slider: 'libs/bootstrap-slider',
//        upload: 'libs/upload',
        backbone: 'libs/backbone133',
//        autocomplete: 'libs/jquery.backbone.widgets',
//        async:'libs/async',
//        backbonequeryparam: 'libs/backbone.queryparam.js',
        utilities: 'app/utilities',
//        ddflag: '../../js/msdropdown/jquery.dd.min',
        router:'app/router/desktop/router'
    },
    // We shim Backbone.js and Underscore.js since they don't declare AMD modules
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone',
            init: function (bar) {
                console.log('backbone init');

            }
        },
                'google': {
                    exports: 'google'
                },
//        'autocomplete': {
//                    deps: ['jquery'],
//                    exports: 'autocomplete'
//                 },
                 'salvattore': {
                    deps: ['jquery'],
                    exports: 'salvattore'
                 },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'bootstrap_select': {
            deps: ['jquery','bootstrap'],
            exports: 'bootstrap_select'
        },
        'typeahead': {
                    deps: ['jquery'],
                    exports: 'typeahead'
                },
        'block': {
                    deps: ['jquery'],
                    exports: 'block'
                },       
       /* 'jquery_easing':{
             deps: ['jquery'],
             exports: 'jquery_easing'
        },*/
        'countryselect':{
            deps:['jquery'],
            exports: 'countryselect'
        },
//         'ddflag':{
//             deps: ['jquery'],
//             exports: 'ddflag'
//        },
       /* 'scrolling_nav': {
                    deps: ['jquery','jquery_easing'],
                    exports: 'scrolling_nav'
                },*/
//        'bloodhound': {
//            deps: ['jquery'],
//            exports: 'Bloodhound',
//            init: function (bar) {
//                console.log('cekkk')
//                return this.bloodhound.noConflict();
//            }
//        },
//        'bloodhound': {
//                    deps: ['jquery'],
//                    exports: 'Bloodhound',
//                    init: function (bar) {
//                        console.log('cekkk')
//                        return this.bloodhound.noConflict();
//                    }
//                },
        'underscore': {
        	exports: '_'
        }



    },

});

//define('gmaps', ['async!http://maps.googleapis.com/maps/api/js?key=AIzaSyAFkfloEXDJriVvfkaci_YXG6xD_MXf-iI'], function(google) {
//    return google.maps;
//});

define("initializer", ["jquery","countryselect"
,"bootstrap","bootstrap_select"
,"typeahead"
,"rayasem"
    , "salvattore"
    ], function ($,countryselect
    ,bootstrap,bootstrap_select
    ,Typeahead
,Rayasem
    ,salvattore
    ) {
//    console.log("initializer");
    //init language
    //run constructor
    Rayasem.Rayasem(datagv);
//    Rayasem.initMultilanguag(datagv,Rayasem);




//    Rayasem.setWebMultilanguage();
    // Configure jQuery to append timestamps to requests, to bypass browser caches
    // Important for MSIE
	$.ajaxSetup({cache:false});

	//V1
    /*$('head').append('<link  version="v1" rel="stylesheet" href="/resources/css/bootstrap.css" type="text/css" media="all"/>');
//    $('head').append("<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->"
//                      +"<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->"
//                      +"<!--[if lt IE 9]>"
//                      +"<script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>"
//                      +"<script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>"
//                      +"<![endif]-->");

//    $('head').append('<link rel="stylesheet" href="/resources/css/bootstrap-theme.css" type="text/css" media="all"/>');
    $('head').append('<link version="v1" rel="stylesheet" href="/resources/css/bootstrap-slider.css" type="text/css" media="all"/>');
    $('head').append('<link version="v1"  rel="stylesheet" href="/resources/css/style.css" type="text/css" media="all"/>');
    $('head').append('<link version="v1"  rel="stylesheet" href="/resources/css/hover.css" type="text/css" media="all"/>');
    $('head').append('<link version="v1"  rel="stylesheet" href="/resources/css/slick.css" type="text/css" media="all"/>');
    $('head').append('<link version="v1"  rel="stylesheet" href="/resources/css/slick-theme.css" type="text/css" media="all"/>');
    $('head').append('<link version="v1"  rel="stylesheet" href="/resources/css/msdropdown/dd.css" type="text/css" media="all"/>');
    $('head').append('<link version="v1"  rel="stylesheet" href="/resources/css/msdropdown/flags.css" type="text/css" media="all"/>');

    //<!--animasi fade--->
    $('head').append('<link rel="stylesheet" href="/css/about/animate.css">');
    $('head').append('<link rel="stylesheet" href="/css/loading.css">');

    $('head').append("<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>");
    $('head').append("<link href='https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css' rel='stylesheet' type='text/css'>");
*/
    //$('head').append("<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>");
//    $('head').append("<style>.tt-dropdown-menu {width: 570px!important;}  </style>");
//    $('head').append('<link href="http://fonts.googleapis.com/css?family=Rokkitt" rel="stylesheet" type="text/css">');
    //V2


});

// Now we declare all the dependencies
// This loads and runs the 'initializer' and 'router' modules.
require([
    'initializer',
    'router',
//    'autocomplete'
], function(){
//    console.log("loads and runs the 'initializer' and 'router' modules");
});

define("configuration", {
    baseUrl : ""
});
