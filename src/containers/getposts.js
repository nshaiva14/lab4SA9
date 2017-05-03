import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { fetchPosts } from '../actions';

class GetPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <ul>
        {this.props.posts.all.map(post =>
          <li key={post.id}>
            {post.title}
            {post.content}
            {post.tags}
            {post.cover_url}
          </li>,
      )}
      </ul>);
  }
}

const mapStateToProps = state => (
  {
    all: state.posts.all,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { fetchPosts })(GetPosts));
