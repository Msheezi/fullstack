import React from "react";
import { withRouter } from "react-router-dom";
import PostIndexItem from "../homefeed/post_index_item";
import GalleryIndexItem from "../homefeed/gallery_index_item";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      offset: 0,
      displayPosts: true
    };

    this.parallaxShift = this.parallaxShift.bind(this);
    this.bgStyle = this.bgStyle.bind(this);
    this.renderPhotos = this.renderPhotos.bind(this);
    this.displayGalleries = this.displayGalleries.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
    this.renderGalleries = this.renderGalleries.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchAllUsers()
      .then(() => this.props.fetchAllPosts())
      .then(() => this.props.fetchAllGalleries())
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

  bgStyle() {
    let width = window.innerWidth;
    // let urlMe = this.props.posts[3].photoUrl === undefined ? this.props.defaultBG : this.props.posts[3].photoUrl
    let urlMe = this.props.defaultBG;
    let betterUrl = urlMe.split("?")[0];
    let finalUrl = `https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_500,w_${width},q_auto:best/${betterUrl}`;
    return {
      backgroundPositionY: this.state.offset,
      backgroundImage: `url(${finalUrl})`
    };
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

  renderPhotos() {
    let profPosts = this.props.posts
      .map(post => (
        <PostIndexItem key={post.id} post={post} props={this.props} />
      ))
      .reverse();

    return (
      <div className="layout-container">
        <div className="photo-index-container">{profPosts}</div>
      </div>
    );
  }

  // renderGalleries() {
  //     // debugger
  //     // this.setState({displayPosts: false})
  //     let galleries = this.props.galleries.map(gallery => (
  //         <GalleryIndexItem
  //             key={gallery.id}
  //             gallery={gallery}
  //             props={this.props}
  //             post={this.props.posts.filter(post => post.id === gallery.post_ids[0])[0]}

  //         />
  //     ))
  //     return (
  //         <div className="gallery-index-container">{galleries}</div>
  //     )
  // }

  renderGalleries() {
    let galleries;
    debugger;
    if (this.props.galleries === undefined) {
      return <div>So Empty</div>;
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
    if (this.state.loaded) {
      return (
        <div className="profile-page">
          <div className="parallax-bg" style={this.bgStyle()}></div>
          <div
            className="profile-index-title"
            style={{ bottom: this.state.offset / 2 }}
          >
            <h2>
              {this.props.user.first_name} {this.props.user.last_name}
            </h2>
          </div>
          <div className="photo-gallery-pane-selector">
            <span
              className="selector-photos"
              id={this.state.displayPosts ? "selected-index" : ""}
              onClick={this.displayPosts}
            >
              Photos
            </span>
            <span className="selector-spacer"></span>
            <span
              className="select-galleries"
              id={this.state.displayPosts === false ? "selected-index" : ""}
              onClick={this.displayGalleries}
            >
              Galleries
            </span>
          </div>

          {this.state.displayPosts === true
            ? this.renderPhotos()
            : this.renderGalleries()}
        </div>
      );
    } else {
      return "";
    }
  }
}

export default withRouter(Profile);
