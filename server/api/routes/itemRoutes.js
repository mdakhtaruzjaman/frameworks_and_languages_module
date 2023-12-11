const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController'); // Assuming controllers directory is at the same level as routes

// Define the routes for items
router.post('/items', itemController.createItem);
router.get('/items/:id', itemController.getItemById);
router.get('/items', itemController.getAllItems);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;

