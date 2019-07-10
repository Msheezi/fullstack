import React from 'react'
import PostIndexItem from './post_index_item'


export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

render(){

    let posts = this.props.posts.map(post => <PostIndexItem key={post.id} post={post} deletePost={this.props.deletePost} />)

    return (
        <div>
            <ul>
                {posts}
            </ul>
            
        </div>
    );
}

}

