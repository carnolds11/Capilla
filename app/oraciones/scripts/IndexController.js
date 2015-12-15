angular
  .module('oraciones')
  .controller("IndexController", function ($scope, Oraciones, supersonic) {
    $scope.oracioness = null;
    $scope.showSpinner = true;

    $scope.oracioness = JSON.parse(window.localStorage.getItem('jOraciones'));
    $scope.showSpinner = false;
  });