import React from "react";
import PostIndexItem from "./post_index_item";
import GalleryIndexItem from "./gallery_index_item";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchAllPosts, deletePost } from "../../actions/posts_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { fetchAllCategories } from "../../actions/category_actions";
import { fetchAllGalleries } from "../../actions/gallery_actions";
import { getGalleries, getPosts } from "../../reducers/selectors";
import ReactGA from "react-ga";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      displayPosts: true,
      photoDims: {}
    };

    this.displayGalleries = this.displayGalleries.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
    // this.getImageWidths = this.getImageWidths.bind(this);
  }

  initializeReactGA() {
  ReactGA.initialize("UA-179339656-1");
  ReactGA.pageview('/feed')
}

  componentDidMount() {
    this.initializeReactGA()
    this.props
      .fetchPosts()
      .then(() => this.props.fetchUsers())
      .then(() => this.props.fetchAllGalleries())
      .then(() => this.props.fetchAllCategories())
      // .then(() => this.getImageWidths())
      .then(() =>
        this.setState({
          loaded: true
        })
      );
  }

  // getImageWidths() {
  //   let widths = {};
  //   let tempImage;
  //   let photoUrl;
  //   let finalUrl;
  //   let postArray = this.props.posts;
  //   let wait;
  //   postArray.forEach(post => {
  //     tempImage = new Image();
  //     //  {post.photoUrl.split("?")[0]}
  //     tempImage.src = `https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_600/${
  //       post.photoUrl.split("?")[0]
  //     }`;
  //     console.log(tempImage.naturalWidth, tempImage.width, post.title);
  //     // tempImage.src = finalUrl;

  //     let loaded = false,
  //       wait;
  //     tempImage.addEventListener(
  //       "load",
  //       () => {
  //         loaded = true;
  //       },
  //       true
  //     );
  //     wait = setInterval(() => {
  //       loaded
  //         ? clearInterval(wait)
  //         : (widths[post.id] = [tempImage.naturalWidth, post.title]);
  //     }, 100);
  //     // tempImage.src = "";
  //   });

  //   console.log(widths);
  //   this.setState({ photoDims: widths });
  // }

  // var console = document.getElementById('console');
  // var log = function () {
  //   console.innerHTML = Array.prototype.join.call(arguments, '');
  // }
  // var imageSrc = 'http://environmentalgeography.files.wordpress.com/2010/02/nature_by_abhishekultimatum.jpg?q=' + Math.random();
  // var img = document.createElement('img');
  // var loaded = false, wait;
  // img.addEventListener('load', function () { loaded = true; }, true);
  // wait = setInterval(function () {
  //   loaded ? clearInterval(wait) : log(img.width, 'x', img.height);
  // }, 0);

  // document.body.appendChild(img);

  // img.setAttribute('src', imageSrc);

  //   function getImageSize(img, callback) {
  //   var $img = $(img);

  //   var wait = setInterval(function () {
  //     var w = $img[0].naturalWidth,
  //       h = $img[0].naturalHeight;
  //     if (w && h) {
  //       clearInterval(wait);
  //       callback.apply(this, [w, h]);
  //     }
  //   }, 30);

  //   var img = document.createElement('img');

  //   img.src = 'some-image.jpg';

  // var poll = setInterval(function () {
  //     if (img.naturalWidth) {
  //       clearInterval(poll);
  //       console.log(img.naturalWidth, img.naturalHeight);
  //     }
  //   }, 10);

  // img.onload = function () { console.log('Fully loaded'); }

  // for (let i = 0; i < postArray.length + 1; i++) {
  //   tempImage = new Image();
  //   photoUrl = postArray[i].photoUrl.split("?")[0];
  //   finalUrl = `https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_600/${photoUrl}`;
  //   tempImage.src = finalUrl;
  //   tempImage.onload = () => {
  //     widths[postArray[i].id] = [
  //       tempImage.width,
  //       finalUrl,
  //       postArray[i].title
  //     ];
  //   };
  // this.props.posts.forEach(post => {
  //   };
  //   // console.log(tempImage.naturalWidth);
  // });

  //   var tempImage1 = new Image();
  // tempImage1.src = "path/to/image";
  // tempImage1.onload = function () {
  //   console.log(tempImage1.width, tempImage1.height);
  // }

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
    return (
      <div className="photo-index-container">
        {posts}
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
    );
  }

  renderGalleries() {
    let galleries;
    if (this.props.galleries === undefined) {
      return (
        <div>
          No Galleries Exist, You Really shouldn't be receiving this message
        </div>
      );
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
      let content =
        this.props.match.path === "/home/photos"
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
              id={
                this.props.match.path === "/home/photos" ? "selected-index" : ""
              }
              // onClick={this.displayPosts}
            >
              <Link to="/home/photos">Photos</Link>
            </span>
            <span className="selector-spacer-index"></span>
            <span
              className="select-galleries-index"
              id={
                this.props.match.path === "/home/galleries"
                  ? "selected-index"
                  : ""
              }
              // onClick={this.displayGalleries}
            >
              <Link to="/home/galleries">Galleries</Link>
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
    galleries: getGalleries(state),
    posts: getPosts(state)
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
