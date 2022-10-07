const otp = require('otp-generator');

const Suppliers = require('../models/suppliers.model');
const User = require('../models/user.model');
// const { cloudinary } = require('../utils/cloudinary');

exports.getSuppliers = async (req, res) => {
    // const result = await Suppliers.updateMany({}, { $set: { approved: false } }, { upsert: false, multi: true });
    // console.log(result);
    await Suppliers.find({ approved: true })
        .populate('author', 'avatar name occupation isVerified')
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
    await Suppliers.find({ _id: id })
        .populate('author')
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

exports.updateSupplierProfile = async (req, res) => {
    const result = await Suppliers.updateMany({}, { $set: { approved: false } }, { upsert: false, multi: true });
    console.log(result);
};

exports.createSupplier = async (req, res) => {
    const { _id } = await User.findOne({ email: req.user.email });
    const uniqueID = otp.generate(8, { upperCaseAlphabets: true, specialChars: false });

    const {
        name,
        about,
        description,
        contacts,
        addresses,
        tags,
        isRegistered,
        avatar,
        beeLevel,
        sector,
        moq,
        moqNumber,
        quotation,
        established
    } = req.body;

    const {
        email,
        website,
        cellphone,
        telephone,
        fax
    } = contacts;

    const newSupplier = new Suppliers({
        name,
        about,
        description,
        contacts: {
            email,
            cellphone,
            telephone,
            website,
            fax
        },
        addresses,
        tags,
        author: _id,
        isRegistered,
        avatar,
        customerID: 'SU'.concat(uniqueID),
        beeLevel,
        sector,
        moq,
        moqNumber,
        quotation,
        established
    });

    await newSupplier.save()
        .then(() => res.status(200).json({ success: true, message: 'Supplier successfully added.' }))
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
