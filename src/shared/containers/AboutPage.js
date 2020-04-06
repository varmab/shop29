import React, {Fragment,useState, useEffect} from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import About from '../components/About'

const AboutPage=()=>{
    return(
        <Fragment>
            <Header/>
            <About/>
            <Footer/>
        </Fragment>
    )
}

export default AboutPage;