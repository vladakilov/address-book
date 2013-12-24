// js/views/addressShow.js

(function(app) {

    var addressShow = Backbone.View.extend({

        template: _.template(app.template.address.single),

        initialize: function(id) {
            this.address = app.addressBook.get(id);
            this.address.on('remove', this.remove, this);
            app.ui.$content.html(this.render().el);
        },

        tagName: "div",

        className: "address-single",

        render: function() {
            this.$el.html(this.template(this.address.toJSON()));
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