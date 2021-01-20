import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/HomePage/Home'



function App() {
  return (
    <>
      <Router>
          <Switch>
            <Redirect exact from='/' to='/gloves'/>
            <Route exact path='/:page?' render={props => <Home {...props}/>} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
