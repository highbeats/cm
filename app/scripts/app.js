'use strict';

angular.module('cmApp', ['ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/contacts', {templateUrl: 'views/contacts.html', controller: 'AddressBookCtrl'})
      .otherwise({ redirectTo: '/contacts' });
  }]);
