import './App.css';
import ChatBubble from './components/ChatBubble';
import ChatInput from './components/ChatInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ChatBubble></ChatBubble>
       <ChatInput></ChatInput>
      </header>
    </div>
  );
}

export default App;
