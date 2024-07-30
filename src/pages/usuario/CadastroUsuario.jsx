import Box from "../../components/card";
import FormUsuario from "../../components/formUsuario";
import TituloCard from "../../components/tituloCard";
import Api from '../../lib/api';
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';


function CadastroUsuario(){
    const navigate = useNavigate();

    const onSubmit = (e, FormDataUser) => {
        e.preventDefault();
        
        Api.post("/usuario", FormDataUser)
            .then((response) => {
                toast.success('Usuário inserido com sucesso!');
                navigate('/usuario/view');
            })
            .catch((error) => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }
    
    return(
       <Box>
            <TituloCard texto={'Cadastro de usuário'} color={'#607a8d'} />
            <FormUsuario onSubmit={onSubmit} />
       </Box>
              
    )
}

export default CadastroUsuario;