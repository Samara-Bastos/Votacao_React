import Botao from "../../components/botao";
import Box from "../../components/card";
import TituloCard from "../../components/tituloCard";

function ViewPautaId(){
    const teste = () => {
        console.log("Botão clicado!");
    };
    
    return(
       <Box>
            <TituloCard texto={'Nome da pauta exemplo'} color={'#607a8d'} />
            <Botao texto={'CADASTRAR'} onClick={teste} />
       </Box>
              
    )
}

export default ViewPautaId;