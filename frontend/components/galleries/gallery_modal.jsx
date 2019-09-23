import React from "react"
import {connect} from 'react-redux'
import { withRouter} from "react-router-dom"
import {openGalleryModal, closeGalleryModal } from '../../actions/ui_actions'
import {createGallery, createGalleryItem} from '../../actions/gallery_actions'

 class GalleryModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            author_id: this.props.user,
            name: "",
            
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleNewGallery = this.handleNewGallery.bind(this)
        this.handleGallerySelection = this.handleGallerySelection.bind(this)
    }

    handleInput(field) {
      
        return e => this.setState({
           [field]:  e.target.value
       })
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleNewGallery(e){
        e.preventDefault()
        let gallery = Object.assign({}, this.state)
        // debugger
        this.props.createNewGallery(gallery)
    }

    handleGallerySelection(id){
        e.preventDefault()
        this.props.handleGallerySelect(id)
    }



    renderGalleries() {
        // debugger
        // let galleries 
        // if (this.props.galleries.length < 1){
        //     return <li>No galleries for this user</li>
        // } else {
           let galleries = this.props.galleries.map(gallery => (
              <label> 

              <input 
                key={gallery.id} 
                type="radio" 
                name="name" 
                value={gallery.name} 
                onChange={this.handleInput("name")}
                />
                {gallery.name}
                </label>
               
              
               
            )).reverse()
            return galleries
        }
    


    render(){
        if (this.props.galleryModalOpen){
        return (
        <div className="gallery-modal-background" 
            onClick={this.props.closeGalleryModal}
        >
            <div className="gallery-modal-box"
                onClick={e => e.stopPropagation()}
            
            >

                <h3>ADD TO GALLERY</h3>
                {/* <form > */}
                    <input type="text" id="name"
                        onChange={this.handleInput("name")}
                        />
                {/* </form> */}
                <button onClick={this.handleNewGallery}>Create</button>

                <div>
                    {/* <form className="gallery-modal-list"> */}

                    {this.renderGalleries()}
                    {/* </form> */}
                    
                </div>
                <button onClick={this.props.closeGalleryModal}>Close</button>
            </div>
        </div>
        )
        } else return null;



    }
}

// export default withRouter(GalleryModal) 


const msp = state => {
    let userId = state.session.id 
    

    return {
        user: state.session.id,
        galleryModalOpen: state.ui.galleryModalOpen,
        galleries: Object.keys(state.entities.galleries)
            .map(id => state.entities.galleries[id])
            .filter(gallery => gallery.author_id == userId)
    }


}


const mdp = dispatch => ({
    openGalleryModal: () => dispatch(openGalleryModal()),
    closeGalleryModal: () => dispatch(closeGalleryModal()),
    createNewGallery: (gallery) => dispatch(createGallery(gallery))
    
})

export default connect(msp, mdp)(GalleryModal)