import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewPost from '../containers/newpost';
import Posts from '../containers/posts';
import Post from '../containers/post';
import SignInUser from '../containers/signinuser';
import SignUpUser from '../containers/signupuser';
import NavBar from './navbar';
import RequireAuth from '../containers/requireAuth';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={RequireAuth(NewPost)} />
          <Route path="/posts/:postID" component={Post} />
          <Route path="/signin" component={SignInUser} />
          <Route path="/signup" component={SignUpUser} />
          <Route render={() => (<h1>Post not found! </h1>)} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
