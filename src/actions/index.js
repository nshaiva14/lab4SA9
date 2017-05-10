import axios from 'axios';

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const ROOT_URL = 'https://lab5-nshaiva14.herokuapp.com/';
// const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=Nikita_Shaiva2';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
};


export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: { post: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: { posts: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      history.push('/');
      console.log('done');
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function updatePost(id, post) {
  console.log(post);
  console.log(id);
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
      console.log({ response });
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}
