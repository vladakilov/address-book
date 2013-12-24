require.config({
    baseUrl: "js/",
    paths: {
        jquery: 'libs/jquery-2.0.3',
        underscore: 'libs/underscore-1.5.2',
        backbone: 'libs/backbone-1.1.0',


        addressCreate: 'views/addressCreate',
        addressEdit: 'views/addressEdit',
        addressIndex: 'views/addressIndex',
        addressRow: 'views/addressRow'

    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'addressCreate'], function ($, _, Backbone, app) {   // or, you could use these deps in a separate module using define

});
