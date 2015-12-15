angular
  .module('salud')
  .controller("NewController", function ($scope, Salud, supersonic) {
    $scope.salud = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newsalud = new Salud($scope.salud);
      newsalud.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });