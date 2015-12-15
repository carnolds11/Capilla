angular
  .module('postre')
  .controller("ShowController", function ($scope, Postre, supersonic) {
    $scope.postre = null;
    $scope.preparaciones = [];
    $scope.ingredientes = [];
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      var savedPostres = JSON.parse(window.localStorage.getItem('jPostre'));
      for(var key in savedPostres){
        if(savedPostres[key].id == $scope.dataId){
          $scope.postre = savedPostres[key];
          break;
        }
      }
      $scope.preparaciones = $scope.postre.preparacion.split("+");
      $scope.ingredientes = $scope.postre.ingredientes.split("+");
      $scope.showSpinner = false;
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

    /*$scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.postre.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }*/
  });