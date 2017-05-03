import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
// import GetPost from '../containers/getpost';
import GetNewPost from '../containers/getnewpost';
import GetPosts from '../containers/getposts';

const PostC = (props) => {
  return (
    <div />);
};

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={GetPosts} />
          <Route path="/posts/new" component={GetNewPost} />
          <Route path="/post/:postID" component={PostC} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>All Posts</NavLink></li>
        <li><NavLink to="/posts/new">New Post</NavLink></li>
      </ul>
    </nav>
  );
};

// componentDidMount() {
//   firebasedb.fetchNotes((notes) => {
//     this.setState({ notes: Immutable.Map(notes) });
//   });
// }


export default App;
