import React from "react";
import { withRouter } from "react-router-dom";
import Comments from './post_comments_container'

class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
    this.props.fetchComments()
  }

  render() {
    
    // let comments = this.props.comments.body
    
    let postId = this.props.match.params.postId
    return (
      <div className="post-show-container">
        <img src={this.props.post.photoUrl} className="post-show-img" />
        <h3 className="post-show-title">{this.props.post.title}</h3>
        <h2 className="post-show-author">by {this.props.author.first_name}</h2>
        <p>Camera: {this.props.post.camera_name}</p>
        {this.props.post.f_stop}
        {this.props.post.iso}
        {this.props.post.lens}
        <p className="post-create-time">post time</p>
        <p className="post-category">category</p>
        <h3 className="post-comment">Comments</h3>
        <ul>
        <Comments
          comments={this.props.comments[postId]}
        /></ul>
      </div>
    );
  }
}

export default withRouter(PostShow);
