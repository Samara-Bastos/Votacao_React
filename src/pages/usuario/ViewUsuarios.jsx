import TituloCard from "../../components/tituloCard";
import SubTitulo from "../../components/subtitulo";
import { useEffect, useState } from "react";
import Api from '../../lib/api';
import { toast } from 'react-toastify';


function ViewUsuarios(){
    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = async() => {
        await Api.get("/usuario/view")
                .then((response) => {
                    const data = response.data;
                    setUsuarios(data);
                })
                .catch((error) => {
                    toast.error('Ocorreu algum problema, tente novamente por favor!');
                });
    }

    useEffect(()=> {
        getUsuarios();
    }, [])

    return(
        <div>
            <TituloCard texto={'Usuários registrados'} color={'#FFFFFF'} />
            <div>
                {
                    usuarios.map((usuario) => (
                        <SubTitulo color={'#FFFFFF'} tamanho={'1em'} >{usuario.nome}</SubTitulo>
                    ))
                }
            </div>
        </div>
    )
}

export default ViewUsuarios;