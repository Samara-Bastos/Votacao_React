import Botao from "../../components/botao";
import TituloCard from "../../components/tituloCard";


function Home(){

    const teste = () => {
        console.log("Botão clicado!");
    };
    
    return(
       <div>
            <TituloCard texto={'Bem vindo ao VotaLeb'} color={'#FFFFFF'} />
            <Botao texto={'CADASTRAR PAUTA'} onClick={teste} />
       </div>
              
    )
}

export default Home;