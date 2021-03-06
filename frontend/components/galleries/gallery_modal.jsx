import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openGalleryModal, closeGalleryModal } from "../../actions/ui_actions";
import {
  createGallery,
  createGalleryItem,
  clearGalleryErrors,
  deleteGalleryItem
} from "../../actions/gallery_actions";

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    const galleriesClone = JSON.parse(JSON.stringify(this.props.galleries));
    this.state = {
      author_id: this.props.user,
      name: "",
      gallery_id: "",
      post_id: this.props.post,
      galleries: galleriesClone.map(gallery => {
        gallery.checked = gallery.post_ids.includes(this.props.post);
        return gallery;
      })
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleNewGallery = this.handleNewGallery.bind(this);
    this.handleGallerySelection = this.handleGallerySelection.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateGalleryState = this.updateGalleryState.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
   
      if (prevProps.post !== this.props.post){
      
       
          const galleriesClone = JSON.parse(JSON.stringify(this.props.galleries));
          
          this.setState({
            author_id: this.props.user,
            name: "",
            gallery_id: "",
            post_id: this.props.post,
            galleries: galleriesClone.map(gallery => {
              gallery.checked = gallery.post_ids.includes(this.props.post);
              return gallery;
            })
          });
        
    }
  }

  handleInput(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  componentDidMount() {
    this.setState({ post_id: this.props.post });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  updateGalleryState() {
    const galleriesClone = JSON.parse(JSON.stringify(this.props.galleries));
    
    this.setState({
      author_id: this.props.user,
      name: "",
      gallery_id: "",
      post_id: this.props.post,
      galleries: galleriesClone.map(gallery => {
        gallery.checked = gallery.post_ids.includes(this.props.post);
        return gallery;
      })
    });
  }

  handleNewGallery(e) {
    e.preventDefault();
    let gallery = Object.assign({}, this.state);
    
    this.props.createNewGallery(gallery)
    .then(()=> this.updateGalleryState())

    
  }

  



  handleGallerySelection(idx) {
    return () => {
      this.state.galleries[idx].checked = !this.state.galleries[idx].checked;
      this.setState({ galleries: this.state.galleries });
      //   debugger;
    };
    // e.preventDefault();
    // this.props.handleGallerySelect(id);
  }

  compareUpdates() {
    const prev = this.props.galleries.map(gallery =>
      gallery.post_ids.includes(this.props.post)
    );
    const next = this.state.galleries.map(gallery => gallery.checked);

    for (let i = 0; i <= next.length; i++) {
      let galleryItem
      if (next[i] !== prev[i] && next[i]) {
         galleryItem = Object.assign(
          {},
          { gallery_id: this.state.galleries[i].id, post_id: this.props.post }
        );
        
        this.props.createGalleryItem(galleryItem);
      } else if (next[i] !== prev[i] && !next[i]) {
      
         galleryItem = Object.assign({},{gallery_id: this.state.galleries[i].id, post_id: this.props.post}) 
        
         this.props.deleteGalleryItem(galleryItem);
      }
    }

    //compare prev[idx] and next[idx] if same, do nothing, if different and next = true, create else
    //if different and next is false, delete
    // console.log(prev, next);
  }

  handleClose() {
    // let galleryItem = Object.assign(
    //   {},
    //   { gallery_id: this.state.gallery_id, post_id: this.props.post }
    // );
    this.compareUpdates();
    // this.props.createGalleryItem(galleryItem);
    this.props.closeGalleryModal();
  }

  renderGalleries() {
    // debugger
    // let galleries
    // if (this.props.galleries.length < 1){
    //     return <li>No galleries for this user</li>
    // } else {
    // debugger;
    let galleries = this.state.galleries //props updates the list, state makes it controlled
      .map((gallery, idx) => (
        <label id="gallery-modal-list-label" key={gallery.id}>
          <input
            type="checkbox"
            checked={gallery.checked}
            name="id"
            value={gallery.id}
            onChange={this.handleGallerySelection(idx)}
          />
          {gallery.name}
        </label>
      ))
      .reverse();
    return galleries;
  }

  render() {
    // this.compareUpdates();

    // console.log(this.props.post);
    if (this.props.galleryModalOpen) {
      return (
        <div
          className="gallery-modal-background"
          onClick={this.props.closeGalleryModal}
        >
          <div className="gallery-modal-box" onClick={e => e.stopPropagation()}>
            <div className="gallery-modal-title">
              <h3>ADD TO GALLERY</h3>
            </div>
            {/* <form > */}
            <input type="text" id="name" placeholder="Create a new Gallery" onChange={this.handleInput("name")} />
            {/* </form> */}
            <button className="gallery-create"onClick={this.handleNewGallery}>Create</button>

            <div className="galleries-list">
              {/* <form className="gallery-modal-list"> */}

              {this.renderGalleries()}
              {/* </form> */}
            </div>
            <button className="gallery-submit" onClick={this.handleClose}>Update Galleries</button>
          </div>
        </div>
      );
    } else return null;
  }
}

const msp = state => {
  let userId = state.session.id;

  return {
    user: state.session.id,
    galleryModalOpen: state.ui.galleryModalOpen,
    galleries: Object.keys(state.entities.galleries)
      .map(id => state.entities.galleries[id])
      .filter(gallery => gallery.author_id == userId)
  };
};

const mdp = dispatch => ({
  openGalleryModal: () => dispatch(openGalleryModal()),
  closeGalleryModal: () => dispatch(closeGalleryModal()),
  createNewGallery: gallery => dispatch(createGallery(gallery)),
  createGalleryItem: galleryItem => dispatch(createGalleryItem(galleryItem)),
  clearErrors: () => dispatch(clearGalleryErrors()),
  deleteGalleryItem: galleryItem => dispatch(deleteGalleryItem(galleryItem))
});

export default connect(
  msp,
  mdp
)(GalleryModal);
