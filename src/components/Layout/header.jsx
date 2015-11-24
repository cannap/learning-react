import React from 'react';
import {Link} from 'react-router'
class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="container">
           <nav className="nav-top">
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>

            </ul>
          </nav>
        </div>
      </header>
    );
  }

}
export default Header;
