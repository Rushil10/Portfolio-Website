import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import Home from './components/home/home'
import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';
import About from './components/about/about';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="main">   
      <Router>
        <Toolbar /> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
