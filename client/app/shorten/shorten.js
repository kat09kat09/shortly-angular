angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Shorten) {

  $scope.link = {};

  $scope.addLink = function () {
    Shorten.addLink(); 
  };

});
