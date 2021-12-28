import React , {useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"
import {makeStyles} from '@mui/styles'
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const useStyles = makeStyles({
   tagLine:{
        fontStyle:'italic'
   },
   mainDiv:{
       display:'flex'
   },
   castNameStyle:{
    color:'whitesmoke',
    textAlign: 'center'
   },
   castStyle:{
       textAlign:'center'
   },
   container:{
    display:'flex',
    flexWrap:'wrap'
   },
   imageContainer:{
    backgroundColor:'rgb(75, 51, 51)',
    margin:'20px',
    borderRadius:'2%'
   },
   singleImage:{
    borderRadius: '8%',
    height: '67vh',
    "&:hover": {
    opacity:'.5',
    backgroundColor:'white'
     }
   },
  castImage:{
    height: '200px',
    borderRadius: '5%',
    margin: '8px',
    "&:hover": {
    opacity:'.5',
    backgroundColor:'white'}
  }


})
const SingleMovie =  ()=>{
    const classes = useStyles()
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
    const newCast =cast?.slice(0,11)
    const castName = newCast?.map(a=>{
        return(
              
            <div className = {classes.imageContainer} >
                 <Link to = {"/single-people/" + a.id}><img className ={classes.castImage} src = {"https://image.tmdb.org/t/p/w500" + a.profile_path} alt= "sorry no image found!!"></img>    </Link>   
                 <Typography className={classes.castNameStyle} >
                     {a.name}
                 </Typography>
    
            </div>
            
            
        )
    })
    
   


  
    
    return(
        <>
            <div className={classes.mainDiv}> 
                <div>
                    <Typography variant = "h3">
                        {original_title}
                    </Typography>
                    <br/>
                    <Typography  variant = "h5">
                        {release_date}
                    </Typography>
                    <br/>
                    <Typography className = {classes.tagLine} variant = "h5">
                        {tagline}
                    </Typography>
                    <br/>
                    <Typography  variant = "h6">
                        Vote Average: {vote_average}
                    </Typography>
                    <br/>
                    <Typography  variant = "h6">
                    Vote Count: {vote_count}
                    </Typography>
                    <br/>
                    <Typography  variant = "h6">
                    Popularity: {popularity}
                    </Typography>
                    <br/>
                    <Typography  variant = "h6">
                    Budget: {budget}
                    </Typography>
                    <br/>
                    <Typography  variant = "h6">
                        {overview}
                    </Typography>
                
                    
                </div>
                <div>
                  <a href = {homepage}><img className={classes.singleImage} src = {"https://image.tmdb.org/t/p/w500" + poster_path} /></a>
                </div>
            </div>
            <br/>
            <br/>
            <Typography className = {classes.castStyle} variant="h4">
                CASTS:
            </Typography>
            <div className = {classes.container}>
                
                    {castName}
            </div>
        </>
    )
}

export default SingleMovie;