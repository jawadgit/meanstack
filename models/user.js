var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

/**
 * user model properties defined
 * properties type defined using schema.types (the standard way)
 * @type {mongoose.Schema}
 */
var schema = new Schema({
    firstName:  {type: String, required: true},
    lastName:   {type: String, required: true},
    password:   {type: String, required:true},
    email:      {type: String, required:true, unique:true},
    messages:   [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

/**
 * model instance created so that we could use it to create new messages
 * validator is added to validate fields
 */
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);