(function() {

    'use strict';

    angular.module('app.session')
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
        var templatePath = PATHS.features + 'session/views/';

        $stateProvider
            .state('session', {
                url: '/session',
                template: '<div ui-view></div',
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
            .state('session.login', {
                url: '/login',
                templateUrl: templatePath + 'login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                data: {
                    authorizedRoles: [USER_ROLES.guest]
                }
            })
            .state('session.logout', {
                url: '/logout',
                templateUrl: templatePath + 'login.html',
                controller: 'LogoutController',
                controllerAs: 'vm',
                data: {
                    authorizedRoles: [USER_ROLES.member, USER_ROLES.admin]
                }
            })
            ;
    }

})();
