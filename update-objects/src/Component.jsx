import React,{useState} from "react";
function Component(){
    const[car,setCar]=useState({year:2024,make:"ford",model:"Mustang"});

    function handleYearChange(event){
        setCar(c=>({...car,year:event.target.value}));//spread operator copies all properties of the car object into the new object. Then, the new year value overwrites the old one
    }

    function handleMakeChange(event){
        setCar(c=>({...car, make: event.target.value}))
    }

    function handleModelChange(event){
        setCar(c=>({...car, model: event.target.value}))

    }

    return( <div>
            <p>Your favorite car is {car.year} {car.make} {car.model} </p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} />

     </div>)
}
export default Component;