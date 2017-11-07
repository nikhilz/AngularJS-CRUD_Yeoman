(function() {
  'use strict';

  angular
    .module('firstAngularPro')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/loginPage/login.html',
        controller: 'LoginController'
      })
      .when('/success', {
        templateUrl: 'app/successPage/success.html',
        controller: 'successController'
      })
      .when('/displayData', {
        templateUrl: 'app/displayData/displayData.html',
        controller: 'displayDataController'
      })
      .when('/displayAll', {
        templateUrl: 'app/DisplayUsers/displayAll.html',
        controller: 'DisplayAllController'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  }

})();
