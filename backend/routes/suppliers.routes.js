const express = require('express');

const router = express.Router();

const suppliers = require('../controllers/suppliersController');
const verifyToken = require('../middlewares/verifyJWT');

router.route('/suppliers').get(suppliers.getSuppliers); // get all suppliers
<<<<<<< HEAD
router.route('/suppliers/:id').get(suppliers.getSuppliers); // view specific supplier infomation
router.route('/suppliers/register').post(suppliers.createSupplier); // register new supplier record
router.route('/suppliers/update/:id').put(suppliers.updateSupplier); // update supplier profile
router.route('/suppliers/profile:id').delete(suppliers.deleteSupplier); // delete supplier record
router.route('/suppliers').delete(suppliers.deleteSupplier); // delete supplier record
=======
router.route('/suppliers/:id').get(suppliers.getSupplier); // view specific supplier infomation
router.route('/suppliers/register').post(verifyToken, suppliers.createSupplier); // register new supplier record
router.route('/suppliers/:id/update').put(suppliers.updateSupplier); // update supplier profile
router.route('/suppliers/:id/delete').delete(suppliers.deleteSupplier); // delete supplier record
>>>>>>> main

module.exports = router;
