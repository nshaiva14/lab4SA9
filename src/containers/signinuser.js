import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser } from '../actions';

class SignInUser extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', username: '' };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
    console.log(`on email change: ${event.target.value}`);
    console.log(`this state previous email: ${this.state.email}`);
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
    console.log(`on password change: ${event.target.value}`);
    console.log(`this state previous password: ${this.state.password}`);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
    console.log(`on username change: ${event.target.value}`);
    console.log(`this state previous username: ${this.state.username}`);
  }

  handleSubmit(event) {
    console.log(`You signed in with: ${this.state.email} ${this.state.password} ${this.state.username}`);
    this.props.signinUser({ email: this.state.email, password: this.state.password, username: this.state.username }, this.props.history);
    event.preventDefault();
  }

  render() {
    return (
      <div className="new-sign-in-render">
        <h1 className="sign-in">Sign In!</h1>
        <div className="new-form">
          <form id="sign-in" onSubmit={this.handleSubmit}>
            <div className="flex-item"><input type="text" onChange={this.onUsernameChange} value={this.state.username} placeholder="username" /></div>
            <div className="flex-item"><input type="text" onChange={this.onEmailChange} value={this.state.email} placeholder="email" /></div>
            <div className="flex-item"><input type="text" onChange={this.onPasswordChange} value={this.state.password} placeholder="password" /></div>
            <input type="submit" name="submit" value="Sign In!" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignInUser));
