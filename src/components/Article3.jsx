import React from "react"

import TextArticle from "./TextArticle"
import Button from "./Button"
import Articles from "./Articles"

import Article3Style from "../style/Article3.css"

import wood3 from "../assets/wood3.png"

function Article3() {
    return(
        <section className="article3Container container">
            <div className="d-flex justify-content-center">
                <h2 className="fw-normal text-uppercase bg-light text-center">Creative team</h2>
            </div>
            <div className="article3Text row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img src={wood3} alt="" />
                </div>
                <div className="col-6 text-light">
                    <h3 className="text-uppercase">Goog mindset</h3>
                    <p className="fw-light lh-lg">{Articles[2].text}</p>
                    <Button
                    color="white"
                    background="none"
                    padding="10px 40px"
                    borderStyle="solid"
                    borderWidth="2px"
                    borderColor="#BC9A44"
                    marginTop="55px"
                    textTransform="uppercase"
                    children={Articles[2].btn}
                    />
                </div>
            </div>
        </section>
    )
}

export default Article3