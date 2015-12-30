(function() {

    'use strict';

    angular.module('blocks.stringer')
        .factory('stringHelper', stringHelper);

    stringHelper.$inject = [];

    /*
     * String helper
     *
     * @return object
     */
    function stringHelper() {
        var helper = {};

        helper.capitalizeFirst = capitalizeFirst;

        return helper;

        ///////////////

        function capitalizeFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

})();
