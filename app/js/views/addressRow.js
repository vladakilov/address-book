import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import * as template from '../templates/address';

var addressRow = Backbone.View.extend({

    tagName: "tr",

    template: _.template(template.address.row),

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
        window.app.addressBook.remove(this.model);
        if (!window.app.addressBook.length) {
            $("#address-list").remove();
        }
    }

});

export default addressRow;