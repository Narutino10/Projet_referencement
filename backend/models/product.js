const db = require('../config/db');

const Product = {
    fetchAll: () => {
        return db.execute('SELECT * FROM products');
    },
    fetchById: (id) => {
        return db.execute('SELECT * FROM products WHERE id = ?', [id]);
    }
};

module.exports = Product;
