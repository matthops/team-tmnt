'use strict';

angular.module('teamTmntApp')
  .directive('dvPopup', function () {
    return {
      template: "<div class='popup' style='display: none' ng-transclude></div>",
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs) {
      	var selector = attrs.dvPopup,
      	targets = angular.element(document.body).find(selector),
      	show = false;

      	targets.on("click", function () {
      		show = !show;
      		// element.children(".popup").css("display", (show) ? "block" : "none").
      		element.find('.popup').toggle();
      	});

      }
    };
  });
