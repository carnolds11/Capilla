angular
  .module('oraciones')
  .controller("NewController", function ($scope, Oraciones, supersonic) {
    $scope.oraciones = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      neworaciones = new Oraciones($scope.oraciones);
      neworaciones.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });