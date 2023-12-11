const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const itemRoutes = require('./api/routes/itemRoutes');

// Enable CORS for all requests
app.use(cors());

// Built-in middleware for urlencoded and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use routes
app.use('/api', itemRoutes);

// Serve the root path
app.get('/', (req, res) => {
  res.send('Freecycle API is running...');
});

// Serve OpenAPI documentation from the public directory
app.use('/api-docs', express.static('public/openapi.html'));

// Error handling middleware for any request that gets this far
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Handle uncaught exceptions - this is a catch-all for any uncaught errors in the app
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // Exiting the process is recommended after an uncaught exception
});

// Handle unhandled Promise rejections - similar to uncaught exceptions but for Promises
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1); // Exiting the process is recommended after an unhandled rejection
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// The module.exports is useful if you're importing the app in tests or other modules
module.exports = app;

