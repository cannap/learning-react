import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, RaisedButton} from 'material-ui';
import {Link} from 'react-router'
class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="container">
           <nav className="nav-top">
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="repos">Repos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

}
export default Header;
