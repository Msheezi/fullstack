import React from 'react'

export default class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: '',
            post_id: '',
            author_id: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
            debugger
         const coms = this.props.comments.map(comment => (<li>{comment.body}</li>))
        return (
        <div className="comment-container">
            <ul>
                {coms}
            </ul>
            <form onSubmit={this.handleSubmit} className="comment-submit">
            <br />
                <label>Leave A Comment
            <br />
                 <input type="text"
                value={this.state.body}
                onChange={this.update('body')}
                className="comment-body"
                name="comment"/>
                </label>
                </form>
              
            </div>
        )

       
      }
    }
