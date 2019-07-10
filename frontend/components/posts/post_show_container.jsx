import React from 'react'
import {connect} from 'react-redux'
import PostShow from './post_show'


const mapStateToProps = (state, ownProps) => {
let postId = ownProps.match.params.id
return ({
    post: state.entities.posts[postId]
})

}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(PostShow)