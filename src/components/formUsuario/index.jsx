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

        console.log(FormDataUser);
    }


    return (
        <form className='FormUsuario'>
             <FormControl isRequired>
                <FormLabel htmlFor='nome'>Nome</FormLabel>
                <Input type='text' value={FormDataUser.nome} onChange={onChange} name='nome' placeholder={'Preencha o seu nome completo'} />        
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='cpf'>CPF</FormLabel>
                <Input type='text' value={FormDataUser.cpf} onChange={onChange} name='cpf' placeholder={'Preencha o seu CPF com apenas números'}  />
            </FormControl>

            <Botao texto={'CADASTRAR'} onClick={(e) => onSubmit(e, FormDataUser)} />
        </form>
    );

  }
  
  export default FormUsuario;