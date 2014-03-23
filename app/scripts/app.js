'use strict';

angular.module('cmApp', ['ngRoute', 'ui.bootstrap', 'gettext'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {templateUrl: 'views/contacts.html', controller: 'AddressBookCtrl'})
      .otherwise({ redirectTo: '/contacts' });
  });
