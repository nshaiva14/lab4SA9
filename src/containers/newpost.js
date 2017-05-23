import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions';
import { uploadImage } from '../s3';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', tags: '', content: '', preview: '' };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
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

  onImageUpload(event) {
    console.log('image uploading');
    const file = event.target.files[0];
    // Handle null file
    // Get url of the file and set it to the src of preview
    if (file) {
      uploadImage(file).then((url) => {
        this.setState({ preview: url });
        console.log(`please add an image ${url}`);
      }).catch((error) => {
        console.log('add image');
      });
    }
  }

  handleSubmit(event) {
    console.log(`A post was submitted: ${this.state.title} ${this.state.tags} ${this.state.content} ${this.state.preview}`);

    this.props.createPost({ title: this.state.title, tags: this.state.tags, content: this.state.content, preview: this.state.preview }, this.props.history);

    event.preventDefault();
  }

  // <div className="flex-item"><input type="text" onChange={this.onCoverURLChange} value={this.state.cover_url} placeholder="cover_url" /></div>


  render() {
    return (
      <div className="new-post-render">
        <h1 className="create-post">Create a post!</h1>
        <div className="new-form">
          <form id="new-note" onSubmit={this.handleSubmit}>
            <div className="flex-item"><input type="text" onChange={this.onTitleChange} value={this.state.title} placeholder="title" /></div>

            <div className="flex-item"><input type="text" onChange={this.onTagsChange} value={this.state.tags} placeholder="tags" /></div>

            <div className="flex-item"><input type="text" onChange={this.onContentChange} value={this.state.content} placeholder="content" /></div>

            <div className="flex-item"><img id="preview" alt="preview" src={this.state.preview} /></div>
            <div className="flex-item"><input type="file" name="coverImage" onChange={this.onImageUpload} /></div>

            <input type="submit" name="submit" value="Create Post" onClick={this.handleSubmit} />

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
