angular
  .module('juegos')
  .controller("ShowController", function ($scope, Juegos, supersonic) {
    $scope.juegos = null;
    $scope.los_juegos = [];
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      var savedJuegos = JSON.parse(window.localStorage.getItem('jJuegos'));
      for(var key in savedJuegos){
        if(savedJuegos[key].id == $scope.dataId){
          $scope.juegos = savedJuegos[key];
          break;
        }
      }
      $scope.sub_frases = [];
      $scope.los_juegos = $scope.juegos.actividad.split("*");
      for(var i = 0; i < $scope.los_juegos.length; i++){
        $scope.sub_frases[i] = $scope.los_juegos[i].split("+");
      }
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
      $scope.juegos.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }*/
  });