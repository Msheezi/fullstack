import React from 'react'
import {withRouter} from 'react-router-dom'
import PostIndexItem from '../homefeed/post_index_item'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        debugger
        let profPosts = this.props.posts.map(post => (
            <PostIndexItem
                // key={post.id}
                post={post}
                
                props={this.props}
            />
        ))
        .reverse()
        return (
            <div className="index-title">
                <h2>Profile</h2>

                <div className="photo-index-container">{profPosts}</div>
            </div>
        )
        }
}

export default withRouter(Profile)