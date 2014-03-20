'use strict';

angular.module('cmApp', ['ui.bootstrap'])
  .value('Locals', {
      en: {
        title: 'Address Book',
        contact: { name: 'Name', phone: 'Phone', address: 'Address', emails: 'Emails' }
      },
      ru: {
        title: 'Адресная Книга',
        contact: { name: 'ФИО', phone: 'Телефон', address: 'Место жительства', emails: 'Электронная почта' }
      }
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {templateUrl: 'views/contacts.html', controller: 'AddressBookCtrl'})
      .otherwise({ redirectTo: '/contacts' });
  });
