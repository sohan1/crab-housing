// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        .state('committee', {
            url: "/manage",
            templateUrl: "views/template.html",
            controller: 'CommitteeCtrl'
        })
        .state('schemes', {
            url: "/schemes",
            templateUrl: "views/template.html",
            controller: 'SchemesCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/template.html",
            controller: 'AboutCtrl'
        })
        .state('downloads', {
            url: "/pr",
            templateUrl: "views/template.html",
            controller: 'DownloadsCtrl'
        })
        .state('reports', {
            url: "/ar",
            templateUrl: "views/template.html",
            controller: 'ReportsCtrl'
        })
        .state('audit', {
            url: "/audit",
            templateUrl: "views/template.html",
            controller: 'AuditCtrl'
        })
        .state('notices-circulars', {
            url: "/nandm",
            templateUrl: "views/template.html",
            controller: 'NoticesCircularsCtrl'
        })
        .state('rules-amendments', {
            url: "/rules",
            templateUrl: "views/template.html",
            controller: 'RulesAmendmentsCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/template.html",
            controller: 'ContactCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: "views/template.html",
            controller: 'FormCtrl'
        })
        .state('loan', {
            url: "/loan",
            templateUrl: "views/template.html",
            controller: 'LoanCtrl'
        })
        .state('gallery', {
            url: "/gallery",
            templateUrl: "views/template.html",
            controller: 'GalleryCtrl'
        })
        .state('savings', {
            url: "/save",
            templateUrl: "views/template.html",
            controller: 'SavingsCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                },
                thumbs: {
                    autoStart: true
                },
                buttons: [
                    "zoom",
                    "share",
                    "slideShow",
                    "fullScreen",
                    "download",
                    "thumbs",
                    "close"
                ]
            });
        }
    };
});

firstapp.directive('easyTickers', function ($compile, $parse) {
    return {
        restrict: 'EA',
        link: function ($scope, element, attrs) {
            // var $element = $(element);
            // var target;
            $(element).easyTicker({
                direction: 'up',
                easing: 'swing',
                speed: 'slow',
                interval: 2000,
                height: 'auto',
                visible: 0,
                mousePause: 1,
                controls: {
                    up: '',
                    down: '',
                    toggle: '',
                    playText: 'Play',
                    stopText: 'Stop'
                }
            });
        }
    };
});

firstapp.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
});

firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});