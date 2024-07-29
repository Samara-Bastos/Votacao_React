import './App.css';
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/cabecalho';

function App() {
  return (
    <div className="App">
        <Cabecalho />
        <div className="Outlet">
          <Outlet/>
        </div>
    </div>
  );
}

export default App;
