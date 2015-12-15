angular
  .module('postre')
  .controller("IndexController", function ($scope, Postre, supersonic) {
    $scope.postres = null;
    $scope.showSpinner = true;

    $scope.postres = JSON.parse(window.localStorage.getItem('jPostre'));
    $scope.showSpinner = false;
  });