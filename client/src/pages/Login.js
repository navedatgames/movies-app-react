import {useState} from "react"
import axios from "axios"
import "./pageStyle.css"
function Login() {

  
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')


  async function loginHandler(event){
    event.preventDefault();
    try{
      const res = await axios.post(
          "http://localhost:4000/api/login",
          {email,password},{
            headers:{
              'Content-Type':'application/json'
            }
          }
          )
         if(res.data.user){
           alert("login successfully")
         }
         else{
          alert("Please check email and password")
         }
          console.log(res)
        }
      catch(error){
        console.log(error.message)
      }
  
  }
  
return (
    <div className = "page-div">
    <div className="inner-page-div">
     <h2 className = "movie-name">
      MoviesApp Login
     </h2>
      <form className = "input-con" onSubmit={loginHandler}>
       
       <input id = "input-bar"
       type="email"
       value = {email}
       placeholder="Email"
       onChange = {(e)=> setEmail(e.target.value)}>

       </input>
     
       <input id = "input-bar"
       type="password"
       value = {password}
       placeholder="Password"
       onChange = {(e)=> setPassword(e.target.value)}>

       </input>
      


       <input id = "input-bar" type = "submit" value = "Login"/>
      </form>
     

    </div>
    </div>
  );
}

export default Login;
