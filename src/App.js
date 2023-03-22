import React, { useState } from 'react';
import axios from 'axios';
import config from './config';
import ChatBubble from './components/ChatBubble';
import ChatInput from './components/ChatInput';
import './App.css';

const App = () => {
	const [messages, setMessages] = useState([]);

	const addMessage = (message, isUser) => {
		setMessages((prevMessages) => [...prevMessages, { message, isUser }]);
	};

	const sendMessage = async (message) => {
		addMessage(message, true);

		try {
			const response = await axios.post(
				`${config.apiUrl}`,
				{
					prompt:
						'only respond to new message. previous messages: ' +
						messages.map((msg) => msg.message).join(', ') +
						', new message:' +
						message,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
					},
				}
			);

			const chatGptResponse = response.data;
			addMessage(chatGptResponse, false);
		} catch (error) {
			console.error('Error fetching ChatGPT response:', error);
			addMessage('Error: Unable to fetch response from ChatGPT.', false);
		}
	};

	return (
		<div className="chat-container bg-gray-100">
			<div className="mx-auto my-10 p-8 bg-white shadow-md rounded-xl w-full max-w-2xl">
				<div className="chat-messages h-96">
					{messages.map((msg, i) => (
						<ChatBubble key={i} message={msg.message} isUser={msg.isUser} />
					))}
				</div>
				<div className="chat-input mt-6">
					<ChatInput onSubmit={sendMessage} />
				</div>
			</div>
		</div>
	);
};

export default App;
