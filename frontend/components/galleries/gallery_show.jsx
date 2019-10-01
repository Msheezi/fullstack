import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllPosts } from "../../actions/posts_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import {
  fetchAllGalleries,
  deleteGallery
} from "../../actions/gallery_actions";
import PostIndexItem from "../homefeed/post_index_item";

class GalleryShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      offset: 0
    };

    this.parallaxShift = this.parallaxShift.bind(this);
    this.bgStyle = this.bgStyle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchAllUsers()
      .then(() => this.props.fetchAllGalleries())
      .then(() => this.props.fetchAllPosts())
      .then(() => this.setState({ loaded: true }));
    window.addEventListener("scroll", this.parallaxShift);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift);
  }

  parallaxShift() {
    this.setState({
      offset: window.pageYOffset
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.history.push("/home");
    this.props.deleteGallery(this.props.galleryId);
  }

  bgStyle() {
    if (this.props.posts.length < 1) {
      return { backgroundPositionY: this.state.offset };
    } else {
      let width = window.innerWidth;
      let urlMe = this.props.defaultBG.photoUrl;
      let betterUrl = urlMe.split("?")[0];
      let finalUrl = `https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_500,w_${width},q_auto:best/${betterUrl}`;
      return {
        backgroundPositionY: this.state.offset,
        backgroundImage: `url(${finalUrl})`
      };
    }
  }

  renderPhotos() {
    if (this.props.posts.length < 1) {
      return (
        <div className="layout-container">
          <h3 style={{ textAlign: "center" }}>This Gallery Has no posts</h3>
        </div>
      );
    } else {
      let profPosts = this.props.posts
        .map(post => (
          <PostIndexItem key={post.id} post={post} props={this.props} />
        ))
        .reverse();

      return (
        <div className="layout-container">
          <div className="photo-index-container">
            {profPosts}
            <img
              style={{
                width: 175,
                flexGrow: 3,
                visibility: "hidden",
                borderColor: "#f7f8fa",
                background: "transparent"
              }}
            />
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="profile-page">
          <div className="parallax-bg" style={this.bgStyle()}></div>
          <span>
            <button className="gallery-delete-btn" onClick={this.handleDelete}>
              Delete Gallery
            </button>
          </span>
          <div
            className="profile-index-title"
            style={{ bottom: this.state.offset / 2 }}
          >
            <h2>{this.props.gallery.name}</h2>
          </div>

          {this.renderPhotos()}
        </div>
      );
    } else {
      return "";
    }
  }
}

const msp = (state, ownProps) => {
  let galleryId = ownProps.match.params.galleryId;
  let gallery = state.entities.galleries[galleryId];

  let postids = gallery ? gallery.post_ids : [];

  let posts =
    postids.length < 1 ? [] : postids.map(id => state.entities.posts[id]);
  let defaultBG = posts === [] ? [] : posts[0];

  return {
    gallery: state.entities.galleries[galleryId],
    posts: posts,
    defaultBG: defaultBG,
    galleryId: galleryId
  };
};

const mdp = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllGalleries: () => dispatch(fetchAllGalleries()),
  deleteGallery: id => dispatch(deleteGallery(id))
});

export default withRouter(
  connect(
    msp,
    mdp
  )(GalleryShow)
);
