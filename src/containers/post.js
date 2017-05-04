import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost, updatePost } from '../actions';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, id: props.match.params.postID, title: props.post.title, tags: props.post.tags, content: props.post.content, cover_url: props.post.cover_url };
    this.render = this.render.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);

    this.handleSave = this.handleSave.bind(this);
    this.handleDeleteButtonPressed = this.handleDeleteButtonPressed.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ isEditing: false, title: nextProps.post.title, tags: nextProps.post.tags, content: nextProps.post.content, cover_url: nextProps.post.cover_url });
  }

  onTitleChange(event) {
    this.setState({ isEditing: true, title: event.target.value });
    console.log(`on title change: ${event.target.value}`);
    console.log(`this state previous title: ${this.state.title}`);
  }

  onTagsChange(event) {
    this.setState({ isEditing: true, tags: event.target.value });
    console.log(`on tags change: ${event.target.value}`);
    console.log(`this state previous tags: ${this.state.tags}`);
  }

  onContentChange(event) {
    this.setState({ isEditing: true, content: event.target.value });
    console.log(`on content change: ${event.target.value}`);
    console.log(`this state previous content: ${this.state.content}`);
  }

  onCoverURLChange(event) {
    this.setState({ isEditing: true, cover_url: event.target.value });
    console.log(`on cover_url change: ${event.target.value}`);
    console.log(`this state previous cover_url: ${this.state.cover_url}`);
  }

  handleSave(event) {
    console.log(this.state.title);
    console.log(this.props.match.params.postID);
    console.log(`A post was submitted: ${this.state.title} ${this.state.tags} ${this.state.content} ${this.state.cover_url}`);
    this.props.updatePost(this.props.match.params.postID, { title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.cover_url });
    event.preventDefault();
    this.setState({ isEditing: false });
  }

  handleDeleteButtonPressed(id) {
    this.props.deletePost(id, this.props.history);
    console.log('delete button');
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    if (this.state.isEditing) {
      return (
        <div>
          <div className="update-post-render">
            <h1 className="update-post">Update a post!</h1>
            <div className="flex-item"><Textarea id="title" onChange={this.onTitleChange} value={this.state.title} placeholder="title" /></div>

            <div className="flex-item"><Textarea id="tags" onChange={this.onTagsChange} value={this.state.tags} placeholder="tags" /></div>

            <div className="flex-item"><Textarea id="content" onChange={this.onContentChange} value={this.state.content} placeholder="content" /></div>

            <div className="flex-item"><Textarea id="cover_url" onChange={this.onCoverURLChange} value={this.state.cover_url} placeholder="cover_url" /></div>
          </div>
          <div className="buttons">
            <input type="submit" name="submit" value="Save Post" onClick={this.handleSave} />
            <div><i id="trash" className="fa fa-trash" aria-hidden="false" onClick={e => this.handleDeleteButtonPressed(this.props.match.params.postID)} /></div>
          </div>
        </div>

      );
    } else {
      return (
        <div>
          <div className="update-post-render">
            <h1 className="update-post">Update a post!</h1>
            <div className="flex-item"><div id="titlediv" onClick={() => this.setState({ isEditing: true })} dangerouslySetInnerHTML={{ __html: marked(this.state.title || '') }} /></div>

            <div className="flex-item"><div id="tagsdiv" onClick={() => this.setState({ isEditing: true })} dangerouslySetInnerHTML={{ __html: marked(this.state.tags || '') }} /></div>

            <div className="flex-item"><div id="contentdiv" onClick={() => this.setState({ isEditing: true })} dangerouslySetInnerHTML={{ __html: marked(this.state.content || '') }} /></div>

            <div className="flex-item"><img onClick={() => this.setState({ isEditing: true })} alt="cover_url" src={this.state.cover_url} /></div>
          </div>
          <div className="buttons">
            <input type="submit" name="submit" value="Save Post" onClick={this.handleSave} />
            <div><i id="trash" className="fa fa-trash" aria-hidden="false" onClick={e => this.handleDeleteButtonPressed(this.props.match.params.postID)} /></div>
          </div>
        </div>);
    }
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
  // new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));
