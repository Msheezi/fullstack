import React from "react";
import { withRouter } from "react-router-dom";
import Comments from "./post_comments_container";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchDone: false,
      comments: [],
      postId: this.props.postId
    };

    this.resetMyState = this.resetMyState.bind(this)
  }

  componentDidMount() {
    this.props
      .fetchPost(this.props.match.params.postId)
      .then(() => this.props.fetchAllUsers())
      .then(() => this.props.fetchComments(this.props.match.params.postId))
      .then(res => {
        this.setState(
          { fetchDone: true }
          // ,
          // this.setState({ comments: res.comments })
        );
      });
  }

  resetMyState() {
    this.setState({ fetchDone: false})
    this.setState({postId: this.props.postId})
    this.props.fetchComments(this.state.postId)
        .then((res) => {this.setState({
          fetchDone: true
        })})
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.postId !== this.props.postId){
      this.resetMyState()
       
    }
  }

  render() {
    
    if (this.state.fetchDone) {
      return (
        <div className="post-show-container">
          <div className="post-show-img-container">
            <img src={this.props.post.photoUrl} className="post-show-img" />
          </div>

          <div className="post-show-post-details">
            <div className="post-show-post-camera-details">
              <div className="post-show-author">
                <h3 className="post-show-title">{this.props.post.title}</h3>
                <h4 className="post-show-author">
                  by{" "}
                  {this.props.users[this.props.post.author_id].first_name +
                    " " +
                    this.props.users[this.props.post.author_id].last_name}
                </h4>
              </div>

              <p><span ><i class="fas fa-camera"></i> Camera Nikon D500 {this.props.post.camera_name}</span> </p>
              <p>f/2.2{this.props.post.f_stop}</p>
              <p>ISO 400{this.props.post.iso}</p>
              <p>Lens M.Zuiko{this.props.post.lens}</p>
              <p className="post-create-time">Date Added August 26, 2019</p>
              <p className="post-category">Category Architecture</p>
            </div>

            <div className="post-show-comments">
              <h3 className="post-comment"><span style={{ fontSize: 30, color: 'Tomato', height: 20 }}>

                <i className="fas fa-comments"></i>
              </span> Comments</h3>

              <Comments
                postId={this.props.postId}
                // comments={this.state.comments}
                users={this.props.users}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default withRouter(PostShow);
