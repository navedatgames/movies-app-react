import Movie from "./Movie"
import React from "react"
import {
  BrowserRouter as Router,
  Route,Link,Switch
} from "react-router-dom";
import SingleMovie from "./SingleMovie"
import Card from "./Card";
import { useState } from "react"

let App=()=> {
  const [id,setId] = useState("")
 
console.log(id)
console.log("hello")
  return (
     
      <Router>
          <Link to = "/">Movie</Link>
          
          <Switch>
              <Route exact path="/"><Movie setId = {setId}/></Route>
              <Route path="/SingleMovie"><SingleMovie /></Route>
          </Switch>
          
  
      </Router>
    
  );
}

export default App;
