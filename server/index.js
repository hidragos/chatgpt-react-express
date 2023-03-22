require('dotenv').config();
const express = require('express');

const app = express();
const port = 3500;

// Simple hello world get request
app.get('/hello', (req, res) => {
	const openai = process.env.OPENAI_API_KEY;
	res.send(`key`+ openai);
});

// Start the server
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});