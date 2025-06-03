import React,{useState} from "react";
function Component(){
    const[foods,setFoods]=useState(["apple","orange","banana"]);

    function handleAddFood(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFoods(f=>[...f,newFood])
    }

    function handleRemovefood(index){
            setFoods(foods.filter((_,i)=>i !==index));
    }
    
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index)=> 
                <li key={index} onClick={()=>handleRemovefood(index)}>
                {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )

}
export default Component;