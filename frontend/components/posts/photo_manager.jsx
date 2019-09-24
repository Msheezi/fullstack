import React from "react";
import { connect } from "react-redux";
import PhotoManagerItem from "./photo_manager_item";
import {
  fetchAllPosts,
  deletePost,
  updatePost
} from "../../actions/posts_actions";
import { fetchAllGalleries } from "../../actions/gallery_actions";
import {
  openModal,
  openGalleryModal,
  closeGalleryModal
} from "../../actions/ui_actions";
import PostFormEdit from "./photo_manager_edit";
import { fetchAllCategories } from "../../actions/category_actions";

class PhotoManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSelected: false,
      loaded: false,
      post: null,
      gallery_id: null
    };

    this.handlePhotoDelete = this.handlePhotoDelete.bind(this);
    this.handlePhotoUpdate = this.handlePhotoUpdate.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchPosts()
      .then(() => this.props.fetchAllCategories())
      .then(() => this.props.fetchAllGalleries())
      .then(() =>
        this.setState({
          loaded: true
        })
      );
  }

  handlePhotoSelect(e, post) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.post === null) {
      this.setState({ post: post, photoSelected: true });
    } else if (this.state.post.id === post.id) {
      this.setState({ post: null, photoSelected: false });
    } else if (this.state.post && this.state.post.id !== post.id) {
      this.setState({ post: post, photoSelected: true });
    }
  }

  handleGallerySelect() {
    this.setState({ gallery_id: galleryId });
  }

  handlePhotoUpdate(post) {
    this.setState({ post: null, photoSelected: false }, () =>
      this.props.updatePost(post)
    );
  }

  handlePhotoDelete(postId) {
    this.setState({ post: null, photoSelected: false }, () =>
      this.props.deletePost(postId)
    );
  }

  handleGalleryAdd(post) {
    this.setState({ post: null, photoSelected: false });
  }

  handleGalleryDelete(post) {
    this.setState({ post: null, photoSelected: false });
  }

  renderUpdateForm() {
    if (this.state.photoSelected) {
      // console.log(this.state.post);
      return (
        <PostFormEdit
          post={this.state.post}
          updatePost={this.props.updatePost}
          deletePost={this.props.deletePost}
          categories={this.props.categories}
          handlePhotoDelete={this.handlePhotoDelete}
          handlePhotoUpdate={this.handlePhotoUpdate}
          handleGalleryAdd={this.handleGalleryAdd}
          handleGalleryDelete={this.handleGalleryDelete}
          galleries={this.props.galleries}
          photoSelected={this.state.photoSelected}
          openGalleryModal={this.props.openGalleryModal}
          closeGalleryModal={this.props.closeGalleryModal}
          handleGallerySelect={this.handleGallerySelect}
          user={this.props.user}
          galleryModalOpen={this.props.galleryModalOpen}
        />
      );
    } else {
      return (
        <PostFormEdit
          post={{
            id: "",
            title: "",
            category_id: "Uncategorized",
            desc: "",
            camera_name: ""
          }}
          categories={this.props.categories}
        />
      );
    }
  }

  render() {
    // debugger;
    if (this.state.loaded) {
      let posts = this.props.posts
        .map(post => (
          <PhotoManagerItem
            key={post.id}
            post={post}
            // deletePost={this.props.deletePost}
            props={this.props}
            handlePhotoSelect={e => this.handlePhotoSelect(e, post)}
            cssClass={this.state.post === post}
          />
        ))
        .reverse();

      return (
        <div className="manager-page">
          <div className="manager-left">
            <div className="manager-button">
              <button
                type="button"
                className="man-button"
                onClick={this.props.openModal}
              >
                Upload to Library
              </button>
            </div>
            <div className="manager-left-bottom">
              <br />
              <span id="left-bar-title">Photos</span>
              <br />

              <span id="left-bar-detail">
                Library {this.props.posts.length}
              </span>
            </div>
          </div>

          <div className="manager-middle">
            <div className="manager-middle-title">Photo Library</div>

            <div className="manager-middle-posts">{posts}</div>
          </div>
          <div className="manager-right">{this.renderUpdateForm()}</div>
        </div>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = state => {
  let user = state.session.id;
  let posts = Object.values(state.entities.posts).filter(
    post => post.author_id === user
  );
  let galleries = Object.keys(state.entities.galleries)
    .map(id => state.entities.galleries[id])
    .filter(gallery => gallery.author_id == user);
  return {
    galleryModalOpen: state.ui.galleryModalOpen,
    galleries: galleries,
    categories: Object.keys(state.entities.categories).map(
      id => state.entities.categories[id]
    ),
    posts: posts
  };
};

const mapDispatchToProps = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  fetchPosts: () => dispatch(fetchAllPosts()),
  openModal: () => dispatch(openModal()),
  updatePost: post => dispatch(updatePost(post)),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  fetchAllGalleries: () => dispatch(fetchAllGalleries()),
  openGalleryModal: () => dispatch(openGalleryModal()),
  closeGalleryModal: () => dispatch(closeGalleryModal()),
  createNewGallery: gallery => dispatch(createGallery(gallery))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoManager);
