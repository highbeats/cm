'use strict';

angular.module('cmApp')
  .controller('AddressBookCtrl', function ($modal, Contact, $scope, $log, gettextCatalog) {

    $scope.contacts = Contact.query();

    $scope.show = function (contact) {
      $scope.open(contact);
    }

    $scope.add = function () {
      $scope.contacts.push(new Contact());
      $scope.open(_.last($scope.contacts));
    }

    $scope.forget = function (contact) {
      $scope.contacts.splice($scope.contacts.indexOf(contact), 1);
    }

    $scope.open = function (contact) {
      $scope.contact = $scope.contacts[$scope.contacts.indexOf(contact)];
      var modal = $modal.open({
        templateUrl: 'views/partials/modal_contact_form.html',
        scope: $scope,
        resolve: {
          contact: function () {
            return $scope.contact;
          }
        }
      });

      modal.opened.then($log.info, $log.err);
      modal.result.then(function () {
        $scope.contact = null;
      }, function () {
        $scope.forget($scope.contact);
        $scope.contact = null;
      });
    }

    $scope.changeLanguage = function (ln) {
      gettextCatalog.currentLanguage = ln;
    }
  });
