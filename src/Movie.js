import React,{useState,useEffect} from "react"
import "./style.css"
import axios from "axios"
import {Link ,useHistory} from "react-router-dom";
import {Button,Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
const watchlistarr = []

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
        flexWrap:'wrap',
        padding:'70px'
    },
    btnStyle:{
        position:'fixed',
        bottom:'4px',
        margin:'12px'
        
    },
    inputCon:{
        fontSize:'1.4rem'
    },
    logStyle:{
       position:'fixed',
       left:'0px'
      
    },
    watchBtn:{
        textAlign:'right'
    },
    userDetails:{
        borderRadius:'5%',
        padding:'1px',
        backgroundColor:'lightgreen',
        height:'50px',
        width:'180px'
    } ,
    plusBtn:{
        backgroundColor: 'green',
        borderRadius: '50%',
         border: 'none',
        color: 'white',
        cursor:' pointer',
        fontSize:'20px'
    }  
    ,navDiv:{
        display:'flex',
        justifyContent:'space-between'
    }
   
    
})

const apiLink = "https://api.themoviedb.org/3/search/movie"
let Movie = ()=>{
    const classes = useStyles();
    const [mov,setMov] = useState("")
    const[data,setData]  = useState()
    const [id,setId] = useState("")
    const[toggle,setToggle] = useState(false);
    const[search,setSearch] = useState("");
    const[flag,setFlag] = useState(false);


   const routing = useHistory();
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
   function likedMovie(eventname){
    if(localStorage.getItem("email")===null){
        alert("please login!!")
    }
    else{
       alert("movie added")
        watchlistarr.push(eventname)
        console.log(watchlistarr)


    }
       

   }
   
    function logout(){
        if(watchlistarr.length==0 || flag){
        localStorage.clear();
        watchlistarr.length = 0
        routing.push('/login')
        }
        else{
            alert("press the watchList button")
        }
    }
    function inputData(event){
        setData(event.target.value)
    }
    function handleKeyDown(){
       
     setSearch(data)
    }
    function togglefun(){
        setToggle(!toggle)
    }
    async function watchListHandler(){
        setFlag(true)
        if(localStorage.getItem("email")===null){
            alert("please login!!")
        }
        else{
        alert("all selected movies added successfully")
        try{
            const res = await axios.post(
                "https://warm-crag-36417.herokuapp.com/api/watchlist",
                {email:localStorage.getItem("email"),watchlist:watchlistarr},{
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
                
            )
            console.log(res)
        }
        catch(error){
            console.log(error.message)
        }
    }
    }


   const movieCard = mov?.results?.map((el,pos)=>(
       
    <div key = {pos} className ={classes.movieContainer} >
        <div className={classes.watchBtn}>
        <button className = {classes.plusBtn} onClick = {()=>{likedMovie(el.original_title)}}>+</button>
        </div>
         
        <Link to = {"/single-movie/" + el.id}> 
            <img 
                src = {"https://image.tmdb.org/t/p/w500" + el.poster_path} 
                onClick = {()=>{setId(el.id)}} 
                alt = "image not found!!"
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
            <div className = {classes.navDiv}>
                <div className = {classes.userDetails}>
                    <h5>Email: {localStorage.email}</h5>
                </div>
               
                <div>
                    <Button className = {classes.logStyle} onClick = {logout} variant = "contained" color = "error" size = "small" >LOGOUT</Button>
                </div>  

            
            </div>
            <div className= {classes.mainBodyStyle}>
                <div>
                <Typography 
                className = {classes.movieStyle}
                variant = "h4">
                    Movies App
                </Typography>
                
                </div>

                <div className={classes.inputCont}>
            
                    <input
                    className={classes.inputCon}
                    type="text"
                    placeholder="Search Movie"
                    onChange={inputData}
                    value = {data}/>
                    <span>
                        <Button className = {classes.btnStyle} onClick = {handleKeyDown} variant = "contained" color = "primary" size = "small">SEARCH</Button>
                       
                    </span>
                    <span>
                    <Button className = {classes.btnStyle} onClick = {watchListHandler} variant = "contained" color = "secondary" size = "small">WATCHLIST</Button>
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