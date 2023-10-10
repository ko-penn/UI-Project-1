import KeyBoard from '../components/KeyBoard'
import map from '../components/map.png'

function Route(){
    return (
        <>
            <img src = {map} height="600" width="700" className='img'></img>
            <KeyBoard></KeyBoard>
        </>
    );
}

export default Route;