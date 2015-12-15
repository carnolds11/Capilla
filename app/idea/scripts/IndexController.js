angular
  .module('idea')
  .controller("IndexController", function ($scope, Idea, supersonic) {
    $scope.ideas = null;
    $scope.showSpinner = true;

    $scope.ideas = JSON.parse(window.localStorage.getItem('jIdea'));
    $scope.showSpinner = false;

  });