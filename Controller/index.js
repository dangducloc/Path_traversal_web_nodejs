const path = require('path');
const fs = require('fs');


exports.imgs_sec = async (req, res) => {
    const filename = req.query.file;

    if (!filename) {
        return res.status(400).send('Filename is required');
    }

    const baseDir = path.join(__dirname, '../Pictures');
    const filePath = path.join(baseDir, filename);

    if (!filePath.startsWith(baseDir)) {
        return res.status(400).send('Invalid filename');
    }

    if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
    } else {
        return res.status(404).send('File not found');
    }
};
exports.imgs_unsec = async (req, res) => {
    const file = req.params.file;
    const filePath = path.join(__dirname, '../Pictures', file); // No validation

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
    }

};
exports.index = async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};



