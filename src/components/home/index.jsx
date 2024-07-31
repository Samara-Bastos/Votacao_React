import styled from 'styled-components';
import Icone from '../../assets/votacao-eletronica.png';

const ContainerHome = styled.h2`
    display: flex;
    gap:6px;
    margin-top: 50px;
    width: 100%;

    @media (max-width: 1082px) {
        flex-direction: column;
    }
`;

const Texto = styled.span`
    color: #FFFFFF;
    font-size: 1.2em;
    width: 70%;

    @media (max-width: 1082px) {
        width: 100%;
    }
`;

const Imagem = styled.div`
    object-fit: cover;
    width: 30%;

    @media (max-width: 1082px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;


function HomeDetalhes() {
    return (
        <ContainerHome>
            <Texto>
                <div>
                    Este sistema foi desenvolvido para facilitar a criação e participação em sessões de votação de forma simples e eficaz. Siga as instruções abaixo para utilizar o sistema:
                </div> 
                <br />
                <div> 
                    Cadastro de Usuários <br />
                    Cadastre-se com um CPF válido para poder votar. <br /><br />
                    
                    Criação e Gerenciamento de Pautas <br />
                    Acesse a seção de pautas para criar novas e abrir sessões de votação. <br />
                    O tempo deve ser definido em minutos, exemplo : 1, 2, 3 ... <br /><br />

                    Participação nas Votações<br />
                    Acesse a seção de votação, escolha uma pauta com sessão aberta, e registre seu voto.<br />
                    Vote 'Sim' ou 'Não' em cada pauta. Cada usuário pode votar apenas uma vez por pauta.<br /><br />

                    Visualização dos Resultados<br />
                    Consulte os detalhes das pautas para ver os resultados das votações.<br /><br />

                    Vamos começar ?
                    <br /><br />
                </div>
                
            </Texto>
            <Imagem>
                <img src={Icone} alt='icone' />
            </Imagem>  
        </ContainerHome>
    )
  }
  
  export default HomeDetalhes;