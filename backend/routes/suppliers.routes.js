const express = require('express');
const router = express.Router();

const suppliers = require('../controllers/suppliersController');

router.route('/suppliers').get(suppliers.getSuppliers); // get all suppliers
router.route('/suppliers/:id').get(suppliers.getSuppliers); // view specific supplier infomation
router.route('/suppliers/register').post(suppliers.createSupplier); // register new supplier record
router.route('/suppliers/update/:id').put(suppliers.updateSupplier); // update supplier profile
router.route('/suppliers/profile:id').delete(suppliers.deleteSupplier); // delete supplier record

module.exports = router;
