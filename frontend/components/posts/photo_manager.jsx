import React from 'react'
import { connect } from 'react-redux';
import PhotoManagerItem from './photo_manager_item'
import { fetchAllPosts, deletePost } from "../../actions/posts_actions";


class PhotoManager extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            photoSelected: false,
            postId: "",
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchPosts() 
        .then(() => this.setState({
            loaded: true
        })
        )
    }

    render() {

        if (this.state.loaded){

            let posts = this.props.posts.map(post => (
                <PhotoManagerItem
                key={post.id}
                post={post}
                deletePost={this.props.deletePost}
                props ={this.props}/>
                )).reverse();
                return (<div className="index-container">
            <div className="index-title">
                <h2>Discover</h2>
            </div>
            <div className="photo-index-container">{posts}</div>
        </div>)
            } else {
                return ""
            }
    }
}



const mapStateToProps = state => {
    let postIds = state.entities.users[state.session.id].post_ids
    return {
        posts: postIds.map(id => state.entities.posts[id])
    }
}
    

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    fetchPosts: () => dispatch(fetchAllPosts())

})

export default  connect(mapStateToProps, mapDispatchToProps)(PhotoManager)