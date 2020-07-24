import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginComponent from './components/auth/Login.component';
import NewAccountComponent from './components/auth/NewAccount.component';
import ProjectsComponent from './components/projects/Projects.component';

import ProjectState from './context/projects/projectState';
import TaskState from './context/task/taskState';

///
function App() {
  return (
    <ProjectState>
      <TaskState>
        
        <Router>
          <Switch>

            <Route exact path="/" component={LoginComponent}/>
            <Route exact path="/new-account" component={NewAccountComponent}/>
            <Route exact path="/projects" component={ProjectsComponent}/>
            
          </Switch>
        </Router>

      </TaskState>
    </ProjectState>
  );
}

export default App;
