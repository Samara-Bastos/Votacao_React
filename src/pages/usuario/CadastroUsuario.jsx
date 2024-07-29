import Botao from "../../components/botao";
import Box from "../../components/card";
import FormUsuario from "../../components/formUsuario";
import TituloCard from "../../components/tituloCard";

function CadastroUsuario(){
    const teste = () => {
        console.log("Botão clicado!");
    };
    
    return(
       <Box>
            <TituloCard texto={'Cadastro de usuário'} color={'#607a8d'} />
            <FormUsuario />
            <Botao texto={'CADASTRAR'} onClick={teste} />
       </Box>
              
    )
}

export default CadastroUsuario;