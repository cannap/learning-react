import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {App} from './App';
import NoMatch from './pages/NoMatch'
import Repos from './components/Repo/Repos';

export default() => {
  return(
    <Router history={createBrowserHistory()}>
      <Route name="home" path="/" component={App}>
        <Route
          name="repos"
          path="repos"
          component={Repos}>
        </Route>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
)}
