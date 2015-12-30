(function() {

    'use strict';

    angular.module('app')
        .config(router)
        .run(checkState)
    ;

    router.$inject = ["$stateProvider", "$urlRouterProvider", "USER_ROLES", "PATHS"];

    /*
     * Config router.
     *
     * @param {object} $stateProvider
     * @param {object} $urlRouterProvider
     * @param {object} USER_ROLES
     * @param {object} PATHS
     * @return void
     */
    function router($stateProvider, $urlRouterProvider, USER_ROLES, PATHS) {
        var featuresPath = PATHS.features;

        $urlRouterProvider.otherwise('/welcome');
    }

    checkState.$inject = ['$state', '$rootScope', 'authService', 'USER_ROLES', 'lodash'];

    /*
     * Run application.
     *
     * @param {object} $state
     * @param {object} $rootScope
     * @param {object} authService
     * @param {object} USER_ROLES
     * @param {object} lodash
     * @return void
     */
    function checkState($state, $rootScope, authService, USER_ROLES, lodash) {

        $rootScope.$on('$stateChangeStart', stateChangeStart);

        /*
         * Check when url changed.
         *
         * @param {object} event
         * @param {object} next
         * @param {object} params
         * @return void
         */
        function stateChangeStart(event, next, params) {
            var authorizedRoles = next.data.authorizedRoles;

            if (lodash.contains(authorizedRoles, USER_ROLES.all)) {
                // Allow all
                return;
            }

            if (authService.isAuthenticated()) {
                if (! authService.isAuthorized(authorizedRoles)) {
                    // user is not allowed
                    event.preventDefault();
                }
            } else {
                // user is not logged in
                if (! lodash.contains(authorizedRoles, USER_ROLES.guest)) {
                    // guest not allowed to access state
                    event.preventDefault();
                    $state.go('session.login');
                }
            }
        }
    }

})();
