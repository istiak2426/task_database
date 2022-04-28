const _ = require('lodash');

const { Product, validate } = require('../models/product');

module.exports.createProduct = async (req, res) => {
  
    const data  = req.body;
    const result = new Product(data)
    const final = await result.save();
    return res.send(final);

}

module.exports.getProductsAll = async(req, res) =>{

    console.log(req.query);
    const products = await Product.find()

    .populate('category', 'name');
    return res.status(200).send(products);
}



















