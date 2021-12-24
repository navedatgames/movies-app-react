import React,{useState,useEffect} from "react"
import "./style.css"
import axios from "axios"
import {Link} from "react-router-dom";
import {Button,Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
const useStyles = makeStyles({
    movieStyle:{
        color:"red"
    },
    mainBodyStyle:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputCont:{

        textAlign:'center',
        marginTop:'20px'
    }
   
})

const apiLink = "https://api.themoviedb.org/3/search/movie"

let Movie = ()=>{
    const classes = useStyles();
    const [mov,setMov] = useState("")
    const[data,setData]  = useState()
    const [id,setId] = useState("")
    const[singleApi,setSingleApi] = useState("")
    const[toggle,setToggle] = useState(false);
    const[search,setSearch] = useState("");


   
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
   
 
    
  


   const movieCard = mov?.results?.map((el,pos)=>(
       
        <div key = {pos} id = "movie-container" >
            <Link to = {"/single-movie/" + el.id}> 
                <img 
                    src = {"https://image.tmdb.org/t/p/w500" + el.poster_path} 
                    onClick = {()=>{setId(el.id)}} 
                    alt = "please check your internet connection"
                    id="movie-img"
                />
                </Link>
                    <div className="mov-text">
                <h2>{el.original_title}</h2>
                <h2>{el.release_date}</h2>
                <p className="mov-detail">{el.overview}</p>
                </div>
        </div>
       
   ))
        
        
 
    return (
        <div>
            <div className= {classes.mainBodyStyle}>
                <Typography 
                className = {classes.movieStyle}
                variant = "h4">
                    Movies App
                </Typography>
              
                <div className={classes.inputCont}>
            
                    <input
                    className="search"
                    type="text"
                    placeholder="Search Movie"
                    onChange={inputData}
                    value = {data}/>
                    <span>
                        <Button onClick = {handleKeyDown} variant = "contained" color = "primary" size = "small">SEARCH</Button>
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