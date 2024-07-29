import Botao from "../../components/botao";
import Box from "../../components/card";
import FormPauta from "../../components/formPauta";
import TituloCard from "../../components/tituloCard";

function CadastroPauta(){
    const teste = () => {
        console.log("Botão clicado!");
    };
    
    return(
       <Box>
            <TituloCard texto={'Cadastro de pauta'} color={'#607a8d'} />
            <FormPauta />
            <Botao texto={'CADASTRAR'} onClick={teste} />
       </Box>
              
    )
}

export default CadastroPauta;