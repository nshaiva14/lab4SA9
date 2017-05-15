import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);
export default function (ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.render = this.render.bind(this);
    }


    componentWillMount() {
      if (this.props.authenticated === false) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
}

  return connect(mapStateToProps, null)(RequireAuth);
}
