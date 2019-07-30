import React from "react";
import { withRouter } from "react-router-dom";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    return (
      <div>
        <img src={this.props.post.photoUrl} className="post-show-img" />
        <h3 className="post-show-title">{this.props.post.title}</h3>
      </div>
    );
  }
}

export default withRouter(PostShow);
