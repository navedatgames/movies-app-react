import React , {useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"
import "./style.css"
import {makeStyles} from '@mui/styles'
import { Typography } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const useStyles = makeStyles({
    castImage:{
        borderRadius:'10%',
        height:'70vh'
    },
    castDetails:{
        fontStyle:'italic'
    },
    castBio:{
        fontStyle:'normal'
    },
    mainDiv:{
        display:'flex'
    }
})
const SinglePeople = ()=>{
    const classes = useStyles();
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
        <div className={classes.mainDiv}>
        <div>
            <Typography variant = "h3">
                {name}
            </Typography>
            <br/>
            <Typography className = {classes.castDetails} variant = "h5">
                Birth Place: {place_of_birth}
            </Typography>
            <br/>
            <Typography  className = {classes.castDetails}variant = "h5">
                DOB: {birthday}
            </Typography>
            <br/>
            <Typography  className = {classes.castDetails}variant = "h5">
                DEPARTMENT: {known_for_department}
            </Typography>
            <br/>
            
            <br/>
            <Typography variant = "h6">
                Biography:
            </Typography>
            <br/>
            <Typography className = {classes.castBio} variant = "h6">
                {biography}
            </Typography>
    
            <>
            <br/>
            <Typography variant = "h5">
                TAGS:
            </Typography>
            <br/>
            {tags}
            </>
        </div>
        <div>
            <img className={classes.castImage} src = {"https://image.tmdb.org/t/p/w500" + profile_path} alt = "image not found"/>
        </div>
        </div>
    )
}

export default SinglePeople;