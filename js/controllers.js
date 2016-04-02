var myApp = angular.module('myApp',['angularUtils.directives.dirPagination']);

myApp.controller('myController',function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.services = data;
  });
});

myApp.filter('removeSpaces', function(){
  return function(string) {
        if (!angular.isString(string)) {
            return string;
        }
        return string.replace(/[\s]/g, '');
    };
});
