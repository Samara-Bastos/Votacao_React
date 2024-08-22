import './style.css';
import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input, FormErrorMessage} from '@chakra-ui/react';
import {Link } from 'react-router-dom';

function FormUsuario({onSubmit}) {
    const [FormDataUser, setFormDataUser] = useState({
        nome: '',
        cpf: ''
    });

    const [erro, setErro] = useState({
        nome: false,
        cpf: false
    })

    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormDataUser({...FormDataUser, [name]: value});
    }

    const onChangeCpf = (e) =>{
        const name = e.target.name;
        let value = e.target.value.replace(/\D/g, ''); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2');     
        value = value.replace(/(\d{3})(\d)/, '$1.$2');     
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setFormDataUser({...FormDataUser, [name]: value});
    }

    const validaCpf = (cpf) => {
        return cpf.length === 14;
    }

    const validaForm = () => {
        let validacao = true;
        let novosErros = {
            nome: false,
            cpf: false
        }

        if(FormDataUser.nome === ''){
            novosErros.nome = true;
            validacao = false;
        }

        if(!validaCpf(FormDataUser.cpf)){
            novosErros.cpf = true;
            validacao = false
        }

        setErro(novosErros);
        return validacao;
    }

    const enviaForm = (e) => {
        e.preventDefault();

        if(validaForm()){
            onSubmit(e, FormDataUser);
        }
    }

    return (
        <form className='FormUsuario'>
             <FormControl isRequired className='formGrupo' isInvalid={erro.nome}>
                <FormLabel className='label' htmlFor='nome'>Nome</FormLabel>
                <Input className='input' variant='flushed' type='text' value={FormDataUser.nome} onChange={onChange} name='nome' placeholder='Preencha o seu nome completo' />   
                {erro.nome ? <FormErrorMessage>O nome precisa ser preenchido</FormErrorMessage> : ""}
            </FormControl>

            <FormControl isRequired className='formGrupo' isInvalid={erro.cpf}>
                <FormLabel className='label' htmlFor='cpf'>CPF</FormLabel>
                <Input className='input' variant='flushed' type='text' value={FormDataUser.cpf} onChange={onChangeCpf} name='cpf' placeholder='Preencha o seu CPF com apenas números' maxLength="14"/>
                {erro.cpf ? <FormErrorMessage>CPF inválido. Verifique o formato.</FormErrorMessage> : ""}
            </FormControl>

            <FormControl className='submit'>
                <Link to={`/pauta/visualizar`}>
                    <Botao texto={'VOLTAR'}/>
                </Link>
                <Botao texto={'CADASTRAR'} onClick={enviaForm} />
            </FormControl>
        </form>
    );

  }
  
  export default FormUsuario;