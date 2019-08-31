import React from "react";
import PostIndexItem from "./post_index_item";
import { connect } from "react-redux";

import { fetchAllPosts, deletePost } from "../../actions/posts_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      imgDims: [],
      test: [["1"], ["2", "3"], ["4"]]
    };

    this.getImgValues = this.getImgValues.bind(this);
  }

  componentDidMount() {
    let myImg = new Image();
    this.props.fetchPosts().then(() => this.props.fetchUsers());

    // .then(() =>
    //   this.setState({
    //     loaded: true
    //   })
    // );

    // .then(() =>
    //   this.props.posts.map(post => this.getImgValues(myImg, post.photoUrl))
    // )
    let imgDimArray = this.props.posts.map(post =>
      this.getImgValues(myImg, post.photoUrl)
    );

    this.setState({
      imgDims: imgDimArray,
      loaded: true
    });

    console.log(imgDimArray);
  }

  getImgValues(img, src) {
    // debugger;
    return new Promise((resolve, reject) => {
      img.src = src;
      img.addEventListener("load", e => {
        resolve(img);

        console.log(img.naturalHeight);
      });
    });
  }

  render() {
    debugger;
    // return (
    //   <div>
    //     {this.state.test.map(col => (
    //       <div>
    //         {col.map(string => (
    //           <p>{string}</p>
    //         ))}
    //       </div>
    //     ))}
    //   </div>
    // );

    // this.props.posts.forEach(post => console.log(this.getImgValues(new Image(), post.photoUrl)))
    // this.props.posts.map(post => { return new Promise((resolve, reject) => { post.addEventListner("load", e => { resolve(post) }) }) })

    // this.props.posts.map( img,post => )
    // this 2D array is the layout of the image used from the function you haven't written yet

    // let myImg = new Image()
    // let myFunc = (img, src) => {
    //   return new Promise((resolve, reject) => {
    //     myImg.src = src
    //     myImg.addEventListener("load", e => {
    //       resolve(img)
    //     })
    //   })
    // }
    // myFunc(myImg, "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg").then(loadedImg => {
    //   debugger
    // })

    // this function below is a sample of what you can use to get the image proportions
    //
    // let myFunc = (img, src) => {
    //   return new Promise((resolve, reject) => {
    //     myImg.src = src
    //     myImg.addEventListener("load", e => {
    //       resolve(img)
    //     })
    //   })
    // }
    if (this.state.loaded) {
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
      // console.log(this.props.posts);
      // debugger
      return (
        <div className="index-container">
          <div className="index-title">
            <h2>Discover</h2>
          </div>
          <div className="photo-index-container">{posts}</div>
        </div>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchAllPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchComments: () => dispatch(fetchComments()),
  fetchUsers: () => dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
