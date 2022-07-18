const Suppliers = require('../models/suppliers.model');

exports.getSuppliers = async (req, res) => {
    await Suppliers.find()
        .then((suppliers) => {
            if (!suppliers) {
                res.status(404).json({ message: 'No suppliers in the database yet.' });
                return;
            }
            res.status(200).json({ success: true, suppliers });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ success: false, error });
        });
};

exports.createSupplier = async (req, res) => {
    const {
        name,
        about,
        address,
        storeId
    } = req.body;

    const newSupplier = new Suppliers({
        name,
        about,
        address,
        storeId
    });

    await newSupplier.save()
        .then(() => res.json({ success: true, message: 'Supplier successfully added.' }))
        .catch((error) => res.status(500).json({ success: false, message: error.message }));
};

exports.deleteSupplier = async (req, res) => {
    const { id } = req.params;

    await Suppliers.findByIdAndRemove({ _id: id })
        .then(() => res.status(200).json({ success: true, message: 'Supplier deleted.' }))
        .catch((error) => res.status(500).json({ success: false, error: error.message }));
};

exports.updateSupplier = async (req, res) => {
    const { id } = req.params;

    await Suppliers.findByIdAndUpdate({ _id: id }, req.body)
        .then(() => {
            Suppliers.findOne({ _id: id })
                .then((supplier) => res.status(200).json({ success: true, supplier }));
        })
        .catch((error) => res.status(500).json({ success: false, error: error.message }));
};
