import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return Object.assign({}, state, {
        post: action.payload.post,
      });
    case ActionTypes.FETCH_POSTS:
      console.log(Object.assign({}, state, {
        all: action.payload.posts,
      }));
      return Object.assign({}, state, {
        all: action.payload.posts,
      });
    default:
      return state;
  }
};

export default PostsReducer;
