import React from 'react'
import { connect } from 'react-redux';
import PhotoManagerItem from './photo_manager_item'
import { fetchAllPosts, deletePost, updatePost } from "../../actions/posts_actions";
import { openModal } from "../../actions/ui_actions";
import PostFormEdit from './photo_manager_edit'


class PhotoManager extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            photoSelected: false,
            loaded: false,
            post: null
            
            

        }
    }

    componentDidMount() {
        this.props.fetchPosts() 
        .then(() => this.setState({
            loaded: true
        })
        )
    }

    handlePhotoSelect(e, post) {
        // debugger
        e.preventDefault();
        e.stopPropagation()
        this.setState({post: post, photoSelected: true})
        // console.log(this.state.post)
    }

    // dataTest(){
    //     if (this.state.photoSelected){
    //         return this.state.post.title
    //     }
    // }

    renderUpdateForm() {
        if (this.state.photoSelected) {
            return <PostFormEdit post={this.state.post} updatePost={this.props.updatePost} deletePost={this.props.deletePost} />;
        } else {
            return <PostFormEdit post={{  title: '' }} />;
        }
    }

   

    render() {
        // debugger
        if (this.state.loaded){
            let posts = this.props.posts.map(post => (
                <PhotoManagerItem
                key={post.id}
                post={post}
                deletePost={this.props.deletePost}
                props ={this.props}
                handlePhotoSelect={ e => this.handlePhotoSelect(e,post)}
                // onClick={(e, post) =>  this.photoSelected.bind(this,post)}
                />
                )).reverse();

            // let posts = this.props.posts.map(post => {
            //     let betterUrl = post.photoUrl.split("?")[0]
            //     return (
            //         <img 
            //             key={post.id}
            //             className="manager-photo-item"
            //             src={`https://res.cloudinary.com/ddtykf72z/image/fetch/w_160/${betterUrl}`}
            //             onClick={(e, post) => this.handlePhotoSelect(e, post) }/>
            //     )
            // } )

            // { this.props.userPhotos.map(el => 
            // <PhotoManagerItem key={el.id} 
            // selected={this.state.selectedPhoto === el}
            //  photo={el}
            //   handlePhotoSelect={e => this.handlePhotoSelect(e, el)} />) }
                // let data = this.state.photoSelected


                return (
                   <div className="manager-page">
                        <div className="manager-title">
                            <span className="manager-button">
                                <button type="button" className="man-button" onClick={this.props.openModal}>
                                    Upload Photo
                                </button>
                            </span> 
                            <span className="manager-title-title">
                                Photo Library
                            </span>
                        </div>
                            <div className="manager-container">
                            <div className="manager-left">
                                <br />
                                <span id="left-bar-title">Photos</span>
                                <br/>
                                
                                <br />
                                <span id="left-bar-detail">Library {this.props.posts.length}</span>
                            </div>
                            <div className="manager-middle">{posts}</div>
                            <div className="manager-right"> 
                                
                                {this.renderUpdateForm()}
                            </div>
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
    fetchPosts: () => dispatch(fetchAllPosts()),
    openModal: () => dispatch(openModal()),
    updatePost: post => dispatch(updatePost(post))

})

export default  connect(mapStateToProps, mapDispatchToProps)(PhotoManager)