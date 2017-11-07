(function() {
  'use strict';

  angular
    .module('firstAngularPro')
    .controller('successController', successController);

  /** @ngInject */
  function successController($rootScope,$scope,$location) {
    // $rootScope.loggedIN=true;
         
    $rootScope.showLogout=true;

    $scope.invalidDetails=false;
    $scope.emailError=false
   
    $scope.submitDetails = function(){
       if ($scope.emailId!=null && $scope.mobile!=null && $scope.dob!=null) {
            $rootScope.emailId=$scope.emailId;
            $rootScope.mobile=$scope.mobile;
            $rootScope.dob=$scope.dob;

            $scope.invalidDetails=false;
       $location.path("/displayAll");

       } else {
           $scope.invalidDetails=true;
       }

    }

  }
})();
