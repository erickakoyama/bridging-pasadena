var myApp = angular.module('myApp', ['ngRoute', 'onlineServicesControllers']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/online-services',{
    templateUrl: 'partials/online-services.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/online-services'
  });
}]);
