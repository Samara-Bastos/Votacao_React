import styled from 'styled-components';

const DivCard = styled.div`
    min-width: 100%;
    min-height: 160px ;
    background-color: ${props => props.bg || ' rgba(255, 255, 255, 1)'};
    border-radius: 18px !important;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function CardPauta({children, bg}) {
    return (
        <DivCard bg={bg}>
            {children}
        </DivCard>
    )
  }
  
  export default CardPauta;