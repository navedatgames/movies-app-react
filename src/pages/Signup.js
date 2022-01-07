import { useState} from "react"
import axios from "axios"
import "./pageStyle.css"
import {Link ,useHistory} from "react-router-dom"
function Signup() {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[confirmPassword,setconpass] = useState('')
  let routing = useHistory()
  
  async function submitHandler(event){
    event.preventDefault();
    if(password!==confirmPassword){
      alert("password do not match!!!")
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
           alert("signup successfully")
           routing.push('/login')
          
          }
          else{
            alert("email id already exists!!")
          }
      }
      catch(error){
        console.log(error.message)
      }
  
  }
}
  return (
    
    <>
    <div className="login-part">
      <Link to = "/login"><input className = "login-btn"  type = "submit" value = "Login"/></Link>
      
      <p className="already-user">Already a User?</p>
      </div>
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
       required
       onChange = {(e)=> setName(e.target.value)}/>

       <input id = "input-bar"
       type="email"
       value = {email}
       placeholder="Enter Email"
       onChange = {(e)=> setEmail(e.target.value)}
       required/>

       <input id = "input-bar"
       type="password"
       value = {password}
       placeholder="Enter Password"
       onChange = {(e)=> setPassword(e.target.value)}
       required/>

       <input id = "input-bar"
       type="password"
       value = {confirmPassword}
       placeholder="Enter Password Again"
       onChange = {(e)=> setconpass(e.target.value)}
       required/>
      
      
      <input id = "input-bar" type = "submit" value = "Submit"/>
      
      
    
      
      
     
      </form>
     

    </div>
    </div>
  </>
  );
}

export default Signup;
