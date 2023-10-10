//npm install react-icons –save
import {BiArrowBack} from "react-icons/bi";

function Back(){
    return (
        <a href="/Explore" className = "back"><BiArrowBack size={40}></BiArrowBack></a>
    );
}

export default Back;