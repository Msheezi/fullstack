import React from 'react'
import {withRouter} from 'react-router-dom'


 class PostShow extends React.Component {
    constructor(props){
        super(props)
    }


    componentDidMount(){
        
        this.props.fetchPost(this.props.match.params.postId)
    }

    render(){
        let post = this.props.post
        
        return(

            <div>
                <img src={post.photoUrl} className="post-show-img"/>
            </div>
            )


    }

}

export default withRouter(PostShow)