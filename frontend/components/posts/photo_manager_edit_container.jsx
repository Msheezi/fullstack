import { connect } from "react-redux";
import {updatePost, deletePost} from '../../actions/posts_actions'
import PostFormEdit from './photo_manager_edit'

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
})

export default connect(null,mapDispatchToProps)(PostFormEdit);
