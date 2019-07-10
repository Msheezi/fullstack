import React from 'react'
import {connect }from 'react-redux'
import PostForm from './post_form'



const mapStateToProps = ({ session, entities: { users } }) => {
    return { currentUser: users[session.id] }

};

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)