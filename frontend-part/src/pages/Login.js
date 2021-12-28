import {useState} from "react"

function Login() {

  
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  async function loginHandler(event){
    event.preventDefault();
    const res = await fetch('http://localhost:4000/api/login',{
    method:'POST',  
    headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,password
      })
    })
    const data = await res.json()

    if(data.user){
      alert('Login successful')
      window.location.href = '/quote'
    }
    else{
      alert('please check your email and password')

    }
    console.log(data)
  }
  return (
    <div >
     <h1>
      MoviesApp Login
     </h1>
      <form onSubmit={loginHandler}>
       
       <br/>
       <input 
       type="email"
       value = {email}
       placeholder="Email"
       onChange = {(e)=> setEmail(e.target.value)}>

       </input>
       <br/>
       <br/>
       <input 
       type="password"
       value = {password}
       placeholder="Password"
       onChange = {(e)=> setPassword(e.target.value)}>

       </input>
       <br/>

       <input type = "submit" value = "Login"/>
      </form>
     

    </div>
  );
}

export default Login;
