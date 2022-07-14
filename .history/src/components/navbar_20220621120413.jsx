import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;