import styled from 'styled-components';


const ContainerDetalhes = styled.div`
    display:flex;
    flex-direction: column;
    color: #607a8d;
`;

const TituloDetalhes = styled.span`
    font-size: 1.5em;

    @media (max-width: 1443px) {
        font-size: 1.1em; 
    }
    
`;

const Texto = styled.span`
    font-size: 1.2em;
    padding: 10px 0px 10px 0px;

    @media (max-width: 1443px) {
        font-size: 1em; 
    }
    
`;

const ContainerVotos = styled.span`
    display:flex;
    gap: 10px;
`;


function DetalhesPautaSelecionada({titulo, descricao, situacao, resultado, votosim, votonao}) {
    return (
        
        <ContainerDetalhes>
            <TituloDetalhes>{titulo} </TituloDetalhes>
            {
                descricao ?(
                    <Texto>{descricao}</Texto>
                ) : ("")
            }
            {
                situacao ?(
                    <Texto>Situação : {situacao}</Texto>
                ) : ("")
            }

            {
                resultado ?(
                    <Texto>Resultado : {resultado}</Texto>
                ) : ("")
            }
            {
                (votosim || votonao) ?(
                    <ContainerVotos>
                        <Texto>Votos positivos : {votosim}</Texto>
                        <Texto>Votos negativos : {votonao}</Texto>
                    </ContainerVotos>
                ): ("")
            }
        </ContainerDetalhes>
        
    )
  }
  
  export default DetalhesPautaSelecionada;