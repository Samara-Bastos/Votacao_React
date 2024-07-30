import './style.css';
import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input, Switch, Select } from '@chakra-ui/react';

function FormPauta({onSubmit}) {
    const [FormDataPauta, setFormDataPauta] = useState({
        titulo: '',
        descricao: '',
        categoria: '',
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
                <Input variant='flushed' type={'text'} value={FormDataPauta.titulo} onChange={onChange} name='titulo' placeholder={'Preencha o titulo'} />        
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='descricao'>Descrição</FormLabel>
                <Input variant='flushed' type={'text'} value={FormDataPauta.descricao} onChange={onChange} name='descricao' placeholder={'Preencha a descrição'}  />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='categoria'>Categoria</FormLabel>
                <Select variant='flushed' placeholder='Selecione' name='categoria' value={FormDataPauta.categoria} onChange={onChange}>
                    <option>TECNOLOGIA</option>
                    <option>EDUCAÇÃO</option>
                    <option>CIÊNCIA</option>
                    <option>ESPORTE</option>
                </Select>
            </FormControl>

            <FormControl className='dFlex'>
                <div>
                    <FormLabel htmlFor='ativaSessao'>Abrir sessão de votação </FormLabel>
                    <Switch name='ativaSessao' isChecked={FormDataPauta.ativaSessao} onChange={onChangeSwitch} />
                </div>
                <div>
                    <FormLabel htmlFor='tempoSessao'>Tempo da sessão de votação</FormLabel>
                    <Input variant='flushed' type={'number'} value={FormDataPauta.tempoSessao} onChange={onChange} name='tempoSessao' />
                </div>
            </FormControl>
            
            <Botao texto={'CADASTRAR'} onClick={(e) => onSubmit(e, FormDataPauta)} />
        </form>
    );
  }
  
  export default FormPauta;