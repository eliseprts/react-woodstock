import React from "react"
// import Articles from "./Articles"

import TextArticleStyle from "../style/TextArticle.css"

function TextArticle(props){
    return(
        <div className="textArticle d-flex flex-column justify-content-start">
            <h2 className="fw-normal fs-4 text-uppercase text-start">{props.title}</h2>
            <p className="fw-light text-start lh-lg">{props.text}</p>
        </div>
    )
}

export default TextArticle