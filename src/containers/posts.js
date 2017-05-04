import React, { Component } from 'react';
import marked from 'marked';
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
      <div className="render-posts">
        <h1 className="blog">My Blog</h1>
        <div className="posts-render">
          {this.props.all.map(post =>
            <div className="post" key={post.id}>
              <a href={`/posts/${post.id}`}>
                <div className="flex-item"><div dangerouslySetInnerHTML={{ __html: marked(post.title || '') }} /></div>
                <div className="flex-item"><div dangerouslySetInnerHTML={{ __html: marked(post.tags || '') }} /></div>
                <div className="flex-item"><div dangerouslySetInnerHTML={{ __html: marked(post.content || '') }} /></div>
                <div className="flex-item"><img alt="cover_url" src={post.cover_url} /></div>
              </a>
            </div>)}
        </div>
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
