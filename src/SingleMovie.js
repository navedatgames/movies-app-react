import React , {useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"


const SingleMovie =  ()=>{
    const [data,setData] = useState("");
    const [castId,setCastId] = useState("")
    const {id} = useParams();
    const [person,setPerson] = useState("")
    const Movie_API = "https://api.themoviedb.org/3/movie/"+id;
    
    const cast_Api = "https://api.themoviedb.org/3/movie/" + id + "/credits";
    console.log("movieID",id)
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

    useEffect(()=>{
        axios.get(cast_Api,{
           params:{
               api_key:"7dace42adcf0a600e4d6ac94b9835856",
               language:"en-US"
           }
       }).then((response)=>{
           setPerson(response.data)
       }).catch((error)=>{
           console.log(error.message)
       })
   },[id])

    console.log(person)
    const {original_title,overview,popularity,tagline,vote_average,vote_count,poster_path,backdrop_path,budget,release_date,homepage
    ,production_companies,genres} = data

    const{cast} = person;
    console.log(cast)

    const castName = cast?.map(a=>{
        return(
            <Link to = {"/single-people/" + a.id}>
                <img className = "cast-image" src = {"https://image.tmdb.org/t/p/w500" + a.profile_path}></img>
            </Link>
            
        )
    })
    
    // const genVal = genres?.map(a=>{
    //     return(

    //         <Link to = {"/single-people/" + a.id}><h2>{a.id}</h2></Link>        
    //     )
    //     })


  
    
    return(
        <>
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
                <a href = {homepage}><img className="single-img" id = "cover-img" src = {"https://image.tmdb.org/t/p/w500" + poster_path} /></a>
                </div>
            </div>
            <div>
                <br/>
                <h2 className="cast-tag">CASTS:</h2>
                    {castName}
            </div>
        </>
    )
}

export default SingleMovie;