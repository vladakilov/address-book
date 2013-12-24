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

    function initializeApp() {
        app.addressBook = new app.collection.addressBook();
        app.Router = new app.router();
        Backbone.history.start();
    }

    var _app = {
        init: function() {
            initializeUiCache();
            initializeApp();
        }
    }

    return $.extend(app, _app);

}(window.app = window.app || {}));