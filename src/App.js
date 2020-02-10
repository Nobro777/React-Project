//Components
import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects';
import ProjectsCards from './components/ProjectsCards';
import About from './components/About';
import Contact from './components/Contact';
import NewNav from './components/NewNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Main App
const App = () => {
  return (
    <Router>
      <NewNav />
        <Switch>
        <Route exact path="/" component={ParticlesBackground}/>
        <Route path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route path="/projects/cards" component={ProjectsCards} />
        <Route path="/contact" component={Contact}/>
        </Switch>
    </Router>
  );
}

//Exporting to Index.js
export default App;