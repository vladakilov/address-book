// js/views/addressRow.js

(function(app) {

    var addressRow = Backbone.View.extend({

        tagName: "tr",

        template: _.template(app.template.address.row),

        events: {
            "click .delete": "delete"
        },

        initialize: function() {
            this.model.on("remove", this.remove, this);
            this.render;
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
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