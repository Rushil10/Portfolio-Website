import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import Home from './components/home/home'
import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';
import About from './components/about/about';

function App() {
  return (
    <div className="main">   
      <Router>
        <Toolbar /> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
