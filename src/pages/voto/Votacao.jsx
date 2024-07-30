import Box from "../../components/card";
import FormVoto from "../../components/formVoto";
import TituloCard from "../../components/tituloCard";
import Api from '../../lib/api';

import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Votacao(){
    const { id } = useParams();
    const [Pauta, setPauta] = useState(null);
    const navigate = useNavigate();

    useEffect(()=> {
        Api.get(`/pauta/view/${id}`)
            .then((response) => {
                const data = response.data;
                setPauta(data);
            })
            .catch((error) => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }, [id])

    
    const registrarVoto = ((e, FormDataVoto) => {
        e.preventDefault();

        Api.post(`/voto/${id}`, FormDataVoto)
            .then((response) => {
                toast.success('Voto inserido com sucesso!');
                navigate('/pauta/view');
            }).catch((error) => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            })
    })
    
    return(
       <Box>
            {
                Pauta ?(
                    <div> 
                        <TituloCard texto={'Tela de votação'} color={'#607a8d'} />

                        <FormVoto registrarVoto={registrarVoto} />
                    </div>
                ):(
                    <span>A pauta não está disponivel no momento</span>
                )
            }
       </Box>
              
    )
}

export default Votacao;