import React from "react"
import "./style.css"
import Popup from "./Popup"
import axios from "axios"
const apiLink = "https://api.themoviedb.org/3/search/movie"
const api_key = "7dace42adcf0a600e4d6ac94b9835856"
let Movie = ()=>{
   
    const [mov,setMov] = React.useState("")
    const[data,setData]  = React.useState()
    const [id,setId] = React.useState("")
    const[singleMovie,setSingleMovie] = React.useState("")
    const[toggle,setToggle] = React.useState(false);

    const singleMovieApi ="https://api.themoviedb.org/3/movie/" + id + "?api_key=" +api_key
   React.useEffect(()=>{
       axios.get(singleMovieApi,{
           params:{api_key:"7dace42adcf0a600e4d6ac94b9835856"}
       })
       .then((response)=>{
           setSingleMovie(response.data)
       })
       .catch((reject)=>{
           console.log(reject.data)
       })
   },[id])
   
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
    function togglefun(){
        setToggle(!toggle)
    }
    
   
  console.log(singleMovieApi)
  console.log(singleMovie)
    
    const singleMovieDetail = Object.keys(singleMovie).map(function(key,index){
        
            if(key=== "original_title")
            return(
            <h3>title:{singleMovie[key]}</h3>
            )
            if(key=== "id")
            return(
            <h3>id:{singleMovie[key]}</h3>
            )

            
            if(key=== "popularity")
            return(
            <h3>popularity:{singleMovie[key]}</h3>
            )
            if(key=== "release_date")
            return(
            <h3>Release Date:{singleMovie[key]}</h3>
            )
            if(key=== "tagline")
            return(
            <h3>Tags:{singleMovie[key]}</h3>
            )

            if(key=== "vote_count")
            return(
            <h3>Vote:{singleMovie[key]}</h3>
            )
            
        })
       
    
	
		
  
   const movieShow = mov?.results?.map((obj)=>{
       return(
           <div className = "inner-con">
           <h4>id:{obj.id}</h4>
           <h4>movie name:{obj.original_title}</h4>
           <h4>release date:{obj.release_date}</h4> 
            <img onMouseEnter = {()=>{setId(obj.id)}} onClick = {togglefun}src = {"https://image.tmdb.org/t/p/w500"+obj.backdrop_path }alt = "Sorry Image Not Found !!"></img>
            <br/>
           </div>
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
                {toggle && <Popup content = {singleMovieDetail}
                            handleClose = {togglefun} />}
            </div>
    
           
	
        </div>
    )
}
export default Movie