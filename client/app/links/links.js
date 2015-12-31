angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data= Links.data;
  $scope.getLinks= Links.getLinks; 
  $scope.getLinks()
    .then(function(data){
      $scope.data.links= data; 
    }); 
});
