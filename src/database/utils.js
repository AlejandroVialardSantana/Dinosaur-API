const fs = require('fs');

const saveToDatabase = (data) => {
    fs.writeFileSync('./src/database/db.json', JSON.stringify(data, null, 2), {
        encoding: 'utf8',
    });
};

module.exports = { saveToDatabase };