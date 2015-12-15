angular
  .module('salud')
  .controller("IndexController", function ($scope, Salud, supersonic) {
    $scope.saluds = null;
    $scope.showSpinner = true;

    $scope.saluds = JSON.parse(window.localStorage.getItem('jSalud'));
    $scope.showSpinner = false;
  });