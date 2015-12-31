angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Shorten) {

  // $scope.link = {};
  //on calling addLink, pass in the link (retrieved from input box)

  $scope.addLink = function (link) {
    console.log('does $scope.link exist? ', $scope.link);
    console.log('link is: ', link); 
    return Shorten.addLink(link); 
  };



  // var fakeLink= {url: 'http://www.test.com'}; 
  // $scope.addLink(fakeLink)
  //   .then(function (data) {
  //     console.log('data from addlink', data); 
  //   }); 
});

