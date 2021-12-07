import React from "react"
import "./style.css"
import MovieComp from "./MovieComp"
import axios from "axios"
const apiLink = "https://api.themoviedb.org/3/movie/550?api_key=7dace42adcf0a600e4d6ac94b9835856"
let Movie = ()=>{
    const [mov,setMov] = React.useState("")
    const[data,setData]  = React.useState()
   
    
    React.useEffect(()=>{
        axios.get(apiLink,{
            params:{api_key:"7dace42adcf0a600e4d6ac94b9835856"}
        }).then((response)=>{
            setMov(response.data)
        }).catch((reject)=>{
            console.log(reject.data)
        })

    },[])

    function handleKeyDown(event){
        setData(event.target.value)
        
    }
    console.log(data)
    console.log(mov)
   const notFound = (
       <h1>Not Found!!</h1>
   )
    const movieShow = Object.keys(mov).map(function(key,index){
        if(key=== "id"||key==="original_title"||key==="vote_average"){
          return <>
          <h2>{key}</h2>
          <br/>
          <h2>{ mov[key]}</h2>
          </>
          
          
           
        }
        
        
    }) 
    return (
        <div className = "main-body">
            <h1>Movies App</h1>
            <div className = "input-con">
            
                <input
                type="text"
                placeholder="Search Movie"
                onChange={handleKeyDown}
                name = "data"
                value = {data}
                
                
                />
               
            </div>
            <div className = "movie-con">

            
            {data===mov.title &&movieShow}
            {data!==mov.title && notFound}
            
            
             
            
            </div>
    
           
	
        </div>
    )
}
export default Movie