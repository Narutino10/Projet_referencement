const db = require('../config/db');

exports.getProducts = async (req, res) => {
    const [rows] = await db.execute('SELECT * FROM products');
    res.json(rows);
};

exports.getProductById = async (req, res) => {
    const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
};
