import React from "react";
import { withRouter } from "react-router-dom";
import GalleryModal from '../galleries/gallery_modal'

class PostFormEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post,
      popupOpen: false,
      selected: this.props.photoSelected,
      gallery_id: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePopup = this.handlePopup.bind(this)
    this.renderGalleries = this.renderGalleries.bind(this)
    // this.handlePhotoUpdate = this.handlePhotoUpdate.bind(this);
    
  }

  handlePopup(e){
   e.preventDefault()
   e.stopPropagation()
    // if(this.state.popupOpen){
    //   this.setState({popupOpen: false})
    // } else {
    //   this.setState({popupOpen: true})
    // }
    this.setState({ popupOpen: !this.state.popupOpen})
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

  handleGallerySelect(e){
    e.preventDefault()
    this.setState({gallery_id: id})
  }

  renderEdit() {
    if (this.state.post.id) {
      return <h2 className="phm-edit-title">Editing 1 Photo</h2>;
    } else {
      return <h2 className="phm-edit-title">Edit</h2>;
    }
  }

  toggleModal(e){
    e.preventDefault()
    e.stopPropagation()
    this.props.openGalleryModal()
  }
  // renderGalleries(){
    
  //   if (this.props.galleries.length < 1){
  //      return  <div>No Galleries bro</div>
  //   } else {
  //     let galleries = this.props.galleries.map(gallery => 
  //        (

        
  //           <li key={gallery.id}>{gallery.name}</li>
        
  //       )
  //      ) 
  //      return galleries
  //   }
  // }


  renderGalleries(){
  if (!this.props.galleries){
       return  ""
    } else {
        return (
          <GalleryModal
              post={this.state.post.id}
              handleGallerySelect={this.handleGallerySelect}
              galleries={this.props.galleries}
              user={this.props.user}
              galleryModalOpen={this.props.galleryModalOpen}
          />
        )

    }
        
    }
  



  render() {
    
    return (
      <div>
        {this.renderEdit()}
        
        
        
        <fieldset disabled={this.state.post.id ? "" : "disabled"}>

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
          <button className="phm-add-gallery-btn" onClick={e => this.toggleModal(e)}>
            Add To Gallery 
            {/* this button should open the menu displaying the galleries */}
          </button>
            {this.renderGalleries()}
         
          

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
            </fieldset>
      </div>
    );
  }
}                                                                                                                                                                                                                                                                                                        

export default withRouter(PostFormEdit);
