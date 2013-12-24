// js/routers/router.js

(function(app) {

    app.router = Backbone.Router.extend({
        routes: {
            "address/index": "index",
            "address/create": "create",
            "address/:id": "show",
            "address/:id/edit": "edit"
        },

        initialize: function() {
            this.index();
        },

        index: function() {
            this.currentView = new app.view.addressIndex();
        },

        create: function() {
            this.currentView = new app.view.addressCreate();
        },

        show: function(id) {
            this.currentView = new app.view.addressShow({
                id: id
            });
        },

        edit: function(id) {
            this.currentView = new app.view.addressEdit({
                id: id
            });
        }
    });

}(window.app = window.app || {}));