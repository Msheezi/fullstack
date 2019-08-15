
import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost } from "../../actions/posts_actions";
import {fetchComments} from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.match.params.postId;
  let author_id = state.entities.posts[postId].author_id

  return {
    postId: postId,
    post: state.entities.posts[postId] || {},
    author: state.entities.users[author_id],
    users: state.entities.users
    
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchComments: id => dispatch(fetchComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
