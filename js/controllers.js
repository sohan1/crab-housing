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
    .controller('SavingsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("savings"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Savings"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('LoanCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("loan"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Loan"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ReportsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("reports"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Reports"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.audits = [{
            detail: 'Audit Rectification Report for the year 2014-15',
            englishUrl: 'demo.pdf',

        }]
        $scope.reports = [{
                date: 'Annual Report 2016-17',
                englishUrl: 'demo.pdf',
                marathiUrl: 'demo.pdf',

            },
            {
                date: 'Annual Report 2015-16',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2014-15',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2013-14',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2011-12',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2010-11',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2009-10',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2008-09',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2007-08',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2006-07',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2005-06',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2004-05',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            },
            {
                date: 'Annual Report 2003-04',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
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

        $scope.tabs = [{
                title: '2017',
                circulars: [{
                    date: '27.12.2017',
                    content: '56th AGM Notice',
                    englishUrl: 'demo.pdf',
                    marathiUrl: 'demo.pdf',
                }, {
                    date: '27.10.2017',
                    content: '56th AGM Notice',
                    englishUrl: 'demo.pdf',
                    marathiUrl: 'demo.pdf',
                }]
            },
            {
                title: '2016',
                circulars: [{
                    date: '27.12.2016',
                    content: '56th AGM Notice',
                    englishUrl: 'demo.pdf',
                    marathiUrl: 'demo.pdf',
                }, {
                    date: '27.10.2016',
                    content: '56th AGM Notice',
                    englishUrl: 'demo.pdf',
                    marathiUrl: 'demo.pdf',
                }]

            }
        ];
    })
    .controller('RulesAmendmentsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("rules-amendments"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Rules & Amendments"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.rules = [{
                date: 'Model Bye-Laws of Employees Cooperative Societies (2013)',
                englishUrl: 'demo.pdf',
                marathiUrl: 'demo.pdf',

            },
            {
                date: 'Proposed Amendments to Bye-Laws (2004-2005)',
                englishUrl: 'demo.pdf',
                marathiUrl: '',
            }
        ];
    })

    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);
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