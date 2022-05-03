import React from "react"

import ImgArticleStyle from "../style/ImgArticle.css"

function ImgArticle(props) {
    return(
        <div className="d-flex justify-content-center align-items-center">
            <img src={props.src} alt="" className="image w-50"/>
        </div>
    )
}

export default ImgArticle