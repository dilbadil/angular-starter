(function() {

    'use strict';

    angular.module('app.session')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$scope', 'authService', '$state'];

    /*
     * Controller of logout.
     *
     * @param {object} $scope
     * @param {object} authservice
     * @param {object} $state
     */
    function LogoutController($scope, authService, $state) {
        authService.logout();
        $scope.refreshCurrentUser();
        $state.go('session.login');
    }

})();
