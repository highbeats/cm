'use strict';

angular.module('cmApp')
  .controller('AddressBookCtrl', function ($modal, Contact, Locals, $scope) {

    $scope.contacts = Contact.query();

    $scope.lang = 'en';

    $scope.switchLang = function () {
      ($scope.lang == 'en') ? $scope.lang = 'ru' : $scope.lang = 'en'
    }

    $scope.t = Locals;

    $scope.show = function (contact) {
      $scope.open(contact);
    }

    $scope.add = function () {
      $scope.contacts.push(new Contact());
      $scope.open(_.last($scope.contacts));
    }

    $scope.open = function (contact) {
      $scope.contact = $scope.contacts[$scope.contacts.indexOf(contact)];
      var modal = $modal.open({
        templateUrl: 'contact_modal_popup.html',
        scope: $scope,
        resolve: {
          contact: function () {
            return $scope.contact;
          }
        }
      });

      //modal.result.then(ifOk, ifNotOk);

      angular.extend($scope, {close: modal.close});
    }
  });

