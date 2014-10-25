'use strict';

angular.module('ngDuoApp')
  .controller('MainCtrl', function ($scope) {
        // hardcoded paths of the images of our 'angular' super heroes
        var SUPER_HEROES = ['ngDuoApp/images/superhero.ico', 'ngDuoApp/images/ng-duo.gif', 'ngDuoApp/images/1.gif', 'ngDuoApp/images/2.gif', 'ngDuoApp/images/3.gif'];

        $scope.superHeroes = SUPER_HEROES;
        $scope.heroesOfTheHour = $scope.superHeroes[0];

        /**
         * Sets a new random image path
         */
        $scope.setHeroesOfTheHour = function() {
            var index = generateRandomNumber($scope.superHeroes.length);
            $scope.heroesOfTheHour = $scope.superHeroes[index];
        };

        /**
         * Returns a random number within the given range
         * @param {number} range
         * @returns {number}
         */
        var generateRandomNumber = function(range) {
            return Math.floor(Math.random() * range);
        };
  });
