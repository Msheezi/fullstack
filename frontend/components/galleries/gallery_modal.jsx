import React from "react"
import {connect } from "react-redux"
import {openGalleryModal, closeGalleryModal } from '../../actions/ui_actions'

class GalleryModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            author_id: this.props.user,
            galleryId: "",
            post_id: "",
            name: ""
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleNewGallery(){

    }

    renderGalleries() {
        let galleries 
        if (this.props.galleries.length < 1){
            return <li>No galleries for this user</li>
        } else {
            galleries = this.props.galleries.map(gallery => (
               <li key={gallery.id}>{gallery.name}</li>
            ))
        }
        return {galleries}
    }


    render(){
        if (this.props.galleryModalOpen){
        return (<div>
            <h3>ADD TO GALLERY</h3>
            <form >
                <input type="text" id="name"
                    onChange={this.handleInput("name")}/>
            </form>
            <button onClick={this.handleNewGallery}></button>

            <div>
                <ul>
                {this.renderGalleries}
                </ul>
            </div>
        </div>
        )
        } else return null;



    }
}



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
    openGalleryModal: () => dispatch(openGalleryModal),
    closeGalleryModal: () => dispatch(closeGalleryModal),
    
})

export default connect(msp, mdp)(GalleryModal)