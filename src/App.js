import './App.css';
import Header from './Header';
import MarkdownCanvas from './MarkdownCanvas';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <MarkdownCanvas />
      </div>
    </div>
  );
}

export default App;
