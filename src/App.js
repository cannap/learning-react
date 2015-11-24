import './styles/app.scss'
import React from 'react';
import {Header} from './components/Layout'
export class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
