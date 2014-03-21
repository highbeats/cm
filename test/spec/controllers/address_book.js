'use strict';

describe('Controller: AddressBookCtrl', function () {

  // load the controller's module
  beforeEach(module('ui.bootstrap'));
  beforeEach(module('cmApp', ['ui.bootstrap']));

  var Ctrl
    , scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ctrl = $controller('AddressBookCtrl', {
      $scope: scope, Contact: Contact
    });
  }));

  it('should load dummy list of contacts', function () {
    expect(scope.contacts.length).toBeTruthy();
  });

  it('should attach localization variables', function () {
    expect(scope.lang).toBe('en');
    expect(_.isObject(scope.t)).toBeTruthy();
  });
});
