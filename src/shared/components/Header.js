import React, {useState, useEffect} from 'react'
import {
    Link
} from 'react-router-dom'

const Header=()=>{
    return(
        <header className="App-header">
            <div>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </div>
            <div>
                <h1>Shop 29</h1>
            </div>
            <div>
            <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
            </div>
        </header>
    )
}

export default Header;