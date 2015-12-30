(function() {

    'use strict';

    angular.module('app.core')
        .factory('authService', authService);

    authService.$inject = ['$window', '$http', '$q', 'lodash', '$state', 'USER_ROLES'];

    /*
     * service factory.
     *
     * @param {objectj} $window
     * @param {object} $http
     * @param {object} $q
     * @param {object} lodash
     * @param {object} $state
     * @param {object} USER_ROLES
     * @return void
     */
    function authService($window, $http, $q, lodash, $state, USER_ROLES) {
        var service = {};
        var userInfo;

        service.login = login;
        service.isAuthenticated = isAuthenticated;
        service.isAuthorized = isAuthorized;
        service.getUserInfo = getUserInfo;
        service.logout = logout;
        service.refreshAuthToken = refreshAuthToken;
        service.isAuthorizedState = isAuthorizedState;

        return service;

        /////////////////////////////

        /*
         * Logout, clear data.
         *
         * @return void
         */
        function logout() {
            $window.sessionStorage['userInfo'] = null;
            $http.defaults.headers.common['X-TOKEN'] = null; // jshint ignore:line
            userInfo = null;
        }

        /*
         * Login handler
         *
         * @param {object} credentials
         * @return promise
         */
        function login(credentials) {
            var deffered = $q.defer();
            var data = {};

            $http.post(ENV.API_URL + 'login', credentials)
                .then(loginHandler)
                .catch(loginError);

            return deffered.promise;

            ////////////////////////

            /*
             * Login handler.
             *
             * @param {object} res
             * @return void
             */
            function loginHandler(res) {
                if (typeof res.username != 'undefined') {
                    data.user = res;
                    data.error = false;
                    data.login_status = 'success';

                    $http.defaults.headers.common['X-TOKEN'] = data.user.token; // jshint ignore:line
                    $window.sessionStorage['userInfo'] = JSON.stringify(data.user);
                    userInfo = data.user;
                }

                deffered.resolve(data);
            }

            /*
             * Handle error login.
             *
             * param {object} res
             * @return
             */
            function loginError(res) {
                data.error = true;
                data.user = false;
                data.login_status = 'error';

                deffered.resolve(data);
            }
        }

        /*
         * Check user are authenticated.
         *
         * @return boolean
         */
        function isAuthenticated() {
            return !!getUserInfo();
        }

        /*
         * Check authorized of given roles
         *
         * @param {object} authorizedRoles
         * @return boolean
         */
        function isAuthorized(authorizedRoles) {
            if (! angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }

            if (lodash.contains(authorizedRoles, USER_ROLES.all)) return true;

            return (isAuthenticated() &&
                    lodash.contains(authorizedRoles, getUserInfo().role))
        }

        /*
         * Check user is authorize on the given state name.
         *
         * @param {string} stateName
         * @return boolean
         */
        function isAuthorizedState(stateName) {
            var state = $state.get(stateName);
            var authorizedRoles;
            var authorized = false;

            if (state) {
                authorizedRoles = state.data.authorizedRoles;                

                if (! isAuthenticated() && lodash.contains(authorizedRoles, USER_ROLES.guest)) {
                    authorized = true;
                } else {
                    authorized = isAuthorized(authorizedRoles);
                }
            }

            return authorized;
        }

        /*
         * Get user data
         *
         * @return object
         */
        function getUserInfo() {
            if (! userInfo && typeof $window.sessionStorage['userInfo'] !== "undefined" && $window.sessionStorage['userInfo']) {
                userInfo = JSON.parse($window.sessionStorage['userInfo']);
            }

            return userInfo;
        }

        /*
         * Refresh auth token.
         *
         * @return void
         */
        function refreshAuthToken() {
            if (isAuthenticated()) {
                $http.defaults.headers.common['X-TOKEN'] = getUserInfo().token; // jshint ignore:line
            }
        }
    }

})();
