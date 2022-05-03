import React from 'react'

import ImgArticle from './ImgArticle'
import TextArticle from './TextArticle'
import Button from "./Button"
import Articles from "./Articles"

import ArticleStyle from '../style/Article.css'

import wood1 from "../assets/wood1.png"

function Article1() {
    return (
        <section className='articleContainer container'>
            <div className="row">
                <div className="col-6">
                    <ImgArticle src={wood1}/>
                </div>
                <div className="col-6">
                    <TextArticle title={Articles[0].title} text={Articles[0].text}/>
                    <Button
                    background="none"
                    padding="10px 40px"
                    borderStyle="solid"
                    borderWidth="2px"
                    borderColor="#BC9A44"
                    marginTop="55px"
                    textTransform="uppercase"
                    children={Articles[0].btn}
                    />
                </div>
            </div>
        </section>
    )
}


export default Article1