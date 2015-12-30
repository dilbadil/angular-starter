(function() {

    'use strict';

    // app core module
    angular.module('app.core', [
        /* Agular modules */
        'ngAnimate',

        /* Cross-app modules */
        'blocks.notifier',
        'blocks.logger',
        'blocks.dialog',
        'blocks.stringer',

        /* 3rd-party modules */
        'ui.router',
        'ngLodash',
        'blockUI',
        ]);

})();
