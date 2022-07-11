exports.verifyUser = (req, res) => {
    const { id } = req.user;

    res.json({
        userId: `${id}`
    });
};
