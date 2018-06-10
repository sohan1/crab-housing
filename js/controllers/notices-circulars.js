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
                content: 'Regd. KYC <strong> (Download<a href="KYC FORM.pdf" target="_blank"> KYC Form</a>)</strong>',
                englishUrl: 'KYC%20CIRCULAR.pdf',
                marathiUrl: 'KYC%20CIRCULAR.pdf',
            }, {
                date: '20.07.2017',
                content: '56th AGM Notice',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '16.06.2017',
                content: '<p>Student Felicitation  (Year: 2016-2017) </p><p align="right"><a href="pr.html">Download Application Form</a></p>',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '01.05.2017',
                content: 'Changes in Loan application Form',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '28.04.2017',
                content: 'Cheque Drop Box Facility',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '06.04.2017',
                content: 'Cash transaction more than 20K',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '15.03.2017',
                content: 'New Office Bearers',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '01.05.2017',
                content: '	KYC',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }]
        },
        {
            title: '2016',
            circulars: [{
                date: '09.12.2016',
                content: 'Circular Reg. Special loan (not to pay one forth amount )',
                englishUrl: 'KYC%20CIRCULAR.pdf',
                marathiUrl: 'KYC%20CIRCULAR.pdf',
            }, {
                date: '09.12.2016',
                content: 'Circular for hold deposits',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '05.12.2016',
                content: 'Revised Int. Rate of Investment',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '02.12.2016',
                content: 'Fulfillment of Promise (Reduce Int. Rate of Special Loan)',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '06.11.2016',
                content: 'Clarification on Over draft',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '02.11.2016',
                content: 'Invitation for student Felicitation',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '26.10.2016',
                content: 'Circular',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '25.10.2016',
                content: 'Fulfilment of Promise',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '13.07.2016',
                content: '55th AGM Notice',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '13.07.2016',
                content: 'Investment Int. rate',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '01.07.2016',
                content: 'HSC and SSC Student&nbsp;felicitation Download form<a href="Felicitatioin form English _March 2016_.pdf" target="_blank"> English</a> &nbsp;&nbsp;&nbsp;&nbsp;<a href="Felicitatioin form Marathi _March 2016_.pdf" target="_blank">Marathi</a>',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '29.06.2016',
                content: 'Sundry Creditors Gazetted Employees',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '29.06.2016',
                content: 'Sundry Creditors Gazetted Employees',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '09.06.2016',
                content: 'Reduce interest rate from 12°/o to 11.5°/o on Special Loan w.e.f.01.06.2016.',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '16.05.2016',
                content: 'Fulfilment of Promise',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '07.03.2016',
                content: 'Extend Fixed Deposit Scheme for 18 months @10°/o p.a.',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '23.02.2016',
                content: 'Award',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '08.02.2016',
                content: 'Fulfilment of Promise',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }]

        },      
          {
            title: '2015',
            circulars: [{
                date: '18.12.2015',
                content: 'NEFT /RTGS facility on Ordinary / Special Loan',
                englishUrl: 'KYC%20CIRCULAR.pdf',
                marathiUrl: 'KYC%20CIRCULAR.pdf',
            }, {
                date: '30.11.2015',
                content: 'Interest on Deposit Scheme',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '30.11.2015',
                content: 'Enhancement of Special Loan',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '30.10.2015',
                content: 'Disburse the Ordinary & Special Loan by <br> RTGS/NEFT',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '18.09.2015',
                content: 'Notice Reg. Div. & Int.',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: 'Compile Report 2013-14',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: '53th AGM minutes held on 19-8-2014',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: '53th AGM minutes held on 19-8-2014',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: '53th AGM minutes held on 19-8-2014',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: 'Special AGM minutes held on 16-7-2014',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: '	Special AGM minutes held on 16-7-2014',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: 'Special AGM minutes held on 16-7-2014',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.09.2015',
                content: 'Notice',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '28.08.2015',
                content: 'Extend Special Fixed Deposit Scheme for 18 months @10°/o p.a.',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '17.08.2015',
                content: '54th AGM',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '17.08.2015',
                content: '54th AGM',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '12.08.2015',
                content: 'Felicitation Circular &amp; Application <br> <a href="nominal_membership_m.pdf" target="_blank">Download Application for Nominal Membership (Marathi)</a>',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '22.07.2015',
                content: 'Relaxed the condition ·of "Consent Letter" from sureties',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '22.07.2015',
                content: 'Extension Service Counter',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '22.07.2015',
                content: 'Extension Service Counter',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '15.07.2015',
                content: 'Felicitation Circular & Application <a href="sff2015m.pdf" target="_blank">Download Form (Marathi)</a>',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '15.07.2015',
                content: 'Felicitation Circular &amp; Application <a href="sff2015e.pdf" target="_blank">Download Form (English)</a>',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '03.07.2015',
                content: 'Submit the photocopy of Bank Passbook for making changes',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '02.07.2015',
                content: 'Circular for Repayment of Loan',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '01.07.2015',
                content: 'Special Fixed Deposit Scheme for 18 months @10°/o p.a. from 01.07.2015 to 30.09.2015',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '01.07.2015',
                content: 'Fulfilment of Promise on firts day',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '11.05.2015',
                content: 'Election Notice for 2014-15 to 2019-20',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '06.04.2015',
                content: 'Voters List for Registrar (8 MB PDF File)',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '06.04.2015',
                content: 'Finalization of Voter list Programme',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '06.04.2015',
                content: 'Finalization of Voter list Programme',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }]

        },
        {
            title: '2014 - 2011',
            circulars: [{
                date: '26.11.2014',
                content: 'Sabhasad Bhavishya Nidhi with Form',
                englishUrl: 'KYC%20CIRCULAR.pdf',
                marathiUrl: 'KYC%20CIRCULAR.pdf',
            }, {
                date: '26.11.2014',
                content: 'Sabhasad Bhavishya Nidhi with Form',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            },{
                date: '1.11.2013',
                content: 'Felicitate the wards of members (<a href="flicitatioin_form_2013.pdf" target="_blank">Download Form</a>)',
                englishUrl: 'KYC%20CIRCULAR.pdf',
                marathiUrl: 'KYC%20CIRCULAR.pdf',
            }, {
                date: '12.08.2013',
                content: 'The Dividend and Interest for the Co-operative year 2012-2013',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '22.07.2013',
                content: 'General Body Meeting -Agenda- on 07-07-2013 at 2:00 PM',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '28.03.2013',
                content: '	Special General Body Meeting on 15-04-2013',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '23.02.2012',
                content: '	Lakhpati Scheme, Parmanu Scheme and Balbhavishya Nidihi',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }, {
                date: '28-07-2011',
                content: 'Minutes of 49th AGM held on 13-Aug-2011',
                englishUrl: '56_AGM_NOTICE.pdf',
                marathiUrl: '56_AGM_NOTICE.pdf',
            }]

        },
    ];
})