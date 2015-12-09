angular
  .module('comida')
  .controller("ShowController", function ($scope, Comida, supersonic) {
    $scope.comida = null;
    $scope.recetas = [];
    $scope.showSpinner = true;
    $scope.dataId = undefined;
    //$scope.image-url = "";

    var _refreshViewData = function () {
      Comida.find($scope.dataId).then( function (comida) {
        $scope.$apply( function () {
          $scope.comida = comida;
          $scope.sub_frases = [];
          $scope.recetas = comida.receta.split("*");
          for(var i = 0; i < $scope.recetas.length; i++){
            $scope.sub_frases[i] = $scope.recetas[i].split("+");
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
      var options = {
        message: "¿Estás seguro de que deseas eliminar esta receta permanentemente?",
        buttonLabels: ["Eliminar", "Cancelar"]
      };
      supersonic.ui.dialog.confirm("¡Atención!", options).then(function(index) {
        if (index == 0) {
          supersonic.logger.log("User is awesome!");
          $scope.showSpinner = true;
          $scope.comida.delete().then( function () {
            supersonic.ui.layers.pop();
          });
        } else {
          supersonic.logger.log("User wasn't awesome. :(");
        }
      });
    }
  });