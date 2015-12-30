(function() {

    'use strict';

    angular.module('app')
        .directive('mainNav', mainNav);

    mainNav.$inject = ['PATHS'];

    function mainNav(PATHS) {
        return {
            restrict: 'E',
            link: linkFunc,
            templateUrl: PATHS.layout + 'main-nav.html'
        };
    }

    function linkFunc(scope, element, attrs) {
        // var slideOutButton = $(element).find('.slide-out-btn');
        //
        // slideOutButton.sideNav({
        //     closeOnClick: true
        // });
    }

})();
