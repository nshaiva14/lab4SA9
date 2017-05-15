import axios from 'axios';

// const ROOT_URL = 'https://lab5-nshaiva14.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=Nikita_Shaiva2';


// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

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
    // axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
    axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      history.push('/');
      console.log('done');
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function updatePost(id, post) {
  return (dispatch) => {
    // axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
    axios.put(`${ROOT_URL}/posts/${id}`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log({ response });
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
    // axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function signinUser({ email, password, username }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin${API_KEY}`, { email, password, username }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser({ email, password, username }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup${API_KEY}`, { email, password, username }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
