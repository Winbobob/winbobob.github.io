var app = angular.module('searchApp', []);

app.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

app.controller('searchController', ['$scope', '$http', function($scope, $http){
  $scope.pesquisar = function(q) {
    if (q != "" && q != undefined && q.length >= 1) {
      $http.get('/search.json', { "data" : q }).success(function(data) {
        $scope.posts = data;
      }).error(function(data) {
        console.error('error...');
      });
    } else {
      $scope.posts = [];
    }
  };
}]);
