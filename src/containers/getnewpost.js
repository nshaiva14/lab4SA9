import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions';

class GetNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', tags: '', content: '', cover_url: '' };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    console.log(`A post was submitted: ${this.state.title} ${this.state.tags} ${this.state.content} ${this.state.cover_url}`);
    this.props.createPost({ title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.cover_url }, this.props.history);
    event.preventDefault();
  }

  render() {
    return (
      <form id="newNote" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onTitleChange} value={this.state.title} />

        <input type="text" onChange={this.onTagsChange} value={this.state.tags} />

        <input type="text" onChange={this.onContentChange} value={this.state.content} />

        <input type="text" onChange={this.onCoverURLChange} value={this.state.cover_url} />

        <input type="submit" name="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
//
// const mapStateToProps = state => (
//   {
//     posts = state.posts;
//
//   }
// );


export default withRouter(connect(null, { createPost })(GetNewPost));
