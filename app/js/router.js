import Backbone from 'backbone';

import addressIndex from './views/addressIndex';
import addressCreate from './views/addressCreate';
import addressShow from './views/addressShow';
import addressEdit from './views/addressEdit';

var router = Backbone.Router.extend({
    routes: {
        "address/index"    : "index",
        "address/create"   : "create",
        "address/:id"      : "show",
        "address/:id/edit" : "edit"
    },

    initialize: function() {
        this.index();
    },

    index: function() {
        this.currentView = new addressIndex();
    },

    create: function() {
        this.currentView = new addressCreate();
    },

    show: function(id) {
        this.currentView = new addressShow({
            id: id
        });
    },

    edit: function(id) {
        this.currentView = new addressEdit({
            id: id
        });
    }
});

export default router;