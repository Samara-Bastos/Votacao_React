import { Card, CardBody } from '@chakra-ui/react'
import './style.css'

function Box({children}) {
    return (
        <Card className='card'>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
  }
  
  export default Box;