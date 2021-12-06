import React from "react"
import "./style.css"
let Movie = ()=>{
    const [mov,setMOv] = React.useState("")
    function handleChange(event){
        console.log(event.target.value)
        setMOv(event.target.value)
    }
    return (
        <div className = "main-body">
        <div className = "input-con">
            
            <input
                type="text"
                placeholder="Enter movie name"
                onChange={handleChange}
                name = "mov"
                value = {mov}
            />

        </div>
        <div className = "container">

        </div>
        </div>
    )
}
export default Movie