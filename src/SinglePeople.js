import React , {useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"

const SinglePeople = ()=>{
    const [peopleData,setPeopleData] = useState("");
    const{genre} = useParams();

    const People_Api = "https://api.themoviedb.org/3/person/"+genre;

    useEffect(()=>{
         axios.get(People_Api,{
            params:{
                api_key:"7dace42adcf0a600e4d6ac94b9835856",
                language:"en-US"
            }
        }).then((response)=>{
            setPeopleData(response.data)
        }).catch((error)=>{
            console.log(error.message)
        })
    },[genre])
    console.log(peopleData);
    const{name,place_of_birth,biography,birthday,profile_path} = peopleData
    return(
        <div className="main-div">
        <div>
            <h1>{name}</h1>
            <h3 className="h3tag">Birth Place: {place_of_birth}</h3>
            <h3 className="h3tag">DOB: {birthday}</h3>
            <br/>
            <h2>Biography:</h2>
            <h4 className="h4tag"> {biography}</h4>
        </div>
        <div>
        <img className="single-img" src = {"https://image.tmdb.org/t/p/w500" + profile_path} alt = "image not found"/>
        </div>
        </div>
    )
}

export default SinglePeople;