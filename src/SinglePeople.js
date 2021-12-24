import React , {useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"
import "./style.css"
const SinglePeople = ()=>{
    const [peopleData,setPeopleData] = useState("");
    const{castId} = useParams();

    const People_Api = "https://api.themoviedb.org/3/person/"+castId;
    console.log("castId",castId)
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
    },[castId])
    console.log(peopleData);
    const{name,place_of_birth,biography,birthday,profile_path,known_for_department,also_known_as} = peopleData

    const tags = also_known_as?.map(a=>{
        return(
            <h3>{a}</h3>
        )
    })
    return(
        <div className="main-div">
        <div>
            <h1>{name}</h1>
            <h3 className="h3tag">Birth Place: {place_of_birth}</h3>
            <h3 className="h3tag">DOB: {birthday}</h3>
            <h3 className="h3tag">DEPARTMENT: {known_for_department}</h3>
            <br/>
            <h2>Biography:</h2>
            <h4 className="h4tag"> {biography}</h4>
            <>
            <br/>
            <h2>TAGS:</h2>
            {tags}
            </>
        </div>
        <div>
            <img className="single-img" src = {"https://image.tmdb.org/t/p/w500" + profile_path} alt = "image not found"/>
        </div>
        </div>
    )
}

export default SinglePeople;