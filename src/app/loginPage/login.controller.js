(function() {
  'use strict';

  angular
    .module('firstAngularPro')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope,$location,$rootScope,$http) {
    // $rootScope.loggedIN=false;
         
    $rootScope.showLogout=false;    

    $scope.submitLogin=function(){
       /* var userName = "admin" ;
        var passWord = "pass" ;*/
        var userName=$scope.username;
        var passWord=$scope.passwordplain;
/*        if(userName==$scope.username && passWord==$scope.passwordplain){
*/      var callUrl="http://localhost:8082/login";
        var data=({
          userName:userName,
          passWord:passWord
        });
       $http({
                 method: "POST",
                 url: callUrl,
                 data: angular.toJson(data),
                  headers: { 'Content-Type': 'text/plain' }
                 
               }).success(function(response){
                 console.log(response);
                   if(response==true){
                       $location.path("/success");
                   }else
                    alert("Invalid input");

                 }).error(function(){
                 

                 })

           

        /*}else{
             $scope.loginError=true; 
        }*/

    }

   
    

  }
})();
