(function () {
    'use strict';

    angular
        .module('firstAngularPro')
        .controller('DisplayAllController', DisplayAllController);

    /** @ngInject */
    function DisplayAllController($rootScope, $scope) {
        // $rootScope.loggedIN=true;
        //$scope.disTextbox=true;
        $rootScope.showLogout = true;

        $scope.emailId = $rootScope.emailId;
        $scope.mobile = $rootScope.mobile;
        $scope.dob = $rootScope.dob;

        console.log($scope.emailId);

        $scope.remove = function (item) {
            var index = $scope.UserData.indexOf(item);
            $scope.UserData.splice(index, 1);
        }


       



        $scope.addUser = function () {
            var newUser = {
                "emailId": $scope.emailId,
                "mobile": $scope.mobile,
                "dob": $scope.dob
            }
            $scope.UserData.push(newUser);
        }

        $scope.UserData = [{
            "emailId": "sfsdf@fg",
            "mobile": "9151654611",
            "dob": "02/02/1212"
        }, {
            "emailId": "sfsdf@fg",
            "mobile": "9151654611",
            "dob": "02/02/1212"
        }, {
            "emailId": "sfsdf@fg",
            "mobile": "9151654611",
            "dob": "02/02/1212"
        }, {
            "emailId": "sfsdf@fg",
            "mobile": "9151654611",
            "dob": "02/02/1212"
        }];

    }
})();
