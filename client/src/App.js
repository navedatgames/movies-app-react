import Movie from "./Movie"
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Switch} from "react-router-dom"
import SingleMovie from "./SingleMovie"
import SinglePeople from "./SinglePeople"
import "./style.css"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Quote from "./pages/Quote"
let App=()=> {
  return (
    
      <Router>
          <div className="nav-top">
          <Link to = "/login" ><button>LOGIN</button></Link>
          <Link to = "/home" ><button>HOME</button></Link>
         </div>
          
          <Switch>
             
              <Route exact path="/">
               <Signup/>
              </Route>
              <Route path = "/single-movie/:id">
                <SingleMovie/>
              </Route>
              <Route path = "/single-people/:castId">
                <SinglePeople/>
              </Route>
              <Route path = "/login">
                <Login/>
              </Route>
               <Route path = "/home">
                <Movie/>
              </Route>
              <Route path = "/quote">
                <Quote/>
              </Route>
           </Switch>
          
  
      </Router>
    
  );
}

export default App;


