import React, { Fragment,useState, useEffect } from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Contact from '../components/Contact'

const ContactPage = () => {
    return (
        <Fragment>
            <Header />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default ContactPage;