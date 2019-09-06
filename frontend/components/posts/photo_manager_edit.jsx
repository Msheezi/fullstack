import React from "react";
import { withRouter } from "react-router-dom";

class PostFormEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post !== this.props.post) {
      this.setState(this.props.post);
    }
  }

  handleInput(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleDelete(e) {
    e.preventDefault();
    this.setState({})
    this.props.handlePhotoDelete(this.state.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost(this.state);
  }

  renderEdit() {
    if (this.state.id) {
      return <h2 className="phm-edit-title">Editing 1 Photo</h2>;
    } else {
      return <h2 className="phm-edit-title">Edit</h2>;
    }
  }

  render() {
    return (
      <div>
        {this.renderEdit()}
        <form
          onSubmit={this.handleSubmit}
          className="photo-manager-form-container"
        >
          <label> Category</label>

          <input
            className="phm-category-input"
            type="text"
            value={this.state.category_id || "Uncategorized"}
            onChange={this.handleInput("category_id")}
          />

          <br />
          <label> Title </label>

          <input
            className="phm-title-input"
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleInput("title")}
          />

          <br />
          <label>Description </label>
          <textarea
            className="phm-desc-input"
            value={this.state.desc}
            onChange={this.handleInput("desc")}
            id="desc"
            placeholder="Tell us more about your beautiful photo"
          />
          <br />

          <label> Camera </label>

          <input
            className="phm-camera-input"
            type="text"
            value={this.state.cameraName}
            onChange={this.handleInput("camera_name")}
          />

          <br />

          <button className="phm-delete-btn" onClick={this.handleDelete}>
            Delete Photo
          </button>
          <button className="phm-submit-btn" onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}                                                                                                                                                                                                                                                                                                        

export default withRouter(PostFormEdit);
