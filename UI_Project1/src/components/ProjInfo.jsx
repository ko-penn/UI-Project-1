import graphic from '../components/graphic.png'

function ProjInfo(){
    return(
        <>
            <h1 className="projinfol1">Smart Bike UI</h1>
            <h2 className="projinfol2">Kody Penn</h2>
            <a href="https://sites.google.com/view/kody-penn/home" target="_blank" className="projinfol3">Link to portfolio</a>
            <img src = {graphic} height="300" width="300" className='img2'></img>
        </>
    )
}

export default ProjInfo;