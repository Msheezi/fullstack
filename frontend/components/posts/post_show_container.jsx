import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost } from "../../actions/posts_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { closeModal } from "../../actions/ui_actions";
import { fetchAllCategories } from '../../actions/category_actions'

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.match.params.postId;


  return {
    postId: postId,
    post: state.entities.posts[postId] || {},
    users: state.entities.users,
    categories: state.entities.categories
    // authorId: state.entities.posts[postId].author_id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchComments: id => dispatch(fetchComments(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  closeModal: () => dispatch(closeModal()),
  fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
