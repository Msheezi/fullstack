import { connect } from "react-redux";
import {updatePost, deletePost} from '../../actions/posts_actions'
import PostFormEdit from './photo_manager_edit'


const mapStateToProps = state => ({
    // categories: Object.keys(state.entities.categories).map(id => state.entities.categories[id])
    categories: state.entities.categories
})


const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mapStateToProps,mapDispatchToProps)(PostFormEdit);
