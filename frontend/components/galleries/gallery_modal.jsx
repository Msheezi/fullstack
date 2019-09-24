import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openGalleryModal, closeGalleryModal } from "../../actions/ui_actions";
import {
  createGallery,
  createGalleryItem,
  clearGalleryErrors
} from "../../actions/gallery_actions";

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.user,
      name: "",
      gallery_id: "",
      post_id: this.props.post,
      galleries: this.props.galleries.map(gallery => {
        gallery.checked = gallery.post_ids.includes(this.props.post);
        return gallery;
      })
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleNewGallery = this.handleNewGallery.bind(this);
    this.handleGallerySelection = this.handleGallerySelection.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.galleries.length !== this.props.galleries.length) {
      //   debugger;
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

  handleNewGallery(e) {
    e.preventDefault();
    let gallery = Object.assign({}, this.state);
    // debugger
    this.props.createNewGallery(gallery);
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

  handleClose() {
    let galleryItem = Object.assign(
      {},
      { gallery_id: this.state.gallery_id, post_id: this.props.post }
    );

    this.props.createGalleryItem(galleryItem);
    this.props.closeGalleryModal();
  }

  renderGalleries() {
    // debugger
    // let galleries
    // if (this.props.galleries.length < 1){
    //     return <li>No galleries for this user</li>
    // } else {
    // debugger;
    let galleries = this.state.galleries
      .map((gallery, idx) => (
        <label key={gallery.id}>
          <input
            type="checkbox"
            checked={gallery.post_ids.includes(this.props.post)}
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
    if (this.props.galleryModalOpen) {
      return (
        <div
          className="gallery-modal-background"
          onClick={this.props.closeGalleryModal}
        >
          <div className="gallery-modal-box" onClick={e => e.stopPropagation()}>
            <h3>ADD TO GALLERY</h3>
            {/* <form > */}
            <input type="text" id="name" onChange={this.handleInput("name")} />
            {/* </form> */}
            <button onClick={this.handleNewGallery}>Create</button>

            <div>
              {/* <form className="gallery-modal-list"> */}

              {this.renderGalleries()}
              {/* </form> */}
            </div>
            <button onClick={this.handleClose}>Add Photo</button>
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
  clearErrors: () => dispatch(clearGalleryErrors())
});

export default connect(
  msp,
  mdp
)(GalleryModal);