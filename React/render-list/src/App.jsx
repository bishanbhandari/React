import List from "./List";
function App() {

  const fruits=[{id:1,name:"apple",calories:95},
    { id:2,name:"orange",calories:45},
    {id:3,name:"banana",calories:105},
    {id:4,name:"coconut",calories:159},
    {id:5,name:"pineapple",calories:37},];

const vegetable=[{id:6,name:"apple",calories:95},
                {id:7,name:"orange",calories:45},
                { id:8,name:"banana",calories:105},
                {id:9,name:"coconut",calories:159},
                {id:10,name:"pineapple",calories:37},]

return(
  <>
 { fruits.length>0 ? < List items={fruits} category="Fruits"/>:null}
  {vegetable.length>0? <List items={vegetable} category="vegetable"/>:null }
  </>
);
}

export default App
