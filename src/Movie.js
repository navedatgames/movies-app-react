import React,{useState,useEffect} from "react"
import "./style.css"
import axios from "axios"
import {
  BrowserRouter as Router,
  Route,Link,Switch
} from "react-router-dom";
// import SingleMovie from "SingleMovie"

const apiLink = "https://api.themoviedb.org/3/search/movie"
const api_key = "7dace42adcf0a600e4d6ac94b9835856"
let Movie = ()=>{
   
    const [mov,setMov] = useState("")
    const[data,setData]  = useState()
    const [id,setId] = useState("")
    const[singleApi,setSingleApi] = useState("")
    const[toggle,setToggle] = useState(false);
    const[search,setSearch] = useState("");

   console.log(id)

   
    useEffect(()=>{
        axios.get(apiLink,{
            params:{api_key:"7dace42adcf0a600e4d6ac94b9835856",
                    query:search||"Avengers"}
        }).then((response)=>{
            setMov(response.data)
        }).catch((reject)=>{
            console.log(reject.data)
        })

    },[search])
   
    function inputData(event){
        setData(event.target.value)
    }
    function handleKeyDown(){
       
     setSearch(data)
    }
    function togglefun(){
        setToggle(!toggle)
    }

    function setIdHandler(){
        console.log("I was clicked")
    }
    
    console.log(mov)
   
 
    
    // const singleMovieDetail = (
        
    //         <div className = "popup-win">
    //              <div> 
    //                 <h1>{singleApi['original_title']}</h1>
    //                 <h3>{singleApi['release_date']}</h3>
    //                 <h3 className="h3tag">{singleApi['tagline']}</h3>
    //                 <br/>
                   
    //                 <h3>OVERVIEW</h3>
    //                 <h4 className="h4tag">{singleApi['overview']}</h4>
    //                 <br/>
    //                 <h3>Vote:{singleApi['vote_count']}</h3>
                    
    //                 <h3>popularity:{singleApi['popularity']}</h3>
    //             </div>
    //             <div>
    //                 <img src = {"https://image.tmdb.org/t/p/w500" + singleApi['poster_path'] } alt = "image not found" className="popup-img"></img>
    //             </div>
            
    //         </div>
    //         )


   const movieCard = mov?.results?.map((el,pos)=>(
       <Link to = {"/single-movie/" + el.id}> 
        <div key = {pos} id = "movie-container" >
                <img 
                    src = {"https://image.tmdb.org/t/p/w500" + el.poster_path} 
                    onClick = {()=>{setId(el.id)}} 
                    alt = "please check your internet connection"
                    />
                <h2>{el.original_title}</h2>
                <p>{el.overview}</p>
        </div>
       </Link>
   ))
        
        
 
    return (
        <div>
            <div className = "main-body">
                <h1>Movies App</h1>
                <div className = "input-con">
            
                    <input
                    className="search"
                    type="text"
                    placeholder="Search Movie"
                    onChange={inputData}
                    value = {data}/>
                    <span>
                        <button onClick = {handleKeyDown}  className="search-btn">Search</button>
                    </span>
                </div>
            </div>

            <div className = "main-container">
                {movieCard}
            </div>
        </div> 
    )
}
export default Movie;