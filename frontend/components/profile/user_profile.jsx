import React from 'react'
import {withRouter} from 'react-router-dom'
import PostIndexItem from '../homefeed/post_index_item'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state= ({
            loaded: false
        })
    }

    componentDidMount() {
        this.props.fetchAllPosts().then(()=> this.setState({loaded: true}))
    }




    render() {
        
        // debugger

        
        // let user = this.props.match.params.userId
        let profPosts = this.props.posts.map(post => 
              (
                    <PostIndexItem
                        key={post.id}
                        post={post}
                        
                        props={this.props}
                    />
                )
            
            
        )
        .reverse()
        if (this.state.loaded) {
        return (
            <div className="index-title">
                <h2>Profile</h2>

                <div className="photo-index-container">{profPosts}</div>
            </div>
        )
        } else {
            return ""
        }}
}

export default withRouter(Profile)