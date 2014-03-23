'use strict';

describe('Controller: AddressBookCtrl', function () {

  // load the controller's module
  beforeEach(module('cmApp', ['ngRoute', 'ui.bootstrap', 'gettext']));

  var Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $modal, $log) {
    scope = $rootScope.$new();
    Ctrl = $controller('AddressBookCtrl', {
      $scope: scope, Contact: Contact, $modal: $modal, $log: $log
    });
  }));

  it('should load dummy list of contacts', function () {
    expect(scope.contacts.length).toBeTruthy();
  });

  it('should add new contact to the list', function () {
    var initialCollectionLength = scope.contacts.length;
    scope.add();
    expect(scope.contacts.length).toBe(initialCollectionLength + 1);
  });
});
