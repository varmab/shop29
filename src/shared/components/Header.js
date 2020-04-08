import React, {useState, useEffect} from 'react'

const Header=()=>{
    return(
        <header className="App-header">
            <div>
                <a href="/">Home</a> | <a href="/">About</a> | <a href="/">Contact</a>
            </div>
            <div>
                <h1>Shop 29</h1>
            </div>
            <div>
                <a href="/">Register</a> | <a href="/">Login</a>
            </div>
        </header>
    )
}

export default Header;