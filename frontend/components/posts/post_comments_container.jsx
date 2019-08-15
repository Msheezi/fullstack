
import { connect } from 'react-redux'
import { fetchComments, createComment } from '../../actions/comment_actions'
import Comments from './post_comments'
import {getPostComments} from '../../reducers/selectors'


const mapStateToProps = (state, ownProps )=> {
    let postId = ownProps.postId
    //let allComments = Object.keys(state.entities.comments).map(id => state.entities.comments[id] )
    return {
        postId: postId,
        currentUser: state.session.id,
        comments: getPostComments(state).filter(comment => comment.post_id === ownProps.postId)
        // allComments
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