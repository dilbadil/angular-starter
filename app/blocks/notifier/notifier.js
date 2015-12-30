(function(toastr) {

    'use strict';

    angular.module('blocks.notifier')
        .factory('notifier', notifier);

    notifier.$inject = [];

    toastrInit();

    /*
     * Popup factory.
     *
     * @return object
     */
    function notifier() {
        var popups = {
            notif: notif,
            success: success,
            info: info,
            warning: warning,
            error: error,
        };

        return popups;
    }

    ///////////////////////////////////

    /*
     * Show sucess popup.
     *
     * @param {string} title
     * @param {string} text
     * @return void
     */
    function success(title, text) {
        return notif('success', title, text);
    }

    /*
     * Show info popup.
     *
     * @param {string} title
     * @param {string} text
     * @return void
     */
    function info(title, text) {
        return notif('info', title, text);
    }

    /*
     * Show warning popup.
     *
     * @param {string} title
     * @param {string} text
     * @return void
     */
    function warning(title, text) {
        return notif('warning', title, text);
    }

    /*
     * Show error popup.
     *
     * @param {string} title
     * @param {string} text
     * @return void
     */
    function error(title, text) {
        return notif('error', title, text);
    }

    /*
     * Show notification popup.
     *
     * @param {string} type
     * @param {string} title
     * @param {string} text
     * @return void
     */
    function notif(type, title, text) {
        if (! title) return toastr[type](text);

        return toastr[type](text, title);
    }

    /*
     * toastr init
     *
     * @return void
     */
    function toastrInit() {
        // toastr.options = {
        //   "closeButton": false,
        //   "debug": false,
        //   "newestOnTop": false,
        //   "positionClass": "toast-top-right",
        //   "preventDuplicates": false,
        //   "onclick": null,
        //   "showDuration": "300",
        //   "hideDuration": "1000",
        //   "timeOut": "5000",
        //   "extendedTimeOut": "1000",
        //   "showEasing": "swing",
        //   "hideEasing": "linear",
        //   "showMethod": "fadeIn",
        //   "hideMethod": "fadeOut"
        // };
    }

})(toastr);
