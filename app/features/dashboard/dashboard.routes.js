(function() {

    'use strict';

    angular.module('app.dashboard')
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
        var templatePath = PATHS.features + 'dashboard/views/';
        var data = {};

        data.authorizedRoles = [USER_ROLES.admin, USER_ROLES.member];

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: templatePath + 'index.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                data: data
            })
            ;
    }

})();
