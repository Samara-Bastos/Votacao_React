import CardPauta from "../../components/cardPauta";
import GridCardPauta from "../../components/gridCardPauta";
import TituloCard from "../../components/tituloCard";
import DetalhesPauta from "../../components/detalhesPauta";
import Api from '../../lib/api';
import Timer from "../../components/timer";
import {FormControl,FormLabel, Select } from '@chakra-ui/react';

import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

function ViewPautas(){
    const [Pautas, setPautas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');


    useEffect(()=> {
        Api.get("/pauta/view")
                .then((response) => {
                    const data = response.data;
                    setPautas(data);

                    const categoriasUnicas = [...new Set(data.map(pauta => pauta.categoria))];
                    setCategorias(categoriasUnicas);
                })
                .catch(() => {
                    toast.error('Ocorreu algum problema, tente novamente por favor!');
                });
    }, [])

    const handleCategoriaChange = (event) => {
        setCategoriaSelecionada(event.target.value);
    };

    const pautasFiltradas = categoriaSelecionada 
        ? Pautas.filter(pauta => pauta.categoria === categoriaSelecionada) 
        : Pautas;

    
    return(
        <div>
            <TituloCard texto={'Pautas'} color={'#FFFFFF'} />

            <FormControl className="formCategoria" >
                <FormLabel htmlFor="categoria">Filtrar por categoria:</FormLabel>

                <Select id="categoria" value={categoriaSelecionada} onChange={handleCategoriaChange}>
                    <option style={{ color:'#000'}}  value="">TODAS</option>
                    {categorias.map((categoria) => (
                        <option style={{ color:'#000'}}  value={categoria}>{categoria}</option>
                    ))}
                </Select>

            </FormControl>

            <GridCardPauta >
                {
                    pautasFiltradas.map((Pauta) => (
                        Pauta.votacao != null &&  Pauta.votacao.ativa ?(         
                            <CardPauta>
                                <DetalhesPauta titulo={Pauta.titulo} 
                                    tempo={<Timer 
                                        tempoInicio={Pauta.votacao.tempoInicioSessao} 
                                        tempoFim={Pauta.votacao.tempoFimSessao} 
                                    />}
                                    linkDetalhes={`/pauta/view/${Pauta.id}`} 
                                    linkVotacao={`/voto/${Pauta.votacao.idVotacao}`}
                                />
 
                            </CardPauta>
                        ) : (
                            <CardPauta bg={'rgba(255, 255, 255, 0.5)'}>
                                <DetalhesPauta titulo={Pauta.titulo} 
                                    linkDetalhes={`/pauta/view/${Pauta.id}`} 
                                />
                            </CardPauta>
                        )
                    ))
                }            
            </GridCardPauta>
        </div>
    )
}

export default ViewPautas;