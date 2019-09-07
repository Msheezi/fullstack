import React from "react";
import { withRouter } from "react-router-dom";

class PostFormEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handlePhotoUpdate = this.handlePhotoUpdate.bind(this);
    
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
    // this.setState({})
    this.props.handlePhotoDelete(this.state.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePhotoUpdate(this.state)
    // this.props.updatePost(this.state);
    // this.setState({ title: "", category_id: "Uncategorized", desc: "", camera_name: ""})
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
          <select 
            value={this.state.category_id || ""}
            onChange={this.handleInput("category_id")}>
              <option value="" >Uncategorized</option>
            {this.props.categories.map(category => {
             return (<option key={category.id} value={category.id||""}  >{category.title}</option>)
              
            }
            )}
          </select>
          
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
            value={this.state.desc || ""}
            onChange={this.handleInput("desc")}
            id="desc"
            placeholder="Tell us more about your beautiful photo"
          />
          <br />

          <label> Camera </label>

          <input
            className="phm-camera-input"
            type="text"
            value={this.state.camera_name || ""}
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
