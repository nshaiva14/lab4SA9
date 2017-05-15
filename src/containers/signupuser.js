import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions';

class SignUpUser extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
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

  handleSubmit(event) {
    console.log(`You signed up with: ${this.state.email} ${this.state.password}`);
    this.props.signupUser({ email: this.state.email, password: this.state.password }, this.props.history);
    event.preventDefault();
  }

  render() {
    return (
      <div className="new-sign-out-render">
        <h1 className="sign-out">Sign Up!</h1>
        <div className="new-form">
          <form id="sign-out" onSubmit={this.handleSubmit}>
            <div className="flex-item"><input type="text" onChange={this.onEmailChange} value={this.state.email} placeholder="email" /></div>
            <div className="flex-item"><input type="text" onChange={this.onPasswordChange} value={this.state.password} placeholder="password" /></div>
            <input type="submit" name="submit" value="Sign Up!" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null, { signupUser })(SignUpUser));
