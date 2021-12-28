import {useState} from "react"

function Signup() {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  async function submitHandler(event){
    event.preventDefault();
    const res = await fetch('http://localhost:4000/api/signup',{
    method:'POST',  
    headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,email,password
      })
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <div >
     <h1>
      MoviesApp SignUp
     </h1>
      <form onSubmit={submitHandler}>
       <input 
       type="text"
       value = {name}
       placeholder="Name"
       onChange = {(e)=> setName(e.target.value)}>

       </input>
       <br/>
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

       <input type = "submit" value = "Submit"/>
      </form>
     

    </div>
  );
}

export default Signup;
