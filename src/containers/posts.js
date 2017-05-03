import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions/';

// this can be dumb or smart component - connect works with either
class Posts extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // isEditing: false,
      title: 'xxx',
      // content: 'xxx'
  }
};

componentDidMount() {
  this.props.fetchPosts();
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    posts: state.all,
  }
);


// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, null)(Posts));
