var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tacheSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    _status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todocoll', tacheSchema);