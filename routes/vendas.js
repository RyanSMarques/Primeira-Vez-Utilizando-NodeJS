const express = require('express');
const Venda = require('../models/Venda');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    const venda = await Venda.create(req.body);
    res.status(201).send(venda);
});

// Read all
router.get('/', async (req, res) => {
    const vendas = await Venda.findAll();
    res.send(vendas);
});

// Read by ID
router.get('/:id', async (req, res) => {
    const venda = await Venda.findByPk(req.params.id);
    if (!venda) return res.status(404).send();
    res.send(venda);
});

// Update
router.put('/:id', async (req, res) => {
    const venda = await Venda.update(req.body, { where: { id: req.params.id } });
    if (!venda[0]) return res.status(404).send();
    res.send(venda);
});

// Delete
router.delete('/:id', async (req, res) => {
    const deleted = await Venda.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).send();
    res.sendStatus(204);
});

module.exports = router;
