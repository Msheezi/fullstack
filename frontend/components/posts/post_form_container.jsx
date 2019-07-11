import React from 'react'
import {connect }from 'react-redux'
import PostForm from './post_form'
import {createPost, clearPostErrors} from '../../actions/posts_actions'



const mapStateToProps = state => {
    return { 
        
        currentUser: state.session.id,
        errors: state.errors.posts
    
    }

};

const mapDispatchToProps = dispatch => ({

submitPost: (post) => dispatch(createPost(post)),
clearErrors: () => dispatch(clearPostErrors())




})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)