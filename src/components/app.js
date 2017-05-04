import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import NewPost from '../containers/newpost';
import Posts from '../containers/posts';
import Post from '../containers/post';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<h1>Post not found! </h1>)} />
        </Switch>
      </div>
    </Router>
  );
};

const NavBar = (props) => {
  return (
    <nav>
      <div className="home"><NavLink id="nav" to="/" exact>All Posts</NavLink></div>
      <div className="new-post"><NavLink id="nav" to="/posts/new">New Post</NavLink></div>
    </nav>
  );
};

// componentDidMount() {
//   firebasedb.fetchNotes((notes) => {
//     this.setState({ notes: Immutable.Map(notes) });
//   });
// }


export default App;
