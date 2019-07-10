import React from 'react'



export default class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            category_id: "",
            author_id: this.props.currentUser,
            camera_name: ""
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleInput(e) {
        this.setState({ title: e.currentTarget.value });
    }


    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {  
         this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
        fileReader.readAsDataURL(file);
    }
}

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        if (this.state.photoFile) {

            formData.append('post[photo]', this.state.photoFile);
        }
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => console.log(response.message),
            (response) => {
                console.log(response.responseJSON)
            }
        );
    }



    render() {
       
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="post-body">Body of Post</label>
                    <input type="text"
                        id="post-body"
                        value={this.state.title}
                        onChange={this.handleInput} />
                    <input type="file"
                        onChange={this.handleFile} />
                    <h3>Image preview </h3>
                    {preview}
                    <button>Make a new Post!</button>
                </form>
            </div>
        );
    }
}