angular
  .module('comida')
  .controller("IndexController", function ($scope, Comida, supersonic) {
    $scope.comidas = null;
    $scope.showSpinner = true;

    Comida.all().whenChanged( function (comidas) {
        $scope.$apply( function () {
          $scope.comidas = comidas;
          $scope.showSpinner = false;
        });
    });
  });