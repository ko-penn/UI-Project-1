//npm install react-slider
//https://blog.logrocket.com/react-slider-tutorial/
import ReactSlider from "react-slider";

function Slider(){
  return (
    <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/>
  );
};
export default Slider;