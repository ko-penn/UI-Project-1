//npm install react-icons –save
import {BiArrowBack} from "react-icons/bi";

function BlueBack(){
    return (
        <a href="/Settings" className = "back"><BiArrowBack size={40}></BiArrowBack></a>
    );
}

export default BlueBack;