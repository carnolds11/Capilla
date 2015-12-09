angular
  .module('postre')
  .controller("NewController", function ($scope, Postre, supersonic) {
    $scope.postre = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newpostre = new Postre($scope.postre);
      newpostre.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });