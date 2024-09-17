const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
