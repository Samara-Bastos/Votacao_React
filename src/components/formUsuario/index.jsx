import './style.css';
import InputForm from '../input';
import { useState } from 'react';
import {FormControl,FormLabel} from '@chakra-ui/react';

function FormUsuario() {
    const [FormDataUser, setFormDataUser] = useState({
        nome: '',
        cpf: ''
    });

    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormDataUser({...FormDataUser, [name]: value});
    }


    return (
        <form className='FormUsuario'>
             <FormControl isRequired>
                <FormLabel htmlFor='nome'>Nome</FormLabel>
                <InputForm tipo={'text'} value={FormDataUser.nome} onChange={onChange} name='nome' placeholder={'Preencha o seu nome completo'} />        
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='cpf'>CPF</FormLabel>
                <InputForm tipo={'text'} value={FormDataUser.cpf} onChange={onChange} nome='cpf' placeholder={'Preencha o seu CPF com apenas números'}  />
            </FormControl>
        </form>
    );

  }
  
  export default FormUsuario;