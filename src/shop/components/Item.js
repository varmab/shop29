import React, {useState, useEffect, Fragment} from 'react'

const Item=(props)=>{
    let [item, setItem]=useState(props.item);

    return(
        <div>
            <h3>{item.product_short_description}</h3>
            <p>Price: {item.min_list_price}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default Item;