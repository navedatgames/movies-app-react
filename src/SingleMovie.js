import React from "react"

let SingleMovie = (props)=>{
    console.log(props.content)
    return(
        <div className="container">
            <h1>{props.content}</h1>
        </div>
    )
}

export default SingleMovie