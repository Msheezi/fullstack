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

    handleSubmit(e){
        
        e.preventDefault()
        this.props.updatePost(this.state)

    }
    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

    // handleFile(e) {
    //     const file = e.currentTarget.files[0];
    //     const fileReader = new FileReader();
    //     fileReader.onloadend = () => {
    //         this.setState({ photoFile: file, photoUrl: fileReader.result });
    //     };
    //     if (file) {
    //         fileReader.readAsDataURL(file);
    //     }
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.setState({ author_id: this.props.currentUser });
    //     const formData = new FormData();
    //     formData.append("post[title]", this.state.title);
    //     formData.append("post[category_id]", this.state.category_id);
    //     formData.append("post[author_id]", this.state.author_id);
    //     formData.append("post[camera_name]", this.state.camera_name);
    //     if (this.state.photoFile) {
    //         formData.append("post[photo]", this.state.photoFile);
    //     }
    //     this.props
    //         .submitPost(formData)
            
    //         .then(
    //             () => {
                    
    //                 this.props.clearErrors();
    //                 this.setState({
    //                     title: "",
    //                     category_id: "",
    //                     author_id: this.props.currentUser,
    //                     camera_name: "",
    //                     photoFile: undefined,
    //                     photoUrl: ""
    //                 });
    //             },
    //             () => this.renderErrors()
    //         );
    // }
    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>{error}</li>
    //             ))}
    //         </ul>
    //     );
    // }

   
    // renderFileUpload() {
    //     return (
    //         <form className="form-flex">
    //             <input
    //                 type="file"
    //                 name="file"
    //                 id="file"
    //                 className="input-file"
    //                 onChange={this.handleFile}
    //             />
    //             <label className="post-show-label" htmlFor="file">
    //                 {" "}
    //                 Select a File{" "}
    //             </label>
    //             <p>Or drag & drop photos anywhere on this page</p>
    //         </form>
    //     );
    // }

    // renderUpload() {
    //     const preview = this.state.photoUrl ? (
    //         <img className="img-preview" src={this.state.photoUrl} />
    //     ) : null;

    //     return (
    //         <div className="form-container">
    //             <div className="modal-image-preview">
    //                 <h3>Image preview </h3>
    //                 {preview}
    //             </div>
    //             <div className="form-itself">
    //                 <form className="upload-data">
    //                     <label htmlFor="title">
    //                         <input
    //                             className="post-form-input"
    //                             type="text"
    //                             id="title"
    //                             value={this.state.title}
    //                             onChange={this.handleInput("title")}
    //                             placeholder="Required: Enter Post Title"
    //                         />
    //                     </label>

    //                     <label>
    //                         <input
    //                             className="post-form-input"
    //                             type="text"
    //                             value={this.state.category_id}
    //                             onChange={this.handleInput("category_id")}
    //                             placeholder="Enter A Category"
    //                         />
    //                     </label>
    //                     <label>
    //                         <input
    //                             className="post-form-input"
    //                             type="text"
    //                             value={this.state.camera_name}
    //                             onChange={this.handleInput("camera_name")}
    //                             placeholder="Enter Camera Name"
    //                         />
    //                     </label>

    //                     {this.renderErrors()}
    //                     <br />
    //                     <button className="post-submit-btn" onClick={this.handleSubmit}>
    //                         {" "}
    //                         Submit
    //         </button>
    //                     <button
    //                         className="close-modal"
    //                         onClick={() => {
    //                             this.props.closeModal();
    //                             this.props.clearErrors();
    //                             this.setState({ photoFile: undefined });
    //                         }}
    //                     >
    //                         Cancel
    //         </button>
    //                 </form>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        // debugger
        return (
        <div>
                <form onSubmit={this.handleSubmit} >
                    <label > Title
                        <input
                            className="post-form-input"
                            type="text"
                            id="title"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                            // placeholder={}
                        />
                    </label>

                    <label> Category
                        <input
                            className="post-form-input"
                            type="text"
                            value={this.state.category_id || ""}
                            onChange={this.handleInput("category_id")}
                            // placeholder="Enter A Category"
                        />
                    </label>
                    <label> Camera
                        <input
                            className="post-form-input"
                            type="text"
                            value={this.state.cameraName}
                            onChange={this.handleInput("camera_name")}
                            // placeholder="Enter Camera Name"
                        />
                    </label>

                    {/* {this.renderErrors()} */}
                    <br />
                    <button className="post-submit-btn" onClick={this.handleSubmit}>
                        {" "}
                        Submit
            </button>
            </form>
        </div>)
    }

    
}

export default withRouter(PostFormEdit);
