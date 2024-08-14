import './style.css';
import Botao from "../../components/botao";
import { useState } from 'react';
import {FormControl,FormLabel, Input, Radio, RadioGroup, FormErrorMessage} from '@chakra-ui/react';
import {Link } from 'react-router-dom';


function FormVoto({registrarVoto}) {
    const [FormDataVoto, setFormDataVoto] = useState({
        tipo: '',
        cpf: ''
    });

    const [erro, setErro] = useState({
        tipo: false,
        cpf: false
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

    const validaCPF = (cpf) => {
        return cpf.length === 14; 
      };
    
    const validaForm = () => {

        let validacao = true;
        let novosErros = {
            tipo: false,
            cpf: false
        };
    
        if (FormDataVoto.tipo === '') {
            novosErros.tipo = true;
            validacao = false;
        }
    
        if (!validaCPF(FormDataVoto.cpf)) {
            novosErros.cpf = true;
            validacao = false;
        }
      
        setErro(novosErros);
        return validacao;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (validaForm()) {
            registrarVoto(e, FormDataVoto);
        }
    };


    return (
        <form className='FormVoto'>
            <FormControl isRequired className='formGrupo' isInvalid={erro.cpf}>
                <FormLabel className='label' htmlFor='cpf'>CPF</FormLabel>
                <Input className='input' variant='flushed' type='text' value={FormDataVoto.cpf} onChange={onChangeCpf} name='cpf' placeholder={'Preencha o seu CPF com apenas números'} maxLength="14"  />
                {erro.cpf ? <FormErrorMessage>CPF inválido. Verifique o formato.</FormErrorMessage>: ""}
            </FormControl>

            <FormControl isRequired className='formGrupo' isInvalid={erro.tipo}>
                <FormLabel className='label' htmlFor='tipo'> Voto </FormLabel>
                <RadioGroup className='input' name='tipo'  value={FormDataVoto.tipo} onChange={onChangeRadio} >
                    <Radio value='SIM' mr={4}>SIM </Radio>
                    <Radio value='NAO' mr={4}> NÃO </Radio>
                </RadioGroup>
                {erro.tipo ? <FormErrorMessage>Selecione uma opção de voto.</FormErrorMessage>: ""}
            </FormControl>

            <FormControl className='submit'>
                <Link to={`/pauta/visualizar`}>
                    <Botao texto={'VOLTAR'}/>
                </Link>

                <Botao className='submit' texto={'CONFIRMAR'} onClick={onSubmit}/>
            </FormControl>
        </form>
    );

  }
  
  export default FormVoto;