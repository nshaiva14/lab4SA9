import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';


const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.onSignOutClick = this.onSignOutClick.bind(this);
  }

  onSignOutClick(event) {
    console.log('Clicked sign out');
    this.props.signoutUser(this.props.history);
    event.preventDefault();
  }

  renderSign() {
    if (this.props.authenticated) {
      return (
        <div>
          <button className="sign-out" onClick={this.onSignOutClick}>Sign Out</button>
        </div>);
    } else {
      return (
        <div>
          <div className="sign-in"><NavLink id="nav" to="/signin">Sign In</NavLink></div>
          <div className="sign-up"><NavLink id="nav" to="/signup">Sign Up</NavLink></div>
        </div>);
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="home"><NavLink id="nav" to="/" exact>All Posts</NavLink></div>
          <div className="new-post"><NavLink id="nav" to="/posts/new">New Post</NavLink></div>
        </nav>
        <div>{this.renderSign()}</div>
      </div>
    );
  }

}
export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
