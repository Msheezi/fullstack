import React from "react";
import { withRouter } from "react-router-dom";
import Comments from "./post_comments";


class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchDone: false,
      comments: [],
      postId: this.props.postId,
      authorId: this.props.post.author_id
    };

    
    this.goToProfilePage = this.goToProfilePage.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchPost(this.props.match.params.postId)
      .then(() => this.props.fetchAllUsers())
      .then(() => this.props.fetchComments(this.props.match.params.postId))
      .then(() => this.props.fetchAllCategories())
      .then(res => {
        this.setState(
          { fetchDone: true }
         
        );
      });
  }
  

  goToProfilePage() {
    let authorId = this.props.post.author_id;

    this.props.history.push(`/users/${authorId}`);
  }

  render() {
    
    if (this.state.fetchDone) {
      return (
        <div className="post-show-container">
          <div className="post-show-img-container">
            <img src={this.props.post.photoUrl} className="post-show-img" />
          </div>

          <div className="post-show-post-details">
            {/* <div className="post-show-spacer" /> */}

            <div className="post-show-post-camera-details">

              <div className="post-show-author-container">
                <h3 className="post-show-title">{this.props.post.title}</h3>
                <h4 className="post-show-author" onClick={this.goToProfilePage}>
                  by{" "}
                  {this.props.users[this.props.post.author_id].first_name +
                    " " +
                    this.props.users[this.props.post.author_id].last_name}
                </h4>
              </div>

              <p>
                <span>
                  <i className="fas fa-camera" /> Camera {" "}
                  {this.props.post.camera_name || "Not Specified"}
                </span>{" "}
              </p>
              <p>f/ {this.props.post.f_stop || "Not Specified"}</p>
              <p>ISO {this.props.post.iso || "Not Specified"}</p>
              <p>Lens {this.props.post.lens || "Not Specified" }</p>
              <p className="post-create-time">Date Added August 26, 2019</p>
              <p className="post-category">Category {this.props.post.category_id ? this.props.categories[this.props.post.category_id].title : "Uncategorized"}</p>
            </div>

            <div className="post-show-comments">
              <h3 className="post-comment">
                <span style={{ fontSize: 30, color: "Tomato", height: 20 }}>
                  <i className="fas fa-comments" />
                </span>{" "}
                Comments
              </h3>

              <Comments
                postId={this.props.postId}
                
                users={this.props.users}
              />
            </div>
            {/* <div className="post-show-spacer" /> */}
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default withRouter(PostShow);
