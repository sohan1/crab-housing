var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home"
    }, {
        name: "About",
        classis: "active",
        anchor: "about"
    }, {
        name: "Schemes",
        classis: "active",
        anchor: "schemes"
    }, {
        name: "Committee",
        classis: "active",
        anchor: "committee"
    }, {
        name: "Reports",
        classis: "active",
        anchor: "reports"
    }, {
        name: "Downloads",
        classis: "active",
        anchor: "downloads"
    }, {
        name: "Notices & Circulars",
        classis: "active",
        anchor: "notices-circulars"
    }, {
        name: "	Rules & Amendments",
        classis: "active",
        anchor: "rules-amendments"
    }, {
        name: "	Contact",
        classis: "active",
        anchor: "contact"
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
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