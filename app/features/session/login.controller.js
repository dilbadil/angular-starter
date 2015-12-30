(function() {

    'use strict';

    angular.module('app.session')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$scope', '$rootScope', 'AUTH_EVENTS', 'authService', 'ENV', 'notifier'];

    /*
     * Controller of login module.
     *
     * @param {object} $state
     * @param {object} $scope
     * @param {object} $rootScope
     * @param {object} AUTH_EVENTS
     * @param {object} authService
     * @param {object} ENV
     * @param {object} notifier
     * @return this
     */
    function LoginController($state, $scope, $rootScope, AUTH_EVENTS, authService, ENV, notifier) {
        var vm = this;

        vm.credentials = {
            email: '',
            password: ''
        };
        vm.login = login;

        /////////////////////////////////

        /*
         * Login handler.
         *
         * @return void
         */
        function login() {
            authService.login(vm.credentials)
                .then(loginHandler)
                .catch(loginError)
        }

        /*
         * Login succes handler.
         *
         * @param {object} data
         * @return void
         */
        function loginHandler(data) {

            if (data.login_status != 'success') {
                return loginError();
            }

            $scope.refreshCurrentUser();

            notifier.success(false, 'Login Success');

            $state.go('dashboard');
        }

        /*
         * Login error handler.
         *
         * @param {object} err
         * @return void
         */
        function loginError(err) {
            notifier.error(false, 'Login Failed');
        }
    }

})();
