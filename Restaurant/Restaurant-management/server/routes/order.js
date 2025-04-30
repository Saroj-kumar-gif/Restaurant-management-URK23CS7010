const express = require('express');
const router = express.Router();
const { orders } = require('../data');

router.get('/', (req, res) => res.json(orders));

router.post('/', (req, res) => {
  const newOrder = { ...req.body, id: Date.now() };
  orders.push(newOrder);
  res.json({ success: true, order: newOrder });
});

module.exports = router;