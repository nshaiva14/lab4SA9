import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, updatePost, deletePost } from '../actions/';


// this can be dumb or smart component - connect works with either
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isEditing: false,
      title: 'xxx',
      // content: 'xxx'
  }

  getPost() {
    this.props.fetchPost(this.props.match.params.postID);
  };

  // updatePost() {
  //   const post = {
  //     title: newText,
  //     // text: 'Edit Me!',
  //   };
  //   this.props.updatePost(post);
  // };

  deletePost() {
    this.props.deletePost(this.props.fetchPost(this.props.match.params.postID, this.props.history);
  };


  onEdit() {
    this.setState({
      isEditing: true,
      isEditingTitle: false,
    });
  }

  renderEditing() {
  if (this.state.isEditing) {
    return (
      <div><Textarea id="text" onChange={this.onWriteText} placeholder={this.props.note.text} value={this.props.note.text} /></div>
    );
  } else {
    console.log(this.props.note.text);
    return (<div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />);
  }
}

onWriteText(event) {
  this.props.onUpdateText(this.props.id, { text: event.target.value });
}


// history should store id of post

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    post: state.post,
  }
);


// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, null)(Post));


this.state.title on Chane
on Submit local state var pass to create posts
