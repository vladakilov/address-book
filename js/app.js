// js/app.js

var app = (function(app) {

    function initializeUiCache() {
        app.ui = {
            $wrapper: $("#wrapper"),
            $header: $("#header"),
            $content: $("#content"),
            $footer: $("#footer")
        };
    }

    var _app = {
        init: function() {
            initializeUiCache();
            app.addressBook = new app.collection.addressBook();
            app.Router = new app.router();
            Backbone.history.start();
        }
    }

    return $.extend(app, _app);

}(window.app = window.app || {}));