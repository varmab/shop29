import React, {useState, useEffect, Fragment} from 'react'
import { connect } from 'react-redux'

import {
    addToCart,
    removeFromCart
} from '../redux/actions'

const Item=(props)=>{
    let [item, setItem]=useState(props.item);
    let [isCart, setIsCart]=useState(props.isCart);

    let add=()=>{
        props.addToCart(item);
    }

    let remove=()=>{
        props.removeFromCart(item);
    }

    return(
        <div>
            <h3>{item.product_short_description}</h3>
            <p>Price: {item.min_list_price}</p>
            {
                (isCart==true) ?
                (<button onClick={remove}>Remove</button>) :
                (<button onClick={add}>Add To Cart</button>)
            }
        </div>
    )
}

var mapDispatchToProps={
    addToCart,
    removeFromCart
}

export default connect(null,mapDispatchToProps)(Item);