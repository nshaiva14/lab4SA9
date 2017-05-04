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
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

const NavBar = (props) => {
  return (
    <nav>
      <div className="Home"><NavLink to="/" exact>All Posts</NavLink></div>
      <div className="NewPost"><NavLink to="/posts/new">New Post</NavLink></div>
    </nav>
  );
};

// componentDidMount() {
//   firebasedb.fetchNotes((notes) => {
//     this.setState({ notes: Immutable.Map(notes) });
//   });
// }


export default App;
