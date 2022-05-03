import React from 'react'
import TitleStyle from '../style/Title.css'

import logoBig from '../assets/logoBig.png'

function Title() {
    return (
        <section className="titleContainer container">
            <div className="row">
                <div className="col"><img src={logoBig} alt="logo Wood"/></div>
            </div>
        </section>
    )
}

export default Title