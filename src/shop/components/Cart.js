import React, {useState, useEffect} from 'react'
import Item from './Item'
import {connect} from 'react-redux'

const Cart=(props)=>{
    let [items,setItems]=useState([])

    //equivalent to componentWillReceiveProps
    useEffect(()=>{
        setItems(props.items)
    },[props])

    return(
        <div>
            <h1>Cart</h1>
            {
                items.map((item)=>{
                    return <Item key={item.productid} item={item} isCart={true}/>
                })
            }
        </div>
    )
}

let mapStateToProps=(state)=>{
    return {
        items:state.shop.cartItems
    }
}

export default connect(mapStateToProps,null)(Cart);