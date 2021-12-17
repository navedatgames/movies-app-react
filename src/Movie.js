import React,{useState,useEffect} from "react"
import "./style.css"
import Popup from "./Popup"
import axios from "axios"
import Card from "./Card"
import SingleMovie from "./SingleMovie"


const apiLink = "https://api.themoviedb.org/3/search/movie"
const api_key = "7dace42adcf0a600e4d6ac94b9835856"
let Movie = ()=>{
   
    const [mov,setMov] = useState("")
    const[data,setData]  = useState()
    const [id,setId] = useState("")
    const[singleApi,setSingleApi] = useState("")
    const[toggle,setToggle] = useState(false);
    const[search,setSearch] = useState("");

    const singleMovieApi ="https://api.themoviedb.org/3/movie/" + id + "?api_key=" +api_key
   useEffect(()=>{
       axios.get(singleMovieApi,{
           params:{api_key:"7dace42adcf0a600e4d6ac94b9835856"}
       })
       .then((response)=>{
           console.log(response.data)
           setSingleApi(response.data)
       })
       .catch((reject)=>{
           console.log(reject.data)
       })
   },[id])

   console.log(id)
   console.log(singleApi)
   
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
    
    
   
 
    
    const singleMovieDetail = (
        
            <div className = "popup-win">
                 <div> 
                    <h1>{singleApi['original_title']}</h1>
                    <h3>{singleApi['release_date']}</h3>
                    <h3 className="h3tag">{singleApi['tagline']}</h3>
                    <br/>
                   
                    <h3>OVERVIEW</h3>
                    <h4 className="h4tag">{singleApi['overview']}</h4>
                    <br/>
                    <h3>Vote:{singleApi['vote_count']}</h3>
                    
                    <h3>popularity:{singleApi['popularity']}</h3>
                </div>
                <div>
                    <img src = {"https://image.tmdb.org/t/p/w500" + singleApi['poster_path'] } alt = "image not found" className="popup-img"></img>
                </div>
            
            </div>
            )

           
            
       
    
        
            
        
   
	
		
  


   const movieCard = mov?.results?.map((item)=>{
       return(
           <Card 
           id = {item.id}
           title = {item.original_title}
           release = {item.release_date}
           image = {item.poster_path}
           overview = {item.overview}
          // mouseHandle = {()=>{setId(item.id)}}
          setId = {setId}
           toggleHandler = {togglefun}
           
          />
       )
   })
        
        
 
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

            <div className = "movie-con">
                {movieCard}
                 
            </div>
        </div>
    
           
	
        
    )
}
export default Movie