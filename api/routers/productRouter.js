const router = require('express').Router();
const {
    getProductsAll,
    createProduct,
    getProductById,
    updateProductById,

} = require('../controllers/productControllers');


router.route('/')
    .post(createProduct)
    .get(getProductsAll);





router.route('/:id')
    .get(getProductById)
    .put(updateProductById);


module.exports = router;