import React, { useEffect, useRef, useState } from "react";
function Stopwatch(){

    const [isRunning,setIsRunning]=useState(false);
    const [elapsedtTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{

        if(isRunning){
           intervalIdRef.current= setInterval(() => {
                setElapsedTime(Date.now()-startTimeRef.current);
            }, 10);
        }

        return()=>{
            clearInterval(intervalIdRef.current);
        }

    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current= Date.now() - elapsedtTime;

    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let hours=Math.floor(elapsedtTime / (1000*60*60));
        let minutes=Math.floor(elapsedtTime / (1000*60)%60);
        let second=Math.floor(elapsedtTime / (1000)%60);
        let millisecond=Math.floor((elapsedtTime%1000) / 10);

        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        second=String(second).padStart(2,"0");
        millisecond=String(millisecond).padStart(2,"0");

        return `${hours}:${minutes}:${second}:${millisecond}`;
    }

    return(
        <div className="stop-watch">
            <h1>StopWatch</h1>
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={start}>START</button>
                <button className="stop-button" onClick={stop}>STOP</button>
                <button className="reset-button" onClick={reset}>RESET</button>
            </div>

        </div>
    )
}
export default Stopwatch;