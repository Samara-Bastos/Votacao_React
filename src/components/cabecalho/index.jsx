import './style.css';
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'

import {
  AddIcon,
  HamburgerIcon
} from '@chakra-ui/icons';

function Cabecalho() {
    return (
      <div className="Cabecalho">
          <img src='' alt='logo'/>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon boxSize={6} />}
              variant='outline'
            />
            <MenuList>
            <Link to={`/`}>
                <MenuItem icon={<AddIcon boxSize={4} />} command='⌘'>
                  Home
                </MenuItem>
              </Link>

              <Link to={`/pauta`}>
                <MenuItem icon={<AddIcon boxSize={4} />} command='⌘'>
                  Nova Pauta
                </MenuItem>
              </Link>

              <Link to={`/pauta/view`}>
                <MenuItem icon={<HamburgerIcon boxSize={4} />} command='⌘'>
                  Pautas ativas
                </MenuItem>
              </Link>

              <Link to={`/usuario`}>
                <MenuItem icon={<AddIcon boxSize={4} />} command='⌘'>
                  Novo Usuário
                </MenuItem>
              </Link>

              <Link to={`/usuario/view`}>
                <MenuItem icon={<HamburgerIcon boxSize={4} />} command='⌘'>
                  Usuários cadastrados
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
      </div>
    );
}

export default Cabecalho;
