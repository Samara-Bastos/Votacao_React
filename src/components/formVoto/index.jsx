import './style.css';
import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input, Radio, RadioGroup} from '@chakra-ui/react';
import {Link } from 'react-router-dom';


function FormVoto({registrarVoto}) {
    const [FormDataVoto, setFormDataVoto] = useState({
        tipo: '',
        cpf: ''
    });

    const onChangeCpf = (e) =>{
        const name = e.target.name;
        let value = e.target.value.replace(/\D/g, ''); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2');     
        value = value.replace(/(\d{3})(\d)/, '$1.$2');     
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setFormDataVoto({...FormDataVoto, [name]: value});
    }

    const onChangeRadio = (value) =>{
        setFormDataVoto({...FormDataVoto, tipo: value});
    }


    return (
        <form className='FormVoto'>
            <FormControl isRequired className='formGrupo'>
                <FormLabel className='label' htmlFor='cpf'>CPF</FormLabel>
                <Input className='input' variant='flushed' type='text' value={FormDataVoto.cpf} onChange={onChangeCpf} name='cpf' placeholder={'Preencha o seu CPF com apenas números'} maxlength="14"  />
            </FormControl>

            <FormControl isRequired className='formGrupo'>
                <FormLabel className='label' htmlFor='tipo'> Voto </FormLabel>
                <RadioGroup className='input' name='tipo'  value={FormDataVoto.tipo} onChange={onChangeRadio} >
                    <Radio value='SIM' mr={4}>SIM </Radio>
                    <Radio value='NAO' mr={4}> NÃO </Radio>
                </RadioGroup>
            </FormControl>

            <FormControl className='submit'>
                <Link to={`/pauta/view`}>
                    <Botao texto={'VOLTAR'}/>
                </Link>

                <Botao className='submit' texto={'CONFIRMAR'} onClick={(e) => registrarVoto(e, FormDataVoto)} />
            </FormControl>
        </form>
    );

  }
  
  export default FormVoto;