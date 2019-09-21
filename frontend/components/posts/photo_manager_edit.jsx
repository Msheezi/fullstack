import React from "react";
import { withRouter } from "react-router-dom";

class PostFormEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post,
      popupOpen: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePopup = this.handlePopup.bind(this)
    // this.handlePhotoUpdate = this.handlePhotoUpdate.bind(this);
    
  }

  handlePopup(e){
   e.preventDefault()
   e.stopPropagation()
    if(this.state.popupOpen){
      this.setState({popupOpen: false})
    } else {
      this.setState({popupOpen: true})
    }
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post !== this.props.post) {
      this.setState({post: this.props.post});
    }
  }

  handleInput(field) {
    return e => {
      let newPost = {...this.state.post}
      newPost[field] = e.target.value
      this.setState({post: newPost})
    }
      // this.setState({
      //   post: [field] = e.target.value
      // });
  }

  handleDelete(e) {
    e.preventDefault();
    // this.setState({})
    this.props.handlePhotoDelete(this.state.post.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePhotoUpdate(this.state.post)
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
          <label>Description </label>
          <textarea
            className="phm-desc-input"
            value={this.state.post.desc || ""}
            onChange={this.handleInput("desc")}
            id="desc"
            placeholder="Tell us more about your beautiful photo"
          />
          <br />
          <label> Category</label>
          <select 
            value={this.state.post.category_id || ""}
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
            value={this.state.post.title}
            onChange={this.handleInput("title")}
          />
          <br/>
          <label> Gallery </label>
          <button className="phm-add-gallery-btn" onClick={this.handlePopup}>
            Add To Gallery 
            {/* this button should open the menu displaying the galleries */}
          </button>
          <div id="dropdown">
            <ul onClick={this.handlePopup} className="nav-list-ul">
              {this.state.popupOpen ? (
                <div>
                  <li>
                    show me
                  </li>
                  <li>
                    this works
                  </li>
                </div>
              ) : (
                  ""
                )}
            </ul>
          </div>
          <br />
          

          <label> Camera </label>

          <input
            className="phm-camera-input"
            type="text"
            value={this.state.post.camera_name || ""}
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
