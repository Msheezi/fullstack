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
      loaded: false
    };
   
  }

  componentDidMount() {
   

    
    this.props
      .fetchPosts()
      .then(() => this.props.fetchUsers())
      .then(() =>
        this.setState({
          loaded: true
        })
      )
     
  }

  
  render() {
    
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
