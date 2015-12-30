(function() {

    'use strict';

    angular.module('app.registration')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['registerValidator', 'notifier', '$state', 'registerService'];

    /*
     * It's a controller
     *
     * @param {object} registerValidator
     * @param {object} notifier
     * @param {object} $state
     * @param {object} registerService
     * @return this
     */
    function RegistrationController(registerValidator, notifier, $state, registerService) {
        var vm = this;

        vm.username = "";
        vm.email = "";
        vm.password = "";
        vm.password_confirmation = "";
        vm.submit = submit;
        vm.message = {};

        //////////////////////

        function submit() {
            var validation;
            var newUser = {};
            var registration;

            validation  = registerValidator.validate(vm);
            vm.message = validation.message;

            if (validation.valid) {
                newUser.username = vm.username;
                newUser.email = vm.email;
                newUser.password = vm.password;

                registerService.register(newUser)
                    .then(registerSuccessHandler);
            }

            return validation.valid;

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
