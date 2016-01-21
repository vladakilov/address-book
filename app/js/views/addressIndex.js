import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import * as template from '../templates/address';
import addressRowView from './addressRow';

var addressIndex = Backbone.View.extend({

    tagName: "table",
    className: "pure-table",
    id: "address-list",
    template: _.template(template.address.table),

    initialize: function() {
        window.app.ui.$content.html("");
        if (window.app.addressBook.length) {
            window.app.ui.$content.html(this.render().el);
        }
        this.addAll();
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    },

    addOne: function(addressModel) {
        var addressRow = new addressRowView({
            attributes: {
                "data-id": addressModel.id
            },
            model: addressModel
        });
        $("#address-list tbody").append(addressRow.render().el);
    },

    addAll: function() {
        var self = this;
        window.app.addressBook.each(function(address) {
            self.addOne(address);
        });
    }
});

export default addressIndex;