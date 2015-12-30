(function() {

    'use strict';

    angular.module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', 'USER_ROLES', 'authService'];

    /*
     * AppController class.
     *
     * @param {object} $scope
     * @param {object} USER_ROLES
     * @param {object} authService
     */
    function AppController($scope, USER_ROLES, authService) {
        var vm = this;
        var currentUser;

        vm.userRoles = USER_ROLES;
        vm.isAuthorized = authService.isAuthorized;
        vm.isAuthorizedState = authService.isAuthorizedState;

        $scope.refreshCurrentUser = refreshCurrentUser;

        activate();

        ///////////////////////////////////

        /*
         * Activate controller.
         *
         * @return void
         */
        function activate() {
            refreshCurrentUser();
            authService.refreshAuthToken();
        }

        /*
         * Refresh current user.
         *
         * @return void
         */
        function refreshCurrentUser() {
            currentUser = authService.getUserInfo();
            vm.currentUser = currentUser;
        }
    }

})();
