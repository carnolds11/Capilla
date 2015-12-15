angular
  .module('juegos')
  .controller("IndexController", function ($scope, Juegos, supersonic) {
    $scope.juegoss = null;
    $scope.showSpinner = true;

    $scope.juegoss = JSON.parse(window.localStorage.getItem('jJuegos'));
    $scope.showSpinner = false;
  });