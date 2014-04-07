'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

var paypalApp = angular.module('paypalDemo', ["underscore",
                              "ngRoute",
                              "mobile-angular-ui",
                              "mobile-angular-ui.touch",
                              "mobile-angular-ui.scrollable"
]);

paypalApp.config(function ($routeProvider) {
    $routeProvider.
    when('/transactions/new', {
        controller: 'transactionCtrl',
        templateUrl: 'assets/js/templates/new_transaction.html'
    }).
    when('/transactions', {
        controller: 'transactionHistoryCtrl',
        templateUrl: 'assets/js/templates/transaction_history.html'
    }).
    when('/transaction_confirmation', {
        controller: 'transactionConfirmationCtrl',
        templateUrl: 'assets/js/templates/transaction_confirmation.html'
    }).
    when('/', {
        controller: 'homepageCtrl',
        templateUrl: 'assets/js/templates/homepage.html'
    }).
    otherwise({
        redirectTo: '/'
    });
});

paypalApp.run(function($rootScope, $location) {
    $rootScope.location = $location;
});
