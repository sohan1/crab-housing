angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'angular-flexslider', 'ksSwiper'])

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
        $scope.menutitle = NavigationService.makeactive("Schemes"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('LoanCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("loan"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Schemes"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('AuditCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("audit"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Reports"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.audits = [{
            detail: 'Audit Rectification Report for the year 2014-15',
            englishUrl: 'Audit_RR2014-15.pdf',

        }]
    })
    .controller('DownloadsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("downloads"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Downloads"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

    .controller('RulesAmendmentsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("rules-amendments"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Rules & Amendments"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.rules = [{
                date: 'Model Bye-Laws of Employees Cooperative Societies (2013)',
                englishUrl: 'Model_Bye-Laws_of_Employees_Cooperative_Societies.pdf',
                marathiUrl: '',

            },
            {
                date: 'Proposed Amendments to Bye-Laws (2004-2005)',
                englishUrl: 'amend2005.pdf',
                marathiUrl: 'amend2005-m.pdf',
            }
        ];
    })
    .controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("gallery"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Gallery"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;

        $scope.gallerys = [{
                title: '2017',
                details: [{
                    image: 'img/home-banner/1.jpg',
                    title: 'Annual Function',
                }, {
                    image: 'img/home-banner/2.jpg',
                    title: 'Annual Function',
                }]
            },
            {
                title: '2016',
                details: [{
                    image: 'img/home-banner/1.jpg',
                    title: 'Annual Function',
                }, {
                    image: 'img/home-banner/2.jpg',
                    title: 'Annual Function',
                }]

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