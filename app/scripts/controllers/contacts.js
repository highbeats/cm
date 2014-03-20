'use strict';

angular.module('cmApp')
  .controller('ContactsCtrl', function ($scope) {

    /**
     * Open modal
     */
    $scope.open = function (task) {

      $scope.task = $scope.tasks[$scope.tasks.indexOf(task)];

      var modal = $modal.open({
        templateUrl: 'partials/task_modal_popup',
        scope: $scope,
        resolve: {
          task: function () {
            return $scope.task;
          }
        }
      });

      modal.result.then(function (task) {
        if (task.tags.length) {
          task.tags = task.tags.split(',');
          socket.emit('task:done', task);
        }
        $scope.task = null;
      }, $log.info);

      angular.extend($scope, { close: modal.close });
    }

    $scope.contacts = [
      {name: 'Markus Zuckermann', email: 'mz@facepalm.io', phone: '222333222'},
      {name: 'John Smith', email: 'js@secret.io', phone: '222333555'}
    ];

    $scope.contact = null;

    $scope.add = function (contact) {
      $scope.contacts.push(contact);
    }

    $scope.rem = function (contact) {
      $scope.splice($scope.contacts, $scope.contacts.indexOf(contact));
    }

    $scope.show = function (contact) {
      $scope.contact = contact;
    }
  })
