import './App.css';
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/cabecalho';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <Cabecalho />
        <div className="Outlet">
          <ToastContainer />
          <Outlet/>
        </div>
    </div>
  );
}

export default App;
