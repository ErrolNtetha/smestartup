const Suppliers = require('../models/suppliers.model');

exports.getSuppliers = async (req, res) => {
    await Suppliers.find()
        .then((suppliers) => {
            if (!suppliers) {
                res.status(404).json({ message: 'No suppliers yet. Check back later.' });
                return;
            }
            res.status(200).json({ success: true, suppliers });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ success: false, error });
        });
};

exports.getSupplier = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await Suppliers.find({ _id: id })
        .then((suppliers) => {
            if (!suppliers) {
                res.status(404).json({ message: 'No suppliers in the database yet.' });
                return;
            }
            res.status(200).json({ suppliers: suppliers[0] });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ success: false, error });
        });
};

exports.getSupplierProfiles = async (req, res) => {
    const { id } = req.user;
    console.log(req.user);

    await Suppliers.find({ author: id })
        .then((profiles) => {
            if (!profiles) return res.status(404).json({ message: 'You have no supplier profiles.' });
            return res.status(200).json({ profiles });
        })
        .catch((error) => res.status(500).json({ success: false, error }));
};

exports.createSupplier = async (req, res) => {
    const {
        name,
        about,
        description,
        contacts,
        addresses,
        tags,
        isRegistered
    } = req.body;
    const { id } = req.user;
    const {
        email,
        website,
        cellphone,
        telephone
    } = contacts;

    const newSupplier = new Suppliers({
        name,
        about,
        description,
        contacts: {
            email,
            cellphone,
            telephone,
            website
        },
        addresses,
        tags,
        author: id,
        isRegistered
    });

    await newSupplier.save()
        .then(() => res.json({ success: true, message: 'Supplier successfully added.' }))
        .catch((error) => res.status(500).json({ success: false, message: error.message }));
};

exports.deleteSupplier = async (req, res) => {
    const { id } = req.params;

    await Suppliers.findByIdAndRemove({ _id: id })
        .then(() => res.status(200).json({ success: true, message: 'Supplier successfully deleted.' }))
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
