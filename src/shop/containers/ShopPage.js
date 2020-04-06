import React, {Fragment,useState, useEffect} from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Shop from '../components/Shop'

const ShopPage=()=>{
    return(
        <Fragment>
            <Header/>
            <Shop/>
            <Footer/>
        </Fragment>
    )
}

export default ShopPage;