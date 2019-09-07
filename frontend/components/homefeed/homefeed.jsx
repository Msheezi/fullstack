import React from "react";
import PostIndexItem from "./post_index_item";
import { connect } from "react-redux";

import { fetchAllPosts, deletePost } from "../../actions/posts_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import {fetchAllCategories} from '../../actions/category_actions'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      test: [["1"], ["2", "3"], ["4"]]
    };

    // this.getImgValues = this.getImgValues.bind(this)
  }

  componentDidMount() {
    this.props
      .fetchPosts()
      .then(() => this.props.fetchUsers())
      .then(()=> this.props.fetchAllCategories())
      // .then(() => this.props.posts.map(post => this.getImgValues(img, post.photoUrl)))
      .then(() =>
        this.setState({
          loaded: true
        })
      );

        // let myImg = new Image()
        // this.getImgValues(myImg, )
  }


  // getImgValues(img, src) {
  //   let myImg = new Image()
    
  //   return new Promise((resolve, reject) => {
  //     myImg.src = src
  //     myImg.addEventListener("load", e => {
  //       resolve(img)
        
  //               console.log(img)
  //     })
  //   })
  // }

  render() {
    // debugger;
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

    // this.props.posts.map(post => { return new Promise((resolve, reject) => { post.addEventListner("load", e => { resolve(post) }) }) })

    // this.props.posts.map( img,post => )
    // this 2D array is the layout of the image used from the function you haven't written yet

    
    

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
  fetchUsers: () => dispatch(fetchAllUsers()),
  fetchAllCategories: () => dispatch(fetchAllCategories())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
