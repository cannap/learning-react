import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import {NoMatch} from './pages/NoMatch'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

render(
  <Router history={createBrowserHistory()}>
  <Route path="/" component={App}></Route>
  <Route path="*" component={NoMatch}/>
</Router>, document.getElementById('root'));
