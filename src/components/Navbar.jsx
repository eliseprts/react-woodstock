import React from 'react'
import logoSmall from "../assets/logoSmall.png"
import NavbarStyle from '../style/Navbar.css'

const navItems = [
    'About',
    'Furnitures',
    'Shop',
    'Contact'
]

function Navbar() {
    return(
        <nav className="navbar navbar-expand py-4">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logoSmall} alt="logo WOOD" className="logo"/></a>
                <div>
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (<li className="nav-item text-light px-3" key={`${item}-${index}`}>{item}</li>))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar