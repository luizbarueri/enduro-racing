//import logo from './logo.svg';
import logo from './logo-enduro-editado.png';
import './App.css';

const db = require('./api/db.json');
//const fs = require('fs');
//const dataJson = JSON.stringify(db)
//const tabela = JSON.parse(dataJson)

const data = [...db, {"id": "2", "nome": "Ana maria"}]
const dataJson = JSON.stringify(data)
const tabela = JSON.parse(dataJson)

//fs.writeFileSync('db.json', JSON.stringify(data))
const result = data.find((cliente) => cliente.id === '2')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Resultado API <code>{JSON.stringify(result)}</code>
        </p>
        
        <div>
        <table border = '1'>
          <tr><td>{tabela[0].id}</td><td>{tabela[0].nome}</td><td><a
                className="App-link"
                href="https://ressgate-amigo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar Jogo Resgate Amigo -  href="https://ressgate-amigo.vercel.app/"
              </a></td></tr>
              <tr><td>{tabela[1].id}</td><td>{tabela[1].nome}</td><td></td></tr>
        </table>
      </div>

      </header>
    </div>
  );
}

export default App;
