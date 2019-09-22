import React from "react";
import PostIndexItem from "./post_index_item";
import GalleryIndexItem from "./gallery_index_item";
import { connect } from "react-redux";

import { fetchAllPosts, deletePost } from "../../actions/posts_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { fetchAllCategories } from "../../actions/category_actions";
import { fetchAllGalleries } from "../../actions/gallery_actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      displayPosts: true
    };

    this.displayGalleries = this.displayGalleries.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchPosts()
      .then(() => this.props.fetchUsers())
      .then(() => this.props.fetchAllGalleries())
      .then(() => this.props.fetchAllCategories())
      .then(() =>
        this.setState({
          loaded: true
        })
      );
  }

  displayPosts() {
    this.setState({
      displayPosts: true
    });
  }

  displayGalleries() {
    this.setState({
      displayPosts: false
    });
  }

  renderPosts() {
    let posts = this.props.posts
      .map(post => (
        <PostIndexItem
          key={post.id}
          post={post}
          deletePost={this.props.deletePost}
          props={this.props}
        />
      ))
      .reverse();
    return <div className="photo-index-container">
    {posts}
      <img style={{ width: 175, flexGrow: 3, visibility: "hidden", borderColor: "#f7f8fa", background:"transparent"}}/>
    </div>;
  }

  renderGalleries() {
    let galleries;
    if (this.props.galleries === undefined) {
      return <div>No Galleries Exist, You Really shouldn't be receiving this message</div>;
    } else {
      
      galleries = this.props.galleries.map(gallery => (
        <GalleryIndexItem
          key={gallery.id}
          gallery={gallery}
          props={this.props}
          
          post={
            this.props.posts.filter(post => post.id === gallery.post_ids[0])[0]
          }
        />
      ));
      return <div className="gallery-index-container">{galleries}</div>;
    }
  }

  render() {
    // debugger;

    if (this.state.loaded) {
      let content = this.state.displayPosts
        ? this.renderPosts()
        : this.renderGalleries();
      return (
        <div className="index-container">
          <div className="index-title">
            <h2>What's popular today</h2>
            <p>See recently added photos and galleries below.</p>
          </div>
          <div className="photo-gallery-pane-selector1">
            <span
              className="selector-photos-index"
              id={this.state.displayPosts ? "selected-index" : ""}
              onClick={this.displayPosts}
            >
              Photos
            </span>
            <span className="selector-spacer-index"></span>
            <span
              className="select-galleries-index"
              id={!this.state.displayPosts ? "selected-index" : ""}
              onClick={this.displayGalleries}
            >
              Galleries
            </span>
          </div>
          <div className="index-photo-wrapper">{content}</div>
        </div>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = state => {
  return {
    galleries: Object.keys(state.entities.galleries).map(
      id => state.entities.galleries[id]
    ),
    posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchAllPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchComments: () => dispatch(fetchComments()),
  fetchUsers: () => dispatch(fetchAllUsers()),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  fetchAllGalleries: () => dispatch(fetchAllGalleries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
