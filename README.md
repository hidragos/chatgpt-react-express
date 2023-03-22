# 🚀 ChatGPT React App

This is a React-based application that leverages the power of OpenAI's ChatGPT API to generate human-like responses in a chat interface. This README.md will guide you through the setup and usage of this app. The Express server serves as a proxy to communicate with the ChatGPT API using gpt-turbo, as openai package has trouble using the gpt-3.5-turbo model.

## 📚 Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## 🌟 Features

- [x] React-based frontend that provides a smooth user experience.
- [x] Integration with OpenAI's ChatGPT API for powerful natural language generation.
- [ ] Responsive chat interface that adapts to various screen sizes.
- [ ] Thorough error handling to ensure a seamless experience.

## 📋 Prerequisites

Before you get started, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v7 or higher)
- An OpenAI API key (sign up [here](https://beta.openai.com/signup) if you don't have one)

## 🛠️ Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chatgpt-react-express-app.git
```

2. Change to the project directory:
```bash
cd chatgpt-react-express-app
```

3. Install the dependencies:
```bash
npm install
```
4. Create a `.env` file in the root directory and add your OpenAI API key:
```
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

5. This application uses separate processes for the front-end and back-end. You can run them individually or concurrently using the following npm scripts:

Run the back-end server only:

```bash
npm run server
```
Run the front-end React development server only:
```bash
npm run client
```
Run both the back-end and front-end servers concurrently:

```bash
npm run dev
```




The application will now be running on `http://localhost:3000`. Open your browser and navigate to this address to start using the app.

## 🚀 Usage

1. Type your message in the input field at the bottom of the chat interface.
2. Press `Enter` or click on the `Send` button to submit your message.
3. The application will send the message to the ChatGPT API and display the generated response in the chat window.
4. You can continue the conversation by sending more messages. The chat history will be visible, allowing for a more engaging and interactive conversation.


## 🤝 Contributing

Contributions are welcome! If you'd like to improve or expand the project, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes in the new branch.
4. Submit a pull request with a detailed description of your changes.

We'll review your pull request and provide feedback or merge your changes as soon as possible.

## 📃 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
