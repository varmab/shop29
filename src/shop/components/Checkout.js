import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

const Checkout=(props)=>{
    let [orderTotal,setOrderTotal]=useState(0);

    useEffect(()=>{
        setOrderTotal(props.orderTotal)
    },[props])

    return(
        <div>
            <h1>Checkout</h1>
            <p>Total:{orderTotal}</p>
            <button>Place Order</button>
        </div>
    )
}

var mapStateToProps=(state)=>{
    return {
        orderTotal:state.shop.orderTotal
    }
}

export default connect(mapStateToProps,null)(Checkout);