import React from "react";
import PostFormContainer from './post_form_container'


export default class Dashboard extends React.Component {
   constructor(props){
       super(props)
        this.state ={
            show: false
        }
       this.showModal = this.showModal.bind(this)
       this.hideModal = this.hideModal.bind(this)
   }
    

    showModal () {
        this.setState({ show: true });
    };

    hideModal () {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <PostFormContainer handleClose={this.hideModal} />
                </Modal>
                <button type="button" className="modal-button" onClick={this.showModal}>
                    +
        </button>
            </main>
        );
    }
}


const Modal = ({ handleClose, show, children }) => {
      const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Cancel</button>
            </section>
        </div>
    );
};


