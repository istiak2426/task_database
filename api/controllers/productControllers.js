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


module.exports.deleteItem = async (req, res) => {
 
    const deletedId = req.params._id;
    const deleteData = await Add.Product(deletedId)
    return res.status(200).send(deleteData);
}


module.exports.editItem = async (req, res) => {
 
    const editId = req.params._id;
    const editData = await Product.findByIdAndUpdate(editId, req.body)
    const savedEdit=  await People.findById(editId);
    return res.status(200).send(savedEdit);
}













