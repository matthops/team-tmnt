'use strict';

angular.module('teamTmntApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

	  $stateProvider 
	    .state('main', {
	      url: "/",
	      templateUrl: "views/main.html",
	      controller: "MainCtrl",
	      resolve: {
                   teams: function(TurtleService){
                    return TurtleService.getTeams();
                    }
               }
	    })
	    .state('team', {
	      url: "/teamview/:teamId",
	      templateUrl: "views/teamview.html",
	      controller: "TeamCtrl",
	      resolve: {
                     team: function(TurtleService, $stateParams) {
                             return TurtleService.getTeam($stateParams.teamId);
                         }
                }
	    })
    });

