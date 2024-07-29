import './style.css';
import InputForm from '../input';
import { useState } from 'react';
import {FormControl,FormLabel, Switch} from '@chakra-ui/react';

function FormPauta() {
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
                <InputForm tipo={'text'} value={FormDataPauta.titulo} onChange={onChange} name='titulo' placeholder={'Preencha o titulo'} />        
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='descricao'>Descrição</FormLabel>
                <InputForm tipo={'text'} value={FormDataPauta.descricao} onChange={onChange} name='descricao' placeholder={'Preencha a descrição'}  />
            </FormControl>

            <FormControl className='dFlex'>
                <div>
                    <FormLabel htmlFor='ativaSessao'>Abrir sessão de votação </FormLabel>
                    <Switch name='ativaSessao' isChecked={FormDataPauta.ativaSessao} onChange={onChangeSwitch} />
                </div>
                <div>
                    <FormLabel htmlFor='tempoSessao'>Tempo da sessão de votação</FormLabel>
                    <InputForm tipo={'number'} value={FormDataPauta.tempoSessao} onChange={onChange} name='tempoSessao' />
                </div>
            </FormControl>
        </form>
    );

  }
  
  export default FormPauta;