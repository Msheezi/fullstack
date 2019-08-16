import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost } from "../../actions/posts_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.match.params.postId;

  return {
    postId: postId,
    post: state.entities.posts[postId] || {},
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchComments: id => dispatch(fetchComments(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
