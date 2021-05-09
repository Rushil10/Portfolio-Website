import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import Home from './components/home/home'
import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">   
      <Router>
        <Toolbar /> 
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
