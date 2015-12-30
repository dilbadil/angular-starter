var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    // copy
    mix.copy('bower_components/materialize/dist/font', 'output/font');

    // mix styles
    mix.styles([
        /* Libraries */
        'bower_components/toastr/toastr.css',
        'bower_components/ng-dialog/css/ngDialog.css',
        'bower_components/ng-dialog/css/ngDialog-theme-default.css',
        'bower_components/angular-block-ui/dist/angular-block-ui.css',

        /* App styles */
        'assets/css/**/*.css'

    ], 'output/css/app.css', './');

    // mix scripts
    mix.scripts([
        /* Common Libraries */
        'bower_components/toastr/toastr.js',

        /* Angular */
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/ng-dialog/js/ngDialog.js',
        'bower_components/ng-lodash/build/ng-lodash.js',
        'bower_components/angular-block-ui/dist/angular-block-ui.js',

        /* App */
        'env.js',
        'app/**/*.module.js',
        'app/**/*.js'

    ], 'output/js/app.js', './');
});
