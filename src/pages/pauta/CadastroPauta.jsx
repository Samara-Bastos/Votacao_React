import Box from "../../components/card";
import FormPauta from "../../components/formPauta";
import TituloCard from "../../components/tituloCard";
import Api from "../../lib/api";
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';

function CadastroPauta(){
    const navigate = useNavigate();

    const onSubmit = (e, FormDataPauta) => {
        e.preventDefault();

        Api.post("/pauta",FormDataPauta)
            .then(() => {
                toast.success('Pauta inserida com sucesso!');
                navigate('/pauta/view');
            }).catch(() => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            })
    };
    
    return(
       <Box>
            <TituloCard texto={'Cadastro de pauta'} color={'#607a8d'} />
            <FormPauta onSubmit={onSubmit} />
       </Box> 
    )
}

export default CadastroPauta;