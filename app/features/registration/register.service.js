(function() {

    'use strict';

    angular.module('app.registration')
        .factory('registerService', registerService);

    registerService.$inject = ['ENV', '$q', '$http'];

    /*
     * It's a factory
     *
     * @return this
     */
    function registerService(ENV, $q, $http) {
        var service = {};

        service.register = register;

        return service;

        //////////////

        function register(user) {
            var deffered = $q.defer();

            $http.post(ENV.API_URL + 'users', user)
                .then(registerSuccessHandler, registerErrorHandler);

            /////////////////////////////////////////

            function registerSuccessHandler(resp) {
                var result = {};

                result.error = !!typeof resp.username == 'undefined';
                result.data = resp;

                deffered.resolve(result);
            }

            function registerErrorHandler(resp) {
                var result = {};

                result.error = true;
                result.data = [];

                deffered.resolve(result);
            }

            return deffered.promise;
        }
    }

})();
