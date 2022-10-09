const express = require('express');

const router = express.Router();

const suppliers = require('../controllers/suppliersController');
const verifyToken = require('../middlewares/verifyJWT');

router.route('/suppliers')
    .get(verifyToken, suppliers.getSuppliers); // get all suppliers
router.route('/suppliers/:id')
    .get(verifyToken, suppliers.getSupplier) // view specific supplier infomation
    .delete(suppliers.deleteSupplier); // delete supplier record
router.route('/suppliers/:id/update')
    .get(verifyToken, suppliers.getSupplier) // get supplier info
    .put(verifyToken, suppliers.updateSupplier); // update supplier profile
router.route('/suppliers/register')
    .post(verifyToken, suppliers.createSupplier); // register new supplier record

module.exports = router;
