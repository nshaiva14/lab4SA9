import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions';

class GetPost extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', title: '', tags: '', content: '', cover_url: '', isEditing: false };
    this.render = this.render.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);

    this.handleUpdateSubmitPressed = this.handleUpdateSubmitPressed.bind(this);
    this.handleDeleteButtonPressed = this.handleDeleteButtonPressed.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
    console.log(`on title change: ${event.target.value}`);
    console.log(`this state previous title: ${this.state.title}`);
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
    console.log(`on tags change: ${event.target.value}`);
    console.log(`this state previous tags: ${this.state.tags}`);
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
    console.log(`on content change: ${event.target.value}`);
    console.log(`this state previous content: ${this.state.content}`);
  }

  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
    console.log(`on cover_url change: ${event.target.value}`);
    console.log(`this state previous cover_url: ${this.state.cover_url}`);
  }

  handleUpdateSubmitPressed(event) {
    console.log(`A post was submitted: ${this.state.title} ${this.state.tags} ${this.state.content} ${this.state.cover_url}`);
    this.props.updatePost(this.props.match.params.postID, { title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.cover_url });
    event.preventDefault();
  }

  handleDeleteButtonPressed(event) {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
    event.preventDefault();
  }

  render() {
    return (
      <div>{this.props.match.params.postID}</div>
    );
    // return post div content
    //
    // return (<div>{this.renderFetchPost()}</div>);
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
