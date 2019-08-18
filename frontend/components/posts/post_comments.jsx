import React from "react";

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      post_id: this.props.postId,
      author_id: this.props.currentUser,
      comments: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
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

  

  render() {
    // debugger
    const coms = this.state.comments.map(comment => (
      <div key={comment.id} className="comment-item">
        <h3 className="comment-username">
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
        </form>
        <button className="comment-submit-btn" onClick={this.handleSubmit}>
          Post a Comment
        </button> 
        
        {/* <input type="submit" value="post comment" /> */}
        {coms}
      </div>
    );
  }
}
