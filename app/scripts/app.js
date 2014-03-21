'use strict';

angular.module('cmApp', ['ui.bootstrap', 'gettext'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {templateUrl: 'views/contacts.html', controller: 'AddressBookCtrl'})
      .otherwise({ redirectTo: '/contacts' });
  });
