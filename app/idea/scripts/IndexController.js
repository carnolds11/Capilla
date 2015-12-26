angular
  .module('idea')
  .controller("IndexController", function ($scope, Idea, supersonic) {
    $scope.ideas = null;
    $scope.showSpinner = true;

    $scope.ideas = JSON.parse(window.localStorage.getItem('jIdea'));
    $scope.sub_frases = [];

    for(var i = 0; i < $scope.ideas.length; i++){
        $scope.sub_frases[i] = $scope.ideas[i].tip.split("+");
    }
    $scope.showSpinner = false;

  });