const express = require('express');
const Cliente = require('../models/Cliente');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).send(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.send(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read by ID
router.get('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) return res.status(404).send();
        res.send(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Cliente.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).send();
        const updatedCliente = await Cliente.findByPk(req.params.id);
        res.send(updatedCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Cliente.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).send();
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
