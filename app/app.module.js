(function() {
    'use strict';

    // app module
    angular.module('app', [
        /* Shared modules */
        'app.core',

        /* Feature modules */
        'app.welcome',
        'app.dashboard',
        'app.registration',
        'app.session',
        
        ]);

})();
