import React from "react";
import { withRouter } from "react-router-dom";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
    this.props.fetchComments()
  }

  render() {
    
    let comment = this.props.comments.body
    
    // debugger
    return (
      <div className="post-show-container">
        <img src={this.props.post.photoUrl} className="post-show-img" />
        <h3 className="post-show-title">{this.props.post.title}</h3>
        <h2 className="post-show-author">by Author</h2>
        <p>{this.props.author.first_name}</p>
        <p className="post-create-time">post time</p>
        <p className="post-category">category</p>
        <h3 className="post-comment">Comments</h3>
        <p>{comment}</p>
      </div>
    );
  }
}

export default withRouter(PostShow);
