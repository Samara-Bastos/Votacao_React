import './style.css';
import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input, Switch, Select, FormErrorMessage } from '@chakra-ui/react';
import {Link } from 'react-router-dom';

function FormPauta({onSubmit}) {
    const [FormDataPauta, setFormDataPauta] = useState({
        titulo: '',
        descricao: '',
        categoria: '',
        ativaSessao: '',
        tempoSessao: ''
    });

    const [erro, setErro] = useState({
        titulo: false,
        categoria: false,
        tempoSessao: false
    })

    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormDataPauta({...FormDataPauta, [name]: value});
    }

    const onChangeSwitch  = (e) =>{
        setFormDataPauta({...FormDataPauta, ativaSessao: e.target.checked});
    }

    const validaForm = () => {
        let validacao = true;
        let novosErros = {
            titulo: false,
            categoria: false,
            tempoSessao: false
        }

        if (FormDataPauta.titulo === '') {
            novosErros.titulo = true;
            validacao = false;
        }

        if (!FormDataPauta.categoria) {
            novosErros.categoria = true;
            validacao = false;
        }

        if (FormDataPauta.ativaSessao && (!FormDataPauta.tempoSessao || FormDataPauta.tempoSessao <= 0)) {
            novosErros.tempoSessao = true;
            validacao = false;
        }

        setErro(novosErros)
        return validacao;
    }

    const enviaForm = (e) => {
        e.preventDefault();

        if(validaForm()){
            onSubmit(e, FormDataPauta);
        }
    }
 

    return (
        <form className='FormPauta'>
             <FormControl isRequired className='formGrupo' isInvalid={erro.titulo}>
                <FormLabel className='label' htmlFor='titulo'>Titulo</FormLabel>
                <Input className='input' variant='flushed' type={'text'} value={FormDataPauta.titulo} onChange={onChange} name='titulo' placeholder='Preencha o titulo' />
                {erro.titulo ? <FormErrorMessage>O título é obrigatório.</FormErrorMessage>: ""}
            </FormControl>

            <FormControl className='formGrupo'>
                <FormLabel className='label' htmlFor='descricao'>Descrição</FormLabel>
                <Input className='input' variant='flushed' type={'text'} value={FormDataPauta.descricao} onChange={onChange} name='descricao' placeholder='Preencha a descrição' />
            </FormControl>

            <FormControl isRequired className='formGrupo' isInvalid={erro.categoria}>
                <FormLabel className='label' htmlFor='categoria'>Categoria</FormLabel>
                <Select className='input' variant='flushed' name='categoria' value={FormDataPauta.categoria} onChange={onChange} placeholder='SELECIONE'>
                    <option>TECNOLOGIA</option>
                    <option>EDUCAÇÃO</option>
                    <option>CIÊNCIA</option>
                    <option>ESPORTE</option>
                </Select>
                {erro.categoria ? <FormErrorMessage>A categoria é obrigatória.</FormErrorMessage>: ""}
            </FormControl>

            <FormControl className='formGrupo dFlex' isInvalid={erro.tempoSessao}>
                <div className='div-switch'>
                    <FormLabel className='label' htmlFor='ativaSessao'>Abrir sessão de votação </FormLabel>
                    <Switch className='input' name='ativaSessao' isChecked={FormDataPauta.ativaSessao} onChange={onChangeSwitch} />
                </div>
                <div>
                    <FormLabel className='label' htmlFor='tempoSessao'>Tempo da sessão de votação</FormLabel>
                    <Input className='input' variant='flushed' type={'number'} value={FormDataPauta.tempoSessao} onChange={onChange} name='tempoSessao' placeholder='Em minutos, ex: 1 , 2 , 3 ...' />
                    {erro.tempoSessao ? <FormErrorMessage>O tempo da sessão deve ser maior que zero.</FormErrorMessage>: ""}
                </div>
            </FormControl>

            <FormControl className='submit'>
                <Link to={`/pauta/visualizar`}>
                    <Botao texto={'VOLTAR'}/>
                </Link>

                <Botao  texto={'CADASTRAR'} onClick={enviaForm} />
            </FormControl>
        </form>
    );
  }
  
  export default FormPauta;