
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/comment_actions'
import Comments from './post_comments'


const mapStateToProps = (state, ownProps )=> {
    let postId = ownProps.postId
    
    return {

        comments: Object.keys(state.entities.comments).filter(id=> id === postId).map(id => state.entities.comments[id] )
    }

    
}


const mapDispatchToProps = dispatch => ({
    fetchComments: comments => dispatch(fetchComments(comments))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);