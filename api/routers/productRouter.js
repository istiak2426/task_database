const router = require('express').Router();
const {
    getProductsAll,
    createProduct,


} = require('../controllers/productControllers');


router.route('/')
    .post(createProduct)
    .get(getProductsAll);



module.exports = router;