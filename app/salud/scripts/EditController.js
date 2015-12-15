angular
  .module('salud')
  .controller("EditController", function ($scope, Salud, supersonic) {
    $scope.salud = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Salud.find(steroids.view.params.id).then( function (salud) {
      $scope.$apply(function() {
        $scope.salud = salud;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.salud.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
