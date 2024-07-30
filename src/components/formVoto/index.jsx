import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input, Radio, RadioGroup} from '@chakra-ui/react';

function FormVoto({registrarVoto}) {
    const [FormDataVoto, setFormDataVoto] = useState({
        tipo: '',
        cpf: ''
    });

    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormDataVoto({...FormDataVoto, [name]: value});
    }

    const onChangeRadio = (value) =>{
        setFormDataVoto({...FormDataVoto, tipo: value});
    }


    return (
        <form className='FormVoto'>
            <FormControl isRequired>
                <FormLabel htmlFor='cpf'>CPF</FormLabel>
                <Input variant='flushed' type='text' value={FormDataVoto.cpf} onChange={onChange} name='cpf' placeholder={'Preencha o seu CPF com apenas números'}  />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='tipo'> Voto </FormLabel>
                <RadioGroup name='tipo'  value={FormDataVoto.tipo} onChange={onChangeRadio} >
                    <Radio value='SIM' mr={4}>SIM </Radio>
                    <Radio value='NAO' mr={4}> NÃO </Radio>
                </RadioGroup>
            </FormControl>

            <Botao texto={'CONFIRMAR'} onClick={(e) => registrarVoto(e, FormDataVoto)} />
        
        </form>
    );

  }
  
  export default FormVoto;