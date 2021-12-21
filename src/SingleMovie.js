import React , {useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"


const SingleMovie =  ()=>{
    const [data,setData] = useState("");
    const [genre,setGenre] = useState("")
    const {id} = useParams();
    const Movie_API = "https://api.themoviedb.org/3/movie/"+id;
    
    console.log(id)
    useEffect(()=>{
         axios.get(Movie_API,{
            params:{
                api_key:"7dace42adcf0a600e4d6ac94b9835856"
            }
        }).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error.message)
        })
    },[id])
    
    const {original_title,overview,popularity,tagline,vote_average,vote_count,poster_path,backdrop_path,budget,release_date,homepage
    ,production_companies,genres} = data
    
    const genVal = genres?.map(a=>{
        return(

            <Link to = {"/single-people/" + a.id}><h2>{a.id}</h2></Link>        
        )
        })
  
    
    return(
        <div className="main-div"> 
            <div>
                <h1>{original_title}</h1>
                <h2>{release_date}</h2>
                <h3 className="h3tag">{tagline}</h3>
                <h4 className="h4tag">Vote Average: {vote_average}</h4>
                <h4 className="h4tag">Vote Count: {vote_count}</h4>
                <h4 className="h4tag">Popularity: {popularity}</h4>
                <h4 className="h4tag">Budget: {budget}</h4>
                <h4 className="h4tag">{overview}</h4>
                <a href = {homepage}><button className = "btn-type" type = "submit">SEE NOW</button></a>
                <h2>CASTS:</h2>
                <div>
                    {genVal}
                </div>
                
                


             </div>
            <div>
                <img className="single-img" src = {"https://image.tmdb.org/t/p/w500" + poster_path} />
            </div>
            
        </div>
    )
}

export default SingleMovie;