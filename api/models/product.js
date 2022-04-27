const { Schema, model } = require('mongoose');
const Joi = require('joi');

module.exports.Product = model('Product', Schema({
    name: String,

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },

    term: {
        type: Boolean,
        required: true
 
    },
  

}, { timestamps: true }));

module.exports.validate = product => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),

        category: Joi.string().required(),
    });
    return schema.validate(product);
}