import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions';

class GetPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.renderFetchPost = this.renderFetchPost.bind(this);
    this.render = this.render.bind(this);
  }

  renderFetchPost() {
    // this.props.fetchPost('590955b1b762760022230b96');
    this.props.fetchPost(this.props.match.params.postID);
  }

  render() {
    return (<div>{this.renderFetchPost()}</div>);
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { fetchPost })(GetPost));
