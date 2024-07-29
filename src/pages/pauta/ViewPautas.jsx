import CardPauta from "../../components/cardPauta";
import GridCardPauta from "../../components/gridCardPauta";
import TituloCard from "../../components/tituloCard";

function ViewPautas(){
    return(
        <div>
            <TituloCard texto={'Pautas'} color={'#FFFFFF'} />
            <GridCardPauta >
                <CardPauta />
                <CardPauta />
                <CardPauta />
                <CardPauta />
                <CardPauta />
                <CardPauta />
                <CardPauta />
            </GridCardPauta>
        </div>
    )
}

export default ViewPautas;