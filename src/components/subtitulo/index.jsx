import styled from 'styled-components';

const H4Estilizado = styled.h4`
    font-size: ${props => props.tamanho || '1em'};
    color: ${props => props.color || '#000'};
`;

function SubTitulo({children, color, tamanho}) {
    return (
        <H4Estilizado color={color} tamanho={tamanho}>
            {children}
        </H4Estilizado>
    )
  }
  
  export default SubTitulo;