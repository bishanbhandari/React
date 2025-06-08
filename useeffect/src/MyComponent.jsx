/*useEffect()= React hook that tells React do some code when:
               This component re-renders
               This component mounts
               The state of a value
               
useEffect(function,[Dependencies]

    1.useEffect(()=>{})          Runs after every re-render
    2.useEffect(()=>{},[])       Runs only on mount
    3.useEffect(()=>{},[value])  Runs on mount + when value changes 

    USES
    #Event listeners
    #DOM manipulation
    #Subscription(real-time updates)
    #Fetching Data from an API
    #Clean up when a component unmounts
*/

import { use, useEffect,useState } from "react";
function MyComponent(){

    const[count,setCount]=useState(0);
    const[color,setColor]=useState("green");

    useEffect(()=>{
        document.title=`count:${count} ${color}`;
        return()=>{
            //SOME CLEANUP CODE
        }
    
    },[count,color])

    function addCount(){
        setCount(c=>c+1);
    }

    function subCount(){
        setCount(c=>c-1);
    }

    function changeColor(){
        setColor(c=>c === "green" ? "red" : "green");
    }



    return( <>
    <p style={{color:color}}>Count:{count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subCount}>Sub</button><br />
    <button onClick={changeColor}>ChangeColor</button><br />
    </>

    );
}

export default MyComponent;