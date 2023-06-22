const pool = require('./db.js');

const getAllDinosaurs = async () => {
    const [rows] = await pool.query('SELECT * FROM dinosaur');
    return rows;
};

const getDinosaurById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM dinosaur WHERE id = ?', [id]);
    return rows[0];
};

const createDinosaur = async (newDinosaur) => {
    const existingDinosaurInDatabase = await pool.query('SELECT * FROM dinosaur WHERE name = ?', [newDinosaur.name]);

    if (existingDinosaurInDatabase[0].length > 0) return;
    
    const [rows] = await pool.query('INSERT INTO dinosaur (name, diet) VALUES (?, ?)', [newDinosaur.name, newDinosaur.diet]);

    return { id: rows.insertId, ...newDinosaur };
};

const updateDinosaur = async (name, diet, id) => {
    await pool.query('UPDATE dinosaur SET name = IFNULL(?, name), diet = IFNULL(?, diet) WHERE id = ?', [name, diet, id]);
    
    const updatedDinosaur = await getDinosaurById(id);
    
    return updatedDinosaur;
};

const deleteDinosaur = async (id) => {
    return await pool.query('DELETE FROM dinosaur WHERE id = ?', [id]);
};

module.exports = {
    getAllDinosaurs,
    getDinosaurById,
    createDinosaur,
    updateDinosaur,
    deleteDinosaur
};
    