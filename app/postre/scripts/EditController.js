angular
  .module('postre')
  .controller("EditController", function ($scope, Postre, supersonic) {
    $scope.postre = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Postre.find(steroids.view.params.id).then( function (postre) {
      $scope.$apply(function() {
        $scope.postre = postre;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.postre.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
