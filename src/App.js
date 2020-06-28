import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginComponent from './components/auth/Login.component';
import NewAccountComponent from './components/auth/NewAccount.component';
import ProjectsComponent from './components/projects/Projects.component';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={LoginComponent}/>
        <Route exact path="/new-account" component={NewAccountComponent}/>
        <Route exact path="/projects" component={ProjectsComponent}/>
        
      </Switch>
    </Router>
  );
}

export default App;
