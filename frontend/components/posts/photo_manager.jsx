import React from "react";
import { connect } from "react-redux";
import PhotoManagerItem from "./photo_manager_item";
import {
  fetchAllPosts,
  deletePost,
  updatePost
} from "../../actions/posts_actions";
import { openModal } from "../../actions/ui_actions";
import PostFormEdit from "./photo_manager_edit";
import { fetchAllUsers } from "../../actions/user_actions";

class PhotoManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSelected: false,
      loaded: false,
      post: null
    };

    this.handlePhotoDelete = this.handlePhotoDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts().then(() =>
      this.setState({
        loaded: true
      })
    );
  }

  handlePhotoSelect(e, post) {
    // debugger
    e.preventDefault();
    e.stopPropagation();
    this.setState({ post: post, photoSelected: true });
    // console.log(this.state.post)
  }

  handlePhotoDelete(postId) {
    // e.preventDefault();
    // e.stopPropagation();
    this.setState({ post: "", photoSelected: false, loaded: false }, () =>
      this.props
        .deletePost(postId)
        .then(() => this.props.fetchAllUsers())
        .then(() => this.setState({ loaded: true }))
    );
  }

  renderUpdateForm() {
    if (this.state.photoSelected) {
      return (
        <PostFormEdit
          post={this.state.post}
          updatePost={this.props.updatePost}
          deletePost={this.props.deletePost}
          handlePhotoDelete={this.handlePhotoDelete}
        />
      );
    } else {
      return <PostFormEdit post={{ title: "" }} />;
    }
  }

  render() {

    // debugger;
    if (this.state.loaded) {
      console.log(this.props.posts);
      let posts = this.props.posts
        .map(post => (
          <PhotoManagerItem
            key={post.id}
            post={post}
            deletePost={this.props.deletePost}
            props={this.props}
            handlePhotoSelect={e => this.handlePhotoSelect(e, post)}
          />
        ))
        .reverse();

      return (
        <div className="manager-page">
          <div className="manager-title">
            <span className="manager-button">
              <button
                type="button"
                className="man-button"
                onClick={this.props.openModal}
              >
                Upload Photo
              </button>
            </span>
            <span className="manager-title-title">Photo Library</span>
          </div>
          <div className="manager-container">
            <div className="manager-left">
              <br />
              <span id="left-bar-title">Photos</span>
              <br />

              <br />
              <span id="left-bar-detail">
                Library {this.props.posts.length}
              </span>
            </div>
            <div className="manager-middle">{posts}</div>
            <div className="manager-right">{this.renderUpdateForm()}</div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = state => {
  
  let user = state.session.id
  let posts= Object.values(state.entities.posts).filter(post => post.author_id === user)
  return {
    
    posts: posts
  }
};

const mapDispatchToProps = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  fetchPosts: () => dispatch(fetchAllPosts()),
  openModal: () => dispatch(openModal()),
  updatePost: post => dispatch(updatePost(post)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoManager);
