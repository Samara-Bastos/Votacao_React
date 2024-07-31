import { createBrowserRouter } from 'react-router-dom';
import CadastroPauta from '../pages/pauta/CadastroPauta';
import ViewPautas from '../pages/pauta/ViewPautas';
import ViewPautaId from '../pages/pauta/ViewPautaId';
import CadastroUsuario from '../pages/usuario/CadastroUsuario';
import ViewUsuarios from '../pages/usuario/ViewUsuarios';
import Votacao from '../pages/voto/Votacao';
import Home from '../pages/home/Home';
import App from '../App';

export const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/usuario",
            element: <CadastroUsuario />
        },
        {
            path: "/usuario/view",
            element: <ViewUsuarios />
        },
        {
            path: "/pauta",
            element: <CadastroPauta />
        },
        {
            path: "/pauta/view",
            element: <ViewPautas />
        },
        {
            path: "/pauta/view/:id",
            element: <ViewPautaId />
        },
        {
            path: "/voto/:id",
            element: <Votacao />
        }
      ]
    }
  ])