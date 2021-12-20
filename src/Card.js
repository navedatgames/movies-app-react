import React from "react"
import {Link} from "react-router-dom"
import SingleMovie from "./SingleMovie";

let Card = (props)=>{
const[singleId,setSingleId] = React.useState("")
    
    function push(){
       
        console.log(props.id)
        
    }
    
    
    return(
        <>
        <div className="card" >
           <Link to ={"/"+props.id}> <img src = {"https://image.tmdb.org/t/p/w500"+props.image} onClick = {push} alt = "image not found!!" id="movie-img"/></Link>
           
            <div className="mov-detail">
                <h2>{props.title}</h2>
                <h4 className="h4tag">{props.release}</h4>
                 <h4 className="h4tag">{props.overview}</h4>
            </div>
                
       
         </div>
         
         </>
    )
}

export default Card