import React, { useState } from 'react'
import ToggleSwitch from '../components/ToggleSwitch'

function Bluetooth(){
    const [styleName1, setStyleName1] = useState("bluetoothbutton1");
    const handleClick1 = () => {
        setStyleName1(styleName1 === "bluetoothbutton1" ? "bluetoothbutton2" : "bluetoothbutton1");
    };

    const [styleName2, setStyleName2] = useState("bluetoothbutton1");
    const handleClick2 = () => {
        setStyleName2(styleName2 === "bluetoothbutton1" ? "bluetoothbutton2" : "bluetoothbutton1");
    };

    const [styleName3, setStyleName3] = useState("bluetoothbutton1");
    const handleClick3 = () => {
        setStyleName3(styleName3 === "bluetoothbutton1" ? "bluetoothbutton2" : "bluetoothbutton1");
    };

    return(
        <>
            <p className='bttext'>Bluetooth</p>
            <ToggleSwitch label =" "/>
            <p className='btsmalltext'>Connect to ... </p>
            <nav className = "bl">
                <ul>
                    <li>
                        <button className={styleName1} onClick={handleClick1}>Kody's Samsung</button>
                    </li>
                    <li>
                        <button className={styleName2} onClick={handleClick2}>Sam's Android</button>
                    </li>
                    <li>
                        <button className={styleName3} onClick={handleClick3}>Kris's ipod</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Bluetooth;