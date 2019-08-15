
import { connect } from 'react-redux'
import { fetchComments, createComment } from '../../actions/comment_actions'
import Comments from './post_comments'


const mapStateToProps = (state, ownProps )=> {
    let postId = ownProps.postId
    
    return {
        postId: postId,
        currentUser: state.session.id,
        // comments: Object.keys(state.entities.comments).map(id => state.entities.comments[id] )
    }

    
}


const mapDispatchToProps = dispatch => ({
    fetchComments: (id) => dispatch(fetchComments(id)),
    createComment: comment => dispatch(createComment(comment))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);