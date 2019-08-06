import React from "react";
import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost } from "../../actions/posts_actions";
import {fetchComments} from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.match.params.postId;


  return {
    post: state.entities.posts[postId] || {},
    comments: state.entities.comments[postId]
    
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchComments: comments => dispatch(fetchComments(comments))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
