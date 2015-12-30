(function() {

    'use strict';

    angular.module('blocks.dialog')
        .factory('dialog', dialog);

    dialog.$inject = ['ngDialog'];

    /*
     * Provide dialog with ngDialog
     *
     * @param {object} ngDialog
     * @return object
     */
    function dialog(ngDialog) {
        var dialog = {};

        dialog.confirm = confirmDialog;
        dialog.close = close;
        dialog.open = open;

        return dialog;

        /////////////

        function open(options) {
            return ngDialog.open(options);
        }

        /* 
         * Show confirm dialog.
         *
         * @param {string} title
         * @param {string} content
         * @param {function} handler
         * @return
         */
        function confirmDialog(title, content, handler) {
            if (typeof handler != "function") {
                handler = function() {};
            }

            return ngDialog.open({
                template: 'app/blocks/dialog/views/confirm-dialog.html',
                controller: ConfirmDialogController,
                controllerAs: 'vm'
            });

            /*
             * Confirm dialog handlerr.
             *
             * @param {object} ngDialog
             * @return
             */
            ConfirmDialogController.$inject = ['ngDialog'];

            function ConfirmDialogController(ngDialog) {
                var vm = this;

                vm.closeDialog = closeDialog;
                vm.title = title;
                vm.content = content;
                vm.handler = handler;

                /////////////////
                
                /*
                 * Close dialog.
                 */
                function closeDialog() {
                    return ngDialog.close();
                }
            }
        }

        /*
         * Close dialog.
         *
         * @return
         */
        function close() {
            ngDialog.close();
        }
    }

})();
