firstapp.controller('NoticesCircularsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("notices-circulars"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Notices & Circulars"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;


    $scope.updatedDate = "January 10, 2018";

    $scope.tabs = [{
            title: '2017',
            circulars: [{
                date: '27.12.2017',
                content: '<p>Regd. KYC <strong> (Download<a href="KYC FORM.pdf" target="_blank"> KYC Form</a>)</strong></p>',
                englishUrl: 'KYC%20CIRCULAR.pdf',
                marathiUrl: 'KYC%20CIRCULAR.pdf',
            }, {
                date: '20.07.2017',
                content: '56th AGM Notice',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '16.06.2017',
                content: '<p>Student Felicitation  (Year: 2016-2017) </p><p align="right"><b><a href="pr.html" target="_blank">Download Application Form</a><b></p>',
                englishUrl: 'Student_Felicitation_Circular_2017.pdf',
                marathiUrl: 'Student_Felicitation_Circular_2017.pdf',
            }, {
                date: '01.05.2017',
                content: 'Changes in Loan application Form',
                englishUrl: '20170501e.pdf',
                marathiUrl: '20170501m.pdf',
            }, {
                date: '28.04.2017',
                content: 'Cheque Drop Box Facility',
                englishUrl: '20170428.pdf',
                marathiUrl: '20170428.pdf',
            }, {
                date: '06.04.2017',
                content: 'Cash transaction more than 20K',
                englishUrl: '20170406e.pdf',
                marathiUrl: '20170406m.pdf',
            }, {
                date: '15.03.2017',
                content: 'New Office Bearers',
                englishUrl: '20170315e.pdf',
                marathiUrl: '20170315m.pdf',
            }, {
                date: '01.05.2017',
                content: '	KYC',
                englishUrl: '20170501e.pdf',
                marathiUrl: '20170501m.pdf',
            }]
        },
        {
            title: '2016',
            circulars: [{
                date: '09.12.2016',
                content: 'Circular Reg. Special loan (not to pay one forth amount )',
                englishUrl: 'Circular20161209a.pdf',
                marathiUrl: 'Circular20161209a.pdf',
            }, {
                date: '09.12.2016',
                content: 'Circular for hold deposits',
                englishUrl: 'Circular20161209.pdf',
                marathiUrl: 'Circular20161209.pdf',
            }, {
                date: '05.12.2016',
                content: 'Revised Int. Rate of Investment',
                englishUrl: 'Circular20161205.pdf',
                marathiUrl: 'Circular20161205.pdf',
            }, {
                date: '02.12.2016',
                content: 'Fulfillment of Promise (Reduce Int. Rate of Special Loan)',
                englishUrl: 'Circular20161202.pdf',
                marathiUrl: 'Circular20161202.pdf',
            }, {
                date: '06.11.2016',
                content: 'Clarification on Over draft',
                englishUrl: 'Cicular20161109.pdf',
                marathiUrl: 'Cicular20161109.pdf',
            }, {
                date: '02.11.2016',
                content: 'Invitation for student Felicitation',
                englishUrl: 'Invitation-student-2016.pdf',
                marathiUrl: 'Invitation-student-2016.pdf',
            }, {
                date: '26.10.2016',
                content: 'Circular',
                englishUrl: 'circular20161026.pdf',
                marathiUrl: 'circular20161026.pdf',
            }, {
                date: '25.10.2016',
                content: 'Fulfilment of Promise',
                englishUrl: 'Fulfilmentofpromise25102016.pdf',
                marathiUrl: '',
            }, {
                date: '13.07.2016',
                content: '55th AGM Notice',
                englishUrl: '55AGMNotice.pdf',
                marathiUrl: '',
            }, {
                date: '13.07.2016',
                content: 'Investment Int. rate',
                englishUrl: 'notice20160713.pdf',
                marathiUrl: '',
            }, {
                date: '01.07.2016',
                content: 'HSC and SSC Student&nbsp;felicitation Download form<a href="Felicitatioin form English _March 2016_.pdf" target="_blank"> English</a> &nbsp;&nbsp;&nbsp;&nbsp;<a href="Felicitatioin form Marathi _March 2016_.pdf" target="_blank">Marathi</a>',
                englishUrl: 'circular20160701.pdf',
                marathiUrl: '',
            }, {
                date: '29.06.2016',
                content: 'Sundry Creditors Gazetted Employees',
                englishUrl: 'sundry2016_g.pdf',
                marathiUrl: '',
            }, {
                date: '29.06.2016',
                content: 'Sundry Creditors Gazetted Employees',
                englishUrl: 'sundry2016_ng.pdf',
                marathiUrl: '',
            }, {
                date: '09.06.2016',
                content: 'Reduce interest rate from 12°/o to 11.5°/o on Special Loan w.e.f.01.06.2016.',
                englishUrl: 'circular20160609.pdf',
                marathiUrl: '',
            }, {
                date: '16.05.2016',
                content: 'Fulfilment of Promise',
                englishUrl: 'FulfilmentofPromise16052016.pdf',
                marathiUrl: '',
            }, {
                date: '07.03.2016',
                content: 'Extend Fixed Deposit Scheme for 18 months @10°/o p.a.',
                englishUrl: 'Circular20160307.pdf',
                marathiUrl: '',
            }, {
                date: '23.02.2016',
                content: 'Award',
                englishUrl: 'Circular20160223.pdf',
                marathiUrl: '',
            }, {
                date: '08.02.2016',
                content: 'Fulfilment of Promise',
                englishUrl: 'FulfilmentofPromise18022016.pdf',
                marathiUrl: '',
            }]

        },      
          {
            title: '2015',
            circulars: [{
                date: '18.12.2015',
                content: 'NEFT /RTGS facility on Ordinary / Special Loan',
                englishUrl: 'Notice20151218.pdf',
                marathiUrl: '',
            }, {
                date: '30.11.2015',
                content: 'Interest on Deposit Scheme',
                englishUrl: 'Circular20151130.pdf',
                marathiUrl: '',
            }, {
                date: '30.11.2015',
                content: 'Enhancement of Special Loan',
                englishUrl: 'Circular20151130(2).pdf',
                marathiUrl: '',
            }, {
                date: '30.10.2015',
                content: 'Disburse the Ordinary & Special Loan by <br> RTGS/NEFT',
                englishUrl: 'Notice20150918.pdf',
                marathiUrl: '',
            }, {
                date: '18.09.2015',
                content: 'Notice Reg. Div. & Int.',
                englishUrl: 'Compile%20Report%202013-14.pdf',
                marathiUrl: '',
            }, {
                date: '03.09.2015',
                content: 'Compile Report 2013-14',
                englishUrl: 'Compile%20Report%202013-14.pdf',
                marathiUrl: '',
            }, {
                date: '03.09.2015',
                content: '53th AGM minutes held on 19-8-2014',
                englishUrl: '53%20AGM%20Minutes%20-%20English.pdf',
                hindiUrl: '53%20AGM%20Minutes%20-%20Hindi.pdf',
                marathiUrl: '53%20AGM%20Minutes%20-%20Marathi.pdf',
            }, {
                date: '03.09.2015',
                content: 'Special AGM minutes held on 16-7-2014',
                englishUrl: 'Special%20AGM%20Minutes%202014-%20English.pdf',
                hindiUrl: 'Special%20AGM%20Minutes%202014-%20Hindi.pdf',
                marathiUrl: 'Special%20%20AGM%20Minutes%202014-%20Marathi.pdf',
            }, {
                date: '03.09.2015',
                content: 'Notice',
                englishUrl: 'Notice20150903.pdf',
                marathiUrl: '',
            }, {
                date: '28.08.2015',
                content: 'Extend Special Fixed Deposit Scheme for 18 months @10°/o p.a.',
                englishUrl: 'Circular20150828.pdf',
            }, {
                date: '17.08.2015',
                content: '54th AGM',
                englishUrl: 'circular20150817e.pdf',
                marathiUrl: 'circular20150817m.pdf',
            }, {
                date: '12.08.2015',
                content: 'Felicitation Circular &amp; Application <br> <a href="nominal_membership_m.pdf" target="_blank">Download Application for Nominal Membership (Marathi)</a>',
                englishUrl: '',
                marathiUrl: 'circular20150812m.pdf',
            }, {
                date: '12.08.2015',
                content: 'Felicitation Circular &amp; Application <a href="nominal_membership_e.pdf" target="_blank"><br>Download Application for Nominal Membership (English)</a>',
                englishUrl: '',
                marathiUrl: 'circular20150812e.pdf',
            }, {
                date: '22.07.2015',
                content: 'Relaxed the condition ·of "Consent Letter" from sureties',
                englishUrl: 'Circular20150722.pdf',
            }, {
                date: '22.07.2015',
                content: 'Extension Service Counter',
                englishUrl: 'circular20150722e.pdf',
                marathiUrl: 'circular20150722m.pdf',
            }, {
                date: '15.07.2015',
                content: 'Felicitation Circular & Application <a href="sff2015m.pdf" target="_blank">Download Form (Marathi)</a>',
                marathiUrl: 'circular20150715m.pdf',
            }, {
                date: '15.07.2015',
                content: 'Felicitation Circular &amp; Application <a href="sff2015e.pdf" target="_blank">Download Form (English)</a>',
                englishUrl: 'circular20150715e.pdf',
                marathiUrl: '',
            }, {
                date: '03.07.2015',
                content: 'Submit the photocopy of Bank Passbook for making changes',
                englishUrl: 'Circular20150703.pdf'
            }, {
                date: '02.07.2015',
                content: 'Circular for Repayment of Loan',
                marathiUrl: 'Circular20150702.pdf',
            }, {
                date: '01.07.2015',
                content: 'Special Fixed Deposit Scheme for 18 months @10°/o p.a. from 01.07.2015 to 30.09.2015',
                englishUrl: 'Circular20150701.pdf',
            }, {
                date: '01.07.2015',
                content: 'Fulfilment of Promise on firts day',
                englishUrl: 'FulfilmentofPromise01072015.pdf'
            }, {
                date: '11.05.2015',
                content: 'Election Notice for 2014-15 to 2019-20',
                marathiUrl: 'election1415-1920.pdf',
            }, {
                date: '06.04.2015',
                content: 'Voters List for Registrar (8 MB PDF File)',
                englishUrl: 'Voters_List_for_Registrar.pdf',
                marathiUrl: '',
            }, {
                date: '06.04.2015',
                content: 'Finalization of Voter list Programme',
                englishUrl: 'circular20150406e.pdf'
            }, {
                date: '06.04.2015',
                content: 'Finalization of Voter list Programme',
                marathiUrl: 'circular20150406m.pdf',
            }]

        },
        {
            title: '2014 - 2011',
            circulars: [{
                date: '26.11.2014',
                content: 'Sabhasad Bhavishya Nidhi with Form',
                englishUrl: 'SabhasadBhavishyaNidhiEngkish.pdf',
                marathiUrl: '',
            }, {
                date: '26.11.2014',
                content: 'Sabhasad Bhavishya Nidhi with Form',
                englishUrl: '',
                marathiUrl: 'SabhasadBhavishyaNidhiMarathi.pdf',
            },{
                date: '1.11.2013',
                content: 'Felicitate the wards of members (<a href="flicitatioin_form_2013.pdf" target="_blank">Download Form</a>)',
                englishUrl: 'circular20131101.pdf',
                marathiUrl: '',
            }, {
                date: '12.08.2013',
                content: 'The Dividend and Interest for the Co-operative year 2012-2013',
                englishUrl: 'circular20130812.pdf',
                marathiUrl: '',
            }, {
                date: '22.07.2013',
                content: 'General Body Meeting -Agenda- on 07-07-2013 at 2:00 PM',
                englishUrl: '52agm2013.pdf',
                marathiUrl: '52agm2013.pdf',
            }, {
                date: '28.03.2013',
                content: '	Special General Body Meeting on 15-04-2013',
                englishUrl: 'spl_gbm_2013.pdf',
                marathiUrl: 'spl_gbm_2013.pdf',
            }, {
                date: '23.02.2012',
                content: '	Lakhpati Scheme, Parmanu Scheme and Balbhavishya Nidihi',
                englishUrl: '02_23_2012_min_eng.pdf',
                marathiUrl: '',
            }, {
                date: '28-07-2011',
                content: 'Minutes of 49th AGM held on 13-Aug-2011',
                englishUrl: '07_28_2011_min_eng.pdf',
                marathiUrl: '07_28_2011_min_mar.pdf',
            }]

        },
    ];
})