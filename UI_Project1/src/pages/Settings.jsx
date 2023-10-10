//https://medium.com/@woeterman_94/quicktip-how-to-make-an-input-type-with-up-and-down-arrows-in-bootstrap-5-619a1fd1c96c
import Slider from '../components/Slider'

function Settings(){
    return (
        <>
           <p className='bttext'>Motor Assistance</p>
            <Slider></Slider>
            <p className='bttext'>Slope to Gear Ratio</p>
            <input className = "sginput" type="number" min="0" step="1" id="amountInput"></input>
            <a href="/Bluetooth" className = "btbutton">Connect with Bluetooth</a>
            <button className='fadebutton'>Save</button>
        </>
    );
}

export default Settings;