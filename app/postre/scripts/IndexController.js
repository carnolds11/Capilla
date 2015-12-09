angular
  .module('postre')
  .controller("IndexController", function ($scope, Postre, supersonic) {
    $scope.postres = null;
    $scope.showSpinner = true;

    Postre.all().whenChanged( function (postres) {
        $scope.$apply( function () {
          $scope.postres = postres;
          $scope.showSpinner = false;
        });
    });
  });