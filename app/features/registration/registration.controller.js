(function() {

    'use strict';

    angular.module('app.registration')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['notifier', '$state', 'registerService'];

    /*
     * It's a controller
     *
     * @param {object} notifier
     * @param {object} $state
     * @param {object} registerService
     * @return this
     */
    function RegistrationController(notifier, $state, registerService) {
        var vm = this;

        vm.username = "";
        vm.email = "";
        vm.password = "";
        vm.password_confirmation = "";
        vm.submit = submit;
        vm.message = {};

        //////////////////////

        function submit() {
            var newUser = {};
            var registration;

            newUser.username = vm.username;
            newUser.email = vm.email;
            newUser.password = vm.password;

            registerService.register(newUser)
                .then(registerSuccessHandler);

            return ;

            ////////////////////////

            function registerSuccessHandler(result) {
                if (! result.error) {
                    notifier.success(false, 'Register Success');
                    $state.go('session.login');

                    return result;
                }

                notifier.error(false, 'Something wrong');
            }
        }
    }

})();
