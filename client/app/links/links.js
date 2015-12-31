angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data= Links.data;
  // $scope.data.test = [{url:'test.com'},{url:'test2.com'},{url:'test3.com'}];
  $scope.getLinks= Links.getLinks; 
  $scope.getLinks()
    .then(function(data){
      $scope.data.links= data; 
      console.log('data', JSON.stringify(data)); 
    }); 
});
