import styled from 'styled-components';
import { TimeIcon, SettingsIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import Botao from "../../components/botao";

const ContainerDetalhes = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
`;

const TituloDetalhes = styled.span`
    font-size: 1.3em;
    white-space: nowrap;         
    overflow: hidden;          
    text-overflow: ellipsis;
`;

const IconEngrenagem = styled.span`
    font-size: 1.4em;
`;

const Timer = styled.span`
    font-size: 1.1em;
    display: flex;
    gap: 10px;
    align-items: center;
`;

function DetalhesPauta({titulo, tempo, linkDetalhes, linkVotacao}) {
    return (
        <div className='dFlex justify-content-between'> 
            <ContainerDetalhes>
                <TituloDetalhes>{titulo} </TituloDetalhes>

                { tempo ? (
                    <Timer className='dFlex '> <TimeIcon /> {tempo} </Timer>
                ) : ""}

                {linkVotacao ? (
                    <Link to={linkVotacao}>
                        <Botao texto={'VOTAR'} />
                    </Link>
                ) : ""}

            </ContainerDetalhes>

            <Link to={linkDetalhes}>
                <IconEngrenagem> <SettingsIcon /> </IconEngrenagem>
            </Link>
        </div>
    )
  }
  
  export default DetalhesPauta;