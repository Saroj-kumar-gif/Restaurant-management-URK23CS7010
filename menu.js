const express = require('express');
const router = express.Router();
const { menuItems } = require('../data');

router.get('/', (req, res) => res.json(menuItems));

router.post('/', (req, res) => {
  const newItem = { ...req.body, id: Date.now() };
  menuItems.push(newItem);
  res.json({ success: true, item: newItem });
});

module.exports = router;