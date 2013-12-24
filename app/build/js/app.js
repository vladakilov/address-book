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
// js/models/address.js

(function(app) {

    var address = Backbone.Model.extend({
        defaults: {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        }
    });

    $.extend(app.model = app.model || {}, {
        address: address
    });

}(window.app = window.app || {}));
// js/collections/addressBook.js

(function(app) {

    var addressBook = Backbone.Collection.extend({
        model: app.model.address
    });

    $.extend(app.collection = app.collection || {}, {
        addressBook: addressBook
    });

}(window.app = window.app || {}));
// js/views/addressIndex.js

(function(app) {

    var addressIndex = Backbone.View.extend({

        tagName: "table",

        id: "address-list",

        initialize: function() {
            app.ui.$content.html("");
            if (app.addressBook.length) {
                app.ui.$content.html(this.render().el);
            }
            this.addAll();
        },

        render: function() {
            this.$el.html($('#address-table').html());
            return this;
        },

        addOne: function(addressModel) {
            var addressRow = new app.view.addressRow({
                attributes: {
                    "data-id": addressModel.id
                },
                model: addressModel
            });
            $("#address-list tbody").append(addressRow.render().el);
        },

        addAll: function() {
            var self = this;
            app.addressBook.each(function(address) {
                self.addOne(address);
            });
        }
    });

    $.extend(app.view = app.view || {}, {
        addressIndex: addressIndex
    });

}(window.app = window.app || {}));
// js/views/addressShow.js

(function(app) {

    var addressShow = Backbone.View.extend({

        initialize: function(id) {
            this.address = app.addressBook.get(id);
            this.address.on('remove', this.remove, this);
            app.ui.$content.html(this.render().el);
        },

        tagName: "div",

        className: "address-single",

        render: function() {
            this.$el.html(_.template($('#address-single').html(), this.address.toJSON()));
            return this;
        },

        events: {
            "click button.address-delete": "delete"
        },

        delete: function() {
            app.addressBook.remove(this.address);
            window.location.hash = "address/index";
        }

    });

    $.extend(app.view = app.view || {}, {
        addressShow: addressShow
    });

}(window.app = window.app || {}));
// js/views/addressRow.js

(function(app) {

    var addressRow = Backbone.View.extend({

        tagName: "tr",

        events: {
            "click .delete": "delete"
        },

        initialize: function(){
            this.model.on("remove", this.remove, this);
            this.render;
        },

        render: function() {
            this.$el.html(_.template($("#address-row").html(), this.model.toJSON()));
            return this;
        },

        delete: function() {
            app.addressBook.remove(this.model);
            if (!app.addressBook.length) {
                $("#address-list").remove();
            }
        }

    });

    $.extend(app.view = app.view || {}, {
        addressRow: addressRow
    });

}(window.app = window.app || {}));
// js/views/addressCreate.js

(function(app) {

    var addressCreate = Backbone.View.extend({
        tagName: "form",

        initialize: function() {
            this.address = new app.model.address();
            app.ui.$content.html(this.render().el);
        },

        render: function() {
            this.$el.html(_.template($("#address-form").html(), this.address.toJSON()));
            return this;
        },

        events: {
            "click button.save": "save"
        },

        save: function(event) {
            event.stopPropagation();
            event.preventDefault();

            var addressInfo = {
                firstName: this.$el.find('input[name="first-name"]').val(),
                lastName: this.$el.find('input[name="last-name"]').val(),
                email: this.$el.find('input[name="email"]').val(),
                phone: this.$el.find('input[name="phone"]').val(),
                id: Math.floor(Math.random() * 100) + 1
            };

            this.address.set(addressInfo);
            app.addressBook.add(this.address);

            window.location.hash = "address/index";
        }
    });

    $.extend(app.view = app.view || {}, {
        addressCreate: addressCreate
    });

}(window.app = window.app || {}));
// js/views/addressEdit.js

(function(app) {

    var addressEdit = Backbone.View.extend({
        tagName: "form",
        
        initialize: function(id) {
            this.address = app.addressBook.get(id);
            app.ui.$content.html(this.render().el);
        },

        render: function() {
            this.$el.html(_.template($("#address-form").html(), this.address.toJSON()));
            return this;
        },

        events: {
            "click button.save": "save"
        },

        save: function(event) {
            event.stopPropagation();
            event.preventDefault();

            var addressInfo = {
                firstName: this.$el.find('input[name="first-name"]').val(),
                lastName: this.$el.find('input[name="last-name"]').val(),
                email: this.$el.find('input[name="email"]').val(),
                phone: this.$el.find('input[name="phone"]').val()
            };

            this.address.set(addressInfo);

            window.location.hash = "address/index";
        }
    });

    $.extend(app.view = app.view || {}, {
        addressEdit: addressEdit
    });

}(window.app = window.app || {}));
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