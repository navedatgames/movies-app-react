import {useState} from "react"
import axios from "axios"
import "./pageStyle.css"
import {Link , Redirect} from "react-router-dom"
import Login from "./Login"
function Signup() {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[confirmPassword,setconpass] = useState('')

  async function submitHandler(event){
    event.preventDefault();
    if(password!=confirmPassword){
      console.log("password do not match!!!")
    }
    else{

      try{
        const res = await axios.post(
          "http://localhost:4000/api/signup",
          {name,email,password},{
            headers:{
              'Content-Type':'application/json'
            }
          }
          )
      
          console.log(res)
          if(res.status===200 && res.data.status==='ok'){
           alert(res.status)
           return <Redirect to='/login' component = {Login} />
          }
          else{
            alert("please fill all the details")
          }
      }
      catch(error){
        console.log(error.message)
      }
  
  }
}
  return (
    <div className="page-div">
    <div className = 'inner-page-div'>
     <h2 className = "movie-name">
      MoviesApp SignUp
     </h2>
      <form className = "input-con" onSubmit={submitHandler}>
       <input id = "input-bar"
       type="text"
       value = {name}
       placeholder="Enter Name"
       onChange = {(e)=> setName(e.target.value)}/>

       <input id = "input-bar"
       type="email"
       value = {email}
       placeholder="Enter Email"
       onChange = {(e)=> setEmail(e.target.value)}/>

       <input id = "input-bar"
       type="password"
       value = {password}
       placeholder="Enter Password"
       onChange = {(e)=> setPassword(e.target.value)}/>

       <input id = "input-bar"
       type="password"
       value = {confirmPassword}
       placeholder="Enter Password Again"
       onChange = {(e)=> setconpass(e.target.value)}/>

       <input id = "input-bar" type = "submit" value = "Submit"/>
     
      </form>
     

    </div>
    </div>
  );
}

export default Signup;
