angular
  .module('postre')
  .controller("ShowController", function ($scope, Postre, supersonic) {
    $scope.postre = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Postre.find($scope.dataId).then( function (postre) {
        $scope.$apply( function () {
          $scope.postre = postre;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.postre.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });