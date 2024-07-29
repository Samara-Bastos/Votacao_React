import Botao from "../../components/botao";
import Box from "../../components/card";
import TituloCard from "../../components/tituloCard";


function Votacao(){
    const teste = () => {
        console.log("Botão clicado!");
    };
    
    return(
       <Box>
            <TituloCard texto={'Tela de votação'} color={'#607a8d'} />
            <Botao texto={'NÃO'} onClick={teste} />
            <Botao texto={'SIM'} onClick={teste} />
       </Box>
              
    )
}

export default Votacao;