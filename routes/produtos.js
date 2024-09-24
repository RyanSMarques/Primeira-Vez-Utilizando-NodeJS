const express = require('express');
const Produto = require('../models/Produto');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    const produto = await Produto.create(req.body);
    res.status(201).send(produto);
});

// Read all
router.get('/', async (req, res) => {
    const produtos = await Produto.findAll();
    res.send(produtos);
});

// Read by ID
router.get('/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).send();
    res.send(produto);
});

// Update
router.put('/:id', async (req, res) => {
    const produto = await Produto.update(req.body, { where: { id: req.params.id } });
    if (!produto[0]) return res.status(404).send();
    res.send(produto);
});

// Delete
router.delete('/:id', async (req, res) => {
    const deleted = await Produto.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).send();
    res.sendStatus(204);
});

module.exports = router;
