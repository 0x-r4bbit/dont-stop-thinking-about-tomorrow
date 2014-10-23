'use strict';

angular.module('ngDuoApp')
    /**
     * Displays the image of two superheroes in action, while playing the original 'Batman' theme song.
     * How cool is that!
     *
     * NOTE: To avoid any copyright issues during the talk, we'll keep it low with the music ;)
     *
     * @param {string} toTheRescue The image path
     * @example <ng-duo to-the-rescue="{{my_image_path}}"></ng-duo>
     */
    .directive('ngDuo', function() {
        return {
            restrict: "EA",
            scope: {
                toTheRescue: "@"
            },
      template: '<img style="border: none; margin: 0;  max-width: 500px; max-height: 500px;"class="angular-heroes" ng-src="{{toTheRescue}}">'
        }
    });
