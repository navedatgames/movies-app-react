import Movie from "./Movie"
import SingleMovie from "./SingleMovie"
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom"
let App=()=> {
  return (
    <Router >
       <Switch>
          <Route exact path="/">
            <Movie/>
          </Route>

          <Route path="/abc">
            <SingleMovie />
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
