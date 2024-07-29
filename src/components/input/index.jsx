import './style.css';
import { Input } from '@chakra-ui/react'

function InputForm({tipo, placeholder}) {
    return (
        <Input className='Input' type={tipo}
        variant='flushed' placeholder={placeholder}
        />
    );
  }
  
  export default InputForm;