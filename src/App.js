import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar     from './components/layout/Navbar/Navbar';
import Home       from './components/sections/Home/Home';
import About      from './components/sections/About/About';
import Projects   from './components/sections/Projects/Projects';
import Experience from './components/sections/Experience/Experience';
import Contact    from './components/sections/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"           component={Home}       />
        <Route exact path="/about"      component={About}      />
        <Route exact path="/projects"   component={Projects}   />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/contact"    component={Contact}    />
      </Switch>
    </Router>
  );
}

export default App;
