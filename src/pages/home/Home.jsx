import Botao from "../../components/botao";
import HomeDetalhes from "../../components/home";
import TituloCard from "../../components/tituloCard";
import { Link } from "react-router-dom";

function Home(){
    
    return(
       <div>
            <TituloCard texto={'Bem-vindo ao Sistema de Votação Online!'} color={'#FFFFFF'} />
            <HomeDetalhes />
            <Link to={`/usuario`}> 
                <Botao texto={'CADASTRAR USUÁRIO'} />
            </Link>
       </div>
              
    )
}

export default Home;