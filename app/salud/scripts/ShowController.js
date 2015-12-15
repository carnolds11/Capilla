angular
  .module('salud')
  .controller("ShowController", function ($scope, Salud, supersonic) {
    $scope.salud = null;
    $scope.enfermedades = [];
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      var savedSalud = JSON.parse(window.localStorage.getItem('jSalud'));
      for(var key in savedSalud){
        if(savedSalud[key].id == $scope.dataId){
          $scope.salud = savedSalud[key];
          break;
        }
      }
      $scope.sub_frases = [];
      $scope.enfermedades = $scope.salud.características.split("*");
      for(var i = 0; i < $scope.enfermedades.length; i++){
        $scope.sub_frases[i] = $scope.enfermedades[i].split("+");
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

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.salud.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });