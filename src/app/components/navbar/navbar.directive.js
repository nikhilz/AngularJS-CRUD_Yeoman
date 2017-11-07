(function() {
  'use strict';

  angular
    .module('firstAngularPro')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
         
      },
      controller: NavbarController,
      controllerAs: 'vm',
      
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController( $rootScope,moment,$scope) {
      var vm = this;
     //$scope.showLogout=true;
     
      $scope.showLogout=$rootScope.showLogout


      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
