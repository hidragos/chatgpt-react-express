const express = require('express');
const app = express();
const port = 3500;

// Simple hello world get request
app.get('/hello', (req, res) => {
	res.send('Hello World!');
});


// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});