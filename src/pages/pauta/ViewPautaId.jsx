import Botao from "../../components/botao";
import Box from "../../components/card";
import DetalhesPautaSelecionada from "../../components/detalhesPautaSelecionada";
import TituloCard from "../../components/tituloCard";
import Api from '../../lib/api';

import { useEffect, useState } from "react";
import { useParams, Link  } from 'react-router-dom';
import { toast } from 'react-toastify';


function ViewPautaId(){
    const { id } = useParams();
    const [Pauta, setPauta] = useState(null);

    useEffect(()=> {
        Api.get(`/pauta/visualizar/${id}`)
            .then((response) => {
                const data = response.data;
                setPauta(data);
            })
            .catch(() => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }, [id])
    
    return(
       <Box>
            {
                Pauta ?(
                    <div style={{padding: '40px 50px 50px 50px'}}> 
                        <TituloCard texto={'Detalhes'} color={'#607a8d'} />
                            {
                                Pauta.votacao ?(
                                    <DetalhesPautaSelecionada
                                    titulo={Pauta.titulo} 
                                        descricao={Pauta.descricao} 
                                        situacao={Pauta.votacao.situacao}
                                        resultado={Pauta.votacao.resultado}
                                        votosim={Pauta.votacao.votosSim}
                                        votonao={Pauta.votacao.votosNao}
                                    />
                                ) : (
                                    <DetalhesPautaSelecionada 
                                        descricao={Pauta.descricao} 
                                    />
                                )
                            }
                    </div>
                ):(
                    <span>A pauta não está disponivel no momento</span>
                ) 
            }
            <Link to={`/pauta/visualizar`}>
                <Botao texto={'VOLTAR'}/>
            </Link>
       </Box>     
    )
}

export default ViewPautaId;