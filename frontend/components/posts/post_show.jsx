import React from 'react'
import {withRouter} from 'react-router-dom'


 class PostShow extends React.Component {
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.fetchPost(this.props.match.postId)
    }

    render(){
            <div>
                <img src={this.props.post.photoUrl} />
            </div>


    }

}

export default withRouter(PostShow)