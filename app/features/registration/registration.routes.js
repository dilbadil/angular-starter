(function() {

    'use strict';

    angular.module('app.registration')
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
        var templatePath = PATHS.features + 'registration/views/';
        var authorizedRoles = [USER_ROLES.guest];
        var data = {};

        data.authorizedRoles = authorizedRoles;

        $stateProvider
            .state('registration', {
                url: '/registration',
                controller: 'RegistrationController',
                controllerAs: 'vm',
                templateUrl: templatePath + 'index.html',
                data: data
            })
            ;
    }

})();
