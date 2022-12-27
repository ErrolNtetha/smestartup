/* eslint-disable no-nested-ternary */

const otp = require('otp-generator');
const Suppliers = require('../models/suppliers.model');
const SaveList = require('../models/saveList.model');
const User = require('../models/user.model');
const { cloudinary } = require('../utils/cloudinary');

exports.getSuppliers = async (req, res) => {
    const { supplierType } = req.query;

    if (supplierType) {
        // This is the first time using queries, i am not sure about the logic below
        // but i will get it working soon
        const filterType = supplierType === 'Manufacturers'
            ? 'Manufacturer'
            : supplierType === 'Distributors & Wholesalers'
            ? 'Distributor/Wholesaler'
            : supplierType === 'All'
            ? ''
            : '';

        await Suppliers.find({
            type: filterType || '',
            approved: true
        })
            .then((suppliers) => {
                if (!suppliers.length) {
                    res.status(200).json({ message: `No suppliers under '${req.query.class.toLowerCase()}' found yet.` });
                    return;
                }
                res.status(200).json({ count: suppliers.length, suppliers });
            })
            .catch((error) => {
                res.status(500).json({ success: false, error });
            });
    } else {
        await Suppliers.find({ approved: true })
            .then((suppliers) => {
                if (!suppliers) {
                    res.status(404).json({ message: 'No suppliers yet. Check back later.' });
                    return;
                }
                res.status(200).json({ suppliers });
            })
            .catch((error) => {
                res.status(500).json({ success: false, error });
            });
    }
};

exports.getSupplier = async (req, res) => {
    const { email } = req.user;
    const { id } = req.params;
    await Suppliers.findOne({ _id: id })
        .populate('author', 'avatar email name occupation isVerified _id')
        .then((suppliers) => {
            if (!suppliers) {
                res.status(404).json({ message: 'No suppliers in the database yet.' });
                return;
            }
            const isOwner = email === suppliers.author.email;
            res.status(200).json({ isOwner, suppliers });
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
        established,
        companyType,
        address,
        photos
    } = req.body;

    const {
        email,
        website,
        cellphone,
        telephone,
        fax
    } = contacts;

    const supplierPhotos = [];
    console.log(photos.length);

    if (photos.length >= 1) {
        photos.forEach(async (photo) => {
            try {
                const response = await cloudinary.uploader.upload(photo, { upload_preset: 'user_posts' });

                supplierPhotos.push({
                    url: response.url,
                    publicId: response.public_id,
                    signature: response.signature
                });

                console.log('Supplier photos: ', supplierPhotos); // Empty: []
             } catch (error) {
                console.log(error);
            }
        });
    }

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
        addresses, address,
        tags,
        author: _id,
        isRegistered,
        avatar,
        customerID: 'SU'.concat(uniqueID.toUpperCase()),
        beeLevel,
        sector,
        moq,
        moqNumber,
        quotation,
        established,
        type: companyType,
        photos: [...supplierPhotos]
    });

    console.log('Saved photos: ', newSupplier);
    return;

    await newSupplier.save()
        .then(() => res.status(200).json({ success: true }))
        .catch((error) => res.status(500).json({ success: false, message: error.message }));
};

exports.deleteSupplier = async (req, res) => {
    const { id } = req.params;

    await Suppliers.findByIdAndRemove({ _id: id })
        .then(() => res.status(200).json({ success: true, message: 'Supplier successfully deleted.' }))
        .catch((error) => res.status(500).json({ success: false, error: error.message }));
};

exports.saveSupplier = async (req, res) => {
    const { email } = req.user;
    const { id } = req.body;

    const { _id } = await User.findOne({ email });

    const supplierProfile = new SaveList({
        author: _id,
        supplier: id
    });

    await supplierProfile.save()
        .then(() => res.status(200).json({ success: true, message: 'Supplier profile saved.' }))
        .catch((error) => res.status(500).json({ success: false, error: error.message }));
};

exports.updateSupplier = async (req, res) => {
    const { id } = req.params;

    await Suppliers
        .findByIdAndUpdate(
            { _id: id },
            req.body,
            { $push: { photos: req.body.photos } },
        )
        .then(() => {
            Suppliers.findOne({ _id: id })
                .then((supplier) => res.status(200).json({ success: true, supplier }));
        })
        .catch((error) => res.status(500).json({ success: false, error: error.message }));
};

exports.orders = (req, res) => {
    console.log(req.body);
    res.status(200).json({ success: true, message: 'You have successfully subscribed.' });
};

exports.mapProfiles = async (req, res) => {
    const { email } = req.user;
    const { _id } = await User.findOne({ email });

    await Suppliers.find({ author: _id })
        .then((s) => res.status(200).json({ suppliers: s }))
        .catch((error) => console.log(error));
};
