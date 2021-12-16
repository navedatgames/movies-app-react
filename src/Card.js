import React from "react"
import {useHistory} from "react-router-dom"
import SingleMovie from "./SingleMovie";

let Card = (props)=>{

    let history  = useHistory();
    function push(){
        props.mouseHandle()
        history.push('/abc'); 
        
        
    }
    
    
    return(
        <div className="card" >
            <img src = {"https://image.tmdb.org/t/p/w500"+props.image}  onClick ={push} alt = "image not found!!" id="movie-img"/>
            <div className="mov-detail">
                <h2>{props.title}</h2>
                <h4 className="h4tag">{props.release}</h4>
                 <h4 className="h4tag">{props.overview}</h4>
            </div>
                
       
         </div>
    )
}

export default Card