import React from "react"

import ImgArticle from "./ImgArticle"
import TextArticle from "./TextArticle"
import Button from "./Button"
import Articles from "./Articles"

import ArticleStyle from "../style/Article.css"

import wood2 from "../assets/wood2.png"

function Article2() {
    return (
        <section className='articleContainer container'>
            <div className="row">
                <div className="col-6">
                    <TextArticle title={Articles[1].title} text={Articles[1].text}/>
                    <Button
                    background="none"
                    padding="10px 40px"
                    borderStyle="solid"
                    borderWidth="2px"
                    borderColor="#BC9A44"
                    marginTop="55px"
                    textTransform="uppercase"
                    children={Articles[1].btn}
                    />
                </div>
                <div className="col-6">
                    <ImgArticle src={wood2}/>
                </div>
            </div>
        </section>
    )
}

export default Article2