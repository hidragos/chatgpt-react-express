import { Conversation } from 'gpt-turbo';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/chat', async (req, res) => {
	const { prompt } = req.body;
	const conversation = new Conversation({
		apiKey: process.env.OPENAI_API_KEY,
	});

	const response = await conversation.prompt(prompt);

	res.json(response);
});

const PORT = 3500;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
