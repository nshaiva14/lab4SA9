import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';

import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,

  //MAY ADD USER OBJECT HERE
});

export default rootReducer;
