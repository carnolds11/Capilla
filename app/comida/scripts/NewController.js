angular
  .module('comida')
  .controller("NewController", function ($scope, Comida, supersonic) {
    $scope.comida = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newcomida = new Comida($scope.comida);
      newcomida.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });