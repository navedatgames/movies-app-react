import React , {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const SingleMovie = ()=>{
    const [data,setData] = useState("");
    const {id} = useParams();
    const Movie_API = "https://api.themoviedb.org/3/movie/"+id;
    
    useEffect(()=>{
        return axios.get(Movie_API,{
            params:{
                api_key:"7dace42adcf0a600e4d6ac94b9835856"
            }
        }).then((response)=>{
            setData(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error.message)
        })
    },[id])

    const {original_title,overview,popularity,tagline,vote_average,vote_count,poster_path,backdrop_path,budget,release_date} = data
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
             </div>
            <div>
                <img className="single-img" src = {"https://image.tmdb.org/t/p/w500" + poster_path} />
            </div>
            
        </div>
    )
}

export default SingleMovie;