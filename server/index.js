const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests
app.use(cors());

//bodyparser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Freecycle API is running...');
});

// Serve openapi documentation
// Note: The path should be relative to the root of your server directory
app.use('/api-docs', express.static('public/openapi.html'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

