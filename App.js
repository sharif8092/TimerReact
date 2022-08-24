
import './App.css';
import {useEffect, useState} from "react"

function App() {

const [second , setSecond] = useState(0);
const [minutes , setMinutes] = useState(0);
let timerId;

useEffect(()=>{
  timerId =setInterval(()=>{
   setSecond(second+1)
     if(second===59){
     setMinutes(minutes+1);
     setSecond(0);
 
     }
  },1000);

  return () => {
    clearInterval(timerId)
  }

});
const restart = ()=>{
  setSecond(0);
  setMinutes(0)

}
const stop = () => {
   clearInterval(timerId)
}

  return (
    <div className="timer-main-div">
      <h1>Timer</h1>

      <div className="timer-card">
        <h1>{minutes <10 ? "0"+(minutes) : (minutes)}:{second < 10 ? "0" + (second) : (second)} </h1>
        
      </div>
      <div id='button'>
        <button onClick={restart}>Restrt</button>
        <button onClick={stop}>Stop</button>
        </div>
    </div>
  );
}

export default App;
