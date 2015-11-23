import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {App} from './App';
import {NoMatch} from './pages/NoMatch'


export default class Root extends Component {

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path="/" component={App}></Route>
        <Route path="*" component={NoMatch}/>
      </Router>
    )
  }
}
