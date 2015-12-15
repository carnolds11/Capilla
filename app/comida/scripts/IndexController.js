angular
  .module('comida')
  .controller("IndexController", function ($scope, supersonic) {

    $scope.showSpinner = true;
    $scope.comidas = JSON.parse(window.localStorage.getItem('jComida'));
    $scope.showSpinner = false;
    

    /*Comida.all().whenChanged( function (comidas) {
        $scope.$apply( function () {
          $scope.comidas = comidas;
          $scope.showSpinner = false;
        });
    });*/
  });