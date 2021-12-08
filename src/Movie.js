import React from "react"
import "./style.css"

import axios from "axios"
const apiLink = "https://api.themoviedb.org/3/search/movie"
let Movie = ()=>{
    const [mov,setMov] = React.useState("")
    const[data,setData]  = React.useState()
   
    
    React.useEffect(()=>{
        axios.get(apiLink,{
            params:{api_key:"7dace42adcf0a600e4d6ac94b9835856",
                    query:data||"Avengers"}
        }).then((response)=>{
            setMov(response.data)
        }).catch((reject)=>{
            console.log(reject.data)
        })

    },[data])

    function handleKeyDown(event){
       
            
            setData(event.target.value)
        
        
        
    }
    
    console.log(mov)
  console.log(data)
   const movieShow = mov?.results?.map((obj)=>{
       return(
           <>
           <h4>id:{obj.id}</h4>
           <h4>movie name:{obj.original_title}</h4>
           <h4>release date:{obj.release_date}</h4> 
            <img src = {"https://image.tmdb.org/t/p/w500"+obj.backdrop_path }alt = "Sorry Image Not Found !!"></img>
            <br/>
           </>
       )
   })
        
        
 
    return (
        <div className = "main-body">
            <h1>Movies App</h1>
            <div className = "input-con">
            
                <input
                type="text"
                placeholder="Search Movie"
                onChange={handleKeyDown}
                value = {data}
                
                
                />
               
            </div>
            <div className = "movie-con">

           
            {movieShow}
            
             
            
            </div>
    
           
	
        </div>
    )
}
export default Movie