const express = require("express");
const router = express.Router();
const { getAllProduct, LoginAdmin } = require('../controllers/ApiController');

router.get('/product', getAllProduct);
router.get('/admin', LoginAdmin);



module.exports = router; // Di chuyển dòng này về cuối tệp của bạn