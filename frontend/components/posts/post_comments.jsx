import React from 'react'

export default class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: '',
            post_id: this.props.postId,
            author_id: this.props.currentUser,
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        const subCom = Object.assign({}, this.state)
        this.props.createComment(subCom);
        this.setState({
            body: '',
            post_id: this.props.postId,
            author_id: this.props.currentUser,
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.comments !== prevProps.comments)
    //     this.props.fetchComments()
    // }

    render() {
            debugger
        const coms = this.props.comments.map(comment => (<li>{comment.body}</li>))
             
            
        //     if (comment.post_id === this.props.postId){
        //          return (<li>{comment.body}</li> )
        //      }
        //  })
            
            

            //  if (comment.post_id === this.props.postId)
            //   ())
         
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
