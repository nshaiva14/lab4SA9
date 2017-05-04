import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from '../actions';

class Posts extends Component {
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
      <div>
        {this.props.all.map(post =>
          <div key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
            <div>{post.tags}</div>
            <div>
              <div>{post.content}</div>
              <div>{post.cover_url}</div>
            </div>
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    all: state.posts.all,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
