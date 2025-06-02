import React, {use, useState} from 'react';
function MyComponent(){

    const[name,setName]=useState("Guest");//returns array with variable and setter function
    const[age,setAge]=useState(0);

    const updateName=()=>{
        setName("GOKU");//it will triger a  render of virtual DOM
    }

    const updateAge=()=>{
        setAge(age+1)
    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>set Name</button>
            
            <p>Age:{age}</p>
            <button onClick={updateAge}>set Age</button>

        </div>
    );
}
export default MyComponent;