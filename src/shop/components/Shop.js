import React, {useState, useEffect} from 'react'
import './Shop.css'

import Catalog from './Catalog'
import Cart from './Cart'
import Checkout from './Checkout'

const Shop=()=>{
    return(
        <div className="row">
            <div className="column">
                <Catalog/>
            </div>
            <div className="column">
                <Cart/>
                <Checkout/>
            </div>
        </div>
    )
}

export default Shop;