// js/views/addressIndex.js

(function(app) {

    var addressIndex = Backbone.View.extend({

        initialize: function() {
            app.ui.$content.html(this.render().el);
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
            this.$el.find('tbody').children().remove();
            app.addressBook.each(function(address) {
                self.addOne(address);
            });
        }
    });

    $.extend(app.view = app.view || {}, {
        addressIndex: addressIndex
    });

}(window.app = window.app || {}));