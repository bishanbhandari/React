function Button(){
    let count=0;

    const handleClick=(e)=>e.target.textContent="haha";

    return(
      <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>
    );

}
export default Button;