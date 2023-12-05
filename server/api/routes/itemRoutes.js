const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Define the routes for items
router.post('/item', itemController.createItem);
router.get('/item/:id', itemController.getItemById);
router.get('/items', itemController.getAllItems);
router.delete('/item/:id', itemController.deleteItem);

module.exports = router;
