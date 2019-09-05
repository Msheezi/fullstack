import React from "react";
import { withRouter } from "react-router-dom";


class PostFormEdit extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     title: this.props.post.title,
        //     category_id: "",
        //     authorId: this.props.post.author_id,
        //     cameraName: this.props.camera_name

            
            
        // };

        this.state = this.props.post
        // this.handleFile = this.handleFile.bind(this);
        // this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.renderFileUpload = this.renderFileUpload.bind(this);
        // this.renderUpload = this.renderUpload.bind(this);
        // this.modalClose = this.modalClose.bind(this);
        // this.handleDragEnter = this.handleDragEnter.bind(this);
        // this.handleDragLeave = this.handleDragLeave.bind(this);
        // this.handleDrop = this.handleDrop.bind(this);
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

    handleDelete(e){
        e.preventDefault()
        this.props.deletePost(this.state.id)
        this.setState({id: ""})
    }

    handleSubmit(e){
        
        e.preventDefault()
        this.props.updatePost(this.state)

    }
    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    

    renderEdit(){
        if (this.state.id){
            return  (
                <h2 className="phm-edit-title">Editing 1 Photo</h2>
                )
        } else {
            return <h2 className="phm-edit-title">Edit</h2>
        }
    }

    render() {
        // debugger
        return (
        <div>
            {this.renderEdit()}
                <form onSubmit={this.handleSubmit} className="photo-manager-form-container" >
                    
                    <label> Category</label>
                        
                        <input
                            className="phm-category-input"
                            type="text"
                            value={this.state.category_id || "Uncategorized"}
                            onChange={this.handleInput("category_id")}
                            // placeholder="Enter A Category"
                        />
                    
                    <br />
                    <label> Title </label> 
                        
                        <input
                            className="phm-title-input"
                            type="text"
                            id="title"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                            // placeholder={}
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
                            // placeholder="Enter Camera Name"
                        />
                    

                    {/* {this.renderErrors()} */}
                    <br />
                    
                        <button className="phm-delete-btn" onClick={this.handleDelete}>
                            Delete Photo
                        </button>
                        <button className="phm-submit-btn" onClick={this.handleSubmit}>
                       
                            Save
                        </button>
            
            </form>
        </div>)
    }

    
}

export default withRouter(PostFormEdit);
