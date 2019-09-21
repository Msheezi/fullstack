import React from "react";
import { connect } from "react-redux";
import { fetchComments, createComment } from "../../actions/comment_actions";
// import { fetchUsers } from "../../actions/user_actions";
// import Comments from "./post_comments";
import {withRouter} from "react-router-dom"

 class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      post_id: this.props.postId,
      author_id: this.props.currentUser,
      comments: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToProfile = this.goToProfile.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const subCom = Object.assign({}, this.state);
    this.props
      .createComment(subCom)
      .then(() => {
        return this.setState({ body: "" });
      })
      .then(() => {
        return this.props.fetchComments(this.props.postId);
      })
      .then(res => {
        return this.setState({ comments: res.comments });
      });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId).then(res => {
      this.setState({ comments: res.comments });
    });
  }

  goToProfile(id){
    
    this.props.history.push(`/users/${id}`)
  }
  

  render() {
    // debugger
    const coms = this.state.comments.map(comment => (
      <div key={comment.id} className="comment-item">
        <h3 className="comment-username" onClick={(e) => this.goToProfile(comment.author_id) }>
          {this.props.users[comment.author_id].first_name +
            " " +
            this.props.users[comment.author_id].last_name}
        </h3>

        <p className="comment-body">{comment.body}</p>
      </div>
    ));
    return (
      <div className="comment-container">
        <form className="comment-submit">
          <br />
          <label>
            <br />
            <textarea
              value={this.state.body}
              onChange={this.update("body")}
              className="comment-body"
              name="comment"
              placeholder="Add A Comment"
            />
          </label>
          <br />
        <button className="comment-submit-btn" onClick={this.handleSubmit}>
          Post a Comment
        </button> 
        </form>
        
        {/* <input type="submit" value="post comment" /> */}
        {coms}
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.postId;

  return {
    postId: postId,
    currentUser: state.session.id
    // comments: Object.keys(state.entities.comments).map(id => state.entities.comments[id] )
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id)),
  createComment: comment => dispatch(createComment(comment))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments));