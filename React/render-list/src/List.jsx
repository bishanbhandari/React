import PropTypes from 'prop-types';
function List(props){

    const category=props.category;
    const itemList=props.items;
    //ALPHABETICAL SORING
   // fruits.sort((a,b)=> a.name.localeCompare(b.name))
    itemList.sort((a,b)=> a.calories-b.calories)

    const lowCalFruits=itemList.filter(fruit=>fruit.calories<100)

    // const listItems=fruits.map(fruit=> <li key={fruit.id}>
    //                                        {fruit.name}:&nbsp;
    //                                       <b>{fruit.calories}</b> </li>)

    const listItems=lowCalFruits.map(lowCalFruit=> <li key={lowCalFruit.id}>
                                                {lowCalFruit.name}:&nbsp;
                                               <b>{lowCalFruit.calories}</b> </li>)

    return(
        <>
        <h3 className="category" >{category}</h3>
        <ol className="list">{listItems}</ol>
        </>
    );
}

List.PropTypes={
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                              name:PropTypes.string,
                                              calories:PropTypes.number}))
}

List.defaultProps={
    category:"Category",
    items:[],
}
export default List;