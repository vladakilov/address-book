// js/views/addressIndex.js

(function(app) {

    var addressIndex = Backbone.View.extend({

        tagName: "table",

        id: "address-list",

        template: _.template(app.template.address.table),

        initialize: function() {
            app.ui.$content.html("");
            if (app.addressBook.length) {
                app.ui.$content.html(this.render().el);
            }
            this.addAll();
        },

        render: function() {
            this.$el.html(this.template);
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