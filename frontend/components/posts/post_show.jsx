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


 renderLens(){
   return (
     <img className="icon-lens" src="https://mypx-dev.s3-us-west-1.amazonaws.com/telephoto.png"/>
   )
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
                <span className="author-by"> by{""} <span className="post-show-author" onClick={this.goToProfilePage}>
                  {this.props.users[this.props.post.author_id].first_name +
                    " " +
                    this.props.users[this.props.post.author_id].last_name}
                  
                  </span></span>
                
              </div>
                    <p> {this.props.post.desc}</p>
              <p>
                <span>
                  <i className="fas fa-camera" /> Camera {" "}
                  {this.props.post.camera_name || "0"}
                </span>{" "}
              </p>
              <p className="lens-text"> <span>{this.renderLens()}  {this.props.post.lens || "0"}</span></p>
              <p>
                <span>
                  <i className="fas fa-sliders-h" />    {"   "}
               
                  ƒ/{this.props.post.f_stop || "0"} {"   "}
                  ISO {this.props.post.iso || "0"}  {"   "}
                </span>
              </p>
              <p className="post-create-time">Date Added August 26, 2019</p>
              <p className="post-category">Category {this.props.post.category_id ? this.props.categories[this.props.post.category_id].title : "Uncategorized"}</p>
            </div>

            <div className="post-show-spacer" > </div>

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
