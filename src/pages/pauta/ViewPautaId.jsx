import Botao from "../../components/botao";
import Box from "../../components/card";
import TituloCard from "../../components/tituloCard";
import Api from '../../lib/api';

import { useEffect, useState } from "react";
import { useParams, Link  } from 'react-router-dom';
import { toast } from 'react-toastify';


function ViewPautaId(){
    const { id } = useParams();
    const [Pauta, setPauta] = useState(null);

    useEffect(()=> {
        Api.get(`/pauta/view/${id}`)
            .then((response) => {
                const data = response.data;
                console.log(data)
                setPauta(data);
            })
            .catch((error) => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }, [id])
    
    return(
       <Box>
            {
                Pauta ?(
                    <TituloCard texto={Pauta.titulo} color={'#607a8d'} />
                ):(
                    <span>A pauta não está disponivel no momento</span>
                ) 
            }
            <Link to={`/pauta/view`}>
                <Botao texto={'VOLTAR'}/>
            </Link>
       </Box>     
    )
}

export default ViewPautaId;