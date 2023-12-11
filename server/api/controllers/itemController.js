//itemController.js:
//database in-memory
let itemsDatabase = [];

// Create a new item
exports.createItem = (req, res) => {
  const newItem = {
    id: itemsDatabase.length + 1, // Generate a new ID
    userId: req.body.userId,
    keywords: req.body.keywords,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    createdAt: new Date().toISOString() // Store the creation date
  };
  itemsDatabase.push(newItem); // Add the new item to the array
  res.status(201).json(newItem); // Respond with the created item
};

// Get a single item by ID
exports.getItemById = (req, res) => {
  const item = itemsDatabase.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
};

// Get all items
exports.getAllItems = (req, res) => {
  res.json(itemsDatabase);
};

// Delete an item by ID
exports.deleteItem = (req, res) => {
  const index = itemsDatabase.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedItems = itemsDatabase.splice(index, 1); // Remove the item from the array
    res.status(200).json(deletedItems[0]); // Respond with the deleted item
  } else {
    res.status(404).send('Item not found');
  }
};

