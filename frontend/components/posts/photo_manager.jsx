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
                return (
                   <div className="manager-page">
                        <div className="manager-title"><span className="manager-button"><button >Upload Photo</button></span> <span className="manager-title-title">Photo Library</span></div>
                            <div className="manager-container">
                            <div className="manager-left">left sidebar</div>
                            <div className="manager-middle">{posts}</div>
                            <div className="manager-right">right sidebar edit form</div>
                        </div>
                    </div> 
        )
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