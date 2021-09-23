import React from 'react'
import '../styles/nav.css'

const Navbar = ({ handleLoginClick }) => {

    const handleClick = () => {
        handleLoginClick()
    }

    return (
        <nav className="menu">
            <button className='btn' onClick={handleClick}>Login/Sign Up</button>
        </nav>
    )
}

export default Navbar
