import React, { useState } from 'react';

const ChatInput = ({ onSubmit }) => {
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!message.trim()) return;

		onSubmit(message);
		setMessage('');
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center gap-4">
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Type your message here..."
				className="flex-grow border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-300"
			/>
			<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
				Send
			</button>
		</form>
	);
};

export default ChatInput;
