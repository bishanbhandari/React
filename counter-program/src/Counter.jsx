import React, {useState} from 'react';
function Counter(){
const[count,setCount]=useState(0);

const increment=()=>{
    setCount(count+1);
}
 
const decerement=()=>{
    if(count===0){
        alert("Can't be decremented further");
    }else{
        setCount(count-1);
    }
}

const reset=()=>{
    setCount(0);
}

 return(
    <div className='counter-container'>
        <p className='count-display'>{count}</p>
        <br />
        <button className='counter-button' onClick={decerement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>
    </div>
 );
}

export default Counter;