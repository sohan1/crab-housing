angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.mySlides = [
            // 'img/home-banner/3.jpg',
            // 'img/home-banner/4.jpg',
            'img/home-banner/1.jpg',
            'img/home-banner/2.jpg',
        ];

        $timeout(function () {
            $('.ticker1').easyTicker({
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
        }, 1000);
        $scope.importantLinks = [{
                name: '56th ANNUAL REPORT',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            },
            {
                name: 'Sabhasad Bhavishya Nidhi',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }, {
                name: 'FD for 3 Years interest rate 8.50% ',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }, {
                name: 'FD for 2 Years interest rate 8.75%',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }, {
                name: 'FD for 1 Year interst rate 9.00%',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }, {
                name: 'Circular20161205.pdf',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }, {
                name: 'TypeofLoan.pdf',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }, {
                name: 'Circular20161205.pdf',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }, {
                name: 'Circular20161205.pdf',
                links: 'http://barc-ecs.com/SabhasadBhavishyaNidhiEngkish.pdf'
            }
        ]
    })

    .controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contact"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Contact"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        }
    })

    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("about"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("About"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CommitteeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("committee"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Committee"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('SchemesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("schemes"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Schemes"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ReportsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("reports"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Reports"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.oneAtATime = true;

        $scope.groups = [{
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];
    })
    .controller('DownloadsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("downloads"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Downloads"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('NoticesCircularsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("notices-circulars"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Notices & Circulars"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;

  $scope.tabs = [
    { title:'2011', content:'Dynamic content 1' },
    { title:'2012', content:'Dynamic content 2', disabled: true }
  ];
    })
    .controller('RulesAmendmentsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("rules-amendments"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Rules & Amendments"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);
        $scope.getslide = "menu-out";
        $scope.getnav = function () {
            if ($scope.getslide == "menu-in") {
                $scope.getslide = "menu-out";
                $scope.onebar = "";
                $scope.secondbar = "";
                $scope.thirdbar = "";
            } else {
                $scope.getslide = "menu-in";
                $scope.onebar = "firstbar";
                $scope.secondbar = "secondbar";
                $scope.thirdbar = "thirdbar";
            }
        };
    })

    .controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

        $scope.changeLanguage = function () {
            console.log("Language CLicked");

            if (!$.jStorage.get("language")) {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                if ($.jStorage.get("language") == "en") {
                    $translate.use("hi");
                    $.jStorage.set("language", "hi");
                } else {
                    $translate.use("en");
                    $.jStorage.set("language", "en");
                }
            }
            //  $rootScope.$apply();
        };


    })

;