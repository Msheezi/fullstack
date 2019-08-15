import React from "react";
import PostIndexItem from "./post_index_item";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchComments();
  }

  render() {
    let posts = this.props.posts.map(post => (
      <PostIndexItem
        key={post.id}
        post={post}
        deletePost={this.props.deletePost}
        props={this.props}
      />
    ));
    console.log(this.props.posts);
    // debugger
    return (
      <div className="index-title">
        <h2>Discover</h2>

        <div className="photo-index-container">
         

          {posts}
        </div>
      </div>
    );
  }
}
