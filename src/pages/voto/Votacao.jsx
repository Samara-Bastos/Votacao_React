import Box from "../../components/card";
import FormVoto from "../../components/formVoto";
import TituloCard from "../../components/tituloCard";
import Api from '../../lib/api';

import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DetalhesPautaVoto from "../../components/detalhesPautaSelecionada";

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
            .catch(() => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }, [id])

    
    const registrarVoto = ((e, FormDataVoto) => {
        e.preventDefault();

        Api.post(`/voto/${id}`, FormDataVoto)
            .then(() => {
                toast.success('Voto inserido com sucesso!');
                navigate('/pauta/view');
            }).catch(() => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            })
    })
    
    return(
       <Box>
            
            {
                Pauta ?(
                    <div style={{padding: '40px 50px 20px 50px'}} > 
                        <TituloCard texto={'Tela de votação'} color={'#607a8d'} />
                        <DetalhesPautaVoto titulo={Pauta.titulo}  descricao={Pauta.descricao} />
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