import React from "react"
import "./style.css"
import MovieComp from "./MovieComp"
import axios from "axios"
const apiLink = "https://api.themoviedb.org/3/movie/550?api_key=7dace42adcf0a600e4d6ac94b9835856"
let Movie = ()=>{
    const [mov,setMOv] = React.useState("")
    function handleChange(event){
        console.log(event.target.value)
        setMOv(event.target.value)
    }
    React.useEffect(()=>{
        axios.get(apiLink,{
            params:{api_key:"7dace42adcf0a600e4d6ac94b9835856"}
        }).then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            console.log(err.data)
        })

    },[])
    return (
        <div className = "main-body">
            <h1>Movies App</h1>
            <div className = "input-con">
            
                <input
                type="text"
                placeholder="Search Movie"
                onChange={handleChange}
                name = "mov"
                value = {mov}
                />
               
            </div>
            <div className = "movie-con">
                <MovieComp/>
                
            </div>
        </div>
    )
}
export default Movie