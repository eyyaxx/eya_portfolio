const express = require('express');
const app = express();
const port = 5500;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Basic API route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from your API!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
