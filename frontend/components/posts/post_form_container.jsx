import React from "react";
import { connect } from "react-redux";
import PostForm from "./post_form";
import { createPost, clearPostErrors } from "../../actions/posts_actions";
import { openModal, closeModal } from "../../actions/ui_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.session.id,
    errors: state.errors.posts,
    postModalOpen: state.ui.postModalOpen
  };
};

const mapDispatchToProps = dispatch => ({
  submitPost: post => dispatch(createPost(post)),
  clearErrors: () => dispatch(clearPostErrors()),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
