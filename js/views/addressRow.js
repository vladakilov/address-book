// js/views/addressRow.js

(function(app) {

    var addressRow = Backbone.View.extend({

        tagName: "tr",

        events: {
            "click .delete": "delete"
        },

        initialize: function(){
            this.model.on('remove', this.remove, this);
            this.render;
        },

        render: function() {
            this.$el.html(_.template($('#address-row').html(), this.model.toJSON()));
            return this;
        },

        delete: function() {
            app.addressBook.remove(this.model);
        }

    });

    $.extend(app.view = app.view || {}, {
        addressRow: addressRow
    });

}(window.app = window.app || {}));