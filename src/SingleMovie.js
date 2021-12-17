import React from "react"

let SingleMovie = (props)=>{
    
    return(
        <div className="container">
            
            <h1>Single Movie Detail</h1>

            <div className = "popup-win">
                 <div> 
                    <h1>movie name</h1>
                    <h3>release date</h3>
                    <h3 className="h3tag">tags</h3>
                    <br/>
                   
                    <h3>OVERVIEW</h3>
                    <h4 className="h4tag">overview parts</h4>
                    <br/>
                    <h3>Vote:count</h3>
                    
                    <h3>popularity:</h3>
                </div>
                <div>
                    <img src = "" alt = "image not found" className="popup-img"></img>
                </div>
            
            </div>


           
        </div>
    )
}

export default SingleMovie