/*useRef()= "use reference" does not cause re-renders when its value changes.
            when you want a component to "remember" some information but you 
            dont want that information to trigger new renders*/


import React,{useState,useEffect,useRef} from "react";

function MyComponent(){

    const inputRef= useRef(null);

    useEffect(()=>{
        console.log("renders")
    });


    function handleClick(){
      //ref.current=ref.current +1;
      inputRef.current.focus();
      inputRef.current.style.backgroundColor="yellow"
    }
    return(
        <div>
        <input ref={inputRef} />
        <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}
export default MyComponent;     