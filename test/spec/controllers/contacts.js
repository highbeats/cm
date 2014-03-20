'use strict';

describe('Controller: ContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('cmApp'));

  var ContactsCtrl
    , scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactsCtrl = $controller('ContactsCtrl', { $scope: scope });
  }));

  it('should attach a list of contacts', function () {
    expect(scope.contacts.length).toBe(2);
  });
});

