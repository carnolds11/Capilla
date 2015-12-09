angular
  .module('oraciones')
  .controller("ShowController", function ($scope, Oraciones, supersonic) {
    $scope.oraciones = null;
    $scope.las_oraciones = [];
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Oraciones.find($scope.dataId).then( function (oraciones) {
        $scope.$apply( function () {
          $scope.oraciones = oraciones;
          $scope.sub_frases = [];
          $scope.las_oraciones = oraciones.oraciones.split("*");
          for(var i = 0; i < $scope.las_oraciones.length; i++){
            $scope.sub_frases[i] = $scope.las_oraciones[i].split("+");
          }
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
      $scope.oraciones.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });