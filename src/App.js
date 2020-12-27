import React from 'react'
import {Router,Switch,Route} from 'react-router';
import history from './history'
import Nav from './components/layout/Nav';
import Home from './components/layout/Home';
import Create from './components/layout/Create';
import Edit from './components/layout/Edit';
import NotFound from './components/layout/NotFound';

const App = () => {
    return (
    <>
      <Router history={history}>
      <Nav></Nav>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={Create} />
      <Route path="/edit/:id" exact component={Edit} />
      <Route component={NotFound} />
      </Switch>
      </Router>
    </>
    )
}

export default App
