import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'

import {
  AddIcon,
  HamburgerIcon,
  CalendarIcon
} from '@chakra-ui/icons';

const CabecalhoEstilizado = styled.div`
  background-color: #FFFFFF;
    min-height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right:20px;
`

const Imagem = styled.img`
    height: 50px;
    width: 50px;
    padding: 6px;
`

function Cabecalho() {
    return (
      <CabecalhoEstilizado>
          <Imagem src={Logo} alt='logo'/>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon boxSize={6} />}
              variant='outline'
            />
            <MenuList>
            <Link to={`/`}>
                <MenuItem icon={<CalendarIcon boxSize={4} />} command='⌘'>
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
                  Pautas
                </MenuItem>
              </Link>

              <Link to={`/usuario`}>
                <MenuItem icon={<AddIcon boxSize={4} />} command='⌘'>
                  Novo Usuário
                </MenuItem>
              </Link>

              <Link to={`/usuario/view`}>
                <MenuItem icon={<HamburgerIcon boxSize={4} />} command='⌘'>
                  Usuários registrados
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
      </CabecalhoEstilizado>
    );
}

export default Cabecalho;
