import './style.css';
import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input} from '@chakra-ui/react';

function FormUsuario({onSubmit}) {
    const [FormDataUser, setFormDataUser] = useState({
        nome: '',
        cpf: ''
    });

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


    return (
        <form className='FormUsuario'>
             <FormControl isRequired className='formGrupo'>
                <FormLabel className='label' htmlFor='nome'>Nome</FormLabel>
                <Input className='input' variant='flushed' type='text' value={FormDataUser.nome} onChange={onChange} name='nome' placeholder='Preencha o seu nome completo' />        
            </FormControl>

            <FormControl isRequired className='formGrupo'>
                <FormLabel className='label' htmlFor='cpf'>CPF</FormLabel>
                <Input className='input' variant='flushed' type='text' value={FormDataUser.cpf} onChange={onChangeCpf} name='cpf' placeholder='Preencha o seu CPF com apenas números' maxlength="14"/>
            </FormControl>
            <FormControl className='submit'>
                <Botao texto={'CADASTRAR'} onClick={(e) => onSubmit(e, FormDataUser)} />
            </FormControl>
        </form>
    );

  }
  
  export default FormUsuario;