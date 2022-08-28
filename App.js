
import './App.css';
import {createRef, useEffect, useState} from "react"

function App() {

const [second , setSecond] = useState(0);
const [minutes , setMinutes] = useState(0);
const [isrunning , setIsRunning] = useState(true);
const buttonRef = createRef();
let timerId;

useEffect(()=>{
 
 if(!timerId){
  timerId =setInterval(()=>{
    setSecond(second+1)
      if(second===59){
      setMinutes(minutes+1);
      setSecond(0);
  
      }
   },1000);
 }

  buttonRef.current.disabled=true;

  return () => {
    clearInterval(timerId);
  }

},[second, minutes]);

const restart = ()=>{
  setSecond(0);
  setMinutes(0);
  setIsRunning(true);

}
const stop = () => {
   clearInterval(timerId);
  setIsRunning(false);
  buttonRef.current.disabled=false;


}

const  resume = ()=>{
  console.log("resume click");
   timerId =setInterval(()=>{
   setSecond(second+1)
     if(second===59){
     setMinutes(minutes+1);
     setSecond(0);
 
     }

  },1000);

  setIsRunning(true)

  return () => {
    clearInterval(timerId)
  }


}

  return (
    <div className="timer-main-div">
      <h1>Timer</h1>

      <div className={`timer-card   ${isrunning ? 'bg-black' : 'bg-green'}` }>
        <h1>{minutes <10 ? "0"+(minutes) : (minutes)}:{second < 10 ? "0" + (second) : (second)} </h1>
        
      </div>
      <div id='button'>
        <button onClick={restart}>Restrt</button>
        <button onClick={stop}>Stop</button>
        <button onClick={resume} ref= {buttonRef}>Resume</button>
        </div>
    </div>
  );
}

export default App;
