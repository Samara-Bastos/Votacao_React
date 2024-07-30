import CardPauta from "../../components/cardPauta";
import GridCardPauta from "../../components/gridCardPauta";
import TituloCard from "../../components/tituloCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from '../../lib/api';
import { toast } from 'react-toastify';
import Botao from "../../components/botao";


function ViewPautas(){
    const [Pautas, setPautas] = useState([]);

    useEffect(()=> {
        Api.get("/pauta/view")
                .then((response) => {
                    const data = response.data;
                    setPautas(data);
                })
                .catch((error) => {
                    toast.error('Ocorreu algum problema, tente novamente por favor!');
                });
    }, [])

    
    return(
        <div>
            <TituloCard texto={'Pautas'} color={'#FFFFFF'} />
            <GridCardPauta >
                {
                    Pautas.map((Pauta) => (
                        Pauta.votacao != null &&  Pauta.votacao.ativa ?(         
                            <CardPauta>
                                <div> 
                                    <span>{Pauta.titulo}</span>
                                    <span>ABERTA</span>
                                </div>
                                <div>
                                    <Link to={`/pauta/view/${Pauta.id}`}>
                                        <img src="" alt="Ver Detalhes" />
                                    </Link> 
                                    <Link to={`/voto/${Pauta.votacao.idVotacao}`}>
                                        <Botao texto={'VOTAR'} />
                                    </Link>
                                </div>
                            </CardPauta>
                        ) : (
                            <CardPauta>
                                <div> 
                                    <span>{Pauta.titulo}</span>
                                    <span>FECHADA</span>
                                </div>
                                <div>
                                    <Link to={`/pauta/view/${Pauta.id}`}>
                                        <img src="" alt="Ver Detalhes" />
                                    </Link> 
                                </div>
                            </CardPauta>
                        )
                    ))
                }            
            </GridCardPauta>
        </div>
    )
}

export default ViewPautas;