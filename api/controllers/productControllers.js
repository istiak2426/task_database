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



module.exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId)

    if (!product) res.status(404).send("Not Found!");
    return res.status(200).send(product);
}



module.exports.updateProductById = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(400).send("Something wrong!");
        const updatedFields = _.pick(fields, ["name", "description", "price", "category", "quantity"]);
        _.assignIn(product, updatedFields);

        if (files.photo) {
            fs.readFile(files.photo.path, (err, data) => {
                if (err) return res.status(400).send("Something wrong!");
                product.photo.data = data;
                product.photo.contentType = files.photo.type;
                product.save((err, result) => {
                    if (err) return res.status(500).send("Something failed!");
                    else return res.status(200).send({
                        message: "Product Updated Successfully!"
                    })
                })
            })
        } else {
            product.save((err, result) => {
                if (err) return res.status(500).send("Something failed!");
                else return res.status(200).send({
                    message: "Product Updated Successfully!"
                })
            })
        }
    })
}





