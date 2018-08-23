import React, { Component } from "react";



const NavBar =({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
          <a href="#" className="navbar-brand">
          
           <span className="badge badge-pill badge-secondary"> {totalCounters}</span>
          </a>
        </nav>
      );
}
// class NavBar extends Component {
//   state = {};
//   render() {
    
//   }
// }

export default NavBar;
