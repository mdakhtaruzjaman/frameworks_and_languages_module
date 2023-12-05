const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const itemRoutes = require('./api/routes/itemRoutes');

// Enable CORS for all requests
app.use(cors());

// JSON body parsing
app.use(express.json());

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api', itemRoutes);

app.get('/', (req, res) => {
  res.send('Freecycle API is running...');
});

// Serve openapi documentation
app.use('/api-docs', express.static('public/openapi.html'));

// Start the server only if the file has been called directly, i.e., not required by another module like tests
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for testing
module.exports = app;