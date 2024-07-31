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
        <form className='FormPauta'>
             <FormControl isRequired className='formGrupo'>
                <FormLabel className='label' htmlFor='titulo'>Titulo</FormLabel>
                <Input className='input' variant='flushed' type={'text'} value={FormDataPauta.titulo} onChange={onChange} name='titulo' placeholder='Preencha o titulo' />        
            </FormControl>

            <FormControl className='formGrupo'>
                <FormLabel className='label' htmlFor='descricao'>Descrição</FormLabel>
                <Input className='input' variant='flushed' type={'text'} value={FormDataPauta.descricao} onChange={onChange} name='descricao' placeholder='Preencha a descrição' />
            </FormControl>

            <FormControl isRequired className='formGrupo'>
                <FormLabel className='label' htmlFor='categoria'>Categoria</FormLabel>
                <Select className='input' variant='flushed' name='categoria' value={FormDataPauta.categoria} onChange={onChange}>
                    <option>TECNOLOGIA</option>
                    <option>EDUCAÇÃO</option>
                    <option>CIÊNCIA</option>
                    <option>ESPORTE</option>
                </Select>
            </FormControl>

            <FormControl className='formGrupo dFlex'>
                <div className='div-switch'>
                    <FormLabel className='label' htmlFor='ativaSessao'>Abrir sessão de votação </FormLabel>
                    <Switch className='input' name='ativaSessao' isChecked={FormDataPauta.ativaSessao} onChange={onChangeSwitch} />
                </div>
                <div>
                    <FormLabel className='label' htmlFor='tempoSessao'>Tempo da sessão de votação</FormLabel>
                    <Input className='input' variant='flushed' type={'number'} value={FormDataPauta.tempoSessao} onChange={onChange} name='tempoSessao' placeholder='Em minutos, ex: 1 , 2 , 3 ...' />
                </div>
            </FormControl>

            <FormControl className='submit'>
                <Botao  texto={'CADASTRAR'} onClick={(e) => onSubmit(e, FormDataPauta)} />
            </FormControl>
        </form>
    );
  }
  
  export default FormPauta;