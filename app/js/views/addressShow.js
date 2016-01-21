import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import * as template from '../templates/address';

var addressShow = Backbone.View.extend({

    template: _.template(template.address.single),

    initialize: function(id) {
        this.address = window.app.addressBook.get(id);
        this.address.on('remove', this.remove, this);
        window.app.ui.$content.html(this.render().el);
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
        window.app.addressBook.remove(this.address);
        window.location.hash = "address/index";
    }

});

export default addressShow;