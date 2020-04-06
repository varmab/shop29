import React, { Fragment, useState, useEffect } from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <Fragment>
            <Header />
            <Login />
            <Footer />
        </Fragment>
    )
}

export default LoginPage;