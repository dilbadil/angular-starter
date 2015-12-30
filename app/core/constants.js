(function(ENV) {

    'use strict';

    angular.module('app.core')
        .constant('PATHS', path())
        .constant('USER_ROLES', userRoles())
        .constant('ENV', ENV)
    ;

    // ==========================

    /*
     * Provide paths
     *
     * @return object
     */
    function path() {
        return {
            app: 'app/',
            assets: 'assets/',
            layout: 'app/layouts/',
            features: 'app/features/'
        };
    }

    /*
     * Provide user roles
     *
     * @return object
     */
    function userRoles() {
        return {
            all: '*',
            admin: 'admin',
            member: 'member',
            guest: 'guest'
        };
    }

})(ENV);
