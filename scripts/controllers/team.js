'use strict';

angular.module('teamTmntApp')
  .controller('TeamCtrl', function ($scope, team) {
    $scope.team = team;
    angular.forEach($scope.team, function(value){
    	$scope.characters = value;
    	console.log(value)
    });
  });
