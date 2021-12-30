import {useState,useEffect} from "react"
import axios from "axios"
import "./pageStyle.css"
import {Link,Redirect ,useHistory} from "react-router-dom"

function Login() {

  
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  let routing = useHistory()
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
    <div className = "page-div">
       {/* {loginFlag ?  <Redirect to = {{pathname:"./home"}}/> :null} */}
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
      

      <div>
      <input id = "input-bar" type = "submit" value = "Login"/>
      <span>
      <Link to = "/"><input id = "input-bar" type = "submit" value = "Signup"/></Link>
      <p className = "new-user">New User?</p>
      </span>
      </div>
       
      </form>
     

    </div>
    </div>
  );
}

export default Login;
