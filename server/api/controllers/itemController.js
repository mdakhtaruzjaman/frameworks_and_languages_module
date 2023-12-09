//itemController.js:
const Item = require('../../models/items');

// Simulated database in-memory
const items = [];

exports.createItem = (req, res) => {
  const newItem = new Item(items.length + 1, req.body.content);
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.getItemById = (req, res) => {
  const item = items.find(i => i.id.toString() === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
};

exports.getAllItems = (req, res) => {
  res.json(items);
};

exports.deleteItem = (req, res) => {
  const index = items.findIndex(i => i.id.toString() === req.params.id);
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Item not found');
  }
};


