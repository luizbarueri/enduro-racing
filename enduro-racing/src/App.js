//import logo from './logo.svg';
import logo from './logo-enduro-editado.png';
import './App.css';

const db = require('./db.json');

function App() {
  const result = db.find((cliente) => cliente.id === '1')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          resultado API <code>{JSON.stringify(result)}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
