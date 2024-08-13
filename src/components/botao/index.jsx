import styled from 'styled-components';

const BotaoEstilizado = styled.button`
    background-color: #FFBFBF;
    border: none;
    border-radius: 20px;
    padding: 3px 19px 3px 19px;
    font-size: 1em;
`

function Botao({ texto, onClick }) {
    return (
        <BotaoEstilizado onClick={onClick} >
            {texto}
        </BotaoEstilizado>
    );
  }
  
  export default Botao;