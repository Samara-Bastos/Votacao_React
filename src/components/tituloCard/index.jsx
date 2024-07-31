import styled from 'styled-components';

const H2Estilizado = styled.h2`
    font-size: 2.9em;
    color: ${props => props.color || '#000'};
    text-align: center;

    @media (max-width: 757px) {
        font-size: 1.9em; 
    }
`;

function TituloCard({texto, color}) {
    return (
        <H2Estilizado color={color}>
            {texto}
        </H2Estilizado>
    )
  }
  
  export default TituloCard;