var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * message model properties defined
 * properties type defined using schema.types (the standard way)
 * @type {mongoose.Schema}
 */
var schema = new Schema({
    content:  {type: String, required: true},
    user:     {type: Schema.Types.ObjectId, ref: 'User'}
});

/**
 * model instance created so that we could use it to create new messages
 */
module.exports = mongoose.model('Message', schema);