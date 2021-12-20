import React , {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const SingleMovie = ()=>{
    const [data,setData] = useState("");
    const {id} = useParams();
    const Movie_API = "https://api.themoviedb.org/3/movie/"+id;
    console.log(id);
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

    const {original_title,overview,popularity} = data

    console.log(data);
    // const singleMovieDetail = data?.map((el)=>(
    //     <div>
    //         <h1>{el.original_title}</h1>
    //         <h1>{el.overview}</h1>
    //     </div>
    // ))
    return(
        <> 
            <h1>{original_title}</h1>
            <h2>{overview}</h2>
        </>
    )
}

export default SingleMovie;