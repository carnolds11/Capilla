angular
  .module('oraciones')
  .controller("IndexController", function ($scope, Oraciones, supersonic) {
    $scope.oracioness = null;
    $scope.showSpinner = true;

    Oraciones.all().whenChanged( function (oracioness) {
        $scope.$apply( function () {
          $scope.oracioness = oracioness;
          $scope.showSpinner = false;
        });
    });
  });