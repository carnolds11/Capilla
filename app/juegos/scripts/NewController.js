angular
  .module('juegos')
  .controller("NewController", function ($scope, Juegos, supersonic) {
    $scope.juegos = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newjuegos = new Juegos($scope.juegos);
      newjuegos.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });