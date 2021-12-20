import Movie from "./Movie"
import {
  BrowserRouter as Router,
  Route,Link,Switch
} from "react-router-dom";
import SingleMovie from "./SingleMovie"
let App=()=> {
  return (
    
      <Router>
          <Link to = "/"></Link>
          <Switch>
              <Route exact path="/">
                <Movie/>
              </Route>
              <Route path = "/single-movie/:id">
                <SingleMovie/>
              </Route>
          </Switch>
          
  
      </Router>
    
  );
}

export default App;
