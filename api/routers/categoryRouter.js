const router = require('express').Router();
const { createCategory, getCategories } = require('../controllers/categoryControllers');


router.route('/')
    .post( createCategory)
    .get(getCategories);

module.exports = router;