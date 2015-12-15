angular
  .module('juegos')
  .controller("EditController", function ($scope, Juegos, supersonic) {
    $scope.juegos = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Juegos.find(steroids.view.params.id).then( function (juegos) {
      $scope.$apply(function() {
        $scope.juegos = juegos;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.juegos.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
