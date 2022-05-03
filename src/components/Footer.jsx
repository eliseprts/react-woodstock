import React from "react"

import logoMedium from "../assets/logoMedium.png"

import FooterStyle from "../style/Footer.css"

function Footer() {
    return(
        <footer className="d-flex justify-content-center align-items-center">
            <img src={logoMedium} className="w-20"></img>
        </footer>
    )
}

export default Footer