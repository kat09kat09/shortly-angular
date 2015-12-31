angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Shorten) {

  $scope.link = {};
  $scope.addLink = function (link) {
    return Shorten.addLink(link); 
  };

  // var fakeLink= {url: 'http://www.test.com'}; 
  // $scope.addLink(fakeLink)
  //   .then(function (data) {
  //     console.log('data from addlink', data); 
  //   }); 
});
