//https://stackoverflow.com/questions/63113222/changing-text-color-on-click-with-react-hooks
import React, { useState } from 'react'
import Graph from '../components/Graph'

function Explore(){
    const [buttonText, setButtonText] = useState('Start Trip');
    const [styleName, setStyleName] = useState("tripbutton1");

    const handleClick = () => {
        setButtonText(buttonText === 'Start Trip' ? 'End Trip' : 'Start Trip');
        setStyleName(styleName === "tripbutton1" ? "tripbutton2" : "tripbutton1");
    };

    return (
        <>
            <Graph></Graph>
            <p className="exptext"><b>285</b> Calories Burned</p>
            <p className="exptext"><b>10</b> MPH</p>
            <p className="exptext"><b>130</b> Heart Rate</p>
            <p className="exptext"><b>65</b> Minutes, <b>30</b> Seconds</p>
            <button className={styleName} onClick={handleClick}>{buttonText}</button>
        </>
    );
}

export default Explore;