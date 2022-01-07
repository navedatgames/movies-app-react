import {useState} from "react"
import axios from "axios"
import "./pageStyle.css"
import {Link ,useHistory} from "react-router-dom"

function Login() {

  
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  let routing = useHistory()
  async function loginHandler(event){
    event.preventDefault();
    try{
      const res = await axios.post(
          "https://warm-crag-36417.herokuapp.com/api/login",
          {email,password},{
            headers:{
              'Content-Type':'application/json'
            }
          }
          )
          console.log(res)
         if(res.data.user){
           alert("login successfully")
          localStorage.setItem("email",res.data.email)
          localStorage.setItem("password",res.data.password)

          routing.push('/home')
         }
         else{
          alert("Please check email and password")
         }
         
        }
      catch(error){
        console.log(error.message)
      }
  
  }
  
return (
  <>
  <div className="login-part">
      <Link to = "/"><input className = "login-btn"  type = "submit" value = "Signup"/></Link>
      
      <p className="already-user">New User?</p>
      </div>
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
    </>
  );
}

export default Login;
