import React from "react";
import { withRouter } from "react-router-dom";
import Comments from './post_comments_container'

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchDone: false,
      comments: []
    }
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId).then(() => this.props.fetchComments(this.props.match.params.postId)).then((res) => {
      this.setState({fetchDone: true},
        this.setState({comments: res.comments}))
    });
    // this.props.fetchComments()
  }

  render() {
    // debugger
    if (this.state.fetchDone) {
    // let comments = this.props.fetchComments(this.props)
    
    let postId = this.props.match.params.postId
    return (
      <div className="post-show-container">
        <img src={this.props.post.photoUrl} className="post-show-img" />
        <h3 className="post-show-title">{this.props.post.title}</h3>
        <h2 className="post-show-author">by {this.props.author.first_name + ' ' + this.props.author.last_name}</h2>
        <p>Camera: {this.props.post.camera_name}</p>
        {this.props.post.f_stop}
        {this.props.post.iso}
        {this.props.post.lens}
        <p className="post-create-time">post time</p>
        <p className="post-category">category</p>
        <h3 className="post-comment">Comments</h3>
        <ul>
        <Comments
          // comments={this.props.comments[postId]}
          postId={this.props.match.params.postId}
          comments={this.state.comments}
          users={this.props.users}
        /></ul>
      </div>
      );
    } else {return ''}
  }
}

export default withRouter(PostShow);
