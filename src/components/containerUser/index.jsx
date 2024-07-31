import styled from 'styled-components';

const DivEstilizado = styled.div`
    min-width: 80vh !important;
    min-height: 70vh;
    font-size: 1.2em;
    margin-top: 50px;
`;

function ContainerUser({children}) {
    return (
        <DivEstilizado >
            {children}
        </DivEstilizado>
    )
  }
  
  export default ContainerUser;