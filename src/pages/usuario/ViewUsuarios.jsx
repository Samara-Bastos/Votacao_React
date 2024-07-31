import TituloCard from "../../components/tituloCard";
import SubTitulo from "../../components/subtitulo";
import { useEffect, useState } from "react";
import Api from '../../lib/api';
import { toast } from 'react-toastify';
import ContainerUser from "../../components/containerUser";


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
            <ContainerUser> 
                {
                    usuarios.map((usuario) => (
                        usuario ?(
                            <span className="dFlex justify-content-between"> 
                                <SubTitulo color={'#FFFFFF'} tamanho={'1em'} >Nome : {usuario.nome}</SubTitulo>
                                <SubTitulo color={'#FFFFFF'} tamanho={'1em'} >CPF : {usuario.cpf}</SubTitulo>
                            </span>
                        ): (
                            <span className="dFlex"> 
                                <SubTitulo color={'#FFFFFF'} tamanho={'1em'} >Nenhum usuário registrado no momento</SubTitulo>
                            </span>
                        )
                    ))
                }
            </ContainerUser>
        </div>
    )
}

export default ViewUsuarios;