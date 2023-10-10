//npm install react-icons –save
import {BsGearFill} from "react-icons/bs";

function Gear(){
    return (
        <a href="/Settings" className = "gear"><BsGearFill size={40}></BsGearFill></a>
    );
}

export default Gear;