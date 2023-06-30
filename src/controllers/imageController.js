const path = require('path');
const fs = require('fs');

const imageMiddleware = (req, res, next) => {
    const imagePath = path.join(__dirname, '../public/uploads', req.url);
    if (!fs.existsSync(imagePath)) {
        const defaultImagePath = path.join(__dirname, '../../public/uploads/no-image.jpg');
        res.sendFile(defaultImagePath);
    } else {
        next();
    }
};

module.exports = imageMiddleware;