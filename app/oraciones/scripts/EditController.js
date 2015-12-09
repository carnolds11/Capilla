angular
  .module('oraciones')
  .controller("EditController", function ($scope, Oraciones, supersonic) {
    $scope.oraciones = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Oraciones.find(steroids.view.params.id).then( function (oraciones) {
      $scope.$apply(function() {
        $scope.oraciones = oraciones;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.oraciones.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
