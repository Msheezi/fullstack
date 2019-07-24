import React from 'react'
import {connect} from 'react-redux'
import PostShow from './post_show'
import {fetchPost} from '../../actions/posts_actions'


const mapStateToProps = (state, ownProps) => {
let postId = ownProps.match.params.id

return ({
    post: state.entities.posts[(ownProps.match.params.postId)]
})

}

const mapDispatchToProps = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId))

})

export default connect(mapStateToProps,mapDispatchToProps)(PostShow)