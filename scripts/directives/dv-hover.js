'use strict';

angular.module('teamTmntApp')
  .directive('dvHover', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
		$(element.css).hover(
      }
    };
  });
