import Backbone from 'backbone';

import addressModel from '../models/addressModel';

var addressBook = Backbone.Collection.extend({
    model: addressModel
});

export default addressBook;