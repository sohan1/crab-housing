var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

    .factory('NavigationService', function () {
        var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: []
        }, {
            name: "About",
            classis: "active",
            anchor: "about",
            subnav: []
        }, {
            name: "Schemes",
            classis: "active",
            anchor: "",
            subnav: [{
                name: "Savings",
                classis: "active",
                anchor: "savings",
            }, {
                name: "Loan",
                classis: "active",
                anchor: "loan",
            }]
        }, {
            name: "Committee",
            classis: "active",
            anchor: "committee",
            subnav: []
        }, {
            name: "Reports",
            classis: "active",
            anchor: "",
            subnav: [{
                name: "Annual Report",
                classis: "active",
                anchor: "reports",
            }, {
                name: "Audit Rectification",
                classis: "active",
                anchor: "audit"
            }]
        }, {
            name: "Gallery",
            classis: "active",
            anchor: "gallery",
            subnav: []
        }, {
            name: "Downloads",
            classis: "active",
            anchor: "downloads",
            subnav: []
        }, {
            name: "Notices & Circulars",
            classis: "active",
            anchor: "notices-circulars",
            subnav: []
        }, {
            name: "Rules & Amendments",
            classis: "active",
            anchor: "rules-amendments",
            subnav: []
        }, {
            name: "Contact",
            classis: "active",
            anchor: "contact",
            subnav: []
        }];

        return {
            getnav: function () {
                return navigation;
            },
            makeactive: function (menuname) {
                for (var i = 0; i < navigation.length; i++) {
                    if (navigation[i].name == menuname) {
                        navigation[i].classis = "active";
                    } else {
                        navigation[i].classis = "";
                    }
                }
                return menuname;
            },

        };
    });