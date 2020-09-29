import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchPosts } from '../actions/postActions';

const mapStateToProps = (state)=>{
    console.log('state: ', state);
    return {
        posts: state.posts.items,
        newPost: state.posts.item
    }
}

class Posts extends Component {
    componentDidMount() {
        console.log('componentDidMount')
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps)
        if(nextProps && nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItems = this.props.posts.map((post, index)=>(
            <div key={post.id}>
                <h3>{index+1}. {post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propType = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { fetchPosts })(Posts);