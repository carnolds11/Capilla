angular
  .module('home')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    var firstTime = JSON.parse(window.localStorage.getItem('jFirstTime'));
    $scope.networkState = undefined;

    supersonic.ui.views.current.whenVisible(function() {
      loadData();
      /*var view_comments = new supersonic.ui.View({
        location: "attraction#comments",
        id: "viewComments"
      });
      var view_map_offline = new supersonic.ui.View({
        location: "geolocation#offlineMap",
        id: "mapoffline"
      });
      supersonic.ui.views.start(view_comments).then(function(startedView) {
      });
      supersonic.ui.views.start(view_map_offline).then(function(startedView) {
      });*/

    });

    function loadData() {
	    $scope.networkState = navigator.connection.type;
	    if (firstTime == null && $scope.networkState != 'none'){
	   		var Comida = supersonic.data.model('Comida');
		    Comida.findAll().then( function(allComidas) {
			  window.localStorage.setItem('jComida', JSON.stringify(allComidas));
			});

			var Idea = supersonic.data.model('Idea');
		    Idea.findAll().then( function(allIdeas) {
			  window.localStorage.setItem('jIdea', JSON.stringify(allIdeas));
			});

			var Juegos = supersonic.data.model('Juegos');
		    Juegos.findAll().then( function(allJuegos) {
			  window.localStorage.setItem('jJuegos', JSON.stringify(allJuegos));
			});

			var Oraciones = supersonic.data.model('Oraciones');
		    Oraciones.findAll().then( function(allOraciones) {
			  window.localStorage.setItem('jOraciones', JSON.stringify(allOraciones));
			});

			var Postre = supersonic.data.model('Postre');
		    Postre.findAll().then( function(allPostres) {
			  window.localStorage.setItem('jPostre', JSON.stringify(allPostres));
			});

			var Salud = supersonic.data.model('Salud');
		    Salud.findAll().then( function(allSalud) {
			  window.localStorage.setItem('jSalud', JSON.stringify(allSalud));
			});

			window.localStorage.setItem('jFirstTime', "not first time");
			firstTime = JSON.parse(window.localStorage.getItem('jFirstTime'));
	    }
	};

  });
