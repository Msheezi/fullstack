import React from 'react'
import {connect }from 'react-redux'
import PostForm from './post_form'
import {createPost} from '../../actions/posts_actions'



const mapStateToProps = ({ session, entities: { users } }) => {
    return { currentUser: users[session.id] }

};

const mapDispatchToProps = dispatch => ({

submitPost: (post) => dispatch(createPost(post))


})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)