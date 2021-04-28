const validateAdmin = (req, res, next) => {
    if (req.user.role === 'admin'){
        return next();
    } else {
        return res.status(401).send('You are not an authorized user.')
    }
};

module.exports = validateAdmin;