/*props=Read-only properties that are shared between components.
        A parent component can send data to child component 
        <component key=value/>*/

/*propTypes=A mechanism that ensures that the passed value is of the correct datatype
            Age:propTypes.number */  
            
/*defaultProps=default values for props in case they are not passed from the parent component
                name:"Guest"*/ 

import Student from "./assets/student.jsx"

    function App(){
      return (
        <>
           <Student name="spongebob" age={30} isStudent={true}/>
           <Student name="Patrick" age={40} isStudent={false} />
           <Student name="Squidward" age={50} isStudent={false} />
           <Student name="Goku" age={50} isStudent={false} />
           <Student name="Larray" />
        </>
      );
    }
    export default App