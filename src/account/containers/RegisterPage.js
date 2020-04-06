import React, {Fragment,useState, useEffect} from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Register from '../components/Register'

const RegisterPage=()=>{
    return(
        <Fragment>
            <Header />
            <Register />
            <Footer />
        </Fragment>
    )
}

export default RegisterPage;