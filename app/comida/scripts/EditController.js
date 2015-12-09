angular
  .module('comida')
  .controller("EditController", function ($scope, Comida, supersonic) {
    $scope.comida = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Comida.find(steroids.view.params.id).then( function (comida) {
      $scope.$apply(function() {
        $scope.comida = comida;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.comida.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
