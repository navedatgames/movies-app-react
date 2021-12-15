import React from "react"

let Card = (props)=>{

    return(
        <div className="card">
            <img src = {"https://image.tmdb.org/t/p/w500"+props.image} onMouseEnter = {props.mouseHandle} onClick={props.click} alt = "image not found!!" id="movie-img"></img>
            <div className="mov-detail">
                <h2>{props.title}</h2>
                <h4 className="h4tag">{props.release}</h4>
                { <h4 className="h4tag">{props.overview}</h4> }
            </div>
                
        
         </div>
    )
}

export default Card