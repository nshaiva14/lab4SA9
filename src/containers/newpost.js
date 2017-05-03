import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions/';


// this can be dumb or smart component - connect works with either
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: '',
      // tag: '',
      // text: '',
      // url: '',
    };
    // this.props.onTitleChange;
    this.onEdit = this.onEdit.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onWriteDB = this.onWriteDB.bind(this);
    this.renderEditing = this.renderEditing.bind(this);
  }

  onEdit() {
    this.setState({
      isEditing: true,
      isEditingTitle: false,
    });
  }

  onWriteText(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit() {
    post: {
      title: this.state.title,
    };
    this.props.createPost(post, this.props.history);
  }

  newPost() {
  }


  renderEditing() {
    if (this.state.isEditing) {
      return (
        <div><Textarea id="text" onChange={this.onWriteText} value={this.props.post.text} /></div>
      );
    } else {
      console.log(this.props.note.text);
      return (<div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.post.text || '') }} />);
    }
  }


  render() {
    return (
      <div>
        <h1> Create a new post </h1>
        <form id="newNote" onSubmit={this.handleSubmit}>
          <input type="text" onClick={this.onEdit} value={this.state.title.entry} />
          <input type="submit" name="submit" value="Submit" />

          //post should store post info
          //history should store id of post

          //on submit--take contents of note
        </form>
        <div>{this.renderEditing()}</div>
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    title: state.title,
  }
);


// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, null)(NewPost));
