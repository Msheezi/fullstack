import React from 'react'

export default class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: '',
            post_id: this.props.postId,
            author_id: this.props.currentUser,
            comments: []
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        const subCom = Object.assign({}, this.state)
        this.props.createComment(subCom).then(() => {
            return this.setState({body: ''});
        }).then(() => {
            return this.props.fetchComments(this.props.postId);
        }).then(res => {
            return this.setState({comments: res.comments})
        })
        // this.setState({
        //     body: '',
        //     post_id: this.props.postId,
        //     author_id: this.props.currentUser,
        //     comments: []
        // }).then(() => this.props.fetchComments(this.props.postId))
        // .then(res => {
        //     this.setState({ comments: res.comments })
        // })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.props.fetchComments(this.props.postId).then(res=>{
            this.setState({comments: res.comments})
        })
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.comments !== prevProps.comments)
    //     this.props.fetchComments()
    // }

    render() {
            // debugger
         const coms = this.state.comments.map(comment => (<li key={comment.id}>{comment.body}</li>))
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
                <input type="submit" value="post comment"/>
                </form>
              
            </div>
        )

       
      }
    }
