define(function () {
    var environment;
    if (document.URL.indexOf("mobileapp.html") > -1) {
        environment = "hybrid";
    }
    else if (Modernizr.touch || Modernizr.mq("only all and (max-width: 768px)")) {
//        environment = "mobile";
        environment = "desktop";
    } else {
        environment = "desktop";
    }
    environment = 'desktop';
//    environment = 'main-built';
    require([environment]);
});