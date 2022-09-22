const express = require('express');

const router = express.Router();

const suppliers = require('../controllers/suppliersController');
const verifyToken = require('../middlewares/verifyJWT');

router.route('/suppliers')
    .get(suppliers.getSuppliers); // get all suppliers
router.route('/suppliers/:id').get(suppliers.getSupplier); // view specific supplier infomation
router.route('/suppliers/register').post(verifyToken, suppliers.createSupplier); // register new supplier record
router.route('/suppliers/:id/update')
    .get(suppliers.getSupplier) // get supplier info
    .put(suppliers.updateSupplier); // update supplier profile
router.route('/suppliers/:id/delete').delete(suppliers.deleteSupplier); // delete supplier record

module.exports = router;
