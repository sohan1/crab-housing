firstapp.controller('ReportsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("reports"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Reports"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.reports = [{
            date: 'Annual Report 2016-17',
            englishUrl: '56_ANNUAL_Report.pdf',
            marathiUrl: '',

        },
        {
            date: 'Annual Report 2015-16',
            englishUrl: 'ar2015-16.pdf',
            marathiUrl: '',
        },
        {
            date: 'Annual Report 2014-15',
            englishUrl: 'ar2014-15.pdf',
            marathiUrl: '',
        },
        {
            date: 'Annual Report 2013-14',
            englishUrl: 'ar2013.pdf',
            marathiUrl: '',
        },
        {
            date: 'Annual Report 2011-12',
            englishUrl: 'ar2012.pdf',
            marathiUrl: '',
        },
        {
            date: 'Annual Report 2010-11',
            englishUrl: '50AnnualReport.pdf',
            marathiUrl: '',
        },
        {
            date: 'Annual Report 2009-10',
            englishUrl: '49AnnualReport.pdf',
            marathiUrl: '',
        },
        {
            date: 'Annual Report 2008-09',
            englishUrl: 'ar2008-09.pdf',
            marathiUrl: '',
        },
        {
            date: 'Annual Report 2005-06',
            englishUrl: 'ar2006e.pdf',
            marathiUrl: 'ar2006m.pdf',
        },
        {
            date: 'Annual Report 2004-05',
            englishUrl: 'areport2005.pdf',
            marathiUrl: 'areport2005-m.pdf',
        },
        {
            date: 'Annual Report 2003-04',
            englishUrl: 'areport2004.pdf',
            marathiUrl: '',
        }
    ];
})