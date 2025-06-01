import PropTypes from 'prop-types';

function List({ category = "Category", items = [] }) {

    //ALPHABETICAL SORING
    // fruits.sort((a,b)=> a.name.localeCompare(b.name))
    items.sort((a, b) => a.calories - b.calories);

    const lowCalItems = items.filter(fruit => fruit.calories < 100);

    // const listItems=fruits.map(fruit=> <li key={fruit.id}>
    //                                        {fruit.name}:&nbsp;
    //                                       <b>{fruit.calories}</b> </li>)

    const listItems = lowCalItems.map(lowCalItem => <li key={lowCalItem.id}>
        {lowCalItem.name}:&nbsp;
        <b>{lowCalItem.calories}</b> </li>)

    return (
        <>
            <h3 className="category" >{category}</h3>
            <ol className="list">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}



export default List;
