(function() {

    'use strict';

    angular.module('app.welcome')
        .config(router);

    router.$inject = ["$stateProvider", "USER_ROLES", "PATHS"];

    /*
     * Config router.
     *
     * @param {object} $stateProvider
     * @param {object} USER_ROLES
     * @param {object} PATHS
     * @return void
     */
    function router($stateProvider, USER_ROLES, PATHS) {
        var featuresPath = PATHS.features;
        var data = {};

        data.authorizedRoles = [USER_ROLES.guest];

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                template: '<div class="center"><h1>Welcome to application, guest</h1></div>',
                data: data
            })
            ;
    }

})();
