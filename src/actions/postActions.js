import { FETCH_POSTS, CREATE_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching posts');
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_POSTS, payload: data }));
}

export const createPost = (post) => dispatch => {
    console.log('creating post');
    fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: CREATE_POST, payload: data
    }));
}