import React,{useState,useEffect} from "react"
import "./style.css"
import axios from "axios"
import {Link} from "react-router-dom";
import {Button,Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    movieStyle:{
        color:"black"
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
    },
    movieContainer:{
        backgroundColor:'rgb(30,66,77)',
        margin:'20px',
        borderRadius:'2%',
        height:'24rem',
        width:'14rem'
    },
    movieImg:{
        borderRadius:'4%',
        cursor:'pointer',
        height:'80%',
        width:'90%',
        margin:'10px',
        "&:hover": {
            opacity:'.5',
            backgroundColor:'white'
          }
    },
    movieSingleCard:{
        display:'flex',
        flexWrap:'wrap'
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


   const movieCard = mov?.results?.map((el,pos)=>(
       
    <div key = {pos} className ={classes.movieContainer} >
        <Link to = {"/single-movie/" + el.id}> 
            <img 
                src = {"https://image.tmdb.org/t/p/w500" + el.poster_path} 
                onClick = {()=>{setId(el.id)}} 
                alt = "please check your internet connection"
                className={classes.movieImg}
            />
        </Link>
        <span>
      <p className="mov-text">
            {el.original_title}
            </p>
        </span>
           

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

            <div className={classes.movieSingleCard}>
                {movieCard}
            </div>
        </div> 
    )
}
export default Movie;