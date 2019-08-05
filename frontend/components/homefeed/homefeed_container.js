import { connect } from 'react-redux'
import homeFeed from './homefeed'
import {fetchAllPosts, deletePost} from '../../actions/posts_actions'
import {fetchComments} from '../../actions/comment_actions'


const mapStateToProps = state => ({
    posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    
})


const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchAllPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    fetchComments: () => dispatch(fetchComments())

})

export default connect(mapStateToProps, mapDispatchToProps)(homeFeed)