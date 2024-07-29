import './style.css';
import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input, Switch} from '@chakra-ui/react';

function FormPauta({onSubmit}) {
    const [FormDataPauta, setFormDataPauta] = useState({
        titulo: '',
        descricao: '',
        ativaSessao: '',
        tempoSessao: ''
    });

    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormDataPauta({...FormDataPauta, [name]: value});
    }

    const onChangeSwitch  = (e) =>{
        setFormDataPauta({...FormDataPauta, ativaSessao: e.target.checked});
    }


    return (
        <form className='FormUsuario'>
             <FormControl isRequired>
                <FormLabel htmlFor='titulo'>Titulo</FormLabel>
                <Input type={'text'} value={FormDataPauta.titulo} onChange={onChange} name='titulo' placeholder={'Preencha o titulo'} />        
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='descricao'>Descrição</FormLabel>
                <Input type={'text'} value={FormDataPauta.descricao} onChange={onChange} name='descricao' placeholder={'Preencha a descrição'}  />
            </FormControl>

            <FormControl className='dFlex'>
                <div>
                    <FormLabel htmlFor='ativaSessao'>Abrir sessão de votação </FormLabel>
                    <Switch name='ativaSessao' isChecked={FormDataPauta.ativaSessao} onChange={onChangeSwitch} />
                </div>
                <div>
                    <FormLabel htmlFor='tempoSessao'>Tempo da sessão de votação</FormLabel>
                    <Input type={'number'} value={FormDataPauta.tempoSessao} onChange={onChange} name='tempoSessao' />
                </div>
            </FormControl>
            
            <Botao texto={'CADASTRAR'} onClick={(e) => onSubmit(e, FormDataPauta)} />
        </form>
    );
  }
  
  export default FormPauta;