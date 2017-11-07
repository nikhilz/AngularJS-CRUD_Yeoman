(function() {
  'use strict';

  angular
    .module('firstAngularPro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
